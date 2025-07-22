import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);
  
  return (
    <button 
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 right-4 p-3 bg-blue-600 text-white rounded-full shadow-lg"
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;