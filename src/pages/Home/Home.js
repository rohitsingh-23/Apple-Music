import React, { useContext } from "react";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import HorizontalList from "../../components/HorizontalList/HorizontalList";
import SimilarArtists from "../../components/SimilarArtists/SimilarArtists";
import AudioPlayer from "../../components/AudioPlayer/AudioPlayer";
import BestAlbums from "../../components/BestAlbums/BestAlbums";
import HorizontalListRow from "../../components/HorizontalListRow/HorizontalListRow";
import NavBar from "../../components/NavBar/NavBar";
import data from "../../db.json";
import { TabContext } from "../../context/TabContext";

const Home = () => {
  const { selectedTab } = useContext(TabContext);
  return (
    <div className="home-container">
      <div className="nav-left">
        <SideBar className="side-bar" />
        <NavBar className="top-navbar" />
      </div>
      <div className="home-right-section">
        {selectedTab == "browse" ? (
          <>
            <AudioPlayer />
            <HeroSection />
            <div className="top-row">
              <div className="best-albums-container">
                <h3 className="section-title">100 Best Albums</h3>
                <BestAlbums data={data.bestAlbum} />
              </div>

              <div className="horizontal-list-section-container">
                <h3 className="section-title">Top Songs</h3>
                <HorizontalListRow data={data.topSongs} />
              </div>
            </div>

            {/* Albums */}
            <div className="albums-container">
              <h3 className="section-title">Essential Albums</h3>
              <HorizontalList data={data.essentialAlbumData} type={"large"} />
            </div>

            {/* Albums */}
            <div className="albums-container">
              <h3 className="section-title">Albums</h3>
              <HorizontalList data={data.albums} type={"small"} />
            </div>

            {/* Singles */}
            <div className="albums-container">
              <h3 className="section-title">Singles & EPs</h3>
              <HorizontalList data={data.singles} type={"small"} />
            </div>

            {/* Similar Artists */}
            <div className="similar-artists">
              <h3 className="section-title">Similar Artists</h3>
              <SimilarArtists data={data.similarArtists} />
            </div>
          </>
        ) : selectedTab == "home" ? (
          <div className="center-div">Home</div>
        ) : selectedTab == "radio" ? (
          <div className="center-div">Radio</div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
