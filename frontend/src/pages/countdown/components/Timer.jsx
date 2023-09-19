import { motion, useMotionValue, useTransform } from "framer-motion";

const Timer = ({ date, sevenDaysLeft }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [0, window.innerHeight], [-10, 10]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-10, 10]);
    const scale = useTransform(x, [0, window.innerWidth], [0.95, 1.05]);

    function handleMouse(event) {
        x.set(event.clientX);
        y.set(event.clientY);
    }

    return (
        <motion.div className="w-full h-screen m-auto sm:flex sm:justify-center sm:items-center"
            onMouseMove={handleMouse}
            style={{
                x: rotateX,
                y: rotateY,
                scale: scale,
            }}>
            <div className={`sm:flex sm:flex-col gap-20 justify-center items-center w-9/12 ${sevenDaysLeft ? 'drop-shadow-glow_red text-red-700' : 'drop-shadow-glow_green text-emerald-400'}`}>
                <div id="timer-container" className="flex flex-col md:flex-row md:flex justify-center items-center font-bit auto-cols-max w-full h-full z-20">
                    {
                        Object.keys(date).map((key, index) => {
                            return (
                                <div key={index} className="sm:flex sm:flex-col w-1/2 lg:w-fit lg:mx-10">
                                    <span className="countdown  text-7xl md:text-8xl lg:text-9xl">
                                        <span style={{ "--value": date[key] }}></span>
                                    </span>
                                    <p className="z-10 mb-4 md:mb-0">{key.toUpperCase()}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <p className="font-bit text-2xl">UNTIL ANNUAL RECRUITMENT WEEK 2023</p>
            </div>
        </motion.div>
    )
}

export default Timer