import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import GameContainer from "./components/GameContainer";
import ChampionContatiner from "./components/ChampionContainer";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const CyberClash = () => {
    const { data: cyberClash, loading, error } = useFetch("/api/clash");
    useEffect(() => {
        console.log(cyberClash);
    }, [cyberClash]);

    return (
        <div class="w-full min-h-screen flex py-10 px-6">
            {loading ? (
                <Loading color={"text-slate-200"} />
            ) : error ? (
                <Error error={error} />
            ) : (
                <div className="w-[90%] md:w-[90%] h-full flex flex-col justify-center items-center m-auto md:my-auto lg:my-auto">
                    <div className="relative top-5">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#FFD524] text-outline-leaderboard font-normal font-header">
                            LEADERBOARD
                        </h1>
                    </div>
                    <div className="flex flex-col items-center bg-black/50 w-full py-8 px-6 border-[#451F4D] border-4 gap-8 ">
                        <ChampionContatiner />

                        <div className="w-full flex flex-col items-center gap-6">
                            {cyberClash?.map((game) => (
                                <>
                                    {game.showgame ? (
                                        <GameContainer
                                            game={game}
                                            className=""
                                            showteams={game.showteams}
                                        />
                                    ) : (
                                        ""
                                    )}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CyberClash;

// //
// <div className="flex justify-center items-center flex-col w-full h-[100vh] pb-10 ">
//             {loading ? (
//                 <Loading color={"text-slate-200"} />
//             ) : error ? (
//                 <Error error={error} />
//             ) : (
//                 <>
//                     <div
//                         id="container"
//                         className="flex flex-col items-center border-8 rounded-xl border-base-100 bg-black/50 w-10/12 h-4/5 mt-20 pb-10"
//                     >
//                         <div
//                             id="title"
//                             className="relative -top-5 text-3xl text-[#FFD524] text-outline font-normal font-header  md:text-7xl md:-top-10"
//                         >
//                             LEADERBOARDS
//                         </div>

//                         <ChampionContatiner />

//                         <div className="h-full w-full bg-green-200">
//                             {cyberClash?.map((game) => (
//                                 <GameContainer game={game} className="" />
//                             ))}
//                         </div>
//                     </div>
//                 </>
//             )}
//         </div>
