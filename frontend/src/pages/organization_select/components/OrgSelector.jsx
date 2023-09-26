import "../OrgSelect.css"

const OrgSelector = ({ orgs, clusters, handleOrgSelect, handleClusterSelect }) => {
    return (
        <div className="p-2 h-full">
            <div className="w-full flex justify-center items-center">
                <h1 className="text-3xl font-bold">Select your organization</h1>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    {
                        clusters?.map(cluster => (
                            <button className="btn btn-primary m-2" key={cluster._id} onClick={(e) => handleClusterSelect(e, cluster.name)}>
                                {cluster.name}
                            </button>
                        ))
                    }
                </div>
                <div className="flex flex-col">
                    {
                        orgs?.map(org => (
                            <button className="btn btn-primary m-2" key={org._id} onClick={(e) => handleOrgSelect(e, org.abbrv_name)}>
                                {org.abbrv_name}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OrgSelector