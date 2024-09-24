import React from "react";
import CardList from "ps-react/CardList";
import imageData from "../../../../public/images/images.json";
import defImg from "../../../../public/images/default.jpg";

/** With a custom message: */
export default function ExampleCardList() {
  return <CardList items={navItems} altImage={defImg} />;
}

const navItems = [
  {
    htmlId: "cardId1",
    name: "Domain driven design",
    description: "This is a description",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: imageData.verticalImage,
    createdAt: "2024-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId2",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: null,
    createdAt: "2025-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId3",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: imageData.verticalImage,
    createdAt: "2025-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId4",
    name: "Domain driven design",
    description: "This is a description",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: imageData.horizontalImage,
    createdAt: "2025-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId5",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: null,
    createdAt: "2027-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId6",
    name: "Domain driven design2",
    description: "This is a description2",
    type: "music",
    date: "2024-10-01T15:36:51Z",
    image: null,
    createdAt: "2024-10-01T15:36:51Z",
  },
];
