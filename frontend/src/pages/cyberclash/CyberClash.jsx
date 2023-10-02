import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import GameContainer from "./components/GameContainer";
import ChampionContatiner from "./components/ChampionContainer";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const CyberClash = () => {
    const { data: cyberClash, loading, error } = useFetch("/api/clash");

    return (
        <div className="flex justify-center items-center flex-col w-full h-full pb-10 ">
            
            {loading ? (
                    <Loading color={"text-slate-200"} />
                ) : error ? (
                    <Error error={error} />
                ) : (
                    <>
                    <div
                        id="container"
                        className="flex flex-col items-center border-8 rounded-xl border-base-100 w-10/12 h-4/5 mt-20 pb-10"
                    >
                        <div
                            id="title"
                            className="relative -top-5 text-3xl text-[#FFD524] text-outline font-normal font-header  md:text-7xl md:-top-10"
                        >
                            LEADERBOARDS
                        </div>

                        <ChampionContatiner />

                                <div className="h-full w-full flex flex-col md:w-11/12 md:grid md:grid-flow-col md:grid-cols-3 justify-start items-center">
                                    {cyberClash?.map((game) => (
                                        <GameContainer game={game} />
                                    ))}
                                </div>
                            
                    </div>
                    </>
            )}
        </div>
    );
};

export default CyberClash;
