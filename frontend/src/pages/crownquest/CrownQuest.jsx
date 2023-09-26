import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import CrownDetails from "./components/CrownDetails"
import CrownHeader from "./components/CrownHeader"
import CrownImage from "./components/CrownImage"
import CrownSelector from "./components/CrownSelector"

const CrownQuest = () => {
    const {data: elites, loading, error} = useFetch('/api/crown/')
    const [activeElite, setActiveElite] = useState()

    const handleSelect = (e, elite) => {
        e.preventDefault()
        setActiveElite(elite)
    }
    
    useEffect(() => console.log(activeElite), [activeElite])

    return (
        <div className="bg-gradient-radial from-[#F87DA4] to-[#FF2955] w-full h-screen flex flex-col justify-center items-center">
            <CrownHeader activeElite={activeElite} />
            <CrownImage activeElite={activeElite} />
            <CrownDetails activeElite={activeElite} />
            <CrownSelector elites={elites} handleSelect={handleSelect}/>
        </div>
    )
}

export default CrownQuest