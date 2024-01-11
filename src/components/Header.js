import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-white p-4 border-b-4 border-white flex items-center w-full justify-between shadow-lg">
      <div className="flex items-center">
        <img
          src="/assets/logo.jpg"
          alt="Logo"
          className="w-16 h-16 rounded-full"
        />
        <h1 className="text-2xl font-bold ml-4">Split Bills, Share Thrills!</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Sign in
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Change Theme
        </button>
      </div>
    </header>
  );
}

export default Header;
