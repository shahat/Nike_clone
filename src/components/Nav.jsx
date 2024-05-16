import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/constants";
import { hamburger } from "../assets/icons";
import { useState } from "react";

const Nav = () => {
  const [navToggel, setNavToggel] = useState(false);
  const handleNavToggel = () => {
    console.log("toggle is working", navToggel);
    setNavToggel(!navToggel);
  };

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };
  return (
    <header
      className={` fixed z-20 w-full  ${isScrolled ? "bg-slate-100" : ""} `}
    >
      <div className="navContainer   py-8  ">
        <nav
          className="flex justify-between padding-x 
       items-center max-container "
        >
          <a href="/">
            <img src={headerLogo} alt="LOGO" width={130} height={29} />
          </a>
          {/* nav Link  */}
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((link, index) => (
              <li
                key={index + "-link"}
                className="font-montserrat text-slate-gray text-lg leading-8"
              >
                <a
                  href={link.href}
                  className="text-decoration-none text-slate-400 hover:text-slate-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* humburger Icon  */}
          <div
            className={`hidden max-lg:flex cursor-pointer h-[32px] `}
            onClick={() => handleNavToggel()}
          >
            <img src={hamburger} alt="Humburger" width={25} height={25} />
          </div>
        </nav>{" "}
        <div
          className={`dropDown  ${
            navToggel ? "block" : "hidden"
          } absolute top-24 py-4 bg-slate-200 z-50 w-full
          
          transition-all ease-in-out duration-200
          `}
        >
          <ul className="flex flex-col justify-center   items-center gap-8 ">
            {navLinks.map((link, index) => (
              <li
                key={index + "-link"}
                className="font-montserrat text-slate-gray text-lg leading-7"
              >
                <a
                  href={link.href}
                  className="text-decoration-none text-slate-400 hover:text-slate-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;
