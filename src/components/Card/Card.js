import React from "react";
import Image from "../Image";
import PropTypes from "prop-types";
import "./style.css";
import { Link } from "react-router-dom";

const Card = ({
  htmlId,
  name,
  description,
  type,
  date,
  createdAt,
  image,
  altImage,
}) => {
  return (
    <Link to={`/events/${htmlId}/${createdAt}`} className="card-link">
      <div className="card" id={htmlId}>
        <Image
          srcImage={image}
          altImage={altImage}
          className="card-img-top"
          alt={"Alt text"}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{type}</p>
          <p className="card-text">{date}</p>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  htmlId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.shape({
    imageContent: PropTypes.string.isRequired, // base64 string
    contentType: PropTypes.string.isRequired, // e.g., "image/jpeg"
  }),
  createdAt: PropTypes.string.isRequired,
};

export default Card;
