import { useAppState } from '../../AppStateContext';
import UserForm from './UserForm';
import {
  calculateTotalAmount,
  calculateTransactions,
} from '../../helpers/graphUtils';

function EventDetail() {
  const { state, dispatch } = useAppState();
  // Get the current event ID from the global state
  const currentEventId = state.currentEventId;

  // Get the current event using the currentEventId
  const currentEvent = state.events.find(
    (event) => event.id === currentEventId,
  );
  // const transactionsList = currentEvent.transactions;

  // Check if there's no current event
  if (!currentEvent) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto p-4">
          <p className="text-xl font-bold text-red-500">
            Please select an event to view details.
          </p>
        </div>
      </div>
    );
  }

  const totalAmount = calculateTotalAmount(currentEvent.users);

  const settleDebts = () => {
    try {
      const settle = calculateTransactions(currentEvent.users);
      dispatch({
        type: 'SET_TRANSACTIONS',
        payload: {
          eventId: currentEventId, // Use currentEventId here
          transactions: settle,
        },
      });
    } catch (error) {
      console.error('Error calculating transactions:', error);
    }
  };

  const getUserById = (userId) =>
    currentEvent.users.find((user) => user.id === userId);

  return (
    <div className=" min-h-screen py-8">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">
          Total Amount: ${totalAmount}
        </h1>

        <ul className="list-disc pl-4">
          {currentEvent.users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name}: ${user.amount}
            </li>
          ))}
        </ul>

        {/* User Form */}
        <UserForm eventId={currentEventId} />

        {/* Button to Settle Debts */}
        <button
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={settleDebts}
        >
          Settle Debts
        </button>

        {/* Display Transactions */}
        {currentEvent.transactions && currentEvent.transactions.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Transactions:</h2>
            <ul className="list-disc pl-4">
              {currentEvent.transactions.map((transaction, index) => (
                <li key={index} className="mb-2">
                  {getUserById(transaction.from)?.name} owes{' '}
                  {getUserById(transaction.to)?.name} ${transaction.amount}
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
