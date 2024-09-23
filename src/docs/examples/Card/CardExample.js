import React from "react";
import Card from "ps-react/Card";
import VerticalImg from "../../../../public/images/vertical.jpg";
import HorizontalImg from "../../../../public/images/horizontal.jpg";

/** With a custom message: */
export default function CardExample() {
  return (
    <div style={{ display: "flex" }}>
      <Card title="Title vertical card" text="Titke text" image={VerticalImg} />
    </div>
  );
}
