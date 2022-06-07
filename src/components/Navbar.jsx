import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-green-900">
      <nav className="flex items-center container mx-auto h-full justify-between">
      <Link to="/" className="font-semibold italic  text-lg text-gray-200">
          🌱 Stunning Green
        </Link>
        <div>
          <ul className="flex items-center space-x-10 text-sm">
            <li><Link to="/about" className="text-yellow-100 hover:text-gray-100">About Us</Link></li>
            <li><Link to="/dashboard" className="text-yellow-100 hover:text-gray-100">Dashboard</Link></li>
            <li><Link to="/price" className="text-yellow-100 hover:text-gray-100">Price</Link></li>
          </ul>
        </div>
      
      </nav>
    </div>
  );
}

export default Navbar;
