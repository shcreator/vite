// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Find the Perfect Template for Your Next Project</h1>
          <p className="text-lg text-gray-600 mb-8">
            Browse our extensive library of high-quality website templates, crafted for various industries and purposes.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Templates
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
