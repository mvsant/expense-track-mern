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
      const response = await axios.get('/api/v1/transactions');
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

  async function deleteTransaction(id) {
    try{
      await axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });

    }
    catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function addTransaction(trasaction) {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    
    try {
      const response = await axios.post('/api/v1/transactions', trasaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: response.data.data
      });
      
    }
    catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      })
    }
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
