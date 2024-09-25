import React from "react";
import Card from "../Card";
import "./style.css";

const CardList = ({ items, altImage }) => {
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
          altImage={altImage}
          createdAt={item.createdAt}
        />
      ))}
    </div>
  );
};

CardList.propTypes = {};

export default CardList;
