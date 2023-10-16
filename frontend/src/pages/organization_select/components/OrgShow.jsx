import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import Top from "../../../assets/orgselect/Top.png";
import { useNavigate } from "react-router-dom";

const OrgShow = ({ org, error, initial }) => {
    const [noOrg, setNoOrg] = useState(true);
    const nav = useNavigate();
  
    useEffect(() => {
        if (org !== null) {
            setNoOrg(false);
        }
    }, [org]);

    const handleClick = () => {
        var org_name = org?.abbrv_name
        if (org_name === "DLSU-RCYC") {
            window.open("https://www.facebook.com/DLSRCY")
        } else if (org_name === "OCCS") {
            window.open("https://www.facebook.com/DLSUCareerServices")
        } else if (org_name === "VA") {
            window.open("https://www.facebook.com/viridisarcus")
        } else if (org_name === "ECES") {
            window.open("https://www.facebook.com/ECES.dlsu")
        } else if (org === null) {
            nav("/CSO");
        } 
        else {
            nav("/" + org?.abbrv_name);
        }
        
    };
    if (error) {
        return <Error error={error} />;
    }

    return (
        <div className="w-full h-full min-h-[503px] flex justify-center items-center p-2 bg-no-repeat bg-cover bg-top sm:bg-cover xl:bg-contain top">
            <div className="flex p-5 justify-center items-center w-[100%] h-[100%] ">
                <div className="p-2 h-full w-[80%] flex flex-col items-center justify-center sm:w-[70%] md:w-[70%] lg:w-[70%] xl:w-[50%] 2xl:w-[40%]">
                    <div className="mt-10 sm:w-[100%] xl:w-[90%] xl:mt-0">
                        <div className="bg-[#B60000] p-2 rounded-t-md flex justify-between sm:p-5">
                            <div>
                                <p
                                    className="rounded-t-md w-full px-1 text-white" // Changed text color to black
                                >
                                    {noOrg
                                        ? "CSO"
                                        : org.cluster}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-row bg-[#C6C6C6] shadow-2xl rounded-b-md md:flex-nowrap sm:w-[100%] items-center justify-center">
                            <div className="p-5 flex md:items-start justify-center sm:p-0">
                                <div className="w-44 carousel rounded-box sm:w-48 md:w-64">
                                    <div className="carousel-item w-full">
                                        <img
                                            src={noOrg ? "https://res.cloudinary.com/dayugisub/image/upload/v1696250843/cso/cso_logo1.png" : org.logoURL}
                                            className="w-full px-5 md:p-5 sm:w[50%]"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Use flex classes to center the inner div */}
                            <div className="flex items-center justify-center">
                                <div className="px-5 pb-5 xs:p-5 gap-5">
                                    <div className="flex flex-col mb-7 justify-center content-center text-center md:text-left">
                                        <div>
                                            <h1
                                                className="px-5 text-4xl md:pt-10"
                                            >
                                                {noOrg
                                                    ? "CSO"
                                                    : org.abbrv_name}
                                            </h1>

                                            <h1
                                                className="px-5 text-2xl md:text-xl pt-3"
                                            >
                                                {noOrg ? "Council of Student Organizations" : org.comp_name}
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-5">
                                        {noOrg ? (
                                            <button
                                            className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg bg-[#B60000]"
                                            onClick={handleClick}
                                        >
                                            LEARN MORE
                                        </button>
                                        ) : (
                                            <button
                                                className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg bg-[#B60000]"
                                                onClick={handleClick}
                                            >
                                                LEARN MORE
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrgShow;
