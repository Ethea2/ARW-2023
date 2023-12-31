import React from "react";
import Crown from "../../../assets/crownquest/crown.png";
import { motion } from "framer-motion";

const CrownSelector = ({ elites, handleSelect, selectedElite }) => {
    return (
        <div className="w-full h-full flex lg:justify-center items-center gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x before:shrink-0 after:shrink-0 after:w-[3vw]">
            {elites?.map((elite) => (
                <div
                    onClick={(e) => handleSelect(e, elite)}
                    className={`avatar w-24 shrink-0 snap-center hover:scale-105 transition ease-in ${
                        selectedElite?._id === elite._id
                            ? "scale-105"
                            : ""
                    }`}
                >
                    <div className="flex">
                        {selectedElite?._id === elite._id && (
                            <motion.img
                                src={Crown}
                                className="absolute bottom-12 left-10"
                                initial={{ opacity: 0, scale: 1, rotate: 30 }}
                                animate={{ opacity: 1, scale: 0.5 }}
                                exit={{ opacity: 0, scale: 1 }}
                                transition={{ ease: "easeOut", duration: 0.3 }}
                            />
                        )}

                        <img
                            src={elite.orglogo}
                            className={`border-2  rounded-xl bg-black/50 hover:border-[#FFD524] transition ease-i ${
                                selectedElite?._id === elite._id
                                    ? "border-[#FFD524]"
                                    : "border-white"
                            }`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CrownSelector;

{
    //   ${
    //     elite ? "border-[#FFD524]" : "border-white"
    // }`}
    /* <div className="flex max-w-full gap-8 py-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x before:shrink-0 before:w-[3vw] after:shrink-0 after:w-[3vw]">
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105">
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
    </div> */
}
