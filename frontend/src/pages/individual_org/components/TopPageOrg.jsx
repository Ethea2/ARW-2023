import { Link } from "react-router-dom";

const TopPageOrg = () => {
    return (
        <>
            <div className="top-page-org z-10 bg-#FF7D7D-500 w-full flex flex-col pt-24 pb-20 px-4 md:px-8 lg:px-48 xl:px-96 justify-center items-center shadow-2xl">
                {/*
                <section className="intro-video pt-0.5 lg:pt-3 pb-5 lg:pb-3">
                    <video className="rounded-lg" width="1920" height="1080" controls>
                        <source src="your-video.mp4" type="video/mp4" />
                    </video>
                </section>
                */}
                <div className="carousel w-full lg:py-7">
                    <div id="item1" className="carousel-item w-full">
                        <img
                            src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/334090620_881525203057263_2025812858826874813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHTAefJWJf6LsHCjb38UcAInIdZDS_D1MOch1kNL8PUw1Kqmlz-jokNpWkQU5qtSc02yi0lz8Lr7twBEhYygADt&_nc_ohc=b_BD66CLzSIAX91Pzur&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfB0kzkyd3WuSIZgfxpKKPiAMT6hcRZ4sk1XYIkqF5_D4g&oe=651B2C34"
                            className="w-full object-contain rounded-lg"
                            alt="item-1"
                        />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                            src="https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/371846294_600390922260300_7671836090671897973_n.png?_nc_cat=104&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGtXWHfsRh8CBeiIQXwbQO_XThe7b5mt2tdOF7tvma3axiHfCjjdhez8vzYpN9YCs4&_nc_ohc=wWPlajvLeC4AX-FJmGO&_nc_ht=scontent.fmnl33-2.fna&oh=00_AfCJutSTiaIZz7Ns_0CK5d8EZQiBegbIFOcyfJ5Koyaxjw&oe=651F910F"
                            className="w-full object-contain rounded-lg"
                            alt="item-2"
                        />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                            src="https://scontent.fmnl17-5.fna.fbcdn.net/v/t39.30808-6/334090620_881525203057263_2025812858826874813_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeHTAefJWJf6LsHCjb38UcAInIdZDS_D1MOch1kNL8PUw1Kqmlz-jokNpWkQU5qtSc02yi0lz8Lr7twBEhYygADt&_nc_ohc=b_BD66CLzSIAX91Pzur&_nc_ht=scontent.fmnl17-5.fna&oh=00_AfB0kzkyd3WuSIZgfxpKKPiAMT6hcRZ4sk1XYIkqF5_D4g&oe=651B2C34"
                            className="w-full object-contain rounded-lg"
                            alt="item-3"
                        />
                    </div>
                </div>
                <div className="flex justify-center w-full pt-4 lg:pt-0.5 pb-4 gap-2">
                    <a href="#item1" className="btn btn-sm md:btn-md font-monda btn-neutral">
                        1
                    </a>
                    <a href="#item2" className="btn btn-sm md:btn-md font-monda btn-neutral">
                        2
                    </a>
                    <a href="#item3" className="btn btn-sm md:btn-md font-monda btn-neutral">
                        3
                    </a>
                </div>
                <section className="org-initials text-3xl lg:text-4xl xl:text-5xl font-header font-bold text-black mt-8">
                    CSO
                </section>
                <section className="org-bio text-lg lg:text-xl xl:text-2xl font-monda font-normal text-black">
                    Always for service
                </section>
                <section className="org-logo flex justify-center items-center lg:w-[80%] py-3 lg:py-7">
                    <img
                        src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/327588310_854047155698952_8763889778503930565_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeHwvIyol0xidSvfHjmm63zmNNuTaXhFtS8025NpeEW1L6FeFgmzPj7J3WZZRzCZmJP8sP2xspboyN4J406OtOuv&_nc_ohc=74fQ0aH87MIAX_W3b0t&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfCki5Q-1EntllNOlOZYVvVsnjwILF7Fl1BOCuO_v6Pndw&oe=651BB043"
                        alt="org-logo"
                        className="w-1/4 object-contain rounded-full"
                    />
                </section>
            </div>
        </>
    );
};

export default TopPageOrg;
