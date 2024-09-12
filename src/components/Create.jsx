import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid/non-secure";

const Create = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("All fields should be filled out with at least 5 characters");
      return;
    } else {
      const newProduct = {
        id: nanoid(),
        image,
        title,
        category,
        price,
        description,
      };
      setProducts([...products, newProduct]);
      console.log(products);
      navigate(-1);
    }
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
        onSubmit={handleSubmit}
        className="w-[80%] h-[90%] shadow-lg shadow-black rounded-md m-auto mt-5 flex p-[5%] items-center flex-col"
      >
        <h1 className="text-4xl font-semibold font-sans text-red-500 mb-[5%]">
          ADD NEW PRODUCT
        </h1>
        <input
          type="url"
          placeholder="Image url"
          className="bg-zinc-200 font-sans text-lg rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <input
          type="text"
          placeholder="Title"
          className="bg-zinc-200 font-sans text-lg rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div className="flex justify-between w-1/2">
          <input
            type="text"
            placeholder="Category"
            className="bg-zinc-200 font-sans text-lg rounded-md w-[45%] outline-blue-500 p-2 mb-3"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
          <input
            type="number"
            placeholder="Price"
            className="bg-zinc-200 font-sans text-lg rounded-md w-[45%] outline-blue-500 p-2 mb-3"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <textarea
          placeholder="Enter product description here..."
          className="bg-zinc-200 font-sans text-lg rounded-md w-[50%] outline-blue-500 p-2 mb-3"
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex w-1/2">
          <button className="text-red-500 font-sans font-semibold border-gray-400 border-2 px-3 py-2">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
