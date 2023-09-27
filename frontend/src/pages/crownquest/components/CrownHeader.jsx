import React from 'react'

const CrownHeader = ({ activeElite }) => {
  return (
    <div className="relative top-0 left-0 w-full bg-neutral-600/50 p-4 text-center h-52 shrink" >
      <div className="text-8xl text-[#FFD524] font-normal font-header text-header-shadow mt-7">LSCS</div>
      <div className="font-header text-xl text-center text-[#FFF]">LA SALLE COMPUTER SOCIETY</div>
    </div>
  )
}

export default CrownHeader