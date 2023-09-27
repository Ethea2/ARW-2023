import React from "react";

const CrownImage = ({ activeElite }) => {
    return (
        <div>
            {activeElite ? (
                <img src={activeElite} alt="Active Elite Crown" />
            ) : (
                <p>Select an Elite</p>
            )}
        </div>
    );
};

export default CrownImage;
