const path = require('path');

module.exports = options => ({
  siteMetadata: {
    title: "Blog Theme",
    description: "A theme I'm using for my stuff",
    author: `Aengus Finn McMillin`,
    titleTemplate: ``,
    image: ``,
    url: ``,
    social: {
      email: `aengusmcmillin@gmail.com`,
      twitter: `@aengusmcmillin`
    }
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages")
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: options.contentPath || "content/",
        name: "content"
      }
    }
  ]
});
