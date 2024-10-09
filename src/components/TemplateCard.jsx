// src/components/TemplateCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function TemplateCard({ template }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img src={template.imageUrl} alt={template.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{template.title}</h3>
        <p className="text-gray-600 mb-2">{template.category}</p>
        <p className="text-green-500 font-bold">{template.price}</p>
        <Link to={`/templates/${template.id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default TemplateCard;
