import React from "react";
import "./styles/card.css";

export default function Card({ image }) {
  const style = {};
  return (
    <div className="card-container">
      <img src={image} alt={image} />
    </div>
  );
}
