import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import BottomPageOrg from "./components/BottomPageOrg"

const IndivOrgPage = () => {
    const {data: org} = useFetch('')
    const { orgId } = useParams()
    console.log(orgId)
    return(
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <span className="font-normal font-bit text-7xl">Indiv Org Test</span>
        </div>
    )
    // This file will contain the logic that will get the data of the chosen org from "OrgSelect"
}

export default IndivOrgPage