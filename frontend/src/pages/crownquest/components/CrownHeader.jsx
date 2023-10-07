import React from "react";
import { motion } from "framer-motion";

const CrownHeader = ({ activeElite }) => {
    const textVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    return (
        <div className="w-full h-full bg-black/50 p-4 flex flex-col items-center justify-center">
            <div className="text-5xl text-[#FFD524] font-normal font-header text-header-shadow">
                {activeElite ? (
                    <motion.p
                        initial="hidden"
                        animate={activeElite ? "visible" : "hidden"}
                        variants={textVariants}
                        key={
                            activeElite
                                ? activeElite.orgname
                                : "Choose Your Elite!"
                        }
                        className="overflow-hidden"
                    >
                        {activeElite.orgname}
                    </motion.p>
                ) : (
                    "Choose your character!"
                )}
            </div>
            <div className="font-header text-xs lg:text-sm text-center text-[#FFF]">
                {activeElite ? (
                    <motion.p
                        initial="hidden"
                        animate={activeElite ? "visible" : "hidden"}
                        variants={textVariants}
                        key={
                            activeElite
                                ? activeElite.orgname
                                : "Select an Elite!"
                        }
                    >
                        {activeElite.longorgname}
                    </motion.p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default CrownHeader;
