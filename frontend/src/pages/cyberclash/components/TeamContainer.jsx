import React from "react";
import { Link } from "react-router-dom";

export default function TeamContainer({ team, image }) {
    return (
        <div className="w-[45%] h-full md:flex md:flex-col md:items-center lg:w-[30%] bg-black/30 text-center rounded-lg text-white font-monda">
            <img src={image} className="bg-black/10 p-4 rounded-t-lg" />
            <Link to={`/${team}`} className="w-full cursor-pointer">
                <h3 className="p-2 bg-[#F87DA4]/50 rounded-b-lg">{team}</h3>
            </Link>
        </div>
    );
}
