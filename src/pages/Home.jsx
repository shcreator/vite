// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import FeaturedTemplates from '../components/FeaturedTemplates';
import Categories from '../components/Categories';

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedTemplates />
      <Categories />
    </div>
  );
}

export default Home;
