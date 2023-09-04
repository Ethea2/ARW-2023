const OrgSelector = ({ orgs, handleOrgSelect }) => {
    return (
        <div>
            <div className="w-full flex justify-center items-center">
                <h1 className="text-3xl font-bold">Select your organization</h1>
            </div>
            <div className="grid grid-cols-2">
                {orgs.map(org => (
                    <button className="btn btn-primary m-2" key={org.id} onClick={(e) => handleOrgSelect(e, org.abbrv_name)}>
                        {org.comp_name}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default OrgSelector