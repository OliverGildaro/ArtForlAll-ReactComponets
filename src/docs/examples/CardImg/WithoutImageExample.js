import React from "react";
import CardImg from "ps-react/CardImg";
import defImg from "../../../../public/images/default.jpg";

/** Card only text */
export default function WithoutImageExample() {
  return (
    <CardImg
      htmlId="card2"
      name="Domain driven design"
      title="Domain driven design"
      titleClass="display-4"
      description="This is a description"
      type="music"
      date="2024-10-01T15:36:51Z"
      image={null}
      altImage={defImg}
    />
  );
}
