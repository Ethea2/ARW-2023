import React from "react";

const CrownDetails = ({ activeElite }) => {
  return (
    <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex m-auto items-center">
      {activeElite ? (
        <p className="text-white lg:text-black text-xs lg:text-lg text-justify bg-black/50 p-4 lg:bg-inherit">
          {activeElite.desc}
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default CrownDetails;
