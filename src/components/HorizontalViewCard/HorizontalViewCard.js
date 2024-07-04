import React from "react";
import { SlOptions } from "react-icons/sl";
import "./HorizontalViewCard.css";
import PlayNow from "../PlayNow/PlayNow";

const HorizontalCard = ({ item }) => {
  if (item == undefined) {
    return <></>;
  }
  return (
    <div className="horizontal-card">
      <img src={item.image} alt="" />
      <PlayNow className="play-now" />
      <div className="horizontal-card-detail-container">
        <p className="horizontal-album-card-title">{item.title}</p>
        <p className="horizontal-card-desc">{item.desc}</p>
      </div>
      <SlOptions className="horizontal-card-button" />
    </div>
  );
};

export default HorizontalCard;
