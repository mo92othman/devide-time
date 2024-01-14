import { useAppState } from '../../AppStateContext';
import React, { useState } from 'react';
import eventIcon from '../../assets/event.svg';
import deleteIcon from '../../assets/delete.svg';

function EventList() {
  // Use the context to access state and dispatch
  const { state, dispatch } = useAppState();

  // Fetch events data from the state
  const { events } = state;

  const addEvent = () => {
    // Dispatch an action to add a new event to the state
    dispatch({
      type: 'ADD_EVENT',
    });
  };

  const setCurrentEvent = (eventId) => {
    // Dispatch an action to set the current event
    dispatch({
      type: 'SET_CURRENT_EVENT',
      payload: eventId,
    });
  };

  const deleteEvent = (eventId) => {
    dispatch({
      type: 'DELETE_EVENT',
      payload: eventId,
    });
  };

  const renameEvent = (eventId, newName) => {
    dispatch({
      type: 'RENAME_EVENT',
      payload: { eventId, newName },
    });
  };

  const [editableEventId, setEditableEventId] = useState(null);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2 p-2 rounded-md bg-indigo-300 p-2">
        <h3 className="text-lg font-bold">
          <span className="block ">Events</span>
        </h3>
        <img src={eventIcon} alt="Event Icon" className="w-8 h-6 pr-2" />
      </div>

      <ul className="list-none pl-4">
        {events.map((event) => (
          <li
            key={event.id}
            className={`mb-2 cursor-pointer hover:bg-indigo-200 transform duration-100 ease-in-out p-2 rounded-md flex justify-between items-center ${
              state.currentEventId === event.id ? 'bg-indigo-300' : ''
            }`}
            onClick={() => {
              setCurrentEvent(event.id);
              console.log('Current Event:', event);
            }}
          >
            {editableEventId === event.id ? (
              <input
                type="text"
                value={event.name}
                onChange={(e) => renameEvent(event.id, e.target.value)}
                onBlur={() => setEditableEventId(null)}
                autoFocus
              />
            ) : (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  setEditableEventId(event.id);
                }}
              >
                {event.name}
              </span>
            )}
            <img
              src={deleteIcon}
              alt="Delete Icon"
              className="w-4 h-4 cursor-pointer transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation(); // Stop event propagation
                deleteEvent(event.id);
              }}
            />
          </li>
        ))}
      </ul>

      {/* Button to add a new event */}
      <button
        className="w-full bg-teal-600 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded"
        onClick={addEvent}
      >
        Add Event
      </button>
    </div>
  );
}

export default EventList;
