import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";

const Question = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            animate={open ? "open" : "closed"}
            className={`rounded-md px-4 border-2 border-white transition-colors ${
                open
                    ? "bg-gradient-to-b from-[#FFD524]/50 to-[#451F4D]/50"
                    : "bg-gradient-to-b from-[#FFD524]/50 to-[#451F4D]/50"
            }`}
        >
            <button
                onClick={() => setOpen((pv) => !pv)}
                className="flex w-full items-center justify-between gap-4 py-4"
            >
                <span
                    className={`text-left text-lg transition-colors ${
                        open ? "text-white" : "text-white"
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
                            open ? "text-white" : "text-yellow-300"
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
                <p className="py-4 text-justify">{answer}</p>
            </motion.div>
        </motion.div>
    );
};

export default Question;
