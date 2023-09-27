import { useEffect } from "react";
import { useState } from "react";
import Timer from "./components/Timer";
const Countdown = () => {
    //date counters
    const [date, setDate] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const TARGET_DATE = new Date("9 October 2023");
    const [sevenDaysLeft, setSevenDaysLeft] = useState();

    const checkIfSevenDaysLeft = () => {
        const currentDate = new Date();
        const totalSeconds = Math.max((TARGET_DATE - currentDate) / 1000, 0);
        const daysLeft = Math.floor(totalSeconds / 3600 / 24);
        return daysLeft <= 7;
    };

    useEffect(() => {
        const startCountdown = () => {
            const currentDate = new Date();
            const totalSeconds = Math.max(
                (TARGET_DATE - currentDate) / 1000,
                0
            );

            const updatedDate = {
                days: Math.floor(totalSeconds / 3600 / 24),
                hours: Math.floor(totalSeconds / 3600) % 24,
                minutes: Math.floor(totalSeconds / 60) % 60,
                seconds: Math.floor(totalSeconds) % 60,
            };
            setSevenDaysLeft(checkIfSevenDaysLeft());
            setDate(updatedDate);
        };

        const interval = setInterval(startCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    //animation

    return (
        <div className="w-full h-screen overflow-hidden relative grid place-items-center">
            <div
                id="background"
                className="absolute inset-0 z-0 blur-sm"
                style={{
                    backgroundImage: `url(/countdown-bg.jpg)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                }}
            ></div>
            <Timer date={date} sevenDaysLeft={sevenDaysLeft} />
        </div>
    );
};

export default Countdown;
