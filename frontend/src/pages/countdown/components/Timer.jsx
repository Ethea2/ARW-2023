import { motion, useMotionValue, useTransform } from "framer-motion";

const Timer = ({ date }) => {
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
        <motion.div
            id="timer-container"
            className="grid md:grid lg:grid-flow-col lg:gap-10 justify-center items-center font-bit auto-cols-max w-full h-full"
            onMouseMove={handleMouse}
            style={{
                x: rotateX,
                y: rotateY,
                scale: scale,
            }}
        >
            {
                Object.keys(date).map((key, index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <span className="countdown text-emerald-400 drop-shadow-glow text-7xl md:text-8xl lg:text-9xl">
                                <span style={{ "--value": date[key] }}></span>
                            </span>
                            <p className="text-emerald-400 z-10">{key.toUpperCase()}</p>
                        </div>
                    )
                })
            }
            <p className="text-emerald-400 drop-shadow-glow">DAYS TIL ARW</p>
        </motion.div>
    )
}

export default Timer