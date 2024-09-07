import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loader from "./Loader";
const Home = () => {

  const [products] = useContext(ProductContext);
  
  return (
    <>
      {/* navbar */}

      <Nav />

      <div className="w-[85%] h-full flex flex-wrap bg-zinc-100 p-7 overflow-x-hidden overflow-y-auto">
        {products ? (
          products.map((p, i) => (
            <Link
              to={`/details/${p.id}`} // Assuming each product has a unique id
              className="w-[31%] h-[40%] flex justify-center items-center m-2 pt-4 flex-col gap-2 shadow-lg rounded bg-white shadow-zinc-500"
              key={i}
            >
              <div
                style={{
                  backgroundImage: `url(${p.image})`, // Use template literals correctly to pass the image URL
                }}
                className="w-[80%] h-[80%] bg-contain bg-no-repeat bg-center hover:scale-105 rounded-lg"
              ></div>

              <h1 className="font-sans text-red-500 hover:text-blue-500 cursor-pointer text-center p-[2%] font-semibold">
                {p.title} {/* Dynamically display product name */}
              </h1>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Home;
