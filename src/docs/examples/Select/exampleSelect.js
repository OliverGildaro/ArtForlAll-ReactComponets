import React, { useState } from "react";
import Select from "ps-react/Select";

/** With a custom message: */
export default function ExampleButton() {
  const [value, setValue] = useState("");
  const options = [
    { label: "Company Specifics", value: "CompanySpecifics" },
    { label: "Open Category", value: "OpenCategory" },
  ];
  function hadleChange(e) {
    setValue(e.target.value);
  }
  return (
    <Select
      htmlId="htmlIdSelect"
      name="name"
      label="Email"
      required={false}
      onChange={hadleChange}
      placeHolder={"Select an option"}
      value={value}
      options={options}
    />
  );
}
