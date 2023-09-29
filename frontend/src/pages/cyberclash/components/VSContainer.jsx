import React from "react";

const VSContainer = ({ team1, team2 }) => {
    const containerStyle = {
        display: "flex",
        alignItems: "center", 
        justifyContent: "center", 
        height: "100%",
    };

    const vsStyle = {
        fontSize: "25px", 
        color: "#FFD524",     
        fontWeight: "normal",
        fontFamily: "Bungee, sans-serif",
        WebkitTextStroke: "1.5px black", 
        textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)",
    };

    const teamStyle = {
        backgroundColor: "rgba(217, 217, 217)", 
        width:"90px",
        padding: "0.5rem 1rem", 
        borderRadius: "5px", 
        margin: "0 10px", 
        fontFamily: "Bungee, sans-serif",
        textAlign: "center", 
        
    };

    return (
        <div className style={containerStyle}>
            <span style={teamStyle}>{team1.org}</span>
            <span style={vsStyle}>VS</span>
            <span style={teamStyle}>{team2.org}</span>
        </div>
    );
}

export default VSContainer;
