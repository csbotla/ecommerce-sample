import React, { useEffect, useState } from "react";
import { CgProfile, CgShoppingBag } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import "./styles/nav.css";

export default function Nav() {
  //   const categories = ["Electronics", "Clothing", "Home Appliances", "Office"];

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowDimension <= 640;
  const categories = [
    {
      name: "Electronics",
      subcategory: ["abc", "def", "ghi", "jkl"],
    },

    {
      name: "Clothing",
      subcategory: ["CCCabc", "CCCdef", "CCCghi", "CCCjkl"],
    },

    {
      name: "Home Appliances",
      subcategory: ["HHHabc", "HHHdef", "HHHghi", "HHHjkl"],
    },

    {
      name: "Office",
      subcategory: ["OOabc", "OOdef", "OOghi", "OOjkl"],
    },
  ];
  return !isMobile ? (
    <div className="nav-container">
      <Logo />
      <Categories categories={categories} />
      <Search />
      <div className="icons">
        <CgProfile />
        <CgShoppingBag />
      </div>
    </div>
  ) : (
    <div className="mobile-nav-container">
      <GiHamburgerMenu size="32" className="hamburger" />
      <Logo />
      <Search isMobile={isMobile} />
      <div className="mobile-icons">
        <CgProfile />
        <CgShoppingBag />
      </div>
    </div>
  );
}
