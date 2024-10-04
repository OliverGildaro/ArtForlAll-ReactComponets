import React from "react";
import CardBody from "ps-react/CardBody";
import TextInput from "ps-react/TextInput";

/** Card body */
export default function ExampleCardBodyChild() {
  return (
    <div className="card">
      <CardBody
        title="DDD NEW EVENT"
        titleClass="h4"
        description="My description"
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
      </CardBody>
    </div>
  );
}
