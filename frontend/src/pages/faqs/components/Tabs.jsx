import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import { TABS } from "../constants/queries";
const Tabs = ({ selected, setSelected }) => {
    return (
        <div className="w-full relative z-10 flex flex-wrap items-center justify-center gap-4">
            {TABS.map((tab) => (
                <button
                    onClick={() => setSelected(tab)}
                    className={`relative overflow-hidden whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors bg-black/10 duration-500 ${
                        selected === tab
                            ? " text-slate-50"
                            : ""
                    }`}
                    key={tab}
                >
                    <span className="relative z-10 text-black text-md font-semibold">{tab}</span>
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
                                className="absolute inset-0 z-0 bg-[#FFD524]"
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </div>
    );
};

export default Tabs;
