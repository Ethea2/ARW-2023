const Homepage = () => {
    return (
        <div className="w-full h-screen flex items-center flex-col justify-center bg-black">
            <div className="text-5xl text-emerald-300">ARW 2023</div>
            {/* Divider Line */}
            <hr className="border-t-2 border-emerald-300 w-16 my-4 items-center" />

            {/* Bottom Part WIP*/}

            <div className="flex flex-row text-emerald-300 bg-gray-700 my-3 px-5 py-5 items-center">
                {/* Left Main Row */}
                <div className="flex flex-wrap px-2 py-2">
                    {/* Main Column */}
                    <div className="flex flex-col">
                        {/* Group 1*/}
                        <div className="flex flex-row py-2 w-1/2 h-20">
                            <div className="flex flex-col px-2 place-self-stretch">
                                <div className=""> Crown Quest </div>
                                <a href="#" className="basis-1/4 bg-red-600 rounded-full w-5 h-16"> <div className="h-1 w-1"> </div></a>
                            </div>
                            <div className="flex flex-col px-2 ">
                                Cyber Clash
                                <a href="#" className="basis-1/4 bg-red-600 rounded-full w-5 h-16"> <div className="h-1 w-1"> </div> </a>
                            </div>
                        </div>
                         {/* Group 2*/}
                        <div className="flex flex-row py-2 w-1/2 h-20">
                            <div className="flex flex-col px-2">
                                <a href="#" className="basis-1/4 bg-red-600 rounded-full w-5 h-16"> <div className="h-1 w-1"> </div> </a>
                                FAQS
                            </div>
                            <div className="flex flex-col px-2">
                                <a href="#" className="basis-1/4 bg-red-600 rounded-full w-5 h-16"> <div className="h-1 w-1"> </div></a>
                                About
                            </div>
                            <div className="flex flex-col px-2">
                                <a href="#" className="basis-1/4 bg-red-600 rounded-full w-5 h-16"> <div className="h-1 w-1"> </div></a>
                                Orgs
                            </div>
                        </div>
                        
                    </div>
                </div>
                {/* Right Main Row */}
                <div className="flex flex-row flex-wrap px-2 py-2 h-9">
                    <a href="#" className="basis-1/4 bg-red-600 rounded-full w-1/2 px-2 mx-2"> <div className="h-1 w-1"> </div> </a>
                    <a href="#" className="basis-1/4 bg-red-600 rounded-full w-1/2 px-2 mx-2"> <div className="h-1 w-1"> </div> </a>
                </div>
            </div>

            {/* Divider Line */}
            <hr className="border-t-2 border-emerald-300 w-16 my-4 items-center" />

            {/* Sponsors */}
            <div className="text-4xl text-emerald-300">Sponsors</div>

        </div>
        
        
    );
};

export default Homepage;