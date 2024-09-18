import React, { useState } from "react";
import TextInput from "ps-react/TextInput";

/** With a custom message: */
export default function SuccessTextField() {
  const [value, setValue] = useState("");
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextInput
      htmlId="htmlIdInput13"
      name="name"
      label="Email"
      type="text"
      required={false}
      onChange={hadleChange}
      placeholder="Enter a email"
      value={value}
      feedback="This is a valid email feedback"
      isSuccess={true}
    />
  );
}
