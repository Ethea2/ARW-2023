import { Link, useLocation, useNavigate } from "react-router-dom";
import "./homepage.css";
import { useEffect, useState } from "react";
import routes from "../../components/routes";
import TranslateWrapper from "./components/TranslateWrapper";
import { LogoItemsBottom, LogoItemsTop } from "./components/LogoTest";
import HomepageCarousel from "./components/HomepageCarousel";

const carousel = HomepageCarousel;
const name = "ARW 2023";


const Homepage = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const goToPreviousSlide = () => {
        if (activeSlide === 0) return setActiveSlide(carousel.length - 1);
        setActiveSlide(activeSlide - 1);
        window.location.hash = `#photo-${activeSlide}`;
    };

    const goToNextSlide = () => {
        if (activeSlide === carousel.length - 1) return setActiveSlide(0);
        setActiveSlide(activeSlide + 1);
        window.location.hash = `#photo-${activeSlide}`;
    };

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
            <div className="w-full h-screen block items-center justify-center bg-black/50">
                {/* TOP PART*/}

                <div className="flex justify-center w-screen">
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
                                className="rounded-xl border-4 border-teal-300 text-center w-full h-60 lg:h-96 relative"
                                style={{ ...glowInner }}
                            >
                                <div
                                    className="rounded-xl text-center w-full carousel max-h-60 lg:max-h-96"
                                    style={{ ...glowInner }}
                                >
                                    {carousel.map((value, index) => (
                                        <div
                                            key={`photo-${index}`}
                                            className={`carousel-item overflow-hidden w-full ${index === activeSlide
                                                ? "active"
                                                : ""
                                                }`}
                                            id={`photo-${index}`}
                                        >
                                            <img
                                                src={value.imageSrc}
                                                alt={value.imageAlt}
                                                title={value.imageAlt}
                                                className="object-cover object-center w-full"
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

                        {/* Divider Line */}
                        <div className="w-full flex justify-center items-center">
                            <div
                                className="grid grid-flow-row md:grid-cols-3 gap-5 justify-center font-monda p-2 md:w-full w-[90%] border-4 border-purple-800 min-h-1/5 rounded-md bg-black"
                                style={{ ...glowOuter }}
                            >
                                {routes.map(
                                    (route, index) =>
                                        route.name && (
                                            <div className="flex justify-center items-center">
                                                <div className="group relative w-fit transition-transform duration-300 active:scale-95">
                                                    <Link to={route.path}>
                                                        <button className="relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-0.5 duration-300 group-hover:scale-110">
                                                            <span className="block rounded-md bg-slate-950 px-4 py-2 font-semibold text-slate-100 duration-300 group-hover:bg-slate-950/50 group-hover:text-slate-50 group-active:bg-slate-950/80">
                                                                {route.name}
                                                            </span>
                                                        </button>
                                                        <span className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-90 group-active:opacity-50" />
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                        {/* Sponsors */}

                        <div
                            className="glitch layers relative mt-3"
                            style={{
                                zIndex: 2,
                            }}
                        >
                            <span
                                className="font-bit text-xl w-full flex justify-center items-center lg:text-4xl text-emerald-300"
                                style={{
                                    textShadow: "0px 0px 15px rgb(110,231,183)", //glow effect
                                    filter: "drop-shadow(0 1px 2px rgb(94,234,212))",
                                }}
                            >
                                SPONSORS
                            </span>
                        </div>
                    </div>
                </div>
                {/* FIX SPONSORS */}
                <div className="flex w-full overflow-hidden">
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                    <TranslateWrapper>
                        <LogoItemsTop />
                    </TranslateWrapper>
                </div>
                <div className="flex overflow-hidden mt-4">
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                    <TranslateWrapper reverse>
                        <LogoItemsBottom />
                    </TranslateWrapper>
                </div>
            </div>
        </>
    );
};

export default Homepage;
