import maps_per_day from "./components/maps"
import formatDate from "../../utils/dateFuncs"

const Maps = () => {
    const dateExists = maps_per_day.hasOwnProperty(formatDate(new Date()))
    return (
        <>
            <div
                className="blur-sm fixed top-0 left-0 right-0 -z-10 bottom-0"
                style={{
                    backgroundImage: `url(/countdown-bg.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            />
            <div className="min-h-screen w-full flex flex-col justify-start items-center font-monda bg-black/80">
                <span
                    className="font-bit text-5xl lg:text-6xl text-center text-purple-300 m-20"
                    style={{
                        textShadow: "0px 0px 20px #F11A7B", // Thicker magenta glow effect
                        filter: "drop-shadow(0 2px 4px #F11A7B)", // Thicker magenta drop shadow
                    }}>
                    ARW BOOTH MAP
                </span>
                <div className="w-full md:w-2/3 flex flex-col">
                    <span className="font-monda font-bold text-xl lg:text-3xl text-center md:text-left text-white bg-primary/50 p-4 mb-2 rounded-lg md:w-fit mx-4">
                        {
                            dateExists
                                ?
                                (Object.keys(maps_per_day).filter((day) => formatDate(new Date()) === day))
                                :
                                "ARW HAS NOT STARTED YET"

                        }
                    </span>
                    {
                        dateExists
                            ?
                            maps_per_day[formatDate(new Date())]
                                ?.map((image) => (
                                    <img src={image} className="object-fill mx-4 mb-2 rounded-lg" />
                                ))

                            :
                            ""
                    }
                </div>
            </div>
        </>
    )
}

export default Maps