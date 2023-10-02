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
                <div className="mt-10 p-5 border border-black">
                    <div
                        className="flex flex-col gap-5 mt-10 bg-[#C6C6C6] justify-center items-center border border-black rounded-md w-[100%] h-[100%]"
                    >
                        <div className="bg-[#B60000] p-2 rounded-t-md justify-between">
                            <div className=" flex items-start px-2 w-[80%] md:w-[40%]">
                                <p
                                    className="w-full rounded-t-md py-1 text-white" // Changed text color to black
                                >
                                    ENGAGE
                                </p>
                            </div>
                        </div>

                        {console.log(org)}
                        <div className="w-64 carousel rounded-box">
                            <div className="carousel-item w-full">
                                <img
                                    src={org.logoURL}
                                    className="w-full"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 border border-black ">
                            <h1 className="text-2xl">{org.abbrv_name}</h1>
                        </div>

                        <div className="flex flex-col gap-5 border border-black ">
                            <p className="text-sm">{org.comp_name}</p>
                        </div>

                        <div className="flex flex-col border border-black ">
                            <p className="px-5 text-xs">{org.desc}</p>
                        </div>


                        <button className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg mb-5 bg-[#B60000]" onClick={handleClick}>LEARN MORE</button>


                    </div>
                </div>
            )}
        </div>
    );
};

export default OrgShow;
