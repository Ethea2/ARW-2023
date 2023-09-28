import React from "react";

const Error = ({ error, textSize }) => {
    return (
        <div
            className={`font-bit w-full h-full flex justify-center items-center drop-shadow-glow_red text-primary ${textSize}`}
        >
            {error}
        </div>
    );
};

export default Error;
