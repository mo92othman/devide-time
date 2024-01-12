import React, { useState } from 'react';
import {
  calculateTotalAmount,
  calculateTransactions,
} from '../../helpers/graphUtils';
import UserForm from './UserForm'; // Update this import path based on your project structure

function Event() {
  const [users, setUsers] = useState([]);
  const [transactionsList, setTransactionsList] = useState([]);

  const totalAmount = calculateTotalAmount(users);

  const addUser = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
  };

  const settleDebts = () => {
    // Call a function to calculate transactions
    const transactions = calculateTransactions(users);

    // Update the state with the transactions list
    setTransactionsList(transactions);
  };

  // Helper function to get user by ID
  const getUserById = (userId) => users.find((user) => user.id === userId);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Total Amount: ${totalAmount}
        </h1>

        {/* Display Users and Payments */}
        <ul className="list-disc pl-4">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}: ${user.amount}
            </li>
          ))}
        </ul>

        {/* User Form */}
        <UserForm onAddUser={addUser} />

        {/* Button to Settle Debts */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={settleDebts}
        >
          Settle Debts
        </button>

        {/* Display Transactions */}
        {transactionsList.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Transactions:</h2>
            <ul className="list-disc pl-4">
              {transactionsList.map((transaction, index) => (
                <li key={index} className="mb-2">
                  {getUserById(transaction.from).name} owes{' '}
                  {getUserById(transaction.to).name} ${transaction.amount}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
