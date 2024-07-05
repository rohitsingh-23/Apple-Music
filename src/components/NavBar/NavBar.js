import React, { useContext, useEffect, useRef, useState } from "react";
import { IoReorderTwoOutline, IoClose } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import "./NavBar.css";
// import { FaApple } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { IoIosRadio, IoIosSearch } from "react-icons/io";
import { TabContext } from "../../context/TabContext";

const NavBar = () => {
  const { selectedTab, handleTabChange } = useContext(TabContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`nav-bar ${isOpen && "openedNavBar"}`}>
      <div className="top-nav-bar-container">
        <div className="menu-button-container">
          {isOpen ? (
            <IoClose className="menu-button-close" onClick={handleNav} />
          ) : (
            <IoReorderTwoOutline
              className="menu-button-hamburger"
              onClick={handleNav}
            />
          )}
        </div>
        {/* <IoReorderTwoOutline className="menu-button" onClick={handleNav} /> */}
        <div className="apple-music-icon">
          <FaApple />
          <p>Music</p>
        </div>
        <p>Sign In</p>
      </div>

      <div className="options-nav-bar-container">
        <div
          onClick={() => {
            handleTabChange("home");
            handleNav();
          }}
          className={selectedTab == "home" ? "selectedTab" : ""}
        >
          <FiHome />
          <p>Home</p>
        </div>
        <div
          onClick={() => {
            handleTabChange("browse");
            handleNav();
          }}
          className={selectedTab == "browse" ? "selectedTab" : ""}
        >
          <BiGridAlt />
          <p>Browser</p>
        </div>
        <div
          onClick={() => {
            handleTabChange("radio");
            handleNav();
          }}
          className={selectedTab == "radio" ? "selectedTab" : ""}
        >
          <IoIosRadio />
          <p>Radio</p>
        </div>
        <div className="searchbar">
          <IoIosSearch />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
