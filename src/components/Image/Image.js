import React from "react";
import PropTypes from "prop-types";

const Image = ({ srcImage, altImage, className, alt, ...props }) => {
  const imageSrc = srcImage
    ? `data:${srcImage.contentType};base64,${srcImage.imageContent}`
    : altImage;
  const finalId = srcImage ? srcImage.id : "defaultId";
  return (
    <img
      id={finalId}
      src={imageSrc}
      className={className}
      alt={alt}
      {...props}
    />
  );
};

Image.propTypes = {
  srcImage: PropTypes.shape({
    id: PropTypes.string,
    // Corrected this line
    imageContent: PropTypes.string,
    contentType: PropTypes.string,
  }),
  altImage: PropTypes.string, // Changed to required if you're using it as fallback
  className: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default Image;
