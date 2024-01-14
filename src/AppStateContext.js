import React, { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
  events: [],
  currentEventId: null,
  user: {
    name: '',
    avatarUrl: '',
  },
};
const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  // Load state from local storage on component mount
  useEffect(() => {
    const storedState = localStorage.getItem('appState');
    if (storedState) {
      dispatch({ type: 'SET_STATE', payload: JSON.parse(storedState) });
    }
  }, []);

  // Save state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

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
        name: 'Add title...',
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
      const { eventId: setTransactionsEventId, transactions } = action.payload;
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === setTransactionsEventId
            ? { ...event, transactions }
            : event,
        ),
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

    case 'RENAME_EVENT':
      const { eventId: renameEventId, newName } = action.payload;
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === renameEventId ? { ...event, name: newName } : event,
        ),
      };
    case 'SET_STATE':
      return action.payload;

    case 'SET_USER_NAME':
      const { name } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          name,
        },
      };

    case 'SET_USER_URL':
      const { avatarUrl } = action.payload;
      return {
        ...state,
        user: {
          ...state.user,
          avatarUrl,
        },
      };

    default:
      return state;
  }
};

export default appStateReducer;
