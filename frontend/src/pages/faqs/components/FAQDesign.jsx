import React from 'react'

function FAQDesign() {
  return (
    <>
        {/* Question Mark */}
        <div className = "fixed w-44 right-0 top-20" style = {{zIndex:"-1", marginRight:"-1rem"}}>
            <img src = "FAQ/questionmark.svg"></img>
        </div>

        {/* Blue Plus*/}
        <div className = "fixed w-60 right-0 bottom-0" 
            style = {{
                zIndex:"-1",  
                transform: "scale(1.1)",
                overflow:"hidden",
                padding:"0",
                }}>
            <img src = "FAQ/player2plus.svg" style={{display:"block"}}></img>
        </div>

        {/* Red Plus*/}
        <div className = "fixed w-60 right-0 top-2/4" 
            style = {{
                zIndex:"-1", 
                marginRight:"-4rem", 
                transform: "scale(1.4)",
                overflow:"hidden"
                }}>
            <img src = "FAQ/player1plus.svg"></img>
        </div>

        {/* Exclamation Points */}
        <div className = "fixed w-36 left-0 top-3/4" style = {{zIndex:"-1"}}>
            <img src = "FAQ/exclamationpt.svg"></img>
        </div>

        {/* Pacman */}
        <div className = "fixed w-44 left-0 top-0" style = {{zIndex:"-1", transform: "scale(1.2)"}}>
            <img src = "FAQ/pacman.svg"></img>
        </div>
    </>
  );
}

export default FAQDesign;
