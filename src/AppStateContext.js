import React, { createContext, useContext, useReducer } from 'react';

// The initial state
const initialState = {
  events: [], // Array to store events
  // other relevant state properties could be added here
};

// Create the context
const AppStateContext = createContext();

//  a provider component
export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

//  a custom hook to use the context
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

let eventIdCounter = 1; // Initialize a counter for event IDs

const generateEventId = () => {
  return eventIdCounter++;
};

const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      const newEvent = {
        id: generateEventId(),
        name: action.payload,
        users: [],
        transactions: [],
        // Other properties as needed
      };
      return {
        ...state,
        events: [...state.events, newEvent],
      };

    case 'ADD_USER':
      const { eventId, ...user } = action.payload;
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === eventId
            ? { ...event, users: [...event.users, user] }
            : event,
        ),
      };

    case 'SET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    // Add other cases
    default:
      return state;
  }
};

export default appStateReducer;
