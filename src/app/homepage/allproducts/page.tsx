"use client";
import React, { useState } from "react";
import { FaFilter, FaSortDown, FaSort } from "react-icons/fa";

const Page = () => {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Toggle sort dropdown visibility
  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  return (
    <div className="flex gap-4">
      {/* Filter Button */}
      <button
        type="button"
        className="flex w-full sm:w-auto items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
      >
        {/* Left Icon */}
        <FaFilter className="mr-2 h-4 w-4" aria-hidden="true" />
        Filters
        {/* Right Icon */}
        <FaSortDown className="ml-2 h-4 w-4" aria-hidden="true" />
      </button>
      {/* Sort Button */}
      <div className="relative">
        <button
          type="button"
          className="flex w-full sm:w-auto items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          onClick={toggleSortDropdown}
        >
          {/* Left Icon */}
          <FaSort className="mr-2 h-4 w-4" aria-hidden="true" />
          Sort
          {/* Right Icon */}
          <FaSortDown className="ml-2 h-4 w-4" aria-hidden="true" />
        </button>

        {/* Sort Dropdown */}
        {isSortDropdownOpen && (
          <div
            className="absolute z-50 mt-2 w-40 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700 left-0"
            role="menu"
            aria-orientation="vertical"
          >
            <ul className="p-2 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  The most popular
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Newest
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Increasing price
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Decreasing price
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  No. reviews
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group inline-flex w-full items-center rounded-md px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Discount %
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
