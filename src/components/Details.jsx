import axios from "../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full h-full p-[2%]">
      <button
        onClick={handleGoBack}
        className="text-red-500 font-sans font-semibold border-gray-400 border-2 px-3 py-2 shadow-black shadow-sm rounded-md"
      >
        Go Back
      </button>
      {product ? (
        <>
          <div className="w-[80%] h-[90%] shadow-lg shadow-black rounded-md m-auto flex justify-center items-center gap-[5%] p-[8%]">
            <img
              className="object-contain w-[50%] h-[100%]"
              src={product.image}
              alt={product.title}
            />
            <div className="w-[50%]">
              <h1 className="mb-3 font-sans font-semibold text-wrap text-4xl">
                {product.title}
              </h1>
              <h2 className="mb-3 font-sans text-zinc-400 text-xl font-medium">
                {product.category}
              </h2>
              <h3 className="mb-3 font-sans text-red-500 text-xl font-medium">
                ${product.price}
              </h3>
              <h4 className="mb-3 font-sans font-medium">
                {product.description}
              </h4>
              <br />
              <Link
                to={`/edit/${product.id}`}
                className="text-red-500 mr-3 mb-3 font-sans font-semibold border-gray-400 border-2 px-3 py-2"
              >
                Edit
              </Link>
              <Link
                to={`/delete/${product.id}`}
                className="text-red-500 font-sans font-semibold border-gray-400 border-2 px-3 py-2"
              >
                Delete
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
