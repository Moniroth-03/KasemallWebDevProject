"use client";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";

const MenuBar = () => {
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
      <p className="font-medium mt-10 mb-4">
        Welcome to Kasemall.com, You can buy product here.
      </p>
      {/* Selected Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="bg-green-200 rounded-full px-4 py-1">
          Fruits <button className="ml-2 text-red-500">&times;</button>
        </div>
        <div className="bg-green-200 rounded-full px-4 py-1">
          10$ - 20$ <button className="ml-2 text-red-500">&times;</button>
        </div>
        <div className="bg-green-200 rounded-full px-4 py-1">
          Kampot <button className="ml-2 text-red-500">&times;</button>
        </div>
      </div>
      <div className="ml-64 mt-6 flex flex-wrap gap-4 ">
        {["All Products", "All Shops", "All Marts"].map((menu, index) => (
          <div key={index} className="relative">
            <button
              type="button"
              onClick={() => toggleDropdown(menu)}
              className="flex items-center justify-center bg-gray-400 rounded-lg p-2 font-bold w-64 h-16 text-black group-hover:text-white hover:bg-navBg"
            >
              {menu}
              <TiArrowSortedDown className="ml-2" />
            </button>
            {activeDropdown === menu && (
              <div className="shadow-2xl absolute w-44 bg-white rounded-2xl z-10">
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
        ))}
      </div>
    </>
  );
};

export default MenuBar;
