import React from "react";
import Card from "ps-react/Card";
import imageData from "../../../../public/images/images.json";

/** With a custom message: */
export default function WithoutImageExample() {
  const { horizontalImage } = imageData;
  return (
    <div style={{ display: "flex" }}>
      <Card
        htmlId="card2"
        name="Domain driven design"
        description="This is a description"
        type="music"
        date="2024-10-01T15:36:51Z"
        image={horizontalImage}
      />
    </div>
  );
}
