import React, { useState } from "react";
import TextInput from "ps-react/TextInput";

/** With a custom message: */
export default function ExampleButton() {
  const [value, setValue] = useState("");
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextInput
      htmlId="htmlIdInput1"
      name="name"
      label="Email"
      type="text"
      required={false}
      onChange={hadleChange}
      placeholder="Enter a name"
      value={value}
    />
  );
}
