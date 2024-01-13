import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  events: [],
  currentEventId: null,
};

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};

let eventIdCounter = 1;

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

    case 'SET_CURRENT_EVENT':
      return {
        ...state,
        currentEventId: action.payload,
      };

    case 'DELETE_EVENT':
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
        // currentEventId: null, // Clear current event if it is deleted
      };

    default:
      return state;
  }
};

export default appStateReducer;
