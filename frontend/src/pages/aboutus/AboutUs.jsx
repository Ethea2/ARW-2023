import React, { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Card from "./components/Card";
import ARWDesc from "./components/ARWDesciption";
import SpaceBackground from "./components/spaceBackground";
import { motion } from "framer-motion"; // Import motion from Framer Motion

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
                    <SpaceBackground />

                    <div className="my-28 z-10 text-center">
                        {/* ABOUT ARW - edit in ARWDescription.jsx in components*/}
                        <ARWDesc></ARWDesc>

                        <div className="mx-8 md: mx-8">
                            {/* Central Committee Project Heads */}
                            <div className="mt-20">
                                <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-9xl text-primary">
                                    ARW 2023
                                </span>
                                <br />
                                <span className="font-bold font-bit text-4xl sm:text-2xl lg:text-6xl text-neutral">
                                    CENTRAL COMMITTEE
                                </span>
                                <div>
                                    <span className="font-bold font-bit text-4xl sm:text-2xl lg:text-6xl text-neutral">
                                        PROJECT HEADS
                                    </span>
                                    <br />
                                    <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4 md:gap-14 md:mx-10">
                                        <Card
                                            name="Person 1"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="Person 2"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="Person 3"
                                            imgURL={phead1}
                                        ></Card>
                                        <Card
                                            name="Person 4"
                                            imgURL={phead1}
                                        ></Card>
                                    </div>
                                </div>
                            </div>
                            {/* Executive Committee */}
                            <div className="mt-20">
                                <span className="font-bold font-bit text-4xl sm:text-2xl lg:text-6xl text-neutral">
                                    EXECUTIVE COMMITTEE
                                </span>
                                <br></br>
                                <div className="p-5 border-8 rounded-3xl border-red-900 border-solid bg-white">
                                    PLACEHOLDER
                                </div>
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
