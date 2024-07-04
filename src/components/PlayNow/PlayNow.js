import React from 'react'
import { SlOptions } from "react-icons/sl";
import { IoPlay } from "react-icons/io5";
import "./PlayNow.css"

const PlayNow = () => {
  return (
    <div className="play-now">
      <div className="play-now-button">
        <IoPlay />
      </div>
      <div className="options-button">
        <SlOptions />
      </div>
    </div>
  );
}

export default PlayNow