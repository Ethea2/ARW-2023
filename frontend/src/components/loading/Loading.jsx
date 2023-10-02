const Loading = ({ color }) => {
    return (
        <div  className="absolute flex justify-center items-center w-full h-full drop-shadow-glow_green">
            <div className={`loading loading-bars w-1/6 ${color ? color : 'text-emerald-400'}`}></div>
        </div>
    );
};

export default Loading;
