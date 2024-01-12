import { useAppState } from '../../AppStateContext';

function EventList() {
  // Use the context to access state and dispatch
  const { state, dispatch } = useAppState();

  // Fetch events data from the state
  const { events } = state;

  const addEvent = () => {
    // Dispatch an action to add a new event to the state
    dispatch({
      type: 'ADD_EVENT',
      payload: `Event ${events.length + 1}`,
    });
  };

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Events</h3>
      <ul className="list-disc pl-4">
        {events.map((event) => (
          <li key={event.id} className="mb-2">
            {event.name}
          </li>
        ))}
      </ul>

      {/* Button to add a new event */}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={addEvent}
      >
        Add Event
      </button>
    </div>
  );
}

export default EventList;
