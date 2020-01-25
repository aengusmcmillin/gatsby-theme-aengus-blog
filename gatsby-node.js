const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
      query {
        posts: allFile(
          filter: { relativePath: { glob: "posts/**/*.{md,mdx}" } }
          sort: { fields: relativePath, order: DESC }
        ) {
          nodes {
            id
            childMdx {
              frontmatter {
                title
                slug
                published
              }
            }
          }
        }
      }
    `);

    const posts = result.data.posts.nodes;
    posts.forEach(node => {
        if (node.childMdx.frontmatter.published) {
            createPage({
                path: node.childMdx.frontmatter.slug,
                component: require.resolve(`./src/templates/post.js`),
                context: { slug: node.childMdx.frontmatter.slug }
            });
        }
    });
};

exports.onPreBootstrap = ({ store }, options) => {

    const { program } = store.getState();
    const contentPath = options.contentPath || "content";
    const dir = path.join(program.directory, contentPath);

    if (!fs.existsSync(dir)) {
        mkdirp.sync(dir)
    }
}
