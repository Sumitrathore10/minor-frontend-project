import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const product = {
      image,
      title,
      category,
      price,
      description,
    };
    console.log(product);
  };

  return (
    <div className="h-screen w-full p-[1%]">
      <button
        onClick={handleGoBack}
        className="text-red-500 hover:scale-110 font-sans font-semibold border-gray-400 border-2 px-3 py-2 shadow-black shadow-sm rounded-md"
      >
        Go Back
      </button>
      <form
        onSubmit={handlesubmit}
        className="w-[80%] h-[90%]  shadow-lg shadow-black rounded-md m-auto mt-5  flex p-[5%] items-center  flex-col"
      >
        <h1 className="text-4xl font-semibold font-sans text-red-500  mb-[5%]">
          ADD NEW PRODUCT
        </h1>
        <input
          type="url"
          placeholder="Image url"
          className="bg-zinc-200 font-sans text-lg rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          onChange={(e) => setimage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="Title"
          className="bg-zinc-200 font-sans text-lg rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <div className="flex justify-between w-1/2">
          <input
            type="text"
            placeholder="Category"
            className="bg-zinc-200 font-sans text-lg rounded-md w-[45%] outline-blue-500 p-2 mb-3"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="Price"
            className="bg-zinc-200 font-sans text-lg rounded-md w-[45%] outline-blue-500 p-2 mb-3"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          placeholder="Enter product description here..."
          className="bg-zinc-200 font-sans text-lg  rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          rows={5}
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex  w-1/2">
          <button className="text-red-500 font-sans font-semibold border-gray-400 border-2 px-3 py-2 ">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
