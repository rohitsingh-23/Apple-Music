import React, { useRef, useState, useEffect } from "react";
import "./SimilarArtists.css";
import { RiArrowRightWideFill, RiArrowLeftWideFill } from "react-icons/ri";

const SimilarArtists = ({ data }) => {
  const listRef = useRef();
  const [scrollAmount, setScrollAmount] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

  useEffect(() => {
    if (listRef.current) {
      setScrollAmount(listRef.current.clientWidth * 1);

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
    <div className="similar-artists-list">
      <div
        className="left-arrow"
        style={{ visibility: isLeftArrowVisible ? "visible" : "hidden" }}
        onClick={handleLeftScroll}
      >
        <RiArrowLeftWideFill />
      </div>
      <div ref={listRef} className="similar-artists-cards-container">
        {data.map((item) => {
          return (
            <div key={item.id} className="similar-artist-card">
              <div className="similar-artist-image-container">
                <img src={item.image} alt="" />
              </div>
              <p className="similar-artist-card-title">{item.name}</p>
            </div>
          );
        })}
      </div>
      <div
        className="right-arrow"
        style={{ visibility: isRightArrowVisible ? "visible" : "hidden" }}
        onClick={handleRightScroll}
      >
        <RiArrowRightWideFill />
      </div>
    </div>
  );
};

export default SimilarArtists;
