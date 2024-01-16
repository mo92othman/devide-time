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
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl font-bold text-red-500">
          Please select an event to view details.
        </p>
        <h1 className="mt-2 text-6xl text-red-500 border-4 border-red-500 rounded-full inline-flex items-center justify-center h-12 w-12 p-10">
          !
        </h1>
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
        <h1 className="text-3xl font-bold text-cyan-800 mb-4">
          Total Amount: €{totalAmount}
        </h1>

        <ul className="list-none pl-0">
          {currentEvent.users.map((user, index) => (
            <li
              key={user.id}
              className={`mb-0 py-1 px-2 ${
                index % 2 === 0 ? 'bg-indigo-100' : 'bg-indigo-50'
              }`}
            >
              {user.name}{' '}
              <span className="font-bold text-cyan-800">
                Paid: €{user.amount}
              </span>
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
            <h2 className="text-xl font-bold text-cyan-800 mb-2">
              Transactions:
            </h2>
            <ul className="list-none pl-0">
              {currentEvent.transactions.map((transaction, index) => (
                <li
                  key={index}
                  className={`mb-0 py-1 px-2 ${
                    index % 2 === 0 ? 'bg-indigo-200' : 'bg-indigo-100'
                  }`}
                >
                  <span className="text-red-700 font-bold">
                    {getUserById(transaction.from)?.name}
                  </span>{' '}
                  owes{' '}
                  <span className="text-cyan-700 font-bold">
                    {getUserById(transaction.to)?.name} €{transaction.amount}
                  </span>
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
