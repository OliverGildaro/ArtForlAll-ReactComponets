import React, { useState } from "react";
import Checkout from "ps-react/Checkout";
import TextInput from "ps-react/TextInput";
import TextArea from "ps-react/TextArea";
import Select from "ps-react/Select";
import Button from "ps-react/Button";
import CardForm from "ps-react/CardForm";

const options = [
  { label: "Company Specifics", value: "CompanySpecifics" },
  { label: "Open Category", value: "OpenCategory" },
];

const validationRules = {
  name: {
    validate: (value) => {
      const isValidLength = value && value.length >= 4 && value.length <= 10;
      const doesNotContainInvalidChar = !/@/.test(value);
      return isValidLength && doesNotContainInvalidChar;
    },
    errorMessage:
      "Name must be between 4 and 10 characters long and not contain '@'",
  },
  description: {
    validate: (value) => {
      const isValidLength = value && value.length >= 4 && value.length <= 10;
      const doesNotContainInvalidChar = !/@/.test(value);
      return isValidLength && doesNotContainInvalidChar;
    },
    errorMessage:
      "Description must be between 4 and 10 characters long and not contain '@'",
  },
};

/** ExampCheckoutCards */
function ExampCheckoutCards() {
  const [data, setData] = useState({
    name: "",
    description: "",
    type: "",
  });
  const [errors, setErrors] = useState({});

  const isValid = Object.keys(errors).length === 0;
  // const [message, setMessage] = useState("");

  function handleChange(e) {
    const { id, value } = e.target;

    setData((currData) => ({
      ...currData,
      [id]: value,
    }));

    const newErrors = getErrors({ ...data, [id]: value });
    setErrors(newErrors);
  }

  async function handleSubmit(event) {
    console.log("submit");
    event.preventDefault();
    if (isValid) {
      try {
        console.log(data);
      } catch (error) {}
    }
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

  return (
    <Checkout onSubmit={handleSubmit}>
      <CardForm
        htmlId="card1"
        title="Basic event informations"
        titleClass="h4"
        description="Please provide a detailed information about this or that"
      >
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
      </CardForm>
      <CardForm
        htmlId="card1"
        title="Otehr information"
        titleClass="h4"
        description="Please provide a detailed information about this or that Please provide a detailed information about this or that"
      >
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
        <TextInput
          htmlId="name"
          name="Email"
          label="Name:"
          type="text"
          required
          onChange={handleChange}
          placeholder="Enter a name"
          value={data.name}
          feedback={errors.name}
          isSuccess={!errors.name}
        />
        <TextInput
          htmlId="name"
          name="address"
          label="Name:"
          type="text"
          required
          onChange={handleChange}
          placeholder="Enter a name"
          value={data.name}
          feedback={errors.name}
          isSuccess={!errors.name}
        />
        <Select
          htmlId="type"
          name="state"
          label="Type event"
          required={false}
          onChange={handleChange}
          placeHolder={"Select an option"}
          value={data.value}
          options={options}
        />
      </CardForm>
      <Button
        htmlId="htmlIdButton"
        label="Submit"
        type="submit"
        onClick={handleSubmit}
        className="btn-primary"
      />
    </Checkout>
  );
}
// {message && <div>{message}</div>}

export default ExampCheckoutCards;
