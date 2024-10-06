import React from "react";
import PropTypes from "prop-types";

const Button = ({
  htmlId,
  label,
  type = "button",
  onClick,
  className,
  disabled = false,
  ...props
}) => {
  return (
    <button
      id={htmlId}
      type={type}
      onClick={onClick}
      className={`btn ${className}`}
      disabled={disabled}
      data-testid="button"
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /** id of the button */
  htmlId: PropTypes.string.isRequired,

  /** Label of the butto */
  label: PropTypes.string.isRequired,

  /** Callback for onclick event */
  onClick: PropTypes.func.isRequired,

  /** Type of buttons */
  type: PropTypes.oneOf(["button", "submit", "reset"]),

  /** Type of the butto */
  // className: PropTypes.oneOf([
  //   "btn-primary",
  //   "btn-secondary",
  //   "btn-success",
  //   "btn-danger",
  // ]).isRequired,

  /** Value */
  disabled: PropTypes.bool,
};

export default Button;
