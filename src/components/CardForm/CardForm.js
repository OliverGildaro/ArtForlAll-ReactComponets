import React from "react";
import PropTypes from "prop-types";
import CardBody from "../CardBody";

const CardForm = ({ htmlId, title, titleClass, description, children }) => {
  return (
    <div className="card" id={htmlId}>
      <CardBody title={title} titleClass={titleClass} description={description}>
        {children}
      </CardBody>
    </div>
  );
};

CardForm.propTypes = {
  htmlId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default CardForm;
