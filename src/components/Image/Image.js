import React from "react";
import PropTypes from "prop-types";

const Image = ({ src, className, alt, ...props }) => {
  return <img src={src} className={className} alt={alt} {...props} />;
};

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
