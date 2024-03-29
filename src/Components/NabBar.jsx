import React from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css";

const NabBar = () => {
  return (
    <nav className="block w-full py-2 mx-auto text-white bg-white border  rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <a
          href="/"
          className="mr-4 block cursor-pointer py-1.5 font-sans leading-relaxed text-inherit antialiased text-2xl font-bold"
        >
          Bookworm Haven
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <NavLink
                to={"/"}
                className="flex items-center text-lg font-semibold text-[#131313CC]"
              >
                Home
              </NavLink>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <NavLink
                to={"/listed-books"}
                className="flex items-center text-lg font-semibold text-[#131313CC]"
              >
                Listed Books
              </NavLink>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <NavLink
                to={"/pages-to-read"}
                className="flex items-center text-lg font-semibold text-[#131313CC]"
              >
                Pages to Read
              </NavLink>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <NavLink
                to={"/about"}
                className="flex items-center text-lg font-semibold text-[#131313CC]"
              >
                About Us
              </NavLink>
            </li>
            <li className="flex items-center p-1 font-sans text-sm antialiased font-medium leading-normal gap-x-2 text-blue-gray-900">
              <NavLink
                to={"/contact-us"}
                className="flex items-center text-lg font-semibold text-[#131313CC]"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-x-1">
          <button
            className="hidden select-none rounded-lg bg-[#23BE0A] py-2 px-4 text-center align-middle font-sans text-xs font-bold  text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block  text-[#131313CC]"
            type="button"
          >
            <span className="text-lg font-semibold">Sign in</span>
          </button>
          <button
            className="hidden select-none rounded-lg bg-[#59C6D2] py-2 px-4 text-center align-middle font-sans text-xs font-bold text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block  text-[#131313CC]"
            type="button"
          >
            <span className="text-lg font-semibold">Sign Up</span>
          </button>
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default NabBar;
