import React from "react";
import Card from "ps-react/Card";

/** With a custom message: */
export default function WithoutImageExample() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        htmlId="card1"
        name="Domain driven design"
        description="This is a description"
        type="music"
        date="2024-10-01T15:36:51Z"
        image={null}
      />
    </div>
  );
}
