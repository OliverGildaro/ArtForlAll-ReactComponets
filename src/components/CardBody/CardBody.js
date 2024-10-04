import React from "react";
import PropTypes from "prop-types";

const CardBody = ({ title, titleClass, description, children }) => {
  return (
    <div className="card-body">
      <h5 className={titleClass}>{title}</h5>
      <p className="normal">{description}</p>
      {children}
    </div>
  );
};

CardBody.propTypes = {
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default CardBody;
