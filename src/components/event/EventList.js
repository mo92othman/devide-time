import { useAppState } from '../../AppStateContext';
import React from 'react';
import eventIcon from '../../assets/event.svg';

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

  const setCurrentEvent = (eventId) => {
    // Dispatch an action to set the current event
    dispatch({
      type: 'SET_CURRENT_EVENT',
      payload: eventId,
    });
  };

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2 p-2 rounded-md bg-green-200 p-2">
        <h3 className="text-lg font-bold">
          <span className="block ">Events</span>
        </h3>
        <img src={eventIcon} alt="Event Icon" className="w-8 h-6 pr-2" />
      </div>

      <ul className="list-none pl-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="mb-2 cursor-pointer hover:bg-gray-100 transform transition-transform duration-300 ease-in-out p-2 rounded-md"
            onClick={() => {
              setCurrentEvent(event.id);
              console.log('Current Event:', event);
            }}
          >
            {event.name}
          </li>
        ))}
      </ul>

      {/* Button to add a new event */}
      <button
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={addEvent}
      >
        Add Event
      </button>
    </div>
  );
}

export default EventList;
