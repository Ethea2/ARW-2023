import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
    Bronze,
    Silver,
    Gold,
    Platinum,
    Diamond,
} from "./sponsorscomps/PartnerCompanies";

import {
    Official,
    Primary,
    Major,
    Internal,
} from "./sponsorscomps/MediaPartners";

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
        <div className="flex justify-center">
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {partners[currentComponent]}
            </motion.div> */}

            <Diamond />
        </div>
    );
};

export default Sponsors;
