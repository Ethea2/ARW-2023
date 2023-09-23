import CrownDetails from "./components/CrownDetails"
import CrownHeader from "./components/CrownHeader"
import CrownImage from "./components/CrownImage"
import CrownSelector from "./components/CrownSelector"

const CrownQuest = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <CrownHeader />
            <CrownImage />
            <CrownDetails />
            <CrownSelector />
        </div>
    )
}

export default CrownQuest