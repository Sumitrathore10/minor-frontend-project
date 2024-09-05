import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>

    {/* navbar */}

    <Nav />

      <div className="w-[85%] h-full flex  flex-wrap  bg-zinc-100 p-7 overflow-x-hidden overflow-y-auto ">
        <Link to="/details/1"  className="w-[20%] h-[40%] flex justify-center items-center m-2 pt-4 flex-col gap-2 shadow-lg rounded bg-white shadow-zinc-500 ">
          <div
            style={{
              backgroundImage:
                "url(https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)",
            }}
            className="w-[80%] h-[80%]   bg-contain bg-no-repeat bg-center hover:scale-110 "
          ></div>

          <h1 className="font-sans text-red-500 hover:text-blue-500 cursor-pointer font-semibold">
            School Bag
          </h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
