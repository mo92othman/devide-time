// LogoutWarning.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppState } from '../AppStateContext';

function LogoutWarning({ onClose }) {
  const { dispatch } = useAppState();

  const handleConfirmLogout = () => {
    // Dispatch the action to clear local storage and reset the state
    dispatch({ type: 'CLEAR_LOCAL_STORAGE' });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <p className="text-lg text-black font-semibold mb-4">
          This will delete your data. Are you sure you want to log out?
        </p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 mr-2 rounded"
            onClick={onClose}
          >
            No
          </button>
          <Link to="/">
            <button
              className="bg-cyan-800 text-white px-4 py-2 rounded"
              onClick={handleConfirmLogout}
            >
              Yes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogoutWarning;
