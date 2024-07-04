import React, { useEffect, useRef, useState } from "react";
import "./HorizontalListRow.css";
import HorizontalCard from "../HorizontalViewCard/HorizontalViewCard";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import PlayNow from "../PlayNow/PlayNow";

const HorizontalListRow = ({ data }) => {
  const listRef = useRef();
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  useEffect(() => {
    const checkForOverflow = () => {
      if (listRef.current) {
        setScrollAmount(listRef.current.clientWidth * 1);
        setIsRightArrowVisible(
          listRef.current.scrollWidth > listRef.current.clientWidth
        );
      }
    };
    if (listRef.current) {
      checkForOverflow();

      const handleResize = () => {
        if (listRef.current) {
          setScrollAmount(listRef.current.clientWidth * 1);
        }
      };

      const handleScroll = () => {
        setIsLeftArrowVisible(listRef.current.scrollLeft > 0);
        setIsRightArrowVisible(
          listRef.current.scrollLeft + listRef.current.clientWidth <
            listRef.current.scrollWidth
        );
      };

      window.addEventListener("resize", handleResize);
      listRef.current.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("resize", handleResize);
        if (listRef.current) {
          listRef.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);

  const handleLeftScroll = () => {
    listRef.current.scrollBy({
      top: 0,
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleRightScroll = () => {
    listRef.current.scrollBy({
      top: 0,
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const generateGrid = () => {
    let grid = [];

    for (let i = 0; i < data.length; i += 3) {
      let temp = i;
      grid.push(
        <div key={data[temp].id} className="horizontal-card-column">
          <HorizontalCard item={data[temp]} />
          <HorizontalCard item={data[temp + 1]} />
          <HorizontalCard item={data[temp + 2]} />
        </div>
      );
    }

    return grid;
  };

  return (
    <div className="horizontal-list-row-container">
      <div
        className="albums-left-arrow"
        style={{ visibility: isLeftArrowVisible ? "visible" : "hidden" }}
        onClick={handleLeftScroll}
      >
        <RiArrowLeftWideFill />
      </div>
      <div ref={listRef} className="horizontal-list-row">
        {generateGrid()}
      </div>
      <div
        className="albums-right-arrow"
        style={{ visibility: isRightArrowVisible ? "visible" : "hidden" }}
        onClick={handleRightScroll}
      >
        <RiArrowRightWideFill />
      </div>
    </div>
  );
};

export default HorizontalListRow;
