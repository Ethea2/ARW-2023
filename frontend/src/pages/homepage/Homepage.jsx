import { Link, useLocation, useNavigate } from "react-router-dom";
import "./homepage.css";
import { useEffect, useState } from "react";
const name = "ARW 2023";

/* Temporary pictures (public domain) */
const carousel = [
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/Noli_Me_Tangere_Picture_1.jpg",
        imageAlt: "Noli Me Tangere Picture 1",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/e/e3/Noli_Me_Tangere_Picture_4.jpg",
        imageAlt: "Noli Me Tangere Picture 4",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/c/c0/Noli_Me_Tangere_Picture_5.jpg",
        imageAlt: "Noli Me Tangere Picture 5",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Noli_Me_Tangere_Picture_6.jpg",
        imageAlt: "Noli Me Tangere Picture 6",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/4/48/Noli_Me_Tangere_Picture_7.jpg",
        imageAlt: "Noli Me Tangere Picture 7",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/f/fc/Noli_Me_Tangere_Picture_8.jpg",
        imageAlt: "Noli Me Tangere Picture 8",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/d/de/Noli_Me_Tangere_Picture_9.jpg",
        imageAlt: "Noli Me Tangere Picture 9",
    },
    {
        imageSrc:
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/Noli_Me_Tangere_Picture_10.jpg",
        imageAlt: "Noli Me Tangere Picture 10",
    },
];

const Homepage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const goToPreviousSlide = () => {
        if (activeSlide === 0) return setActiveSlide(carousel.length - 1);
        setActiveSlide(activeSlide - 1);
    };

    const goToNextSlide = () => {
        if (activeSlide === carousel.length - 1) return setActiveSlide(0);
        setActiveSlide(activeSlide + 1);
    };

    useEffect(() => {
        window.location.hash = `#photo-${activeSlide}`;
    });

    const glowOuter = {
        boxShadow: "0px 0px 50px 10px rgb(107,33,168)",
    };
    const glowInner = {
        boxShadow: "0px 0px 10px 6px rgb(94,234,212)",
    };

    // maximum width of the title part
    const maxWidth = "800px";
    // number of pixels inset of the screen part from the title part
    const screenInset = "25px";

    return (
        <>
            {/* Background */}
            <div
                className="blur-sm fixed top-0 left-0 right-0 -z-10 bottom-0"
                style={{
                    backgroundImage: `url(/countdown-bg.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
            <div className="w-full pt-[20vh] h-screen block items-center justify-center bg-black/50">
                {/* TOP PART*/}

                <div className="flex justify-center w-full">
                    <div className="block ">
                        {/* Title part*/}
                        <div
                            className={` rounded-t-2xl mx-3 lg:mx-auto border-4 border-purple-800 max-w-[${maxWidth}] p-4 lg:p-6 bg-black`}
                            style={{ ...glowOuter }}
                        >
                            <div
                                className="rounded-xl border-4 border-teal-300 text-center p-5 relative"
                                style={{
                                    ...glowInner,
                                    letterSpacing: "10px",
                                }}
                            >
                                <div
                                    className="glitch layers relative"
                                    data-name={name}
                                    style={{
                                        zIndex: 2,
                                    }}
                                >
                                    <span
                                        className="font-bit text-xl lg:text-4xl text-emerald-300"
                                        style={{
                                            textShadow:
                                                "0px 0px 15px rgb(110,231,183)", //glow effect
                                            filter: "drop-shadow(0 1px 2px rgb(94,234,212))",
                                        }}
                                    >
                                        {name}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Trapezoid transition from title to carousel*/}
                        <div
                            className={`mx-3 lg:mx-auto bg-purple-900 text-white max-w-[${maxWidth}] p-4`}
                            style={{
                                ...glowOuter,
                                clipPath: `polygon(0 0, 100% 0, calc(100% - ${screenInset}) 100%, ${screenInset} 100%)`,
                            }}
                        ></div>

                        {/* Display */}
                        <div
                            className="border-4 border-purple-800 text-white p-4 lg:p-6 bg-black"
                            style={{
                                ...glowOuter,
                                marginLeft: `calc(0.75rem + ${screenInset})`,
                                marginRight: `calc(0.75rem + ${screenInset})`,
                                maxWidth: `calc(${maxWidth} - 2 * ${screenInset})`,
                            }}
                        >
                            {/* Image carousel */}
                            <div
                                className="rounded-xl border-4 border-teal-300 text-center carousel w-full  h-60 lg:h-96 relative"
                                style={{ ...glowInner }}
                            >
                                <div
                                    className="rounded-xl text-center carousel w-full relative"
                                    style={{ ...glowInner }}
                                >
                                    {carousel.map((value, index) => (
                                        <div
                                            key={`photo-${index}`}
                                            className={`carousel-item ${
                                                index === activeSlide
                                                    ? "active"
                                                    : ""
                                            }`}
                                            id={`photo-${index}`}
                                        >
                                            <img
                                                src={value.imageSrc}
                                                alt={value.imageAlt}
                                                title={value.imageAlt}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Left navigation button inside the carousel */}
                                <button
                                    className="bg-black/50 btn btn-circle left-button absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl z-10"
                                    onClick={goToPreviousSlide}
                                >
                                    ❮
                                </button>

                                {/* Right navigation button inside the carousel */}
                                <button
                                    className="bg-black/50 right-button btn btn-circle absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl z-10"
                                    onClick={goToNextSlide}
                                >
                                    ❯
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-row text-emerald-300 bg-gray-700 my-3 px-5 py-5 items-center">
                            {/* Left Main Row */}
                            <div className="flex flex-wrap px-2 py-2 w-full justify-between">
                                {/* Main Column */}
                                <div className="flex flex-col">
                                    {/* Group 1*/}
                                    <div className="flex flex-row py-2 w-1/2 h-20">
                                        <div className="flex flex-col px-2 place-self-stretch">
                                            <div className="">
                                                {" "}
                                                Crown Quest{" "}
                                            </div>

                                            <Link to="/crownquest">
                                                <span class="video-game-button w-4 h-6"></span>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col px-2 ">
                                            Cyber Clash
                                            <Link to="/cyberclash">
                                                <span class="video-game-button w-4 h-6">
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    {/* Group 2*/}
                                    <div className="flex flex-row py-2 w-1/2 h-20">
                                        <div className="flex flex-col px-2">
                                        <Link to="/faqs"><span class="video-game-button w-4 h-6"></span></Link>
                                            FAQS
                                        </div>
                                        <div className="flex flex-col px-2">
                                            <Link to="/about"><span class="video-game-button w-4 h-6"></span></Link>
                                            About
                                        </div>
                                        <div className="flex flex-col px-2">
                                            <Link to="/orgselect"><span class="video-game-button w-4 h-6"></span></Link>
                                            Orgs
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Right Main Row */}
                            <div className="flex flex-row h-full px-2 py-2 ">
                                <span class="video-game-button w-4 h-6">A</span>

                                <span class="video-game-button w-4 h-6">B</span>
                                
                            </div>
                        </div>

                        {/* Divider Line */}
                        <hr className="border-t-2 border-emerald-300 w-16 my-4 items-center" />

                        {/* Sponsors */}
                        <div className="block text-4xl text-emerald-300">
                            Sponsors
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="border-t-2 border-emerald-300 w-16 my-4 items-center" />
            </div>
        </>
    );
};

export default Homepage;
