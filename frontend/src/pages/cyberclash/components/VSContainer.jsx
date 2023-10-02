import React from "react";

const VSContainer = ({ team1, team2 }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <span className="bg-gray-300 w-90 p-2 rounded-lg m-2 font-bungee text-center">
        {team1.org}
      </span>
      <span className=" text-[#FFD524] font-normal font-header text-header-shadow">
        VS
      </span>
      <span className="bg-gray-300 w-90 p-2 rounded-lg m-2 font-bungee text-center">
        {team2.org}
      </span>
    </div>
  );
};

export default VSContainer;
