import React from "react";
import "./BestAlbums.css";
import PlayNow from "../PlayNow/PlayNow";

const BestAlbums = ({ data }) => {

  return (
    <div>
      <div className={`best-albums-card`}>
        <div className={`best-album-image-container`}>
          <img src={data.image} alt="" />
          <PlayNow />
        </div>
        <div className="best-album-right-container">
          <p className="best-album-card-date">{data.date}</p>
          <p className="best-album-card-title">{data.title}</p>
          <p className="best-album-card-desc">{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default BestAlbums;
