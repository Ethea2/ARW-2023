import React from "react";
import CrownDetails from "./CrownDetails";

const CrownImage = ({ activeElite }) => {
  console.log(activeElite);
  return (
    <div className="w-full h-1/2 flex m-auto bg-pink-500">
      {activeElite ? (
        <img
          src={activeElite.image}
          alt="Active Elite Crown"
          className="object-contain"
        />
      ) : (
        <p>Select an Elite</p>
      )}
    </div>
  );
};

export default CrownImage;
