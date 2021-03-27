import React from 'react'
import { ITodo } from '../interfaces'

interface TodoListProps {
  todos: ITodo[],
  toggleHandler: (id: number) => void,
  removeHandler: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleHandler, removeHandler }) => {
  
  if (todos.length === 0) {
    return <p className="center">No active todo</p>
  }
  
  return (
    <ul>
      { todos?.map(todo => {
        return (
          <li 
            className={todo.completed ? "todo completed" : "todo"} 
            key={todo.id}
          >
            <label>
              <input 
                type="checkbox"
                onChange={() => toggleHandler(todo.id)}
                checked={todo.completed} 
              />
              <span>{todo.title}</span>
              <i
                onClick={() => removeHandler(todo.id)}  
                className="material-icons red-text"
              >
                delete
              </i>
            </label>
          </li>
        )
      }) }
    </ul>
  )
}
