import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Insight-Digest. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 mx-2">About</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 mx-2">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700 mx-2">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
