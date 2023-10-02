import React from "react";
import { motion } from "framer-motion";
import CrownDetails from "./CrownDetails";

const CrownImage = ({ activeElite }) => {
    const imgVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };
    return (
        <div className=" w-1/2 h-1/2 lg:w-2/5 lg:h-4/5 flex m-auto">
            {activeElite ? (
                <motion.img
                    initial="hidden"
                    animate={activeElite ? "visible" : "hidden"}
                    variants={imgVariants}
                    key={activeElite ? activeElite.image : ""}
                    src={activeElite.image}
                    alt="Active Elite Crown"
                    className="carousel-item h-full w-full m-auto object-cover object-top items-center"
                    id={activeElite.orgname}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default CrownImage;
