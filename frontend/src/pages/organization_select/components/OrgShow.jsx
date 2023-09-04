import { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
const OrgShow = ({ orgID }) => {
    const { data: org, loading, error } = useFetch(`http://localhost:4000/api/orgs/${orgID}`)
    const [noOrg, setNoOrg] = useState(true)

    useEffect(() => {
        if (orgID !== null) {
            setNoOrg(false)
        }
    }, [orgID])
    return (
        <div className="w-full h-full flex justify-center items-center">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {
                noOrg ?
                    <div>No Org Selected</div>
                    :
                    <div className='flex flex-col gap-5 justify-center items-center'>
                        <p>ORGNAME: {org.comp_name}</p>
                        <p>DESCRIPTION: {org.desc}</p>
                    </div>
            }
        </div>
    )
}

export default OrgShow