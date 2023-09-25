
const BottomPageOrg = () => {
    
    return (
        <>
            <div className="bottom-page-org bg-white w-[90%] min-h-full flex flex-col justify-center items-center px-48 py-20">
                <section className="org-main-pub bg-[#b92f2f] w-72 h-72 rounded-xl text-center mt-48">
                    <img src="https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-6/369938231_600389268927132_1325328361045894932_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFym-VLQqXK1JNHK5qdicV4yn-nJgZrX4vKf6cmBmtfi_TSd59RYa-7nIjn74jFJP8&_nc_ohc=t-MGf4TZH6MAX-SXDZ5&_nc_ht=scontent.fmnl33-4.fna&oh=00_AfDq38Gtp0t_1FTnyX0Du5-zLEI7IRYFxOjWJeo2eRHYXg&oe=65176822" alt="" className="w-full h-full rounded-xl" />
                </section>
                <section className="org-title text-center mt-10">
                    <span className="text-5xl font-sans font-bold text-black">Association of Computer Engineering Students</span>
                </section>
                <section className="org-desc text-justify mt-14">
                    <span className="text-2xl font-sans font-normal text-black">
                    ACCESS is a professional organization of Computer Engineering students who strive to be Lasallian achievers. 
                    This organization offers academic and career-related activities in order for students to develop their skills and hone their abilities in engineering.
                    This association underpins its individuals scholastically as well as encourages its members to take an interest in extracurricular activities so as to prepare 
                    them as they enter the competitive world of the industry all while nurturing their social awareness and understanding. In ACCESS, every student discovers a family!
                    </span>
                </section>
                <div className="vision-mission flex flex-row justify-center items-center mt-14">
                    <section className="mission flex flex-col border-r-2 border-b-2 border-black pr-10 pb-10">
                        <span className="text-4xl font-sans text-center font-bold text-black mb-10">
                            Mission
                        </span>
                        <span className="text-2xl font-sans font-normal text-black text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minima maxime esse nemo enim quo dolor? Ex deleniti doloremque 
                            in cupiditate quae similique nam adipisci, neque atque ipsam ipsa libero doloribus dolorum repellendus nesciunt exercitationem, 
                            quam quo ad commodi a? Natus similique nesciunt, repudiandae explicabo aliquid veniam. Dignissimos, recusandae facilis!
                        </span>
                    </section>
                    <section className="vision flex flex-col border-b-2 border-black pl-10 pb-10">
                        <span className="text-4xl font-sans text-center font-bold text-black mb-10">
                            Vision
                        </span>
                        <span className="text-2xl font-sans font-normal text-black text-justify">
                        We envision the Computer Engineering Society to be a vibrant and growing organization that is responsive to the needs of its members, 
                        serving as a moving force in breeding professional, competent, and pioneering critical thinkers who are Christian achievers and life-long learners 
                        in the practice and advancement of technology in the realm of computer engineering
                        </span>
                    </section>
                </div>
                <section className="org-facebook-link flex flex-row justify-center items-center mt-10 hover:underline">
                    <span className="text-2xl font-sans text-black font-bold">
                        <a href="https://www.facebook.com/AccessDLSU" target="_blank" rel="noreferrer">https://www.facebook.com/AccessDLSU</a>
                    </span>
                </section>
                <section className="org-membership-pub bg-[#b92f2f] w-[60%] h-96 rounded-xl text-center mt-10">
                </section>
            </div>
        </>
    )
}

export default BottomPageOrg