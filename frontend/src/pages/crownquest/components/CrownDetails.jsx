import React from "react";

const CrownDetails = ({ activeElite }) => {
  return (
    <div className="w-full h-1/2 flex m-auto bg-green-50">
      {activeElite ? <p className="h-full">{activeElite.desc}</p> : <p></p>}
    </div>
  );
};

export default CrownDetails;
