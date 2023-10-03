import React from "react";

const ChampionContatiner = ({ cyberClash }) => {
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="relative top-[18px] bg-[#FFD524] rounded-lg px-8 rotate-[-2deg]">
                <h3 className="text-xl lg:text-3xl text-[#FF2955]/80 font-header">
                    Champions
                </h3>
            </div>

            <div className="w-full md:w-[80%] lg:w-[60%] flex px-4 py-8 lg:px-10 pb-4 gap-2 border-2 border-[#FFD524] rounded-xl bg-black/30 items-center ">
                <div className="w-1/4 p-2 aspect-square flex justify-center">
                    <img
                        src="../crown.png"
                        alt="CrownImg"
                        className="rounded-full object-cover objcet-center"
                    />
                </div>

                <div className="w-full h-full bg-black/50 border-2 border-[#FFD524] rounded-md flex items-center justify-center p-2">
                    <h1 className="font-monda font-bold text-white">?</h1>
                </div>
            </div>
        </div>
    );
};

export default ChampionContatiner;
