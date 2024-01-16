import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-400 text-white p-4 border-b-4 border-white flex flex-col md:flex-row items-center w-full justify-between shadow-lg">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src="/assets/logo.svg"
          alt="Logo"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-xl md:text-2xl font-bold ml-4">
          Split Bills, Share Thrills!
        </h1>
      </div>
      <div className="flex items-center space-y-0 md:space-y-0 space-x-4">
        <Link to="/">
          <button className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold lg:py-2 sm:py-1 px-4 rounded">
            Sign out
          </button>
        </Link>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold lg:py-2 sm:py-1 px-4 rounded">
          Change Theme
        </button>
      </div>
    </header>
  );
}

export default Header;
