import logo from "../../assets/bright-colored-logo.png"

const ErrorPage = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center md:gap-10"
            style={{
                background: "linear-gradient(to bottom, #451F4D, #8E5FD5)",
            }}>
            <img src={logo} className="z-10 w-1/2 drop-shadow-glow_green" />
            <div className="drop-shadow-glow_green text-emerald-400 text-2xl md:text-5xl lg:text-7xl font-bold">404 Page does not exist!</div>
        </div>
    )
}

export default ErrorPage