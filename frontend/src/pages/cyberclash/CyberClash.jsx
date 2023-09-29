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
        /*<div className="flex justify-center items-center w-full h-screen">
            <div
                id="container"
                className="flex justify-center flex-col items-center border-2 border-accent w-64 h-64"
            >
                <div id="champions_container" className="flex justify-center flex-row items-center rounded-xl w-9/12 dark-bg">

                    <div id="champions_image_container">
                        <img src='logo.jpg' />
                    </div>

                    <div id="champions_content_container" className="flex justify-center flex-col items-center border-2 border-accent" >
                        Champions
                        
                    </div>

                </div>
              
              {/* <GameContainer lala={game}/> }
            </div>
        </div>\
        */

        <div className="flex justify-center items-center flex-col w-full h-screen ">

            <div id="container" className="flex flex-col items-center border-8 rounded-xl border-base-100 w-10/12 h-4/5 mt-20">
                <div id="title" className="relative -top-5 text-3xl text-[#FFD524] font-normal font-header text-header-shadow">
                    LEADERBOARDS
                </div>

                <ChampionContatiner/>
                
                {cyberClash?.map((game) => (
                    <GameContainer game={game} />
                ))}
                
            </div>
        </div>
    );
};

export default CyberClash;
