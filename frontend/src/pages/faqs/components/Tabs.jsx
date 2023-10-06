import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import { TABS } from "../constants/queries";
const Tabs = ({ selected, setSelected }) => {
    return (
        <div className="w-full relative z-[1] flex items-center justify-between gap-2">
            {TABS.map((tab) => (
                <button
                    onClick={() => setSelected(tab)}
                    className={`relative rounded-md px-3 py-1.5 md:text-sm text-xs overflow-hidden transition-colors bg-black/10 duration-500 ${
                        selected === tab ? "text-white" : "text-white"
                    }`}
                    key={tab}
                >
                    <span className="relative z-[1]  text-md font-semibold">
                        {tab}
                    </span>
                    <AnimatePresence>
                        {selected === tab && (
                            <motion.span
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                exit={{ x: "100%" }}
                                transition={{
                                    duration: 0.5,
                                    ease: "backIn",
                                }}
                                className="absolute inset-0 z-0 bg-[#451F4D]/80"
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </div>
    );
};

export default Tabs;
