import React from "react";

//diamond
import anytimefitness from "../../../assets/homepage/sponsors/partnercompanies/diamond/anytimefitness.png";
import biocostech from "../../../assets/homepage/sponsors/partnercompanies/diamond/biocostech.png";
import dreambig from "../../../assets/homepage/sponsors/partnercompanies/diamond/dreambig.png";
import motivoph from "../../../assets/homepage/sponsors/partnercompanies/diamond/motivoph.png";
import papak from "../../../assets/homepage/sponsors/partnercompanies/diamond/papak.png";

//plat
import cocacola from "../../../assets/homepage/sponsors/partnercompanies/platinum/cocacola.png";
import vibelle from "../../../assets/homepage/sponsors/partnercompanies/platinum/vibelle.png";

//gold
import akipopph from "../../../assets/homepage/sponsors/partnercompanies/gold/akipopph.png";
import franchisemanila from "../../../assets/homepage/sponsors/partnercompanies/gold/franchisemanila.png";
import laminaraviation from "../../../assets/homepage/sponsors/partnercompanies/gold/laminaraviation.png";

//silver
import tencentart from "../../../assets/homepage/sponsors/partnercompanies/silver/tencentart.png";

//bronze
import knivesbythebros from "../../../assets/homepage/sponsors/partnercompanies/bronze/knivesbythebros.png";

const Bronze = () => {
    return <div>Bronze</div>;
};

const Silver = () => {
    return <div>Silver</div>;
};

const Gold = () => {
    return <div>Gold</div>;
};

const Platinum = () => {
    return <div>Platinum</div>;
};

const Diamond = () => {
    return (
        <div className="w-[80%] p-4 flex flex-col items-center justify-center gap-4 bg-[#97FEED]/40 rounded-lg">
            <div>
                <h3 className="text-white font-bold text-xl">
                    Diamond Partners
                </h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                <img
                    src={anytimefitness}
                    className="w-28 h-20 p-4"
                    alt="Anytime Fitness"
                />
                <img
                    src={biocostech}
                    className="w-28 h-20 p-4"
                    alt="Biocostech"
                />
                <img src={dreambig} className="w-28 h-20 p-4" alt="Dream Big" />
                <img src={motivoph} className="w-28 h-20 p-4" alt="Motivo PH" />
                <img src={papak} className="w-28 h-20 p-4" alt="Papak" />
            </div>
        </div>
    );
};

export { Bronze, Silver, Gold, Platinum, Diamond };
