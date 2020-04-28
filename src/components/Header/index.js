import React from 'react';
import PropTypes from 'prop-types';

import MainNav from './MainNav';
import Logo from './Logo';

import * as Styled from './styles';

const Header = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.Wrapper>
      <Logo />
      <MainNav />
    </Styled.Wrapper>
  </Styled.Header>
);

Header.defaultProps = {
  siteTitle: ``
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
