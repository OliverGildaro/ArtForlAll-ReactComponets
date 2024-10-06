import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";
import "./style.css";
import CardBody from "../CardBody";

const CardImg = ({
  htmlId,
  title,
  titleClass,
  description,
  image,
  altImage,
  children,
}) => {
  return (
    <div className="card" id={htmlId}>
      {image && (
        <Image
          srcImage={image}
          altImage={altImage}
          className="card-img-top"
          alt={"Alt text"}
        />
      )}
      <CardBody title={title} titleClass={titleClass} description={description}>
        {children}
      </CardBody>
    </div>
  );
};

CardImg.propTypes = {
  htmlId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    imageContent: PropTypes.string.isRequired, // base64 string
    contentType: PropTypes.string.isRequired, // e.g., "image/jpeg"
  }),
};

export default CardImg;
