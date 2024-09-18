import React, { useState } from "react";
import TextInput from "ps-react/TextInput";

/** With a custom message: */
export default function FailureTextField() {
  const [value, setValue] = useState("");
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextInput
      htmlId="htmlIdInput12"
      name="name"
      label="Email"
      type="text"
      required
      onChange={hadleChange}
      placeholder="Enter a name"
      value={value}
      feedback="This is an invalid name"
      isSuccess={false}
    />
  );
}
