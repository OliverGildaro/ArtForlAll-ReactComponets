import React from "react";
import CardList from "ps-react/CardList";
import VerticalImg from "../../../../public/images/vertical.jpg";
import HorizontalImg from "../../../../public/images/horizontal.jpg";

/** With a custom message: */
export default function ExampleCardList() {
  return <CardList items={navItems} />;
}

const navItems = [
  {
    htmlId: "cardId1",
    title: "This is title",
    text: "this is text",
    image: VerticalImg,
  },
  {
    id: "cardId2",
    title: "This is title",
    text: "this is text",
    image: HorizontalImg,
  },
];
