import React from 'react';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-blue-600 flex items-center justify-center z-50">
    <div className="text-center text-white">
      <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"></div>
      <h2 className="text-2xl font-bold">TechNexa</h2>
      <p>Loading...</p>
    </div>
  </div>
);

export default LoadingScreen;