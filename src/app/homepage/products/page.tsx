import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

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
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="w-64 p-4 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 ease-in-out dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* Product Thumbnail */}
          <Image
            src={product.thumbnail} // API image thumbnail
            alt={product.name}
            width={256} // Define image size
            height={256}
            className="w-full object-cover h-40  mb-4 rounded"
          />

          {/* Product Info */}
          <div className="flex justify-between items-center ">
            <h4 className=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {product.name}
            </h4>
            <FaHeart className="text-red-500 cursor-pointer text-2xl ml-4" />
          </div>

          {/* Shop Information */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Sold by: {product.shop.name}
          </p>

          {/* Product Pricing */}
          <div className="mt-2 flex justify-between items-center">
            <span className="text-green-600 font-semibold text-lg">
              Price: ${product.sale_price || product.unit_price}
            </span>
            {product.list_price && (
              <span className="line-through text-gray-400 text-sm">
                ${product.list_price}
              </span>
            )}
          </div>

          {/* Additional Product Info */}
          <p className="font-normal text-gray-700 dark:text-gray-400 mt-1">
            Category: {product.category_name}
          </p>

          {/* Add to Cart Button */}
          <div className="flex justify-between items-center mt-4">
            <button className="bg-navBorder hover:bg-navBg text-white py-1 px-3  rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
