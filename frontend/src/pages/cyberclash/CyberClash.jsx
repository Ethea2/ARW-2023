import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import GameContainer from "./components/GameContainer";
import ChampionContatiner from "./components/ChampionContainer";

const CyberClash = () => {
    const { data: cyberClash, loading } = useFetch("/api/clash");

    //GUIDE FOR DATA STRUCTURE
    useEffect(() => {
        cyberClash?.map((game) => {
            game.teams.map((vs) => {
                console.log(
                    `GAME: ${game.game} || ${vs[0].org} vs. ${vs[1].org}`
                );
            });
        });
    }, [cyberClash]);

    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div
                id="container"
                className="flex justify-center flex-col items-center border-2 border-accent w-64 h-64"
            >
              <ChampionContatiner/>
              {/* <GameContainer lala={game}/> */}
            </div>
        </div>
    );
};

export default CyberClash;
