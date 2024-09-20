import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const page = async () => {
  // Fetch the product data from the API
  let response = await fetch(
    "https://kasemall1.kasegro.com/api/public/home?id=093216&token=GanGosFutureToken2020"
  );

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

  // Parse the API response
  let data = await response.json();
  let products = data.data.random_products;

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {products.map((product: Product) => (
        <div
          key={product.id}
          className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {/* Product Thumbnail */}
          <Image
            src={product.thumbnail} // API image thumbnail
            alt={product.name}
            width={150} // Define image size
            height={150}
            className="mb-4 rounded"
          />

          {/* Product Name */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>

          {/* Product Description */}
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Price: ${product.unit_price}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Category: {product.category_name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
