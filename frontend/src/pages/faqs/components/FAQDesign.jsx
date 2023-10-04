import React from "react";
import P2Plus from "./../../../assets/FAQ/player2plus.svg";
import P1Plus from "./../../../assets/FAQ/player1plus.svg";
import Exclamation from "./../../../assets/FAQ/exclamationpt.svg";
import Pacman from "./../../../assets/FAQ/pacman.svg";
import QuestionMark from "./../../../assets/FAQ/questionmark.svg";

function FAQDesign() {
    return (
        <>
            {/* Question Mark */}
            <div className="fixed w-44 right-0 top-20 -mr-16 lg:right-1/3 -z-[1]">
                <img src={QuestionMark}></img>
            </div>

            {/* Blue Plus*/}
            <div className="fixed w-60 right-0 bottom-0 lg:right-1/3 2xl:bottom-24 -z-[1] scale-100 lg:scale-125 overflow-hidden">
                <img src={P2Plus}></img>
            </div>

            {/* Red Plus*/}
            <div className="fixed w-60 right-0 top-2/4 -mr-16 lg:left-3/4 -z-[1] scale-150 overflow-hidden">
                <img src={P1Plus}></img>
            </div>

            {/* Exclamation Points */}
            <div className="fixed w-24 lg:w-32 left-0 top-3/4 2xl:left-[20%] 2xl:top-2/4 -z-[1]">
                <img src={Exclamation}></img>
            </div>

            {/* Pacman */}
            <div className="fixed w-44 left-0 top-0 -z-[1] scale-125 lg:left-1/4 lg:top-[10%]">
                <img src={Pacman}></img>
            </div>
        </>
    );
}

export default FAQDesign;
