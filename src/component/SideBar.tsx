// components/FilterSidebar.tsx
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";

const categories = [
  { id: 1, name: "Fruits", count: 56 },
  { id: 2, name: "Vegetables", count: 45 },
  { id: 3, name: "Meat", count: 97 },
  { id: 4, name: "Seafood", count: 234 },
  { id: 5, name: "Rice", count: 97 },
];

const FilterSidebar = () => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([
    3, 5, 4,
  ]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);

  const toggleCategory = (id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="mt-8 w-64 p-4 border rounded-lg bg-white shadow">
      {/* Filter by Keyword Button */}
      <button className="bg-white text-black font-bold px-4 py-2 rounded-md w-full flex justify-between items-center">
        Filter by keywords <IoFilterSharp />
      </button>

      {/* Filters */}
      <div className="mt-4">
        {/* Search Keywords */}
        <input
          type="text"
          placeholder="Search keywords..."
          className="w-full border border-gray-300 p-2 rounded-md"
        />

        {/* Category Filter */}
        <div className="mt-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
          >
            <span className="font-bold">Product Categories</span>
            <FaChevronDown
              className={`transform transition-transform ${
                isCategoryOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {isCategoryOpen && (
            <ul className="mt-2 space-y-2">
              {categories.map((category) => (
                <li
                  key={category.id}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCategory(category.id)}
                >
                  <div className="flex items-center">
                    {selectedCategories.includes(category.id) ? (
                      <BsCheckSquare className="text-blue-600 mr-2" />
                    ) : (
                      <BsSquare className="mr-2" />
                    )}
                    {category.name}
                  </div>
                  <span className="text-gray-500">{category.count}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Other filters can be added here like Price, Shipping, etc. */}
        <div className="mt-4">
          <span className="font-bold">Price Range</span>
          {/* Add price filter implementation */}
        </div>
        <div className="mt-4">
          <span className="font-bold">Provinces</span>
          {/* Add shipping filter implementation */}
        </div>
        <div className="mt-4">
          <span className="font-bold">Shops</span>
          {/* Add rating filter implementation */}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
