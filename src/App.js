import React from "react";
import "./App.css";
import AddTodo from "./components/addTodo";
import Header from "./components/header";
import Layout from "./components/common/layout";
import Report from "./components/report";
import TodoList from "./components/todoList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Layout>
        <Header></Header>
        <Report></Report>
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </Layout>
    </GlobalProvider>
  );
}

export default App;
