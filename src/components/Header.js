import React from 'react';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <img
        src="/assets/logo.jpg"
        alt="Logo"
        className="w-16 h-16 rounded-full"
      />
      <h1 className="text-2xl font-bold ml-4">This is just a header</h1>
    </header>
  );
}

export default Header;
