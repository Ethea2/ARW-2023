import React from "react";

const CrownSelector = ({ elites, handleSelect }) => {
  return (
    <div className="gap-12">
    <div className="flex max-w-full gap-8 py-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x before:shrink-0 before:w-[3vw] after:shrink-0 after:w-[3vw]">
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105">
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
      <div className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105" >
      <div className="w-44 rounded"></div></div>
    </div>
    </div>
  );
};

export default CrownSelector;

// {elites?.map((elite) => (
//   <div
//     className="avatar border-2 rounded-md border-primary shrink-0 snap-center hover:scale-105"
//     onClick={(e) => handleSelect(e, elite)}
//   >
//     <div className="w-44 rounded">
//       <img src={elite.image} />
//     </div>
//   </div>
// ))}