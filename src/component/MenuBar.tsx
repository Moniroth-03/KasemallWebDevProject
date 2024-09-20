"use client";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const MenuBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (type: string) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const selectCategory = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const subDropdownContent = (category: string) => {
    switch (category) {
      case "Fruits":
        return ["Apple", "Banana", "Orange"];
      case "Vegetables":
        return ["Carrot", "Broccoli", "Potato"];
      case "Meat":
        return ["Beef", "Chicken", "Pork"];
      case "Fishes":
        return ["Salmon", "Tuna", "Trout"];
      case "Seafood":
        return ["Shrimp", "Crab", "Lobster"];
      case "Rice":
        return ["Romdoul", "Jasmine", "Pka Mlis"];
      default:
        return [];
    }
  };
  
  return (
    <>
      <p className="font-medium text-center mt-6">
        Welcome to Kasemall.com, You can buy product here.
      </p>
      <div className="ml-64 mt-6 flex justify-center space-x-11">
        <div>
          <button
            type="button"
            onClick={() => toggleDropdown("products")}
            className="relative focus:outline-none text-white bg-red-900 hover:bg-navBg font-medium rounded-xl text-base px-12 py-3 mb-6 flex items-center"
          >
            All Products
            <TiArrowSortedDown className="ms-3" />
          </button>
          {activeDropdown === "products" && (
            <div className="shadow-2xl absolute w-44 bg-white rounded-2xl">
              <ul className="py-4 text-base font-medium text-gray-700">
                {[
                  "Fruits",
                  "Vegetables",
                  "Meat",
                  "Fishes",
                  "Seafood",
                  "Rice",
                ].map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => selectCategory(category)}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100"
                    >
                      {category}
                      {selectedCategory === category && (
                        <FaChevronRight className="text-gray-500" />
                      )}
                    </button>
                    {selectedCategory === category && (
                      <div className="absolute top-0 left-full mt-1 ml-2 w-44 bg-white rounded-2xl shadow-2xl">
                        <ul className="py-4 text-base font-medium text-gray-700">
                          {subDropdownContent(category).map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="block px-4 py-3 hover:bg-gray-100"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-3 hover:bg-gray-100 font-semibold text-blue-600"
                            >
                              See All
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <button
            type="button"
            onClick={() => toggleDropdown("shops")}
            className="relative focus:outline-none text-white bg-gray-500 hover:bg-navBg  font-medium rounded-xl text-base px-12 py-3 mb-6 flex items-center"
          >
            All Shops
            <TiArrowSortedDown className="ms-3" />
          </button>
          {activeDropdown === "shops" && (
            <div className="shadow-2xl absolute w-44 bg-white rounded-2xl">
              <ul className="py-4 text-base font-medium text-gray-700">
                {[
                  "Fruits",
                  "Vegetables",
                  "Meat",
                  "Fishes",
                  "Seafood",
                  "Rice",
                ].map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => selectCategory(category)}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100"
                    >
                      {category}
                      {selectedCategory === category && (
                        <FaChevronRight className="text-gray-500" />
                      )}
                    </button>
                    {selectedCategory === category && (
                      <div className="absolute top-0 left-full mt-1 ml-2 w-44 bg-white rounded-2xl shadow-2xl">
                        <ul className="py-4 text-base font-medium text-gray-700">
                          {subDropdownContent(category).map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="block px-4 py-3 hover:bg-gray-100"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-3 hover:bg-gray-100 font-semibold text-blue-600"
                            >
                              See All
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Dropdown for All Marts */}
        <div>
          <button
            type="button"
            onClick={() => toggleDropdown("marts")}
            className="relative focus:outline-none text-white bg-gray-500 hover:bg-navBg  font-medium rounded-xl text-base px-12 py-3 mb-6 flex items-center"
          >
            All Marts
            <TiArrowSortedDown className="ms-3" />
          </button>
          {activeDropdown === "marts" && (
            <div className="shadow-2xl absolute w-44 bg-white rounded-2xl">
              <ul className="py-4 text-base font-medium text-gray-700">
                {[
                  "Fruits",
                  "Vegetables",
                  "Meat",
                  "Fishes",
                  "Seafood",
                  "Rice",
                ].map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => selectCategory(category)}
                      className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-100"
                    >
                      {category}
                      {selectedCategory === category && (
                        <FaChevronRight className="text-gray-500" />
                      )}
                    </button>
                    {selectedCategory === category && (
                      <div className="absolute top-0 left-full mt-1 ml-2 w-44 bg-white rounded-2xl shadow-2xl">
                        <ul className="py-4 text-base font-medium text-gray-700">
                          {subDropdownContent(category).map((item) => (
                            <li key={item}>
                              <a
                                href="#"
                                className="block px-4 py-3 hover:bg-gray-100"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-3 hover:bg-gray-100 font-semibold text-blue-600"
                            >
                              See All
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MenuBar;
