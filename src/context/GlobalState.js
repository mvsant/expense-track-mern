import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: [],
  theme: "light"
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransaction(trasaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: trasaction
    });
  }

  function changeTheme(theme) {
    dispatch({
      type: "CHANGE_THEME",
      payload: theme
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
        theme: state.theme,
        changeTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
