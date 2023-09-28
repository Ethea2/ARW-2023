import { Link, useLocation } from "react-router-dom";
import routes from "../routes";
import { useEffect, useState } from "react";
import arwLogo from "../../assets/arw-logo-transparent.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Drawer = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const handleToggle = (e) => {
        e.preventDefault();
        open === true ? setOpen(false) : setOpen(true);
    };
    useEffect(() => setOpen(false), [location]);

    return (
        <nav className="drawer drawer-end absolute flex justify-end p-6 z-10 font-bit">
            <input
                id="my-drawer"
                type="checkbox"
                checked={open}
                onChange={handleToggle}
                className="drawer-toggle"
            />
            {!open && (
                <div className="drawer-content">
                    <div
                        onClick={handleToggle}
                        className="btn border-none bg-inherit drawer-button text-2xl hover:scale-125 hover:bg-inherit transitione ease-in duration-70"
                    >
                        <GiHamburgerMenu className="text-white" />
                    </div>
                </div>
            )}
            <div className="drawer-side">
                <label onClick={handleToggle} className="drawer-overlay"></label>
                <div className="menu min-h-full lg:bg-[#451F4D]/60 md:bg-[#451F4D]/60 bg-[#451F4D] flex flex-col justify-start items-center w-full md:w-1/3">
                    <div className="p-4 text-3xl text-gray-500/50 flex justify-end items-center w-full">
                        <AiOutlineClose onClick={handleToggle} className="cursor-pointer text-white text-2xl hover:scale-125 transition ease-in rounded-md"/>
                    </div>

                    <div className="w-[90%] bg-inherit text-2xl flex justify-start items-center gap-5">
                        <img src={arwLogo} width="30" height="30" />
                        <p className="text-3xl">ARW 2023</p>
                    </div>

                    {/* <div className="divider"></div> */}
                    <div className="w-[90%] flex flex-col gap-2">
                    {routes.map(
                        (route, index) =>
                            route.name && (
                                <Link key={index} className="">
                                    <div className="flex items-center gap-2 w-full text-md rounded-lg p-2 w-full hover:bg-black/30" to={route.path}>
                                        <div className="nav-icon">
                                            {route.icon}
                                        </div>
                                        <div className="nav-name">
                                            {route.name}
                                        </div>
                                    </div>
                                </Link>
                                
                            )
                    )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Drawer;
