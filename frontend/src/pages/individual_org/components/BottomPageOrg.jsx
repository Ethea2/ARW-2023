const BottomPageOrg = ({ org }) => {
    return (
        <>
            <div className="bottom-page-org bg-[#F83F65] flex flex-col justify-center items-center">
                <div className="white-back bg-[#F6F5F5] pt-0 mt-0 md:w[80%] lg:w-[80%] xl:w-[85%] px-8 py-20 lg:px-20 xl:px-48">
                    <div className="org-info grid grid-cols-2 gap-10 content-start my-10 lg:my-20">
                        <section className="org-main-pub col-span-2 lg:col-span-1 rounded-lg text-center">
                            <img
                                src={org.mainURL}
                                alt="org-main-pub"
                                className="w-full object-contain rounded-lg border-2 border-[#242640]"
                            />
                        </section>
                        <div className="org-title-desc flex flex-col col-span-2 lg:col-span-1 xl:col-span-1 lg:ml-6 xl:ml-10">
                            <section className="org-title text-center lg:text-left">
                                <span className="text-4xl lg:text-4xl xl:text-5xl font-header font-bold text-[#F83F65]">
                                    {org.comp_name}
                                </span>
                            </section>
                            <section className="org-desc text-justify mt-5">
                                <span className="text-md xl:text-lg font-monda font-normal  text-[#242640]">
                                    {org.desc}
                                </span>
                            </section>
                            <section className="org-facebook-link flex flex-col justify-center pt-5">
                                <span className="text-lg xl:text-xl wrap break-words lg:break-normal font-monda text-red-500 font-bold hover:underline hover:text-red-500 text-center xl:text-left">
                                    <a
                                        href={org.fb_link}
                                        className="w-full"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {org.fb_link}
                                    </a>
                                </span>
                            </section>
                        </div>
                    </div>

                    <div className="vision-mission grid grid-cols-1 lg:grid-cols-2 content-start mt-14">
                        <section className="mission flex flex-col content-start lg:pr-10 pb-10">
                            <span className="text-3xl lg:text-3xl xl:text-4xl font-header text-center font-bold text-black mb-10">
                                Mission
                            </span>
                            <span className="text-md xl:text-lg font-monda font-normal text-black text-justify">
                                {org.mission}
                            </span>
                        </section>
                        <section className="vision flex flex-col lg:pl-10 pb-10">
                            <span className="text-3xl lg:text-3xl xl:text-4xl font-header text-center font-bold text-black mb-10">
                                Vision
                            </span>
                            <span className="text-md xl:text-lg font-monda font-normal text-black text-justify">
                                {org.vision}
                            </span>
                        </section>
                    </div>

                    <section className="org-membership-pub mx-5 text-center mt-10">
                        <img
                            src={org.memURL}
                            alt="membership-pub"
                            className="w-full object-contain rounded-lg border-2 border-[#242640]"
                        />
                        <a
                            href={org.regURL}
                            className="w-full"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <button className="btn btn-neutral mt-10 px-18 p-11 pt-5 font-monda text-white text-lg text-center h-center drop-shadow-md">
                                REGISTER
                            </button>
                        </a>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BottomPageOrg;
