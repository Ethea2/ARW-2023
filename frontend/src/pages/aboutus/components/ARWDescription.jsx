import React from "react";
import containerMid from "../../../assets/aboutus/bit-container-body.svg";
import containerTop from "../../../assets/aboutus/bit-container-top.svg";
import containerBottom from "../../../assets/aboutus/bit-container-bottom.svg";

const arwDesciption = () => {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                </div>
            </div>
            {/* Bottom portion of container */}
            <img className="w-full" src={containerBottom} alt="bit-bottom" />
        </div>
    );
};

export default arwDesciption;
