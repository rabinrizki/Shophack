// components/Banner.js
import React from 'react';

const Banner4 = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
      <div className="relative container mx-auto px-6 py-12 lg:py-24 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Discover the Latest Fashion Trends</h1>
        <p className="text-lg lg:text-2xl mb-8">Shop the hottest styles and exclusive collections now!</p>
        <a
          href="#shop-now"
          className="inline-block bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Banner4;
