import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import { TABS } from "../constants/queries";
const Tabs = ({ selected, setSelected }) => {
    return (
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            {TABS.map((tab) => (
                <button
                    onClick={() => setSelected(tab)}
                    className={`relative overflow-hidden whitespace-nowrap rounded-md border-[1px] px-3 py-1.5 text-sm font-medium transition-colors duration-500 ${
                        selected === tab
                            ? "border-violet-500 text-slate-50"
                            : "border-slate-600 bg-transparent text-slate-400"
                    }`}
                    key={tab}
                >
                    <span className="relative z-10">{tab}</span>
                    <AnimatePresence>
                        {selected === tab && (
                            <motion.span
                                initial={{ y: "100%" }}
                                animate={{ y: "0%" }}
                                exit={{ y: "100%" }}
                                transition={{
                                    duration: 0.5,
                                    ease: "backIn",
                                }}
                                className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600"
                            />
                        )}
                    </AnimatePresence>
                </button>
            ))}
        </div>
    );
};

export default Tabs;
