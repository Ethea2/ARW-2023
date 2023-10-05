import React from "react";
import VSContainer from "./VSContainer";
import TeamContainer from "./TeamContainer";

const GameContainer = ({ game }) => {
    return (
        <div className="w-full md:w-[80%] lg:w-[60%] lg:px-10 p-4 flex justify-center items-center gap-4 bg-[#451F4D]/50 border-2 border-[#FFD524] rounded-lg">
            <div className="w-1/4">
                <img
                    src={game.gamelogo}
                    alt={game.game}
                    className="object-cover object-center rounded-full border-white border-2"
                />
            </div>
            {/* <div className="w-3/4 h-full md:flex md:flex-col md:items-center">
                {game.teams.map((vs) => (
                    <VSContainer team1={vs[0]} team2={vs[1]} />
                ))}
            </div> */}
            <div className="teams">
                <TeamContainer />
            </div>
        </div>
    );
};

export default GameContainer;
