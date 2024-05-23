import { hamburger } from "../assets/icons";
import logo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
// import { hamburger } from "../assets/icons";
// Interface //
import { ILinks } from "../interfaces";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={logo} width={130} height={29} alt="header logo" />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((ele: ILinks) => {
            return (
              <li key={ele.label}>
                <a
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                  href={ele.href}
                >
                  {ele.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
