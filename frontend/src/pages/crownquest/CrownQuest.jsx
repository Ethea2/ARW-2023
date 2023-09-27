import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import CrownDetails from "./components/CrownDetails";
import CrownHeader from "./components/CrownHeader";
import CrownImage from "./components/CrownImage";
import CrownSelector from "./components/CrownSelector";

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
      <div className="header w-full h-1/5 bg-gray-200">
        <CrownHeader activeElite={activeElite} />
      </div>

      <div className="body w-full h-3/5 bg-red-200 flex flex-col lg:flex-row">
        <CrownImage activeElite={activeElite} />
        <CrownDetails activeElite={activeElite} />
      </div>

      <div className="footer w-full h-1/5 bg-blue-200">
        <CrownSelector elites={elites} handleSelect={handleSelect} />
      </div>
    </div>
  );
};

export default CrownQuest;
