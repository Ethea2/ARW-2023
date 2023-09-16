import logo from "../../assets/bright-colored-logo.png"

const ErrorPage = () => {
    return (
        <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center md:gap-10">
            <img src={logo} className="z-10 w-1/2 drop-shadow-glow_green" />
            <div className="drop-shadow-glow_green text-emerald-400 text-4xl md:text-6xl font-bold">404 Page does not exist!</div>
        </div>
    )
}

export default ErrorPage