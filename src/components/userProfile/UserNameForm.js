import React, { useState } from 'react';
import { useAppState } from '../../AppStateContext';

function UserNameForm() {
  const { dispatch } = useAppState();
  const [name, setName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Dispatch action to set user name in the state
    dispatch({
      type: 'SET_USER_NAME',
      payload: {
        name,
      },
    });
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleFormSubmit}>
      <label className="text-xl mb-2 block">Enter your name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded px-4 py-2 w-full mb-4"
        placeholder="Your Name"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
      >
        Save
      </button>
    </form>
  );
}

export default UserNameForm;
