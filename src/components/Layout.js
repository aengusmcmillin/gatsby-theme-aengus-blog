import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import GlobalStyles from "./GlobalStyles";
import Helmet from "react-helmet";
import Site from "./Site";

export default ({ children, className = "" }) => [
  <Helmet>
    <html lang="en" />
  </Helmet>,
  <GlobalStyles />,
  <Site>
    <Header />
    <Main>{children}</Main>
  <Footer />
  </Site>,
];
