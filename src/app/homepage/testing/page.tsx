import React from "react";

const ProductFilter: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-4">
      {/* Sidebar Filter */}
      <div className="lg:w-1/4">
        <h3 className="font-semibold">Product Categories</h3>
      </div>

      {/* Main Content */}
      <div className="lg:w-11/12">

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

        {/* Dropdowns */}
        <div className="flex flex-wrap gap-4 mb-4">
          <select className="bg-gray-300 rounded-lg p-2 hover:bg-green-200">
            <option>All Products</option>
          </select>
          <select className="bg-gray-300 rounded-lg p-2 hover:bg-green-200">
            <option>All Shops</option>
          </select>
          <select className="bg-gray-300 rounded-lg p-2">
            <option>All Marts</option>
          </select>
        </div>

        <h3 className="text-lg font-semibold">Popular Products</h3>
        {/* Add product listing code here */}
      </div>
    </div>
  );
};

export default ProductFilter;
