import React from 'react';

function Navbar({ setCategory, searchQuery, setSearchQuery, handleSearch }) {
  const categories = ['Games', 'Technology', 'Politics','International affairs','Entertainment','Crime','Finance','Current affairs'];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between p-2">
        <div className="flex-grow flex items-center justify-center">
          <ul className="flex space-x-6 m-0"> {/* Increase spacing as needed */}
            {categories.map(category => (
              <li
                key={category}
                className="cursor-pointer hover:text-gray-400"
                onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            className="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="e.g. Science"
            aria-label="Search"
          />
          <button
            type="button"
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleSearch}
            aria-label="Search"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
