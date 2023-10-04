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
                                <span className="text-md xl:text-lg font-monda font-normal text-[#242640]">
                                    {org.desc}
                                </span>
                            </section>
                            <section className="org-facebook-link flex flex-col ml-auto justify-center pt-5 xl:pt-10">
                                <a
                                    href={org.fb_link}
                                    className="w-full"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="#F83F65"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                        />
                                    </svg>
                                </a>
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

                    <section className="org-membership-pub mx-5 text-center flex flex-col  items-center mt-10">
                        <img
                            src={org.memURL}
                            alt="membership-pub"
                            className="w-full object-contain rounded-lg border-2 border-[#242640] object-scale-down lg:h-[60%] lg:w-[60%] "
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
