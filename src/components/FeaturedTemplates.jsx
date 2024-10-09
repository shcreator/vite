// src/components/FeaturedTemplates.jsx
import React from 'react';
import TemplateCard from './TemplateCard';

const featuredTemplates = [
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
];

function FeaturedTemplates() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredTemplates.map((template) => (
            <TemplateCard key={template.id} template={template} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedTemplates;
