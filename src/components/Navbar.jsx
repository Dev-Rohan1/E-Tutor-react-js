import { useState } from "react";
import { BsLaptopFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

import NavLink from "../data/NavLink.json";
import ResponsiveMenu from "./ResponsiveMenu";
import NavbarTitle from "./NavbarTitle";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <>
      <header className="relative">
        <nav className="container flex items-center justify-between py-5">
          {/* Logo */}
          <a href="../../index.html" className="flex items-center gap-2">
            <BsLaptopFill className="text-3xl text-secondary" />
            <span className=" text-2xl font-bold">E-Tutor</span>
          </a>
          {/* Menu */}
          <ul className="hidden lg:flex gap-10">
            {NavLink.map((menu) => {
              return (
                <li key={menu.id}>
                  <a
                    href={menu.path}
                    className=" text-lg font-medium text-gray-700 hover:text-secondary transition-colors"
                  >
                    {menu.name}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* CTA */}
          <div className="hidden lg:flex">
            <button className="text-lg font-medium hover:text-secondary transition-colors">
              Sign In
            </button>
            <button className="text-lg font-medium bg-secondary text-white px-7 py-2 rounded-md ml-4">
              Register
            </button>
          </div>
          {/* Hamburger menu*/}
          {showMenu ? (
            <FaXmark
              className="text-3xl cursor-pointer lg:hidden transition_property"
              onClick={() => toggleMenu()}
            />
          ) : (
            <HiOutlineMenu
              className="text-3xl cursor-pointer lg:hidden transition_property"
              onClick={() => toggleMenu()}
            />
          )}
        </nav>
      </header>
      <NavbarTitle />
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
