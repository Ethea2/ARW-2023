import React from "react";

// Official
import ggfm from "../../../../assets/homepage/sponsors/mediapartners/ggfm.png";

// Primary
import you from "../../../../assets/homepage/sponsors/mediapartners/you.jpg";

// Internal
import app from "../../../../assets/homepage/sponsors/mediapartners/app.png";
import tls from "../../../../assets/homepage/sponsors/mediapartners/tls.png";

// major
import tomcat from "../../../../assets/homepage/sponsors/mediapartners/tomcat.png";

const Official = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Official Media Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={ggfm} className="" />
                </div>
            </div>
        </div>
    );
};

const Primary = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Primary Media Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={you} className="" />
                </div>
            </div>
        </div>
    );
};

const Major = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Major Media Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={tomcat} className="" />
                </div>
            </div>
        </div>
    );
};

const Internal = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Internal Media Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={tls} className="" />
                </div>
                <div className="w-1/3 h-1/3">
                    <img src={app} className="" />
                </div>
            </div>
        </div>
    );
};

export { Official, Primary, Major, Internal };
