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
          title={item.name}
          titleClass={item.titleClass}
          description={item.description}
          createdAt={item.createdAt}
          image={item.image}
        >
          <p className="small">{item.startDate}</p>
          <p className="small">{item.endDate}</p>
          <p className="small font-weigth-bold">{item.type}</p>
        </Card>
      ))}
    </div>
  );
};

CardList.propTypes = {};

export default CardList;
