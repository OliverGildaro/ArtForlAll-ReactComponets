import React from "react";
import Card from "ps-react/Card";
import imageData from "../../../../public/images/images.json";

/** Card with image */
export default function CardExample() {
  const { verticalImage } = imageData;
  return (
    <Card
      htmlId="card1"
      title="Domain driven design"
      titleClass="h4"
      description="This is a description"
      type="music"
      startDate="2024-10-01T15:36:51Z"
      endDate="2024-10-01T15:36:51Z"
      image={verticalImage}
      altImage={null}
      createdAt="2024-10-01T15:36:51Z"
    />
  );
}
