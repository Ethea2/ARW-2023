import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import OrgSelector from "./components/OrgSelector";
import OrgShow from "./components/OrgShow";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";

const OrgSelect = () => {
    const { data: orgs, loading, error } = useFetch("/api/orgs/");
    const { data: clusters } = useFetch("/api/clusters/");
    const [org, setOrg] = useState(null)
    const [orgCluster, setOrgCluster] = useState(null)
    useEffect(() => console.log(orgs), [orgs])

    const handleOrgSelect = (event, id) => {
        event.preventDefault();
        orgs.map((org) => {
            if (org._id === id) setOrg(org);
        });
    };
    const handleClusterSelect = (event, cluster) => {
        event.preventDefault();
        setOrgCluster(orgs.filter((org) => org.cluster === cluster));
    };

    if (error) {
        return (
            <div className="h-screen w-full">
                <Error error={error} textSize="text-5xl" />
            </div>
        ); 
    }

    return (
        <div className="grid grid-flow-row w-full min-h-screen font-bit bg-gradient-to-b from-purple-950 to-blue-900" style={{ gridTemplateRows: '1fr 1fr' }}>
            {orgs && <OrgShow org={org} initial={orgs[3]} error={error} />}
            {orgs && <OrgSelector orgCluster={orgCluster} clusters={clusters} handleOrgSelect={handleOrgSelect} handleClusterSelect={handleClusterSelect} orgs={orgs}/>}
            {loading && <Loading />}
        </div>
    );
};

export default OrgSelect;
