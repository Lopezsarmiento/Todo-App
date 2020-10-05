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

const rest = {
  create: "http://localhost:4000/api/create",
  get: "http://localhost:4000/api/todos",
  delete: "http://localhost:4000/api/delete/",
  update: "http://localhost:4000/api/update/",
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
      const { data } = await axios.get(rest.get);
      // save response in local state
      dispatch({
        type: "GET_TODOS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error.response.data,
      });
    }
  };
  const updateTodo = async (todo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // update isCompleted value
    const updatedTodo = {
      id: todo._id,
      title: todo.title,
      isCompleted: !todo.isCompleted,
    };

    try {
      // call backend api
      await axios.put(`${rest.update}${updatedTodo.id}`, updatedTodo, config);

      // update specific todo
      const todos = [...state.todos];
      const index = todos.indexOf(todo);
      todos[index] = { ...todos[index] };
      todos[index].isCompleted = !todos[index].isCompleted;

      // update in local state
      dispatch({
        type: "UPDATE_TODO",
        payload: todos,
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
      await axios.delete(`${rest.delete}${id}`);
      // delete in local state
      dispatch({
        type: "DELETE_TODO",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error.response.data,
      });
    }
  };

  const addTodo = async (todo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // call api
    try {
      const { data } = await axios.post(rest.create, todo, config);

      // save new todo in local state
      dispatch({
        type: "ADD_TODO",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "TODO_ERROR",
        payload: error.response.data,
      });
    }
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
        updateTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
