import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Container = ({ section, children }) => <Styled.Container section={section}>{children}</Styled.Container>;

Container.propTypes = {
  section: PropTypes.bool,
  children: PropTypes.any.isRequired
};
export default Container;
