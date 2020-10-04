import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state
const initialState = {
  todos: [
    // {
    //   _id: "12345",
    //   title: "buy food",
    //   isCompleted: false,
    // },
    // {
    //   _id: "56789",
    //   title: "Pet the dog",
    //   isCompleted: false,
    // },
    // {
    //   _id: "11121",
    //   title: "Make breakfast",
    //   isCompleted: true,
    // },
  ],
  error: null,
  loading: true,
};

// create global context
export const GlobalContext = createContext(initialState);

// create provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const getTodos = async () => {
    // get todos from backend
    try {
      // call backend api
      const { data } = await axios.get("http://localhost:4000/api/todos");
      // save response in local state
      dispatch({
        type: "GET_TODOS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error,
      });
    }
  };

  const deleteTodo = async (id) => {
    try {
      // call backend api
      const { data } = await axios.delete(
        `http://localhost:4000/api/delete/${id}`
      );
      console.log("deletion response: ", data);
      // delete in local state
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error,
      });
    }
  };

  const addTodo = (todo) => {
    dispatch({
      type: "ADD_TODO",
      payload: todo,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        todos: state.todos,
        error: state.error,
        loading: state.loading,
        deleteTodo,
        addTodo,
        getTodos,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
