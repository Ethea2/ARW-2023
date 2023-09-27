import icon_map from "../../../assets/icon-map.png"

const OrgSelector = ({ orgs, clusters, handleOrgSelect, handleClusterSelect }) => { 
    return (
        <div className="p-2 h-full bg-[#FF4444] w-full flex flex-col items-center">
            <h1 className="text-xl font-bold text-center">Select your organization</h1>
            {/*Pokedex-Like Table*/}
            <div className="w-[80%] mb-6">
                <div className="bg-[#B60000] rounded-t-md flex py-2 px-4">
                    <img src={icon_map} alt="" className=" w-8 h-8" />
                </div>
                {/*Buttons Grid*/}
                <div className="grid grid-cols-2 bg-[#C6C6C6] rounded-b-md">
                    {/*Clusters*/}
                    <div className="flex flex-col border-r-[.4rem] border-white pt-4 px-4">
                        {
                            clusters?.map(cluster => (
                                <button className="btn btn-primary mb-2 text-[.6rem]" key={cluster._id} onClick={(e) => handleClusterSelect(e, cluster.name)}>
                                    {cluster.name}
                                </button>
                            ))
                        }
                    </div>
                    {/*Orgs*/}
                    <div className="flex flex-col pt-4 px-4">
                        {
                            orgs?.map(org => (
                                <button className="btn btn-primary mb-2 text-[.6rem]" key={org._id} onClick={(e) => handleOrgSelect(e, org.abbrv_name)}>
                                    {org.abbrv_name}
                                </button>
                            ))
                        }
                    </div>
            </div>

            </div>
        </div>
    )
}

export default OrgSelector