import React from "react";
import Image from "ps-react/Image";
import ProfilePicture from "../../../../public/images/vertical.jpg";

/** Vertical Image resize */
export default function ImageExample() {
  return <Image src={ProfilePicture} className="card-img-top" alt="asasas" />;
}
