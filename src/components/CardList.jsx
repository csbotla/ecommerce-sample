import React from "react";
import Card from "./Card";
import "./styles/cardlist.css";

export default function CardList({ images,cardListHeading }) {
  return (
    <div className="cardlist-container">
      <div className="heading">{cardListHeading}</div>
      <div className="cardlist">
        {images.map((image, i) => {
          return <Card image={image.download_url} key={i} />;
        })}
      </div>
    </div>
  );
}
