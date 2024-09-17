import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const Select = ({
  htmlId,
  name,
  label,
  required = false,
  onChange,
  placeHolder = "Select an option",
  value,
  options = [],
  feedback,
  isSuccess,
  ...props
}) => {
  const controlClassName = feedback
    ? isSuccess
      ? "is-valid"
      : "is-invalid"
    : "";
  const feedbackClassName = feedback
    ? isSuccess
      ? "valid-feedback"
      : "invalid-feedback"
    : "";
  return (
    <div className="form-group">
      <Label htmlFor={htmlId} label={label} required={required} />

      <select
        id={htmlId}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${controlClassName}`}
        data-testid="select"
        {...props}
      >
        <option value="" disabled>
          {placeHolder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="form-feedback">
        <small id="answerTextFeedback" className={feedbackClassName}>
          {feedback}
        </small>
      </div>
    </div>
  );
};

// Define PropTypes
Select.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeHolder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** Value */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),

  /** String to display when error occurs */
  feedback: PropTypes.string,
};

export default Select;
