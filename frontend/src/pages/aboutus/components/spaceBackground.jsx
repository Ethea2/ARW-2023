import React from "react";
import BG from "../../../assets/aboutus/background.svg";
import bugs from "../../../assets/aboutus/footer-bugs.svg";

const spaceBackground = (props) => {
    return (
        <div>
            {/* Space Background */}
            <div
                id="background"
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundSize: props.bgSize,
                }}
            ></div>
            {/* Bugs SVG - bottom left corner of page */}
            <img className="absolute bottom-0 left-0" src={bugs} alt="Logo" />
        </div>
    );
};

export default spaceBackground;
