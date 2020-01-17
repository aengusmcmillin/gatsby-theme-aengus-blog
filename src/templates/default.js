import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const DefaultLayout = styled(Layout)`
  margin: 5em;
`;

const Default = ({ children }) => {
    return (
      <React.Fragment>
        <DefaultLayout>
          {children}
        </DefaultLayout>
      </React.Fragment>
    );
};

export default Default;