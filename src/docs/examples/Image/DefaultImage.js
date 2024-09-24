import React from "react";
import Image from "ps-react/Image";
import VerticalImg from "../../../../public/images/default.jpg";
/** Image is null, render default Image */
export default function DefaultImage() {
  return (
    <Image
      id="sdsd"
      srcImage={null}
      altImage={VerticalImg}
      className="card-img-top"
      alt="This is an image"
    />
  );
}
