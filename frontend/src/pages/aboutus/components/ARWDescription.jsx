import React from "react";
import containerMid from "../../../assets/aboutus/bit-container-body.svg";
import containerTop from "../../../assets/aboutus/bit-container-top.svg";
import containerBottom from "../../../assets/aboutus/bit-container-bottom.svg";

const arwDescription = () => {
    return (
        <div>
            <p className="font-bold font-bit text-4xl md:text-7xl lg:text-8xl text-primary lg:my-20">
                ABOUT US
            </p>

            {/* Top portion of container */}
            <img
                className="w-full mt-10 md:mt-20"
                src={containerTop}
                alt="bit-top"
            />

            {/* Middle portion of container / Content */}
            <div
                className="w-full px-8 -my-1"
                style={{
                    backgroundImage: `url(${containerMid})`,
                }}
            >
                <div className="p-5 border-8 rounded-3xl border-[#FF2955] border-solid bg-white md:mx-12 md:p-10 md:border-[11px] lg:mx-36">
                    <span className="font-bit text-primary md:text-3xl lg:text-4xl">
                        ANNUAL RECRUITMENT WEEK <br></br>
                    </span>
                    <p className="text-black font-monda mt-2 md:text-3xl lg:text-2xl">
                        Annual Recruitment Week (ARW) is one of the most awaited annual activities in De La Salle University. Students are given the opportunity to choose among the 49 organizations under the Council of Student Organizations in pursuit of being able to meet people of similar interests and hone their skills outside of academic responsibilities.
                    </p>
                </div>
            </div>
            {/* Bottom portion of container */}
            <img className="w-full" src={containerBottom} alt="bit-bottom" />
        </div>
    );
};

export default arwDescription;
