import React, { useState } from "react";
import TextArea from "ps-react/TextArea";

/** With a custom message: */
export default function ExampleButton() {
  const [value, setValue] = useState("");
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <TextArea
      htmlId="htmlIdAreat1"
      name="name"
      label="Email"
      required={false}
      onChange={hadleChange}
      placeholder="Enter a name"
      value={value}
    />
  );
}
