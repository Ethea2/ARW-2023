import React from "react";
import VSContainer from "./VSContainer";

const GameContainer = ({ game }) => {
    return (
        <div className="border-2 border-primary">
            GAME
            <VSContainer />
            <VSContainer />
        </div>
    );
};

export default GameContainer;