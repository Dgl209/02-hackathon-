import React from "react";
import { Link } from "react-router-dom";
import { HeaderNav } from "../../ui";

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="w-4/12 flex items-center">
          <Link to="/">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              02-hackathon
            </span>
          </Link>
        </div>
        <HeaderNav />
      </div>
    </nav>
  );
}

export default Header;
