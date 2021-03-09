import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'gatsby';

import './layout.css';

const LayoutDiv = styled.div`
  width: 70%;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.main`
  margin: 20px 0;
`;

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  text-align: center;
`;

const Layout = ({ children }) => (
  <LayoutDiv>
    <MainContent>{children}</MainContent>
    <Footer>
      built with
      {' '}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {' '}
      |
      {' '}
      <Link to="/imprint">imprint</Link>
    </Footer>
  </LayoutDiv>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
