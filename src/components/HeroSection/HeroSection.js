import React from "react";
import "./HeroSection.css";
import { FaPlay } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-image-container">
        <img src="/images/hero-image.jpg" alt="" />
      </div>
      <div className="hero-buttons-container">
        <div className="play-button-container">
          <div className="play-button">
            <FaPlay />
          </div>
          <h2 >Taylor Swift</h2>
        </div>
        <div className="option-button">
          <SlOptions />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
