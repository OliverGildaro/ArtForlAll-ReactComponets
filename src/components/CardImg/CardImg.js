import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";
import CardBody from "../CardBody";

const CardImg = ({
  htmlId,
  title,
  titleClass,
  description,
  createdAt,
  image,
  altImage,
  children,
}) => {
  return (
    <Link to={`/events/${htmlId}/${createdAt}`} className="card-link">
      <div className="card" id={htmlId}>
        {image && (
          <Image
            srcImage={image}
            altImage={altImage}
            className="card-img-top"
            alt={"Alt text"}
          />
        )}
        <CardBody
          title={title}
          titleClass={titleClass}
          description={description}
        >
          {children}
        </CardBody>
      </div>
    </Link>
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
  createdAt: PropTypes.string.isRequired,
};

export default CardImg;
