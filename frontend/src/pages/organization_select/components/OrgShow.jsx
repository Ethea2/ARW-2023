import { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import Top from "../../../assets/orgselect/Top_NoScreen.svg"
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
        nav("/" + (noOrg ? initial?._id : org?._id));
    };
    if (error) {
        return <Error error={error} />;
    }

    return (
        <div className="w-full h-full flex justify-center items-center" style={{backgroundImage: `url(${Top})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className="mt-10 p-5 justify-center items-center">
                    {console.log(org)}
                    <div className="p-2 h-full w-full flex flex-col items-center">
                        <div className="w-[100%] mb-6">
                            <div className="bg-[#B60000] p-4 rounded-t-md flex justify-between">
                                <div>
                                    <p
                                        className="w-full rounded-t-md w-full  px-1 text-white" // Changed text color to black
                                    >
                                        {noOrg ? initial.cluster : org.cluster}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap flex-row bg-[#C6C6C6] rounded-b-md md:flex-nowrap items-start justify-center">
  <div className="p-5 gap-5 flex md:items-start justify-center">
    <div className="w-64 carousel rounded-box">
      <div className="carousel-item w-full">
        <img
          src={noOrg ? initial.logoURL : org.logoURL}
          className="w-full px-5 md:p-5"
          alt=""
        />
      </div>
    </div>
  </div>

  {/* Use flex classes to center the inner div */}
  <div className="flex items-center justify-center">

    <div className="p-5 gap-5">

      <div className="flex flex-col mb-7 justify-center content-center text-center md:text-left">
        <div>
            <h1 className="px-5 text-4xl md:pt-10 px-5 text-2xl" style={{ fontFamily: 'tomorrow', fontWeight: 'bold' }}>
            {noOrg ? initial.abbrv_name : org.abbrv_name}
            </h1>

            <h1 className="px-5 text-2xl md:text-xl pt-3 px-5" style={{ fontFamily: 'tomorrow' }}>
            {noOrg ? initial.comp_name : org.comp_name}
            </h1>

        </div>
      </div>


      <div className="flex flex-col gap-5">

      <button
        className="btn btn-xs rounded-full sm:btn-sm md:btn-md lg:btn-lg bg-[#B60000]"
        onClick={handleClick}
      >
        LEARN MORE
      </button>

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
