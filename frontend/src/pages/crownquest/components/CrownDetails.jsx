import React from "react";
import { motion } from "framer-motion";

const CrownDetails = ({ activeElite }) => {
    // Define variants for the animation
    const textVariants = {
      hidden: { opacity: 0},
      visible: { opacity: 1, transition: { duration: 1 } },
    };
    return (
        <div className="w-full min-h-1/3 lg:w-1/2 lg:h-full flex m-auto items-center bg-black/50 lg:bg-inherit">
            {activeElite ? (
                <motion.p
                    initial="hidden"
                    animate={activeElite ? "visible" : "hidden"}
                    variants={textVariants}
                    key={activeElite ? activeElite.desc : ""}
                    className="overflow-hidden text-white lg:text-black text-xs lg:text-lg text-justify p-4"
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
