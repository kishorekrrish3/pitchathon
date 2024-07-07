import React from "react";
import "./Card.css";

const Card = ({ name, position, img }) => {
  return (
    <div className="card">
      <img src={img} alt="Card Image" className="card-img" />
      <div className="card-inner-container">
        <h1 className="card-name">{name}</h1>
        <p className="card-position">{position}</p>
      </div>
    </div>
  );
};

export default Card;
