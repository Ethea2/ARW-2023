import React from 'react'


const ChampionContatiner = ({cyberClash}) => {
    return (
        
        <div className = 'border-2 border-orange-500 flex bg-stone-900'>
            
            <div  className="grid content-center">
                <img src="#" alt="CrownImg" className=""/>
            </div>

            <div>
                <div className="text-6xl text-[#FFFFFF] font-normal font-header text-header-shadow">
                    Champions
                </div>
                <div className='bg-zinc-300 rounded-md'>
                    NameDisplay
                </div>
            </div>
        </div>
    );
}

export default ChampionContatiner