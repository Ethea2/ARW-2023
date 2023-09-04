import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import OrgSelector from "./components/OrgSelector"
import OrgShow from "./components/OrgShow"

const OrgSelect = () => {
    const { data: orgs, loading, error } = useFetch("http://localhost:4000/api/orgs/")
    const { data: clusters } = useFetch("http://localhost:4000/api/clusters/")
    const [orgID, setOrgID] = useState(null)
    const [orgCluster, setOrgCluster] = useState(null)

    const handleOrgSelect = (event, id) => { 
        event.preventDefault()
        setOrgID(id)
    }

    const handleClusterSelect = (event, cluster) => {
        event.preventDefault()
        setOrgCluster(orgs.filter(org => org.cluster === cluster))
    }

    return (
        <div className="grid grid-flow-row w-full h-screen font-bit"  style={{gridTemplateRows: '1fr 1fr'}}>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {orgs && <OrgShow orgID={orgID} />}
            {orgs && <OrgSelector orgs={orgCluster} clusters={clusters} handleOrgSelect={handleOrgSelect} handleClusterSelect={handleClusterSelect}/>}
        </div>
    )
}

export default OrgSelect