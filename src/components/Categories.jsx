import React from "react";
import Menuitem from "./Menuitem";
import "./styles/categories.css";

export default function Categories({ categories }) {
  return (
    <div className="categories-container">
      <nav>
        <ul>
          {categories.map((category, i) => {
            return <Menuitem category={category} i={i} />;
          })}
        </ul>
      </nav>
    </div>
  );
}

//TODO: Change Categories component Made it WRONG
