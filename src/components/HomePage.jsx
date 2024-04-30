import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4 py-2 md:flex md:items-center justify-between">
        <Link to="/" className="text-white text-xl font-bold">GuinéeInfos</Link>
        <ul className="hidden md:flex flex-row space-x-4">
          <li className="text-white hover:text-gray-200">
            <Link to="/" className={isActive('/') ? 'bg-blue-500 text-white' : ''}>
              Actualités
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link
              to="/politique"
              className={isActive('/politique') ? 'bg-blue-500 text-white' : ''}
            >
              Politique
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link
              to="/education"
              className={isActive('/education') ? 'bg-blue-500 text-white' : ''}
            >
              Education
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/sport" className={isActive('/sport') ? 'bg-blue-500 text-white' : ''}>
              Sport
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link
              to="/culture-et-art"
              className={isActive('/culture-et-art') ? 'bg-blue-500 text-white' : ''}
            >
              Culture et Art
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/religion" className={isActive('/religion') ? 'bg-blue-500 text-white' : ''}>
              Religion
            </Link>
          </li>
          <li className="text-white hover:text-gray-200">
            <Link to="/autres" className={isActive('/autres') ? 'bg-blue-500 text-white' : ''}>
              Autres
            </Link>
          </li>
        </ul>
        <div className="flex items-center md:flex md:w-auto">
          <input
            className="bg-gray-700 focus:bg-gray-600 text-white rounded-lg px-3 py-2 mr-2"
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
            type="submit"
          >
            Rechercher
          </button>
        </div>
      </div>
    </nav>
  );
};

export default HomePage;