import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import BottomPageOrg from "./components/BottomPageOrg"
import TopPageOrg from "./components/TopPageOrg"
import { useEffect } from "react";

const IndivOrgPage = () => {
    const { data: org } = useFetch("");
    const { orgId } = useParams();
    console.log(orgId);
    
    useEffect(() => console.log(org), [org])

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            {/* <span className="font-normal font-bit text-7xl">Indiv Org Test</span> */}
            <TopPageOrg />
            <BottomPageOrg />
        </div>
    );
    // This file will contain the logic that will get the data of the chosen org from "OrgSelect"
};

export default IndivOrgPage;
