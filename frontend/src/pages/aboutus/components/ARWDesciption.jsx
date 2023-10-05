import React from "react";
import containerMid from "../../../assets/aboutus/bit-container-body.svg";
import containerTop from "../../../assets/aboutus/bit-container-top.svg";
import containerBottom from "../../../assets/aboutus/bit-container-bottom.svg";

const arwDesciption = () => {
    return (
        <div>
            <span className="font-bold font-bit text-4xl sm:text-6xl lg:text-9xl text-primary">
                ABOUT US
            </span>

            {/* Top portion of container */}
            <img className="w-screen mt-10" src={containerTop} alt="bit-top" />

            {/* Middle portion of container / Content */}
            <div
                className="bg-no-repeat bg-cover px-8 -my-1"
                style={{
                    backgroundImage: `url(${containerMid})`,
                }}
            >
                <div className="p-5 border-8 rounded-3xl border-red-900 border-solid bg-white md:mx-12">
                    <span className="font-bit">
                        ANNUAL RECRUITMENT WEEK <br></br>
                    </span>
                    <span className="text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </span>
                </div>
            </div>
            {/* Bottom portion of container */}
            <img className="w-screen" src={containerBottom} alt="bit-bottom" />
        </div>
    );
};

export default arwDesciption;
