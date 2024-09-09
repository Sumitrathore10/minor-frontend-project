import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {

  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((acc,cv)=> [...acc,cv.category],[])
  distinct_category = [...new Set(distinct_category)]
 
  const color = () =>{
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`
  }


  return (
    <>
      <nav className="w-[20%] h-full bg-red-500 flex items-center flex-col shadow-md shadow-black pt-5 px-3 ">
        <Link
          to="/create"
          className="text-white font-sans font-semibold border-gray-200 border-2 px-3 py-2 "
        >
          Add New Product
        </Link>
        <hr className="w-[80%] mt-4" />
        <h1 className="w-[80%] text-white mt-[10%] font-sans font-semibold text-3xl mb-4">
          Category
        </h1>
        <div className="  w-[80%] ">
         {distinct_category.map((c,i)=>(
           <Link key={i} to={`/?category=${c}`} className=" mb-3 flex  items-center gap-2 text-white">
            {" "}
            <span style={{backgroundColor : color()}} className='w-[15px] h-[15px] rounded-full block shadow-black shadow-sm'></span>
            {c}
          </Link>
         ))}
        </div>
      </nav>
    </>
  );
};

export default Nav;
