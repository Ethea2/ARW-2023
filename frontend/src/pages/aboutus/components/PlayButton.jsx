import React from "react";
import button from "../../../assets/aboutus/about-us-play-button.svg";
import { motion } from "framer-motion";

const PlayButton = (props) => {
    return (
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <button className="w-6/12 md:w-4/12 lg:w-3/12">
                <img src={button} alt="Play Button" onClick={props.onClick} />
            </button>
        </motion.button>
    );
};

export default PlayButton;
