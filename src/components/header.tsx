import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Insight-Digest</h1>
        <nav>
          <a href="/" className="text-gray-600 hover:text-gray-800 px-3 py-2">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">My Page</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 px-3 py-2">Settings</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
