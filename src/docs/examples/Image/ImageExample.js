import React from "react";
import Image from "ps-react/Image";
import imageData from "../../../../public/images/images.json";
/** Vertical Image resize */
export default function ImageExample() {
  const { imageContent, contentType } = imageData.verticalImage;
  return (
    <Image
      imageContent={imageContent}
      contentType={contentType}
      className="card-img-top"
      alt="asasas"
    />
  );
}
