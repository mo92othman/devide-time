import React, { useState } from 'react';
import { useAppState } from '../../AppStateContext';
import UserForm from './UserForm';
import {
  calculateTotalAmount,
  calculateTransactions,
} from '../../helpers/graphUtils';

function EventDetail() {
  const { state, dispatch } = useAppState();
  const eventId = 2; // Replace with the actual event ID or pass it as a prop
  const event = state.events.find((event) => event.id === eventId) || {
    users: [],
    transactions: [],
  };

  const [transactionsList, setTransactionsList] = useState([]);

  const totalAmount = calculateTotalAmount(event.users);

  const settleDebts = () => {
    try {
      const transactions = calculateTransactions(event.users);
      dispatch({
        type: 'SET_TRANSACTIONS',
        payload: { eventId, transactions },
      });

      setTransactionsList(transactions); // Update local state
    } catch (error) {
      console.error('Error calculating transactions:', error);
    }
  };

  const getUserById = (userId) =>
    event.users.find((user) => user.id === userId);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Total Amount: ${totalAmount}
        </h1>

        <ul className="list-disc pl-4">
          {event.users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}: ${user.amount}
            </li>
          ))}
        </ul>

        {/* User Form */}
        <UserForm eventId={eventId} />

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

export default EventDetail;
