const name = "ARW 2023";

const Homepage = () => {

    const glowOuter = {
        boxShadow: "0px 0px 5px 2px rgb(107,33,168)",
    };
    const glowInner = {
        boxShadow: "0px 0px 5px 2px rgb(94,234,212)",
    };

    // maximum width of the title part
    const maxWidth = "800px"
    // number of pixels inset of the screen part from the title part
    const screenInset = "25px";

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            {/* TOP PART*/}


            <div className="flex justify-center w-full">
                <div className="block">

                    {/* Title part*/}
                    <div className={` rounded-t-2xl mx-3 lg:mx-auto border-4 border-purple-800 text-white max-w-[${maxWidth}] p-4 lg:p-6`}
                        style={{ ...glowOuter }}>

                        <div className="rounded-t-xl border-4 border-teal-300 text-center p-5" style={{ ...glowInner }}>
                            <span className="font-bit text-xl lg:text-4xl text-emerald-300" style={{
                                textShadow: "0px 0px 15px rgb(110,231,183)", //glow effect
                            }}>{name}</span>
                        </div>

                    </div>


                    {/* Trapezoid transition from title to carousel*/}
                    <div className={`mx-3 lg:mx-auto bg-purple-900 text-white max-w-[${maxWidth}] p-4`}
                        style={{
                            ...glowOuter,
                            clipPath: `polygon(0 0, 100% 0, calc(100% - ${screenInset}) 100%, ${screenInset} 100%)`
                        }}>
                    </div>

                    {/* Display */}
                    <div className="border-4 border-purple-800 text-white p-4 lg:p-6"
                        style={{
                            ...glowOuter,
                            marginLeft: `calc(0.75rem + ${screenInset})`,
                            marginRight: `calc(0.75rem + ${screenInset})`,
                            maxWidth: `calc(${maxWidth} - 2 * ${screenInset})`,

                        }}>

                        {/* Image carousel */}
                        <div className="rounded-xl border-4 border-teal-300 text-center carousel w-full  h-60 lg:h-96" style={{ ...glowInner }}>

                            {/* Temporary pictures (public domain) */}
                            <div id="item1" className="carousel-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Noli_Me_Tangere_Picture_1.jpg" />
                            </div>
                            <div id="item2" className="carousel-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Noli_Me_Tangere_Picture_4.jpg" />
                            </div>
                            <div id="item3" className="carousel-item">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Noli_Me_Tangere_Picture_10.jpg" />
                            </div>

                        </div>
                        <div className="flex justify-center w-full py-2 gap-2">
                            <a href="#item1" className="btn btn-xs">1</a>
                            <a href="#item2" className="btn btn-xs">2</a>
                            <a href="#item3" className="btn btn-xs">3</a>
                        </div>

                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default Homepage;
