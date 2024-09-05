import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="w-[15%] h-full bg-red-500 flex items-center flex-col  pt-5 px-3 ">
        <Link
          to="/create"
          className="text-white font-sans font-semibold border-gray-200 border-2 px-3 py-2 "
        >
          Add New Product
        </Link>
        <hr className="w-[80%] mt-4" />
        <h1 className="w-[80%] text-white font-sans font-semibold text-3xl mb-4">
          category
        </h1>
        <ul className="  w-[80%] ">
          <li className=" mb-3 flex  items-center gap-2 text-white">
            {" "}
            <span className="w-[15px] h-[15px] rounded-full block bg-white"></span>
            cat 1
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
