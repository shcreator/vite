// src/pages/Templates.jsx
import React from 'react';
import TemplateCard from '../components/TemplateCard';
import { useState, useEffect } from 'react';

const templates = [
  {
    id: 1,
    title: 'Modern Business Website',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Business',
    price: 'Free',
  },
  {
    id: 2,
    title: 'E-commerce Store',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'E-commerce',
    price: '$49',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Portfolio',
    price: 'Free',
  },
  {
    id: 4,
    title: 'Blog Website',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Blog',
    price: '$29',
  },
  {
    id: 5,
    title: 'Landing Page',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Landing Page',
    price: 'Free',
  },
  {
    id: 6,
    title: 'Coming Soon Page',
    imageUrl: 'https://via.placeholder.com/300x200',
    category: 'Coming Soon',
    price: '$19',
  },
];

function Templates() {
  const [filteredTemplates, setFilteredTemplates] = useState(templates);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Filter templates based on selected category
    if (selectedCategory) {
      setFilteredTemplates(templates.filter((template) => template.category === selectedCategory));
    } else {
      setFilteredTemplates(templates);
    }
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Templates</h2>
        <div className="mb-4">
          <select className="w-full px-4 py-2 border rounded" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="Business">Business</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Blog">Blog</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Coming Soon">Coming Soon</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Templates;
