import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import { useNavigate } from "react-router-dom";

const OrgShow = ({ org, error }) => {
    const [noOrg, setNoOrg] = useState(true);
    const nav = useNavigate();

    useEffect(() => {
        if (org !== null) {
            setNoOrg(false);
        }
    }, [org]);

    const handleClick = () => {
        nav("/" + org?._id);
    };
    if (error) {
        return <Error error={error} />;
    }

    return (
        <div className="w-full h-full flex justify-center items-center">
            {noOrg ? (
                <div>No Org Selected</div>
            ) : (
                <div className="mt-10 p-5 border justify-center items-center  border-black">



<div className="p-2 h-full w-full flex flex-col items-center">
            <div className="w-[80%] mb-6">
                <div className="bg-[#B60000] p-2 rounded-t-md flex justify-between">
                    <div>
                        <p
                        className="w-full rounded-t-md w-full py-1 text-white" // Changed text color to black
                        >
                            ENGAGE
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap bg-[#C6C6C6] rounded-b-md md:flex-nowrap">

                    <div>
                        <div className="w-64 carousel rounded-box">
                            <div className="carousel-item w-full">
                                <img
                                    src={org.logoURL}
                                    className="w-full p-5 "
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                        
                        <div className="gap-5 p-5">

                        <div className="flex flex-col border border-black ">
                            <h1 className="text-2xl">{org.abbrv_name}</h1>
                        </div>

                        <div className="flex flex-col gap-5 border border-black ">
                            <p className="text-sm">{org.comp_name}</p>
                        </div>

                        <div className="flex flex-col border border-black ">
                            <p className="px-5 text-xs">{org.desc}</p>
                        </div>


                        <button className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg mb-5 bg-[#B60000]">LEARN MORE</button>


                        
                        </div>


                        




                </div>

            </div>


        </div>                    
                </div>
            )}
        </div>
    );
};

export default OrgShow;
