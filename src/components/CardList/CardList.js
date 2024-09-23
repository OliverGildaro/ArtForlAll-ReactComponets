import React from "react";
import Card from "../Card";
import "./style.css";

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          text={item.text}
          image={item.image}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {};

export default CardList;
