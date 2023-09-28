import React from "react";
import CrownDetails from "./CrownDetails";

const CrownImage = ({ activeElite }) => {
  console.log(activeElite);
  return (
    <div className="w-1/2 h-1/2 lg:w-2/5 lg:h-4/5 flex m-auto">
      {activeElite ? (
        <img
          src={activeElite.image}
          alt="Active Elite Crown"
          className="h-full w-full m-auto object-cover object-top items-center"
        />
      ) : (
        <p>Select an Elite</p>
      )}
    </div>
  );
};

export default CrownImage;
