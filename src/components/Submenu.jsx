import React, { useState } from "react";

export default function Submenu({ category, show }) {
  const [showMenu, setShowMenu] = useState(false);

  //   setShowMenu(show);
  //   const showMenu = (e) => {
  //     console.log("enter item", e);
  //     setShow(true);
  //   };
  //   const hideMenu = (e) => {
  //     console.log("leave item", e);
  //     setShow(false);
  //   };

  return (
    <div>
      <div
        onMouseEnter={() => setShowMenu(true)}
        onMouseLeave={() => setShowMenu(false)}
        className={
          showMenu !== show
            ? "submenu " + category.name
            : category.name + " hide"
        }
      >
        <div className={`submenu-type ${category.name}`}>
          {category.subcategory.map((subcategory) => {
            return <a href="">{subcategory}</a>;
          })}
        </div>
      </div>
    </div>
  );
}
