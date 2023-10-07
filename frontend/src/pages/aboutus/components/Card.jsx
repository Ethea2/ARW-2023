import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card w-full bg-white shadow-xl">
                <figure>
                    <img src={props.imgURL} alt={props.name} />
                </figure>
                <div className="card-body text-center p-3">
                    <span className="font-bit text-[14px] md:text-2xl lg:text-xl">
                        {props.name}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Card;
