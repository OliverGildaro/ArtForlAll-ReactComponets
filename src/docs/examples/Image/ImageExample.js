import React from "react";
import Image from "ps-react/Image";
import imageData from "../../../../public/images/images.json";
/** Vertical Image resize */
export default function ImageExample() {
  return (
    <Image
      srcImage={imageData.verticalImage}
      altImage={null}
      className="card-img-top"
      alt="This is an image"
    />
  );
}
