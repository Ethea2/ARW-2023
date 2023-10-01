import React, { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Card from "./components/Card";
import ARWDesc from "./components/ARWDesciption";
import SpaceBackground from "./components/spaceBackground";
// Import Images
import phead1 from "../../assets/aboutus/TaoHu.gif";
import invaders from "../../assets/aboutus/invaders.svg";

const AboutUs = () => {
  const [showContent, setShowContent] = useState(false);

  // Function to handle the play button click
  const handlePlayClick = () => {
    setShowContent(true);
  };

  return (
    <div>
      <Drawer />

      {showContent ? (
        // Display the content after pressing the button
        <div className="relative h-full flex flex-col justify-center items-center">
          {/* Set Page Background - edit in spaceBackground.jsx in components*/}
          <SpaceBackground />

          <div className="my-28 z-10 text-center">
            {/* ABOUT ARW - edit in ARWDescription.jsx in components*/}
            <ARWDesc></ARWDesc>

            <div className="mx-8">
              {/* Central Committee Project Heads */}
              <div className="mt-10">
                <span>ARW 2023</span>
                <br></br>
                <span>CENTRAL COMMITTEE</span>
                <div>
                  <span>PROJECT HEADS</span>
                  <br></br>
                  <div class="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 md:mx-20">
                    <Card name="Person 1" imgURL={phead1}></Card>
                    <Card name="Person 2" imgURL={phead1}></Card>
                    <Card name="Person 3" imgURL={phead1}></Card>
                    <Card name="Person 4" imgURL={phead1}></Card>
                  </div>
                </div>
              </div>
              {/* Executive Committee */}
              <div className="mt-10">
                <span>EXECUTIVE COMMITTEE</span>
                <br></br>
                <div className="p-5 border-8 rounded-3xl border-red-900 border-solid bg-white">
                  PLACEHOLDER
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Display the play button initially
        <div className="w-full h-screen flex flex-col justify-center items-center">
          {/* Set Page Background - edit in spaceBackground.jsx in components*/}
          <SpaceBackground bgSize="cover" />
          {/* Invaders SVG - to fix for both desktop and mobile*/}
          <img className="relative mb-20" src={invaders} alt="Logo" />

          <div className="relative z-10 p-8 text-center">
            <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-9xl">
              About Us
            </span>
            <div className="mt4">
              <button className="btn btn-primary" onClick={handlePlayClick}>
                Play
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
