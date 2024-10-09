// src/pages/TemplateDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const templates = [
  {
    id: 1,
    title: 'Modern Business Website',
    imageUrl: 'https://via.placeholder.com/600x400',
    category: 'Business',
    price: 'Free',
    description: 'A sleek and modern website template perfect for businesses of all sizes.',
    features: [
      'Responsive design',
      'Customizable layout',
      'Contact form',
      'Blog integration',
    ],
  },
  {
    id: 2,
    title: 'E-commerce Store',
    imageUrl: 'https://via.placeholder.com/600x400',
    category: 'E-commerce',
    price: '$49',
    description: 'A fully functional e-commerce template with shopping cart, product pages, and checkout.',
    features: [
      'Product catalog',
      'Shopping cart',
      'Secure checkout',
      'Payment gateway integration',
    ],
  },
  // ... more templates
];

function TemplateDetails() {
  const { id } = useParams();
  const [template, setTemplate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundTemplate = templates.find((t) => t.id === parseInt(id));
    if (foundTemplate) {
      setTemplate(foundTemplate);
    } else {
      navigate('/not-found');
    }
  }, [id, navigate]);

  if (!template) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={template.imageUrl} alt={template.title} className="w-full h-auto rounded-md" />
          </div>
          <div className="md:w-1/2 p-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{template.title}</h2>
            <p className="text-gray-600 mb-4">{template.description}</p>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Features</h3>
            <ul className="list-disc pl-6">
              {template.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <div className="mt-4">
              <p className="text-green-500 font-bold">{template.price}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TemplateDetails;
