import React from "react";
import logo from "../assets/tuteDude-logo.png";
import profile from "../assets/profile.svg";
import { BiChevronDown } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";

const links = [
  { to: "My Assignment", path: "/" },
  { to: "Chat With Mentor", path: "/" },
];

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full shadow bg-white z-50 ">
      <div className="md:px-20 px-4 h-20 w-full flex justify-between items-center">
        <div>
          <img src={logo} className="h-14" alt="logo" />
        </div>
        <div className="flex justify-center items-center space-x-5">
          <ul className="hidden font-poppins md:flex justify-center items-center space-x-5">
            {links.map((links) => (
              <li className=" text-gray/50" key={links.to}>
                {links.to}
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-2 bg-purple md:bg-transperant md:text-purple text-white font-medium rounded-lg p-2">
            <MdAccountCircle size={24} /> ProfileName
            <BiChevronDown size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
