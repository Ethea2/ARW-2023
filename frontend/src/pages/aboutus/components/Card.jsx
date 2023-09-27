import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card w-full bg-white shadow-xl">
        <figure>
          <img src={props.imgURL} alt={props.name} />
        </figure>
        <div className="card-body">
          <span>{props.name}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
