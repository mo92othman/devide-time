import React, { useState } from 'react';

const UserForm = ({ onAddUser }) => {
  const [newUserName, setNewUserName] = useState('');
  const [newUserAmount, setNewUserAmount] = useState('');

  const addUser = () => {
    if (newUserName && newUserAmount) {
      const newUser = {
        name: newUserName,
        amount: parseFloat(newUserAmount),
      };
      onAddUser(newUser);
      setNewUserName('');
      setNewUserAmount('');
    }
  };

  return (
    <div className="mt-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Amount:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={newUserAmount}
          onChange={(e) => setNewUserAmount(e.target.value)}
        />
      </label>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={addUser}
      >
        Add Person
      </button>
    </div>
  );
};

export default UserForm;
