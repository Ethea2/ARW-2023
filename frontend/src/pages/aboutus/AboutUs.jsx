import React, { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Card from "./components/Card";
import ARWDesc from "./components/ARWDesciption";
import SpaceBackground from "./components/spaceBackground";
import { motion } from "framer-motion"; // Import motion from Framer Motion

// Import Images
import phead1 from "../../assets/aboutus/TaoHu.gif";
import invaders from "../../assets/aboutus/invaders.svg";
import ExeCommAccordion from "./components/ExeCommAccordion";

const AboutUs = () => {
    const [showContent, setShowContent] = useState(false);

    // Function to handle the play button click
    const handlePlayClick = () => {
        setShowContent(true);
    };

    return (
        <div className="w-full min-h-screen bg-black">
            <Drawer />

            {showContent ? (
                // Display the content after pressing the button with animation
                <motion.div
                    initial={{ opacity: 0, y: 1000 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 1000 }}
                    transition={{ duration: 2 }}
                    className="relative h-full flex flex-col justify-center items-center"
                >
                    {/* Set Page Background - edit in spaceBackground.jsx in components*/}
                    <SpaceBackground bgSize="auto" />

                    <div className="my-28 z-10 text-center w-screen">
                        {/* ABOUT ARW - edit in ARWDescription.jsx in components*/}
                        <ARWDesc></ARWDesc>

                        <div className="mx-8">
                            {/* Central Committee Project Heads */}
                            <div className="mt-20 md:mt-28">
                                <span className="font-bold font-bit text-4xl md:text-7xl lg:text-9xl text-primary">
                                    ARW 2023
                                </span>
                                <br />
                                <span className="font-bold font-bit text-3xl md:text-6xl lg:text-7xl text-neutral">
                                    CENTRAL COMMITTEE
                                </span>
                                <div>
                                    <span className="font-bold font-bit text-3xl md:text-6xl lg:text-7xl text-neutral">
                                        PROJECT HEADS
                                    </span>
                                    <br />
                                    <div className="mt-10 mx-2 grid grid-cols-2 gap-5 lg:grid-cols-4 md:gap-10 md:mx-10">
                                        <Card
                                            name="Charm Andrea Griengo"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="Vince Evane Tiangco"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="John Louise Bungay"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="Ma. Hannah Isabella Ruiz"
                                            imgURL={phead1}
                                        ></Card>
                                    </div>
                                </div>
                            </div>
                            {/* Executive Committee */}
                            <div className="mt-16 md:mt-28">
                                <p className="md:mb-5 font-bold font-bit text-3xl md:text-6xl lg:text-7xl text-neutral lg:mx-10">
                                    EXECUTIVE COMMITTEE
                                </p>
                                <br></br>
                                <ExeCommAccordion committee="EVENTS" />
                                <ExeCommAccordion committee="ORGREL" />
                                <ExeCommAccordion committee="IMCC" />
                                <ExeCommAccordion committee="IMCP" />
                                <ExeCommAccordion committee="CORPREL" />
                                <ExeCommAccordion committee="DOCU" />
                                <ExeCommAccordion committee="FIN" />
                                <ExeCommAccordion committee="WEBDEV" />
                                <ExeCommAccordion committee="TECHLOG" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) : (
                // Display the play button initially
                <div className="w-full h-screen flex flex-col justify-center items-center">
                    {/* Set Page Background - edit in spaceBackground.jsx in components*/}
                    <SpaceBackground bgSize="cover" />
                    {/* Invaders SVG - to fix for both desktop and mobile*/}
                    <img className="relative mb-20" src={invaders} alt="Logo" />

                    <div className="relative z-10 p-8 text-center">
                        <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-9xl text-primary">
                            ABOUT US
                        </span>
                        <div className="mt-4">
                            <button
                                className="btn btn-primary"
                                onClick={handlePlayClick}
                            >
                                PLAY
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
