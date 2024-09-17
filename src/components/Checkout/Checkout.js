import React, { useState } from "react";
import TextInput from "../TextInput";
import TextArea from "../TextArea";
import Select from "../Select";
import Button from "../Button";
import PropTypes from "prop-types";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITING: "SUBMITING",
  COMPLETTED: "COMPLETTED",
};

const options = [
  { label: "Company Specifics", value: "CompanySpecifics" },
  { label: "Open Category", value: "OpenCategory" },
];

const validationRules = {
  name: {
    validate: (value) => {
      // Check length and if it contains the '@' character
      const isValidLength = value && value.length >= 4 && value.length <= 10;
      const doesNotContainInvalidChar = !/@/.test(value);
      return isValidLength && doesNotContainInvalidChar;
    },
    errorMessage:
      "Name must be between 4 and 10 characters long and not contain '@'",
  },
  description: {
    validate: (value) => {
      // Check length and if it contains the '@' character
      const isValidLength = value && value.length >= 4 && value.length <= 10;
      const doesNotContainInvalidChar = !/@/.test(value);
      return isValidLength && doesNotContainInvalidChar;
    },
    errorMessage:
      "Description must be between 4 and 10 characters long and not contain '@'",
  },
};

function Checkout({ onSubmit, children }) {
  const [data, setData] = useState({});

  const [status, setStatus] = useState(STATUS.IDLE);
  const [saveError, setSaveError] = useState(null);
  const [errors, setErrors] = useState({});

  console.log(errors, "errors");

  const isValid = Object.keys(errors).length === 0;

  function handleChange(e) {
    const { id, value } = e.target;

    setData((currData) => ({
      ...currData,
      [id]: value,
    }));

    const newErrors = getErrors({ ...data, [id]: value });
    setErrors(newErrors);
  }

  function getErrors(data) {
    const result = {};

    Object.keys(data).forEach((key) => {
      const value = data[key];
      const rule = validationRules[key];

      if (rule && !rule.validate(value)) {
        result[key] = rule.errorMessage;
      }
    });

    return result;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus(STATUS.SUBMITING);
    if (isValid) {
      try {
        onSubmit(data);
        setStatus(STATUS.COMPLETTED);
      } catch (error) {
        setSaveError(error);
      }
    } else {
      setStatus(STATUS.SUBMITTED);
    }
  }

  if (saveError) throw saveError;

  if (status === STATUS.COMPLETTED) {
    return <h1>Thansk for submitting...</h1>;
  }
  return (
    <div>
      {!isValid && status === status.SUBMITTED && { children }}
      <form onSubmit={handleSubmit}>
        <TextInput
          htmlId="name"
          name="name"
          label="Name:"
          type="text"
          required
          onChange={handleChange}
          placeholder="Enter a name"
          value={data.name}
          feedback={errors.name}
          isSuccess={!errors.name}
        />
        <TextArea
          htmlId="description"
          name="description"
          label="Description"
          required={false}
          onChange={handleChange}
          placeholder="Enter a description"
          value={data.value}
          feedback={errors.description}
          isSuccess={!errors.description}
        />
        <Select
          htmlId="type"
          name="type"
          label="Type event"
          required={false}
          onChange={handleChange}
          placeHolder={"Select an option"}
          value={data.value}
          options={options}
        />
        <Button
          htmlId="htmlIdButton"
          label="Submit"
          type="submit"
          onClick={handleSubmit}
          className="btn-primary"
        />
      </form>
    </div>
  );
}

Checkout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Checkout;
