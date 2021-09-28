import React from "react";
import "./styles/search.css";

export default function Search({ isMobile }) {
  return (
    <div className={!isMobile ? "search-container" : "mobile-search"}>
      <input
        type="text"
        name=""
        placeholder="Search"
        id=""
        className={!isMobile ? "input" : "mobile-input"}
      />
    </div>
  );
}
