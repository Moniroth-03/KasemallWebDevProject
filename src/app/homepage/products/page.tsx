import React from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { MdLocalShipping, MdOutlinePriceCheck } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

// Define the types for Product and Shop
type Shop = {
  id: number;
  name: string;
  url_name: string;
  supplier_id: number;
  membership_name: string;
  shop_category_name: string;
  city: string;
  district: string;
  supplier_name: string;
};

type Product = {
  id: number;
  name: string;
  image: string;
  shop_id: number;
  unit_price: string;
  sale_price: string;
  list_price: string;
  brand_id: number;
  category_id: number;
  unit_id: number;
  brand_name: string;
  category_name: string;
  unit_name: string;
  thumbnail: string;
  image_name: string;
  shop: Shop;
};

const page = async () => {
  // Fetch the product data from the API
  let response = await fetch(
    "https://kasemall1.kasegro.com/api/public/home?id=093216&token=GanGosFutureToken2020"
  );

  // Parse the API response
  let data = await response.json();
  let products = data.data.random_products;

  return (
    <section className="">
      <h3 className="text-lg font-semibold ">Popular Products</h3>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            {/* Product Image Wrapper */}
            <div className="relative">
              {/* Product Thumbnail */}
              <Image
                src={product.thumbnail} // API image thumbnail
                alt={product.name}
                width={300} // Define image size
                height={300}
                className="w-full object-cover h-42 rounded"
              />
              {/* Heart Button Positioned on Image */}
              <FaHeart className="text-red-500 cursor-pointer absolute top-2 right-2  text-2xl ml-4" />
            </div>
            {/* Product Info */}
            <div className="flex justify-between items-center ">
              <h4 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                {product.name}
              </h4>
            </div>

            {/* Shop Information */}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Sold by: {product.shop.name}
            </p>
            {/* Additional Product Info */}
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
              Category: {product.category_name}
            </p>

            {/* Product Pricing */}
            <div className="mt-2 flex justify-between items-center gap-4">
              <li className="flex items-center gap-2">
                <MdLocalShipping className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  Fast Delivery
                </p>
              </li>
              <span className="text-green-600 font-semibold leading-tight text-lg">
                ${product.sale_price || product.unit_price}
                {product.list_price && (
                  <span className="ml-2 line-through text-gray-400 text-sm">
                    ${product.list_price}
                  </span>
                )}
              </span>
            </div>

            {/* Add to Cart Button */}
            <div className="flex justify-between items-center mt-4 gap-2">
              <div className="mt-2 flex items-center gap-2">
                {/* Single Star */}
                <BsStarFill className="h-4 w-4 text-yellow-400" />

                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  5.0
                </p>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  | 455 Rated
                </p>
              </div>
              <button className="bg-navBorder hover:bg-navBg text-white py-1 px-3  rounded-lg whitespace-nowrap">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
