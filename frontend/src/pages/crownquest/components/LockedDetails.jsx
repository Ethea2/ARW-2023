import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

const LockedDetails = ({ activeElite }) => {
    const TARGET_TEXT =
        "ACCESS TO THIS INFORMATION IS DENIED";
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;

    const CHARS = "!@#$%^&*():{};|,.<>/?";
    const [text, setText] = useState(TARGET_TEXT);

    const scramble = () => {
        let pos = 0;
        const interval = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(
                        Math.random() * CHARS.length
                    );
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                clearInterval(interval);
            }
        }, SHUFFLE_TIME);
    };

    useEffect(() => {
        if (activeElite) {
            const timeout = setTimeout(scramble, 0); // Start scrambling asynchronously
            return () => clearTimeout(timeout); // Clear the timeout if component unmounts or activeElite changes again
        } else {
            setText(TARGET_TEXT); // Reset text when activeElite becomes falsy
        }
    }, [activeElite]);

    return (
        <motion.div
            whileHover={{
                scale: 1.025,
            }}
            whileTap={{
                scale: 0.975,
            }}
            className="w-full min-h-1/3 lg:w-1/2 lg:h-full flex m-auto items-center bg-black/50 lg:bg-inherit font-monda lg:font-semibold"
        >
            {activeElite ? (
                <motion.p
                    key={activeElite ? activeElite.desc : ""}
                    className="overflow-hidden text-green-300 text-md md:text-xl text-justify flex flex-row gap-2 justify-center items-center"
                    style={{
                        fontFamily: "Courier New, monospace",
                        whiteSpace: "pre",
                    }}
                >
                    <FiLock />
                        {text}
                </motion.p>
            ) : (
                <p></p>
            )}
        </motion.div>
    );
};

export default LockedDetails;
