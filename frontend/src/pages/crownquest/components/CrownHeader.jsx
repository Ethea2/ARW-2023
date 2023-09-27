import React from "react";

const CrownHeader = ({ activeElite }) => {
  return (
    <div className="w-full h-full bg-black/50 p-4 flex flex-col items-center justify-center">
      <div className="text-6xl text-[#FFD524] font-normal font-header text-header-shadow">
        LSCS
      </div>
      <div className="font-header text-md lg:text-sm text-center text-[#FFF]">
        LA SALLE COMPUTER SOCIETY
      </div>
    </div>
  );
};

export default CrownHeader;
