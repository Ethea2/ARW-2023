import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    bronze,
    silver,
    gold,
    plat,
    diamond,
} from "./components/sponsorscomps/PartnerCompanies";

import { official, primary, major, internal } from "./components/sponsorscomps/MediaPartners"

import Sponsor from "./components/sponsorscomps/Sponsor";

const AnimationWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};

const sponsorsData = [
    { title: "Bronze Partners", partners: bronze },
    { title: "Silver Partners", partners: silver },
    { title: "Gold Partners", partners: gold },
    { title: "Platinum Partners", partners: plat },
    { title: "Diamond Partners", partners: diamond },
    { title: "Official Media Parnters", partners: official },
    { title: "Primary Media Partners", partners: primary },
    { title: "Major Media Parnters", partners: major },
    { title: "Internal Media Partners", partners: internal },
];

const Sponsors = () => {
    const [currentComponent, setCurrentComponent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentComponent((prev) => (prev + 1) % sponsorsData.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence mode="wait">
            <AnimationWrapper key={currentComponent}>
                <Sponsor
                    title={sponsorsData[currentComponent].title}
                    partners={sponsorsData[currentComponent].partners}
                />
            </AnimationWrapper>
        </AnimatePresence>
    );
};

export default Sponsors;
