/* eslint-disable react/jsx-no-undef */
import React from "react";
import Image from "next/image";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { MdLocalShipping, MdOutlinePriceCheck } from "react-icons/md";

const ProductCard = () => {
  return (
    <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="h-56 w-full">
          <a href="#">
            <Image
              className="mx-auto h-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
              alt="Apple iMac 27"
              layout="responsive"
              width={500}
              height={400}
            />
            <Image
              className="mx-auto hidden h-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
              alt="Apple iMac 27"
              layout="responsive"
              width={500}
              height={400}
            />
          </a>
        </div>
        <div className="pt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300">
              Up to 35% off
            </span>
            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Quick look</span>
                <AiOutlineEye className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Add to Favorites</span>
                <AiOutlineHeart className="h-5 w-5" />
              </button>
            </div>
          </div>
          <a
            href="#"
            className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
          >
            Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max
          </a>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <BsStarFill key={index} className="h-4 w-4 text-yellow-400" />
                ))}
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              5.0
            </p>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              (455)
            </p>
          </div>
          <ul className="mt-2 flex items-center gap-4">
            <li className="flex items-center gap-2">
              <MdLocalShipping className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Fast Delivery
              </p>
            </li>
            <li className="flex items-center gap-2">
              <MdOutlinePriceCheck className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Best Price
              </p>
            </li>
          </ul>
          <div className="mt-4 flex items-center justify-between gap-4">
            <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
              $1,699
            </p>
            <button
              type="button"
              className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
