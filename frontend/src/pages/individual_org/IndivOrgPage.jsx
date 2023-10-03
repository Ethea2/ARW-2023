import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
import BottomPageOrg from "./components/BottomPageOrg";
import TopPageOrg from "./components/TopPageOrg";
import Loading from "../../components/loading/Loading";
import ErrorPage from "../errorpage/ErrorPage"

const IndivOrgPage = () => {
    const { orgname } = useParams();
    const { data: org, loading, error } = useFetch("/api/orgs/" + orgname);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            { !loading && org.error ?
            <ErrorPage />
                :
            (
                <>
                    {org && <TopPageOrg org={org} />}
                    {org && <BottomPageOrg org={org} />}
                    {loading && <Loading />}
                </>
            )}
        </div>
    );
    // This file will contain the logic that will get the data of the chosen org from "OrgSelect"
};

export default IndivOrgPage;
