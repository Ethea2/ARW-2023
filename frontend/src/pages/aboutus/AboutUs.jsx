import React, { useState } from "react";
import Drawer from "../../components/drawer/Drawer";
import Card from "./components/Card";
import ARWDesc from "./components/ARWDesciption";
import SpaceBackground from "./components/spaceBackground";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import PlayButton from "./components/PlayButton";
import ExeCommAccordion from "./components/ExeCommAccordion";

// Import Images
import invaders from "../../assets/aboutus/invaders.svg";
import ProjectHeads from "./ProjectHeads";

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
                            {/* Central Committee Project Heads - edit in ProjectHeads.jsx in components*/}
                            <ProjectHeads />

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
                    {/* Invaders SVG */}
                    <img
                        className="relative mb-12 w-11/12 lg:w-8/12 lg:mb-8"
                        src={invaders}
                        alt="Logo"
                    />

                    <div className="relative z-10 p-4 text-center">
                        <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-7xl text-primary">
                            ABOUT US
                        </span>
                        <div className="mt-5">
                            <PlayButton onClick={handlePlayClick} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;
