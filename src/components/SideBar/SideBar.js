import React, { useContext, useState } from "react";
import "./SideBar.css";
import { FaApple } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { IoIosRadio, IoIosSearch } from "react-icons/io";
import { TabContext } from "../../context/TabContext";

const SideBar = () => {
  const { selectedTab, handleTabChange } = useContext(TabContext);

  return (
    <div className="side-nav-bar">
      <div id="logo">
        <FaApple />
        <p>Music</p>
      </div>
      <div className="searchbar">
        <IoIosSearch />
        <input className="" type="text" placeholder="Search" />
      </div>
      <div
        className={selectedTab == "home" ? "selectedTab" : ""}
        onClick={() => handleTabChange("home")}
      >
        <FiHome />
        <p>Home</p>
      </div>
      <div
        className={selectedTab == "browse" ? "selectedTab" : ""}
        onClick={() => handleTabChange("browse")}
      >
        <BiGridAlt />
        <p>Browse</p>
      </div>
      <div
        className={selectedTab == "radio" ? "selectedTab" : ""}
        onClick={() => handleTabChange("radio")}
      >
        <IoIosRadio />
        <p>Radio</p>
      </div>
    </div>
  );
};

export default SideBar;
