import React from "react";
import CardForm from "ps-react/CardForm";
import TextInput from "ps-react/TextInput";

/** Card with image */
export default function ExampleCardForm() {
  return (
    <CardForm
      htmlId="card1"
      title="Basic event informations"
      titleClass="h4"
      description="Please provide a detailed information about this or that"
    >
      <TextInput
        htmlId="htmlIdInput1"
        name="name"
        label="Name"
        type="text"
        required={false}
        placeholder="Enter a name"
      />
      <TextInput
        htmlId="htmlIdInput1"
        name="name"
        label="Email"
        type="text"
        required={false}
        placeholder="Enter a name"
      />
    </CardForm>
  );
}
