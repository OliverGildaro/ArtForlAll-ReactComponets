import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

const TextInput = ({
  htmlId,
  name,
  label,
  type = "text",
  required = false,
  onChange,
  placeholder = "",
  value,
  feedback,
  isSuccess,
  children,
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
      <input
        id={htmlId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-control ${controlClassName}`}
        data-testid="textField"
        {...props}
      />
      {children}
      <div className="form-feedback">
        <small
          id="answerTextFeedback"
          data-testid="feedbackField"
          className={feedbackClassName}
        >
          {feedback}
        </small>
      </div>
    </div>
  );
};

TextInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Input type */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Mark label with asterisk if set to true */
  required: PropTypes.bool,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** Value */
  value: PropTypes.any,

  /** String to display when error occurs */
  feedback: PropTypes.string,

  /** Child component to display next to the input */
  children: PropTypes.node,
};

export default TextInput;
