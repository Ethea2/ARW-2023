const BottomPageOrg = ({ org }) => {
    return (
        <>
            <div className="bottom-page-org bg-white w-full lg:w-[95%] xl:w-[88%] min-h-full flex flex-col justify-center items-center px-8 py-20 lg:px-20 xl:px-48">
                <section className="org-main-pub bg-[#b92f2f] w-full lg:w-1/5 xl:w-2/5 rounded-xl text-center">
                    <img
                        src= {org.mainURL}
                        alt="org-main-pub"
                        className="w-full object-contain rounded-xl"
                    />
                </section>
                <section className="org-title text-center mt-10">
                    <span className="text-3xl lg:text-4xl xl:text-5xl font-header font-bold text-black">
                        {org.comp_name}
                    </span>
                </section>
                <section className="org-desc text-justify mt-14">
                    <span className="text-lg lg:text-xl xl:text-2xl font-monda font-normal text-black">
                        {org.desc}
                    </span>
                </section>
                <div className="vision-mission grid grid-cols-1 lg:grid-cols-2 content-start mt-14">
                    <section className="mission flex flex-col content-start lg:border-r-2 border-black lg:pr-10 pb-10">
                        <span className="text-2xl lg:text-3xl xl:text-4xl font-header text-center font-bold text-black mb-10">
                            Mission
                        </span>
                        <span className="text-lg lg:text-xl xl:text-2xl font-monda font-normal text-black text-justify">
                            {org.mission}
                        </span>
                    </section>
                    <section className="vision flex flex-col lg:pl-10 pb-10">
                        <span className="text-2xl lg:text-3xl xl:text-4xl font-header text-center font-bold text-black mb-10">
                            Vision
                        </span>
                        <span className="text-lg lg:text-xl xl:text-2xl font-monda font-normal text-black text-justify">
                            {org.vision}
                        </span>
                    </section>
                </div>
                <section className="org-facebook-link flex flex-col justify-center border-t-2 border-black items-center pt-10 w-9/12">
                    <span className="text-sm lg:text-lg xl:text-2xl font-monda text-black font-bold hover:underline hover:text-red-500">
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
                <section className="org-membership-pub bg-[#b92f2f] w-full xl:w-2/5 rounded-xl text-center mt-10">
                    <img
                        src={org.memURL}
                        alt="membership-pub"
                        className="w-full  object-contain rounded-xl"
                    />
                </section>
            </div>
        </>
    );
};

export default BottomPageOrg;
