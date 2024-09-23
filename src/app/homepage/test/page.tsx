import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const products = [
    { name: 'Mango', price: '$14.99', oldPrice: '$29.99', farm: 'Kampot Farm', rating: 4.9, status: 'In stock', img: '/mango.png', discount: '50%' },
    { name: 'Mix fruits', price: '$14.99', farm: 'Siem Reap Farm', rating: 4.9, status: 'Free 10pers', img: '/mixfruits.png' },
    { name: 'Mix fruits', price: '$14.99', oldPrice: '$14.99', farm: 'Bokor Farm', rating: 4.9, status: 'Sold out', img: '/mixfruits-sold.png' }
  ];

  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <div className="text-xl font-bold">Kasemall</div>
        <div className="flex items-center">
          <input type="text" placeholder="Search products..." className="border rounded px-2 py-1" />
          <FaShoppingCart className="ml-4 text-2xl" />
        </div>
      </header>

      {/* Sidebar and Filters */}
      <div className="flex">
        <aside className="w-64 bg-white p-4">
          <h3 className="text-lg font-semibold mb-2">Filter and Sort</h3>
          {/* Categories */}
          <h4 className="font-semibold">Product Categories</h4>
          <ul className="space-y-1">
            <li><input type="checkbox" className="mr-2" />Fruits</li>
            <li><input type="checkbox" className="mr-2" />Meat</li>
            <li><input type="checkbox" className="mr-2" />Vegetables</li>
          </ul>
          {/* Price Range */}
          <h4 className="mt-4 font-semibold">Price Range</h4>
          <ul className="space-y-1">
            <li><input type="checkbox" className="mr-2" />0$ - 10$</li>
            <li><input type="checkbox" className="mr-2" />10$ - 50$</li>
            <li><input type="checkbox" className="mr-2" />50$ - 100$</li>
          </ul>
        </aside>

        {/* Product Listings */}
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div key={index} className="bg-white shadow p-4 rounded">
                <img src={product.img} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                <div className="text-gray-500">{product.farm}</div>
                <div className="flex justify-between items-center">
                  <div className="text-green-500 font-semibold">{product.price}</div>
                  {product.oldPrice && <div className="line-through text-gray-500">{product.oldPrice}</div>}
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="text-sm text-yellow-500">⭐ {product.rating}</div>
                  <div className="text-sm text-green-600">{product.status}</div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <FaHeart className="text-red-500" />
                  <button className="bg-blue-500 text-white py-1 px-3 rounded">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center mt-4">
        <div className="space-x-4">
          <a href="#" className="hover:underline">About Kasemall</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="mt-2">Follow us: 
          <a href="#" className="ml-2">Facebook</a>
          <a href="#" className="ml-2">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
