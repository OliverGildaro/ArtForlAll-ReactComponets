import React from "react";
import Card from "ps-react/Card";

/** Card with children */
export default function CardWithChildren() {
  return (
    <Card
      htmlId="card1"
      title="Domain driven design"
      titleClass="h3"
      description="This is a description"
      type="music"
      startDate="2024-10-01T15:36:51Z"
      endDate="2024-10-01T15:36:51Z"
      altImage={null}
      createdAt="2024-10-01T15:36:51Z"
    >
      <p className="small">2024-10-01T15:36:51Z</p>
      <p className="small">2025-10-01T15:36:51Z</p>
      <p className="small font-weigth-bold">music</p>
    </Card>
  );
}
