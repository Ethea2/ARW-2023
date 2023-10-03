import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import React, { useState } from "react";
import Question from "./Question";
import { QUESTIONS } from "../constants/queries";

const Questions = ({ selected }) => {
    return (
        <div className="mx-auto mt-12 max-w-3xl">
            <AnimatePresence mode="wait">
                {Object.entries(QUESTIONS).map(([tab, questions]) => {
                    return selected === tab ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{
                                duration: 0.5,
                                ease: "backIn",
                            }}
                            className="space-y-4"
                            key={tab}
                        >
                            {questions.map((q, idx) => (
                                <Question key={idx} {...q} />
                            ))}
                        </motion.div>
                    ) : undefined;
                })}
            </AnimatePresence>
        </div>
    );
};

export default Questions;
