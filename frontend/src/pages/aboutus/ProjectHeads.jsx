import React from "react";
import Card from "./components/Card";
// Import Project Head Images
import phead1 from "../../assets/aboutus/charm.gif";
import phead2 from "../../assets/aboutus/vince.gif";
import phead3 from "../../assets/aboutus/jl.gif";
import phead4 from "../../assets/aboutus/hannah.gif";

const ProjectHeads = () => {
    return (
        <div className="mt-20 md:mt-28">
            <span className="font-bold font-bit text-4xl md:text-7xl lg:text-8xl text-primary">
                ARW 2023
            </span>
            <br />
            <span className="font-bold font-bit text-3xl md:text-6xl text-neutral">
                CENTRAL COMMITTEE
            </span>
            <div>
                <span className="font-bold font-bit text-3xl md:text-6xl text-neutral">
                    PROJECT HEADS
                </span>
                <br />
                <div className="mt-10 mx-2 grid grid-cols-2 gap-5 lg:grid-cols-4 md:gap-10 md:mx-10">
                    <Card name="Charm Andrea Griengo" imgURL={phead1}></Card>
                    <Card name="Vince Evane Tiangco" imgURL={phead2}></Card>
                    <Card name="John Louise Bungay" imgURL={phead3}></Card>
                    <Card
                        name="Ma. Hannah Isabella Ruiz"
                        imgURL={phead4}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default ProjectHeads;
