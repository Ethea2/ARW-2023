import React, { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Card from "./components/Card";
// SVG Imports
import BG from "../../assets/aboutus/background.svg";
import biggerTextContainer from "../../assets/aboutus/text-container-bigger.svg";
// Import Project Head Images
import phead1 from "../../assets/aboutus/TaoHu.gif";

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
          <div
            id="background"
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${BG})`,
            }}
          ></div>

          <div className="my-20 z-10 text-center">
            {/* ABOUT ARW */}
            <div
              className="mt-10 bg-no-repeat bg-cover py-36 px-8"
              style={{
                backgroundImage: `url(${biggerTextContainer})`,
              }}
            >
              <div className="p-5 border-8 rounded-3xl border-red-900 border-solid bg-white">
                <span className="font-bit">
                  ANNUAL RECRUITMENT WEEK <br></br>
                </span>
                <span className="text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </span>
              </div>
            </div>

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
        <div className="w-full h-screen flex justify-center items-center">
          <div
            id="background"
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${BG})`,
              backgroundSize: "cover",
            }}
          ></div>
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
