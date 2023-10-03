import React from "react";

const VSContainer = ({ team1, team2 }) => {
    return (
        <div className="w-full flex justify-between items-center font-monda text-white my-[10px] ">
            <h3 className="text-lg bg-black/30 p-2 rounded-lg border-2 border-[#FFD524]/80">
                {team1.org}
            </h3>
            <h3 className="text-2xl text-[#FFD524] text-outline font-normal font-header">
                VS
            </h3>
            <h3 className="text-lg bg-black/30 p-2 rounded-lg border-2 border-[#FFD524]/80">
                {team2.org}
            </h3>
        </div>
    );
};

export default VSContainer;

{
    /* <span className="">{team1.org}</span>
<span className="">VS</span>
<span className="">{team2.org}</span> */
}
