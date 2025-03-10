// src/components/Loader.js
import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-gray-200 rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-500 text-lg">Loading...</p>
    </div>
  );
};

export default Loader;
