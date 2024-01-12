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

const appStateReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    // Add other cases
    default:
      return state;
  }
};

export default appStateReducer;
