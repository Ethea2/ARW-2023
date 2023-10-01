import React from "react";

const CrownHeader = ({ activeElite }) => {
  console.log(activeElite);
  return (
    <div className="w-full h-full bg-black/50 p-4 flex flex-col items-center justify-center">
      <div className="text-5xl text-[#FFD524] font-normal font-header text-header-shadow">
        {activeElite ? <p>{activeElite.orgname}</p> : ""}
      </div>
      <div className="font-header text-xs lg:text-sm text-center text-[#FFF]">
        {activeElite ? <p>{activeElite.longorgname}</p> : ""}
      </div>
    </div>
  );
};

export default CrownHeader;
