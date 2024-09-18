import React, { useState } from "react";
import PropTypes from "prop-types";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITING: "SUBMITING",
  COMPLETTED: "COMPLETTED",
};

function Checkout({ onSubmit, children }) {
  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);

  console.log("checkout");
  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITING);
    try {
      await onSubmit(event);
      setStatus(STATUS.COMPLETTED);
    } catch (error) {
      setSaveError(error);
    }
  }

  if (saveError) throw saveError;

  // Render the "Saved" message when the form is completed
  if (status === STATUS.COMPLETTED) {
    return <div>Saved</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
}

Checkout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Checkout;
