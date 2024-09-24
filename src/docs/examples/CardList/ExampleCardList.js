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
    name: "Domain driven design",
    description: "This is a description",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: VerticalImg,
  },
  {
    htmlId: "cardId2",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: HorizontalImg,
  },
  {
    htmlId: "cardId3",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: null,
  },
  {
    htmlId: "cardId4",
    name: "Domain driven design",
    description: "This is a description",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: VerticalImg,
  },
  {
    htmlId: "cardId5",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: HorizontalImg,
  },
  {
    htmlId: "cardId6",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: null,
  },
];
