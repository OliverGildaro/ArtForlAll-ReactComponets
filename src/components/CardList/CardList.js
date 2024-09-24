import React from "react";
import Card from "../Card";
import "./style.css";

const CardList = ({ items }) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <Card
          key={item.id}
          htmlId={item.id}
          name={item.name}
          description={item.description}
          type={item.type}
          date={item.date}
          image={item.image}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {};

export default CardList;
