import React, { useState } from 'react';
import LogoutWarning from './LogoutWarning';

const themeColors = [
  'from-indigo-500 via-purple-500 to-amber-400',
  'from-fuchsia-500 via-cyan-500 to-purple-500',
  'bg-gradient-to-r from-blue-200 to-cyan-200',
  'bg-gradient-to-r from-fuchsia-600 to-pink-600',
];

function Header() {
  const [showWarning, setShowWarning] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleLogout = () => {
    // Show the logout warning
    setShowWarning(true);
  };

  const hideLogoutWarning = () => {
    // Close the confirmation dialog
    setShowWarning(false);
  };

  const handleChangeTheme = () => {
    // Cycle through the theme colors
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % themeColors.length);
  };

  const currentThemeColor = themeColors[currentColorIndex];

  return (
    <header
      className={`bg-gradient-to-r text-white p-4 border-b-4 border-white flex flex-col md:flex-row items-center w-full justify-between shadow-lg ${currentThemeColor}`}
    >
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
        <button
          onClick={handleLogout}
          className="bg-cyan-800 hover:bg-cyan-600 text-white font-bold lg:py-2 sm:py-1 px-4 rounded"
        >
          Sign out
        </button>
        <button
          onClick={handleChangeTheme}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold lg:py-2 sm:py-1 px-4 rounded"
        >
          Change Theme
        </button>
      </div>
      {/* Logout warning */}
      {showWarning && <LogoutWarning onClose={hideLogoutWarning} />}
    </header>
  );
}

export default Header;
