import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./interfaces";

const App: React.FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    setTodos([newTodo, ...todos]);
  }

  const toggleHandler = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo
    }))
  }

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
