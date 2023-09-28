import React from "react";

const CrownHeader = ({ activeElite }) => {
  console.log(activeElite)
  return (
    <div className="w-full h-full bg-black/50 p-4 flex flex-col items-center justify-center">
      <div className="text-6xl text-[#FFD524] font-normal font-header text-header-shadow">
        {activeElite.orgname}
      </div>
      <div className="font-header text-md lg:text-sm text-center text-[#FFF]">
        {activeElite.longorgname}
      </div>
    </div>
  );
};

export default CrownHeader;
