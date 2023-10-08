const Sponsor = ({ title, partners }) => {
    return (
        <div className="w-[500px] py-6 px-4 p-4 flex flex-col items-center justify-center gap-8 bg-[#EDE4FF]/40 rounded-lg">
            <div className="w-full p-4 rounded-lg bg-gradient-to-b from-[#40128B]/50 to-[#9336B4]/50">
                <h3 className="text-white font-bold text-xl">
                    {title}
                </h3>
            </div>
            <div className="w-[80%] flex gap-4 items-center justify-center">
                {
                    partners?.map((partner) => (
                        <div className="w-1/3 h-1/3">
                            <img src={partner} className=""/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Sponsor