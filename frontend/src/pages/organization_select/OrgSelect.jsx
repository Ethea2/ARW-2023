import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import OrgSelector from "./components/OrgSelector"
import OrgShow from "./components/OrgShow"

const OrgSelect = () => {
    const { data: orgs, loading, error } = useFetch("http://localhost:4000/api/orgs/")
    const [orgID, setOrgID] = useState(null)

    const handleOrgSelect = (event, id) => { 
        event.preventDefault()
        setOrgID(id)
    }

    return (
        <div className="grid grid-flow-row w-full h-screen font-bit">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {orgs && <OrgShow orgID={orgID} />}
            {orgs && <OrgSelector orgs={orgs} handleOrgSelect={handleOrgSelect} />}
        </div>
    )
}

export default OrgSelect