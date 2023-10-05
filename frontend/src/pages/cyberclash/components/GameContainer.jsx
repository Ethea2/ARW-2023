import React from "react";

import TeamContainer from "./TeamContainer";

const GameContainer = ({ game, showteams }) => {
    return (
        <div className="w-full md:w-[70%] lg:w-[60%] lg:px-10 p-4 flex flex-col justify-center items-center gap-4 bg-[#451F4D]/50 border-2 border-[#FFD524] rounded-lg">
            <div className="flex flex-col justify-center items-center px-4">
                <div className="flex justify-center gap-4 items-center p-4">
                    <img
                        src={game.gamelogo}
                        alt={game.game}
                        className="w-1/4 md:w-[15%] object-cover object-center rounded-full "
                    />

                    <h2 className="font-monda font-bold text-xl text-white">
                        {game.game}
                    </h2>
                </div>
                <div className="divider"></div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center items-center">
                {game.teams.map((team) => (
                    <>
                        {showteams ? (
                            <TeamContainer
                                team={team.org}
                                image={team.orglogo}
                            />
                        ) : (
                            ""
                        )}
                    </>
                ))}
            </div>
        </div>
    );
};

export default GameContainer;
