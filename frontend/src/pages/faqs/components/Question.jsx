import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

const Question = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className={`m-4 rounded-xl border-[1px] border-slate-700 px-4 transition-colors ${
                open ? "bg-[#ff2955]/80" : "bg-pink-400/80"
            }`}
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-4"
            >
                <span
                    className={`font-bold text-left text-lg transition-colors ${
                        open ? "text-white" : "text-black"
                    }`}
                >
                    {question}
                </span>
                <motion.span
                    variants={{
                        open: {
                            rotate: "45deg",
                        },
                        closed: {
                            rotate: "0deg",
                        },
                    }}
                >
                    <FiPlus
                        className={`text-2xl transition-colors ${
                            open ? "text-slate-50" : "text-slate-400"
                        }`}
                    />
                </motion.span>
            </button>
            <motion.div
                initial={false}
                animate={{
                    height: open ? "fit-content" : "0px",
                    marginBottom: open ? "24px" : "0px",
                }}
                className="overflow-hidden text-white"
            >
                <p>{answer}</p>
            </motion.div>
        </motion.div>
    );
};

export default Question;
