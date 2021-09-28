import React from "react";
import "./styles/logo.css";
import { FcStumbleupon } from "react-icons/fc";

export default function Logo({ src }) {
  return (
    <div className="logo">
      {/* <img src={src} alt="" /> */}
      <FcStumbleupon />
    </div>
  );
}
