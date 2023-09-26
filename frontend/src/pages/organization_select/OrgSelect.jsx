import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import OrgSelector from "./components/OrgSelector"
import OrgShow from "./components/OrgShow"
import Loading from "../../components/loading/Loading"
import Error from "../../components/error/Error"

const OrgSelect = () => {
    const { data: orgs, loading, error } = useFetch("/api/orgs/")
    const { data: clusters } = useFetch("/api/clusters/")
    const [orgID, setOrgID] = useState(null)
    const [orgCluster, setOrgCluster] = useState(null)

    const handleOrgSelect = (event, id) => {
        event.preventDefault()
        setOrgID(id)
    }
    useEffect(() => {
        if (orgs) {
            console.log(orgs)
        }
    }, [orgs])
    const handleClusterSelect = (event, cluster) => {
        event.preventDefault()
        setOrgCluster(orgs.filter(org => org.cluster === cluster))
    }

    if (error) {
        return (
            <div className="h-screen w-full">
                <Error error={error} textSize="text-5xl" />
            </div>
        )
    }

    return (
        <div className="grid grid-flow-row w-full h-screen font-bit" style={{ gridTemplateRows: '1fr 1fr' }}>
            {orgs && <OrgShow orgID={orgID} />}
            {orgs && <OrgSelector orgs={orgCluster} clusters={clusters} handleOrgSelect={handleOrgSelect} handleClusterSelect={handleClusterSelect} />}
            {loading && <Loading />}
        </div>
    )
}

export default OrgSelect