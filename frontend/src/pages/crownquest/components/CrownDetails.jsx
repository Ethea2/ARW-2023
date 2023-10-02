import React from "react";
import { motion } from "framer-motion";

const CrownDetails = ({ activeElite }) => {
    // Define variants for the animation
    const textVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };
    return (
        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex m-auto items-center">
            {activeElite ? (
                <motion.p
                    initial="hidden"
                    animate={activeElite ? "visible" : "hidden"}
                    variants={textVariants}
                    key={activeElite ? activeElite.desc : ""}
                    className="text-white lg:text-black text-xs lg:text-lg text-justify bg-black/50 p-4 lg:bg-inherit"
                >
                    {activeElite.desc}
                </motion.p>
            ) : ( 
                <p></p>
            )}
        </div>
    );
};

export default CrownDetails;
