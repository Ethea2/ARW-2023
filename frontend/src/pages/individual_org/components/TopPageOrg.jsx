import { Link } from "react-router-dom";

const TopPageOrg = ({ org }) => {

    return (
        <>
            <div className="top-page-org z-10 bg-#FF7D7D-500 w-full flex flex-col pt-24 pb-20 px-4 md:px-8 lg:px-48 xl:px-96 justify-center items-center shadow-2xl">
                
                {/* <section className="intro-video pt-0.5 lg:pt-3 pb-5 lg:pb-3">
                    <video className="rounded-lg" width="1920" height="1080" controls>
                        <source src={org.videoURL} type="video/mp4" />
                    </video>
                </section> */}
               
                <div className="carousel w-full lg:py-7">
                    {
                        org.imageURL.map((image, index) => (
                            <div id= {"item" + (index + 1)} className="carousel-item w-full rounded-lg">
                                <img
                                    src={image}
                                    alt= {"item-" + (index + 1)}
                                    className="w-full h-full object-contain rounded-lg"
                                />
                                
                            </div>
                        ))
                    }

                </div>
                <div className="flex justify-center w-full pt-4 lg:pt-0.5 pb-4 gap-2">
                    {
                        org.imageURL.map((image, index) => (
                            <a href= {"#item" + (index + 1)} className="btn btn-sm md:btn-md font-monda btn-neutral">{index + 1}</a>
                        ))
                    }
                </div>
                <section className="org-initials text-3xl lg:text-4xl xl:text-5xl font-header font-bold text-black mt-8">
                    { org.abbrv_name }
                </section>
                <section className="org-bio text-lg lg:text-xl xl:text-2xl font-monda font-normal text-center text-black">
                    { org.tagline }
                </section>
                <section className="org-logo flex justify-center items-center lg:w-[80%] py-3 lg:py-7">
                    <img
                        src={org.logoURL}
                        alt="org-logo"
                        className="w-1/4 object-contain rounded-full"
                    />
                </section>
            </div>
        </>
    );
};

export default TopPageOrg;
