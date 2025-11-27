import React from "react";
import { useParams } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { products } from "../data"; // <-- your product list

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h1 className="text-center p-10 text-red-600">Product Not Found</h1>;
  }

  return (
    <div className="flex gap-6 p-7 border-red-800 flex-col md:flex-row">
      {/* image */}
      <div>
        <img
          className="h-[372px] w-[819px] object-cover rounded-md"
          src={product.img}
          alt={product.title}
        />
      </div>

      {/* product details */}
      <div>
        <h1 className="text-2xl font-semibold">{product.title}</h1>
        <p>Visit Store</p>

        <div className="flex gap-2 items-center ">
          <p>4.1</p>

          <div className="flex text-[rgb(255,98,1)]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </div>

          <p className="text-xs">Ask questions and search reviews</p>
        </div>

        <p>
          <span className="font-semibold">100+ bought</span> in past month
        </p>

        <hr className="border-gray-300 mt-3" />

        <div className="flex gap-2 pt-2">
          <h1 className="text-[rgb(211,45,84)] text-2xl">-60%</h1>

          <h1 className="font-semibold text-2xl">
            <span>₹</span>
            {product.price}
          </h1>
        </div>

        <p className="text-gray-600 text-xs">
          M.R.P :<span className="line-through">₹{product.mrp}</span>
        </p>

        <p>Inclusive of all taxes</p>

        {/* offers */}
        <div>
          <div className="flex gap-2 items-center">
            <BiSolidOffer className="size-6 text-[rgb(255,98,1)]" />
            <h1 className="font-semibold pt-3">Offers</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[1, 2, 3].map((x) => (
              <div
                key={x}
                className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm p-4"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cashback
                </h3>

                <p className="text-gray-700 leading-snug mb-4">
                  Upto ₹14.00 cashback as Amazon Pay Balance when...
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  1 offer
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* location details */}
      <div className="max-w-xs bg-white border border-gray-300 rounded-lg shadow-sm p-4">
        <h1 className="font-semibold text-2xl">₹{product.price}</h1>

        <p className="text-[14px]">
          FREE delivery{" "}
          <span className="font-semibold">Friday, 5 December</span>. Order
          within <span className="text-[rgb(11,146,148)]">6 hrs 27mins.</span>
        </p>

        <div className="flex gap-1 items-center justify-center pt-4 pb-4">
          <CiLocationOn className="h-8 w-8" />
          <p className="text-xs">Deliver to PANKAJ - Khamaria 221306‌</p>
        </div>

        <h1 className="text-[rgb(11,146,148)] text-xl">In Stock</h1>

        <div className="flex gap-3 text-xs pt-3">
          <div>
            <p className="pb-1">Delivered by</p>
            <p className="pb-1">Sold by</p>
            <p className="pt-4">Payment</p>
          </div>

          <div>
            <h1 className="pb-1">Amazon</h1>
            <h1 className="pb-1 text-blue-400">
              ALSTONIA BY DECOR
              <br />
              AND MORE
            </h1>
            <h1 className="pb-1 text-blue-400">Secure transaction</h1>
          </div>
        </div>

        <button className="bg-[rgb(255,216,20)] w-full rounded-2xl p-1 mt-4">
          Add to Cart
        </button>

        <button className="bg-[rgb(255,164,28)] w-full rounded-2xl p-1 mt-4">
          Buy Now
        </button>

        <hr className="mt-1 text-gray-300" />

        <button className="border w-full rounded-md p-1 mt-4">
          Add to Wish List
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
