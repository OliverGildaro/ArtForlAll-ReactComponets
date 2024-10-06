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
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: imageData.verticalImage,
  },
  {
    htmlId: "cardId2",
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description2",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: null,
  },
  {
    htmlId: "cardId3",
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description2",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: imageData.verticalImage,
  },
  {
    htmlId: "cardId4",
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: imageData.horizontalImage,
  },
  {
    htmlId: "cardId5",
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description2",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: null,
    createdAt: "2027-10-01T15:36:51Z",
  },
  {
    htmlId: "cardId6",
    title: "Domain driven design2",
    titleClass: "h4",
    description: "This is a description2",
    type: "music",
    startDate: "2024-10-01T15:36:51Z",
    endDate: "2024-10-01T15:36:51Z",
    image: null,
  },
];
