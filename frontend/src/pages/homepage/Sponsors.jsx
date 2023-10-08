import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    Bronze,
    Silver,
    Gold,
    Platinum,
    Diamond,
} from "./components/sponsorscomps/PartnerCompanies";

import {
    Official,
    Primary,
    Major,
    Internal,
} from "./components/sponsorscomps/MediaPartners";

const Sponsors = () => {
    const partners = [
        <Bronze />,
        <Silver />,
        <Gold />,
        <Platinum />,
        <Diamond />,
        <Official />,
        <Primary />,
        <Major />,
        <Internal />,
    ];

    const [currentComponent, setCurrentComponent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComponent((prev) => (prev + 1) % partners.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [partners.length]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="w-full flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }} // Set the duration as per your preference
            >
                {partners[currentComponent]}
            </motion.div>
        </AnimatePresence>
    );
};

export default Sponsors;

{
    /* <Diamond />
            <Platinum />
            <Gold />
            <Silver />
            <Bronze />
            <Official />
            <Primary />
            <Major />
            <Internal /> */
}
