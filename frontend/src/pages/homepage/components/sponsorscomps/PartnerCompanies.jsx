import React from "react";

//diamond
import anytimefitness from "../../../../assets/homepage/sponsors/partnercompanies/diamond/anytimefitness.png";
import biocostech from "../../../../assets/homepage/sponsors/partnercompanies/diamond/biocostech.png";
import dreambig from "../../../../assets/homepage/sponsors/partnercompanies/diamond/dreambig.png";
import motivoph from "../../../../assets/homepage/sponsors/partnercompanies/diamond/motivoph.png";
import papak from "../../../../assets/homepage/sponsors/partnercompanies/diamond/papak.png";

//plat
import cocacola from "../../../../assets/homepage/sponsors/partnercompanies/platinum/cocacola.png";
import vibelle from "../../../../assets/homepage/sponsors/partnercompanies/platinum/vibelle.png";

//gold
import akipopph from "../../../../assets/homepage/sponsors/partnercompanies/gold/akipopph.png";
import franchisemanila from "../../../../assets/homepage/sponsors/partnercompanies/gold/franchisemanila.png";
import laminaraviation from "../../../../assets/homepage/sponsors/partnercompanies/gold/laminaraviation.png";

//silver
import tencentart from "../../../../assets/homepage/sponsors/partnercompanies/silver/tencentart.png";

//bronze
import knivesbythebros from "../../../../assets/homepage/sponsors/partnercompanies/bronze/knivesbythebros.png";

const Bronze = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Bronze Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={knivesbythebros} className="" />
                </div>
            </div>
        </div>
    );
};

const Silver = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Silver Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={tencentart} className="" />
                </div>
            </div>
        </div>
    );
};

const Gold = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">Gold Partners</h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={akipopph} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={franchisemanila} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={laminaraviation} className="" />
                </div>
            </div>
        </div>
    );
};

const Platinum = () => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Platinum Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={cocacola} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={vibelle} className="" />
                </div>
            </div>
        </div>
    );
};

const Diamond = () => {
    return (
        <div className="w-[500px] py-6 px-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    Diamond Partners
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                <div className="w-1/3 h-1/3">
                    <img src={anytimefitness} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={biocostech} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={dreambig} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    <img src={motivoph} className="" />
                </div>
                <div className="w-1/3 h-1/3 ">
                    {" "}
                    <img src={papak} className="" />
                </div>
            </div>
        </div>
    );
};

export { Bronze, Silver, Gold, Platinum, Diamond };
