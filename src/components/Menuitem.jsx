import React, { useState } from "react";
import Submenu from "./Submenu";
import "./styles/menuitem.css";

export default function Menuitem({ category, i }) {
  const [show, setShow] = useState(false);
  const toggleMenu = (e) => {
    console.log("item", e);
    setShow(!show);
  };
  return (
    <li onMouseEnter={toggleMenu} key={i} onMouseLeave={toggleMenu}>
      <a href="#">{category.name}</a>
      <Submenu key={i} category={category} show={show} />
    </li>
  );
}
