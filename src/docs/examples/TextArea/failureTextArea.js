import React, { useState } from "react";
import TextArea from "ps-react/TextArea";

/** With a custom message: */
export default function SucessTextArea() {
  const [value, setValue] = useState("");
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextArea
      htmlId="htmlId"
      name="name"
      label="Email"
      required
      onChange={hadleChange}
      placeholder="Enter a name"
      value={value}
      feedback="Invalid input"
      isSuccess={false}
    />
  );
}
