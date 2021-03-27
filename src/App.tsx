import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(localStorageTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // Add Todo Item in Todo Array
  const addHandler = (title: string) => {

    if (title.trim() === "") return;
    
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    setTodos([newTodo, ...todos]);
  }

  // Change Todo Completed
  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

  // Remove Todo Item in Todos array
  const removeHandler = (id: number) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="wrapper container">
        <TodoForm addHandler={addHandler} />
        <TodoList 
          todos={todos}
          toggleHandler={toggleHandler}
          removeHandler={removeHandler}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
