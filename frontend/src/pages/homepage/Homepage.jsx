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
        boxShadow: "0px 0px 5px 2px rgb(107,33,168)",
    };
    const glowInner = {
        boxShadow: "0px 0px 5px 2px rgb(94,234,212)",
    };

    // maximum width of the title part
    const maxWidth = "800px";
    // number of pixels inset of the screen part from the title part
    const screenInset = "25px";

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black">
            {/* TOP PART*/}

            <div className="flex justify-center w-full">
                <div className="block">
                    {/* Title part*/}
                    <div
                        className={` rounded-t-2xl mx-3 lg:mx-auto border-4 border-purple-800 max-w-[${maxWidth}] p-4 lg:p-6`}
                        style={{ ...glowOuter }}
                    >
                        <div
                            className="rounded-t-xl border-4 border-teal-300 text-center p-5 relative"
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
                        className="border-4 border-purple-800 text-white p-4 lg:p-6"
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
                                className="rounded-xl border-4 border-teal-300 text-center carousel w-full h-60 lg:h-96 relative"
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
                </div>
            </div>
        </div>
    );
};

export default Homepage;
