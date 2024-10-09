// src/components/Categories.jsx
import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Business',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'E-commerce',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Portfolio',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    name: 'Blog',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded shadow-md overflow-hidden">
              <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  View Templates
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
