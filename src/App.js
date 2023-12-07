// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import NewComponent from './components/NewComponent'; // Import the new component

function App() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    setShowNewComponent(true);
  };

  return (
    <div className="bg-gray-200 p-4">
      <Header />
      <p className="text-xl font-bold text-blue-600">
        This is a part of the body
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Click me
      </button>
      {showNewComponent && <NewComponent />}
    </div>
  );
}

export default App;
