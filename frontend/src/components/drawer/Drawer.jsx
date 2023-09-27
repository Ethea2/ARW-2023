import { Link, useLocation } from "react-router-dom";
import routes from "../routes";
import { useEffect, useState } from "react";
import arwLogo from "../../assets/arw-logo-transparent.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleToggle = (e) => {
    e.preventDefault();
    open === true ? setOpen(false) : setOpen(true);
  };
  useEffect(() => setOpen(false), [location]);

  return (
    <nav className="drawer drawer-end absolute flex justify-end p-5 z-10 font-bit">
      <input
        id="my-drawer"
        type="checkbox"
        checked={open}
        className="drawer-toggle"
      />
      {!open && (
        <div className="drawer-content">
          <div
            onClick={handleToggle}
            className="btn btn-primary drawer-button text-2xl"
          >
            <GiHamburgerMenu />
          </div>
        </div>
      )}
      <div className="drawer-side">
        <label onClick={handleToggle} className="drawer-overlay"></label>
        <ul className="menu p-4 min-h-full bg-base-200 md:bg-black/25 text-base-content flex justify-start items-center w-full md:w-1/3">
          <div className="h-full w-full text-3xl flex justify-center gap-5 items-center my-10">
            <img src={arwLogo} width="50" height="50" />
            ARW 2023
          </div>
          <div className="divider"></div>
          {routes.map(
            (route, index) =>
              route.name && (
                <li className="flex flex-col w-full justify-between items-center my-5">
                  <Link className="w-full text-xl" to={route.path}>
                    {route.icon}
                    {route.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Drawer;
