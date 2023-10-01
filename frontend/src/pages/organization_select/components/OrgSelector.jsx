import icon_map from "../../../assets/icon-map.png";
import { useEffect, useState } from "react";

const OrgSelector = ({
  orgCluster,
  clusters,
  handleOrgSelect,
  handleClusterSelect,
  orgs,
}) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(null);

  const handleCluster = (e, clustername) => {
    e.preventDefault();
    setSearch("");
    setFiltered(null);
    handleClusterSelect(e, clustername);
  };

  useEffect(() => {
    setFiltered(
      orgs.filter((org) => {
        if (search === "") {
          return null;
        }
        return (
          org.comp_name.toLowerCase().includes(search.toLowerCase()) ||
          org.abbrv_name.toLowerCase().includes(search.toLowerCase())
        );
      })
    );
  }, [search]);

  return (
    <div className="p-2 h-full bg-[#FF4444] w-full flex flex-col items-center">
      <h1 className="text-xl font-bold text-center">
        Select your organization
      </h1>
      {/*Pokedex-Like Table*/}
      <div className="w-[80%] mb-6">
        <div className="bg-[#B60000] rounded-t-md flex py-2 px-4 justify-between    ">
          <img src={icon_map} alt="" className=" w-8 h-8" />
          <div>
            {/* <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" /> */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-md px-4 py-1 outline-none focus:ring focus:border-blue-300 text-black" // Changed text color to black
              placeholder="Search..."
            />
          </div>
        </div>
        {/*Buttons Grid*/}
        <div className="grid grid-cols-2 bg-[#C6C6C6] rounded-b-md">
          {/*Clusters*/}
          <div className="flex flex-col border-r-[.4rem] border-white pt-4 px-4">
            {clusters?.map((cluster) => (
              <button
                className="btn btn-primary mb-2 text-[.6rem]"
                key={cluster._id}
                onClick={(e) => handleCluster(e, cluster.name)}
              >
                {cluster.name}
              </button>
            ))}
          </div>
          {/*Orgs*/}
          <div className="flex flex-col pt-4 px-4">
            {filtered
              ? filtered.map((org) => (
                  <button
                    className="btn btn-primary mb-2 text-[.6rem]"
                    key={org._id}
                    onClick={(e) => handleOrgSelect(e, org._id)}
                  >
                    {org.abbrv_name}
                  </button>
                ))
              : orgCluster?.map((org) => (
                  <button
                    className="btn btn-primary mb-2 text-[.6rem]"
                    key={org._id}
                    onClick={(e) => handleOrgSelect(e, org._id)}
                  >
                    {org.abbrv_name}
                  </button>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgSelector;
