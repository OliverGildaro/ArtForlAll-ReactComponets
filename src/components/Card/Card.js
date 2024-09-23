import React from "react";
import Image from "../Image";
import "./style.css";

const Card = ({ title, text, image }) => {
  return (
    <div className="card">
      <Image src={image} className="card-img-top" alt="asasas" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

Card.propTypes = {};

export default Card;
