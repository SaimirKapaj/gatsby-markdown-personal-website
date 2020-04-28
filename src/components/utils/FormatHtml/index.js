import React from 'react';
import PropTypes from 'prop-types';

const FormatHtml = ({ content }) => (
  <span
    className="format-html"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

FormatHtml.propTypes = {
  content: PropTypes.any.isRequired
};

export default FormatHtml;
