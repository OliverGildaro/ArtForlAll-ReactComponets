import React from "react";
import CardBody from "ps-react/CardBody";

/** Card body */
export default function ExampleCardBody() {
  return (
    <div className="card">
      <CardBody
        title="DDD event"
        titleClass="h4"
        description="My description"
      />
    </div>
  );
}
