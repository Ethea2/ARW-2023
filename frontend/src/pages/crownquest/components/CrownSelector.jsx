import React from "react";

const CrownSelector = ({ elites, handleSelect }) => {
  return (
    <div className="w-full h-full flex items-center gap-2 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x before:shrink-0 after:shrink-0 after:w-[3vw]">
      {elites?.map((elite) => (
        <div
          onClick={(e) => handleSelect(e, elite)}
          className="avatar shrink-0 snap-center hover:scale-105 w-24"
        >
          <img
            src={elite.orglogo}
            className="border-2 border-white rounded-xl bg-black/50"
          />
        </div>
      ))}
    </div>
  );
};

export default CrownSelector;

{
  /* <div className="flex max-w-full gap-8 py-3 overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x before:shrink-0 before:w-[3vw] after:shrink-0 after:w-[3vw]">
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
    </div> */
}
