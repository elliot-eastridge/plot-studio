

import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
`;

const Header = styled.header`
  grid-area: 1 / 1 / 2 / 3;
  background: grey;
  padding-left: 40px;
`;

const Footer = styled.footer`
  grid-area: 3 / 1 / 4 / 3;
  background: grey;
`;

const Layout = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <h1>
          <Link to="/">Studio</Link>
        </h1>
      </Header>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Layout;


