import React from 'react';
import styled from '@emotion/styled';


const Wrapper = styled('main')`
  margin: 90px auto 6rem;
  padding: 10px;
  width: 80ch;
  flex: 1 0 auto;
`;

const Main = ({ children, className }) => (
  <Wrapper role="main" id="content" className={className}>
    {children}
  </Wrapper>
);


export default Main;