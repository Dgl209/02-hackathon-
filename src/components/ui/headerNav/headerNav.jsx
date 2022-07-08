import React from "react";
import { Link } from "react-router-dom";
import HeaderItem from "./headerItem/headerItem";

function HeaderNav() {
  const isLoggedIn = false;
  return (
    <>
      <div className="flex items-center justify-end w-4/12 md:order-2">
        {isLoggedIn ? (
          <Link
            to="/user/0"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <h5 className="text-white">User photo</h5>
          </Link>
        ) : (
          <Link
            to="/signup"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
              focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center mr-3
              md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </Link>
        )}
      </div>
      <div
        className="hidden justify-between items-center w-4/12 md:flex md:w-auto md:order-1"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <HeaderItem label="Home" path="/" />
          <HeaderItem label="Bookmarks" path="/bookmarks" />
        </ul>
      </div>
    </>
  );
}

export default HeaderNav;
