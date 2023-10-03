import React from "react";

const ChampionContatiner = ({ cyberClash }) => {
    return (
        <div className="w-full">
            
            <div className="relative top-7 right-8 md:left-4 z-10 w-full ">
                <div className="text-white font-header md:text-5xl md:-top-10  md:text-black text-outline-champion text-end">
                    Champions
                </div>
                
            </div>

            <div className="relative flex justify-evenly  border-2 border-[#FFD524] rounded-xl w-full bg-[#451F4D]/50 w-full">
                <div className="grid content-center w-1/4 aspect-square  items-center justify-center">
                    <img
                        src="../crown.png"
                        alt="CrownImg"
                        className="rounded-full w-30 p-4"
                    />
                </div>

                <div className="w-full flex items-center justify-center">
                    <div className="bg-zinc-300 rounded-md w-5/6 h-1/2 flex items-center justify-center">
                        <div className="font-monda font-bold text-black">
                            NameDisplay
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ChampionContatiner;
