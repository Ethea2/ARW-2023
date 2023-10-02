import React from "react";

const ChampionContatiner = ({ cyberClash }) => {
    return (
        
        <div className = 'flex justify-center flex-row items-center border-2 border-orange-500 rounded-xl w-11/12 dark-bg p-3 mt-6 md:mt-20'>
            
            <div  className="grid content-center w-1/4 aspect-square  mr-2.5">
                <img src="../crown.png" alt="CrownImg" className="rounded-full w-full"/>
            </div>

            <div className="flex justify-center flex-col items-center w-3/4 ">
                <div className="text-3xl text-[#FFFFFF] font-normal font-header text-header-shadow ">
                    Champions
                </div>
                <div className="bg-zinc-300 rounded-md w-full text-center font-monda font-bold text-black">NameDisplay</div>
            </div>
        </div>
    );
};

export default ChampionContatiner;
