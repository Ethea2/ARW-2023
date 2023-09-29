import React from "react";
import VSContainer from "./VSContainer";

const GameContainer = ({ game }) => {
  return (
    <div className='flex justify-center flex-row items-center border-2 border-orange-500 rounded-xl w-11/12 dark-bg p-3 mt-6'>
        
        <div  className="grid content-center w-1/4 aspect-square  mr-2.5">
            <img src={game.gamelogo} alt={game.game} className="rounded-full" />
        </div>
        <div className='flex justify-center flex-col items-center w-3/4 '>
          {game.teams.map((vs) => (
            <VSContainer team1 = {vs[0]} team2 = {vs[1]} />
          ))}
        </div>
        

    </div>
  )
}

export default GameContainer;
