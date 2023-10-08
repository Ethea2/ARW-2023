import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CrownDetails from "./components/CrownDetails";
import CrownHeader from "./components/CrownHeader";
import CrownImage from "./components/CrownImage";
import CrownSelector from "./components/CrownSelector";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import LockedDetails from "./components/LockedDetails";

const CrownQuest = () => {
    const { data: elites, loading, error } = useFetch("/api/crown/");
    const [activeElite, setActiveElite] = useState();

    const handleSelect = (e, elite) => {
        e.preventDefault();
        setActiveElite(elite);
    };

    useEffect(() => console.log(activeElite), [activeElite]);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            {loading ? (
                <Loading color={"text-slate-200"} />
            ) : error ? (
                <Error error={error} />
            ) : (
                <>
                    <div className="header w-full h-[25%]">
                        <CrownHeader activeElite={activeElite} />
                    </div>

                    <div className="body w-full h-[75%] flex flex-col lg:flex-row">
                        <CrownImage activeElite={activeElite} />
                        {/* <CrownDetails activeElite={activeElite} /> */}
                        <LockedDetails activeElite={activeElite}/>
                    </div>

                    <div className="footer w-full h-[50%]">
                        <CrownSelector
                            elites={elites}
                            handleSelect={handleSelect}
                            selectedElite={activeElite}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default CrownQuest;
