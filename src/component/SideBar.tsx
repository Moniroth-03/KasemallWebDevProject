import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white flex items-center justify-center p-4 w-64">
      {/* Dropdown Button */}
      <button
        id="dropdownDefault"
        onClick={toggleDropdown}
        className=" bg-primary-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
      >
        Filter and sort
        <FaChevronDown className="w-4 h-4 ml-2" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm">
            {[
              { id: "Fruit", label: "Meat", count: 56 },
              { id: "0$", label: "5$", count: 56 },
              { id: "dell", label: "Kampot", count: 56 },
              { id: "asus", label: "Kasegro", count: 97, checked: true },
              { id: "logitech", label: "Kasemall", count: 97, checked: true },
              { id: "msi", label: "9$", count: 97, checked: true },
              { id: "bosch", label: "RothShop", count: 176, checked: true },
              { id: "sony", label: "Bopha", count: 234 },
              { id: "samsung", label: "Sokha", count: 76, checked: true },
              { id: "canon", label: "Boko", count: 49 },
              { id: "microsoft", label: "Rice", count: 45 },
              { id: "razor", label: "Organic", count: 49 },
            ].map((item) => (
              <li key={item.id} className="flex items-center">
                <input
                  id={item.id}
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor={item.id}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {item.label} ({item.count})
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
