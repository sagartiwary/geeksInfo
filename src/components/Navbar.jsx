import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../image/geeks-logo-white.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`bg-gray-800 h-16  ${isOpen ? "dark:bg-gray-900" : ""}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center">
          <img src={Logo} className="h-6 mr-3" alt="logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link
                to="#"
                className={`block py-2 pl-3 pr-4 ${
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                }  md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                aria-current="page"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`block py-2 pl-3 pr-4 ${
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                } rounded md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                WORKS
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`block py
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                } rounded md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                TECHNOLOGIES
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`block py-2 pl-3 pr-4 ${
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                } rounded md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`block py-2 pl-3 pr-4 ${
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                } rounded md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                COMPANY
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className={`block py-2 pl-3 pr-4 ${
                  isOpen ? "text-white" : "text-gray-900 hover:bg-gray-100"
                } rounded md:bg-transparent md:p-0 dark:text-white ${
                  isOpen ? "" : ""
                } md:border-0 md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              >
                CONTACTS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
