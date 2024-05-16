import { headerLogo } from "../assets/images";
import { navLinks } from "../constants/constants";
import { hamburger } from "../assets/icons";
import { useState } from "react";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => {
      window.onscroll = null;
    };
  };
  return (
    <header
      className={`padding-x py-8 fixed z-20 w-full  ${
        isScrolled ? "bg-slate-100" : ""
      } `}
    >
      <nav
        className="flex justify-between 
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
        {/* humburger Icon  */}
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Humburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
