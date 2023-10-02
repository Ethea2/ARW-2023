import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CrownDetails from "./components/CrownDetails";
import CrownHeader from "./components/CrownHeader";
import CrownImage from "./components/CrownImage";
import CrownSelector from "./components/CrownSelector";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

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
        <Loading color={'text-slate-200'}/>
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <div className="header w-full h-1/5">
            <CrownHeader activeElite={activeElite} />
          </div>

          <div className="body w-full h-3/5 flex flex-col lg:flex-row">
            <CrownImage activeElite={activeElite} />
            <CrownDetails activeElite={activeElite} />
          </div>

          {!activeElite && (
            <div className="text-2xl md:text-6xl text-[#FFD524] font-normal font-header text-header-shadow flex justify-center items-center">
              Select an elite!
            </div>
          )}
          <div className="footer w-full h-1/5">
            <CrownSelector elites={elites} handleSelect={handleSelect} />
          </div>
        </>
      )}
    </div>
  );
};

export default CrownQuest;
