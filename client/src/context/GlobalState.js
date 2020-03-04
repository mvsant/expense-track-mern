import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import axios from 'axios';

// Initial state
const initialState = {
  transactions: [],
  theme: "light",
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions

  async function getTransactions() {
    try{
      const response = await axios.get('/api/v/transactions');
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data.data
      })
    }
    catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }

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
        error: state.error,
        loading: state.loading,
        getTransactions,
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
