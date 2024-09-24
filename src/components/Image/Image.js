import React from "react";
import PropTypes from "prop-types";

const Image = ({ imageContent, contentType, className, alt, ...props }) => {
  const imageSrc = `data:${contentType};base64,${imageContent}`;
  return <img src={imageSrc} className={className} alt={alt} {...props} />;
};

Image.propTypes = {
  imageContent: PropTypes.string.isRequired, // imageContent should be a required base64 string
  contentType: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
