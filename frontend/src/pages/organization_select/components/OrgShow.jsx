import { useState, useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Loading from '../../../components/loading/Loading'
import Error from '../../../components/error/Error'
import { useNavigate } from 'react-router-dom'
import "../OrgSelect.css"

const OrgShow = ({ orgID }) => {
    const { data: org, loading, error } = useFetch(`/api/orgs/${orgID}`)
    const [noOrg, setNoOrg] = useState(true)
    const nav = useNavigate()

    useEffect(() => {
        if (orgID !== null) {
            setNoOrg(false)
        }
    }, [orgID])

    const handleClick = () => {
        nav('/' + org._id)
    }
    if (error) {
        return <Error error={error} />
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            {
                loading
                    ?
                    <Loading />
                    :
                    noOrg
                        ?
                        <div>No Org Selected</div>
                        :
                        <div onClick={handleClick} className='flex flex-col gap-5 justify-center items-center border-2 cursor-pointer'>
                            <p>ORGNAME: {org.comp_name}</p>
                            <p>DESCRIPTION: {org.desc}</p>
                        </div>
            }
        </div>
    )
}

export default OrgShow