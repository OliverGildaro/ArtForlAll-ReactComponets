import React from "react";
import CardImg from "../CardImg";
import "./style.css";

const CardList = ({ items, altImage }) => {
  return (
    <div className="card-list">
      {items.map((item) => (
        <CardImg
          key={item.id}
          htmlId={item.id}
          title={item.name}
          titleClass={item.titleClass}
          description={item.description}
          image={item.image}
        >
          <p className="small">{item.startDate}</p>
          <p className="small">{item.endDate}</p>
          <p className="small font-weigth-bold">{item.type}</p>
        </CardImg>
      ))}
    </div>
  );
};

CardList.propTypes = {};

export default CardList;
