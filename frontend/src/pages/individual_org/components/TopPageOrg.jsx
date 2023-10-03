import { Link } from "react-router-dom";

const TopPageOrg = ({ org }) => {
    return (
        <>
            <div className="top-page-org z-10 bg-#FF7D7D-500 w-full flex flex-col pt-24 pb-20 px-4 md:px-8 lg:px-48 xl:px-96 justify-center items-center shadow-2xl bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${org.bgURL})` }}>
                {org.videoURL !== "" && (
                    <section className="intro-video flex justify-center w-full aspect-video pt-4 lg:pt-0.5 mb-8">
                        <iframe
                            width="1920"
                            height="1080"
                            src={`https://www.youtube.com/embed/${org.videoURL}?controls=1&autoplay=1&mute=1`}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            className="rounded-lg h-auto w-full aspect-video drop-shadow-lg"
                        ></iframe>
                    </section>
                )}

                <div className="carousel w-full lg:py-7">
                    {org.imageURL.map((image, index) => (
                        <div
                            id={"item" + (index + 1)}
                            className="carousel-item w-full rounded-lg"
                        >
                            <img
                                src={image}
                                alt={"item-" + (index + 1)}
                                className="w-full h-full object-contain rounded-lg drop-shadow-lg"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex justify-center w-full pt-4 lg:pt-0.5 pb-4 gap-2">
                    {org.imageURL.map((image, index) => (
                        <a
                            href={"#item" + (index + 1)}
                            className="btn btn-sm md:btn-md font-monda btn-neutral"
                        >
                            {index + 1}
                        </a>
                    ))}
                </div>
                <section className="org-initials text-3xl lg:text-4xl xl:text-5xl font-header font-bold text-[#FF7D7D] mt-8 drop-shadow-md">
                    {org.abbrv_name}
                </section>
                <section className="org-bio text-lg lg:text-xl xl:text-2xl font-monda font-normal text-center text-[#FF7D7D] drop-shadow-md">
                    {org.tagline}
                </section>
                <section className="org-logo flex justify-center object-contain items-center w-[90%] py-3 lg:py-7">
                    <img
                        src={org.logoURL}
                        alt="org-logo"
                        className="w-1/4 object-contain rounded-lg"
                    />
                </section>
            </div>
        </>
    );
};

export default TopPageOrg;
