import React, { useEffect, useRef, useState } from "react";
import "./HorizontalList.css";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";
import PlayNow from "../PlayNow/PlayNow";

const HorizontalList = ({ data, type }) => {
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

  return (
    <div className="horizontal-list">
      <div
        className="albums-left-arrow"
        style={{ visibility: isLeftArrowVisible ? "visible" : "hidden" }}
        onClick={handleLeftScroll}
      >
        <RiArrowLeftWideFill />
      </div>
      <div ref={listRef} className={`albums-cards-container ${type}`}>
        {data.map((item) => {
          return (
            <div key={ item.id } className={`albums-card ${type}`}>
              <div className={`album-image-container ${type}`}>
                <img src={item.image} alt="" />
                <PlayNow />
              </div>
              <p className="album-card-title">{item.title}</p>
              <p className="albums-card-desc">{item.desc}</p>
            </div>
          );
        })}
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

export default HorizontalList;
