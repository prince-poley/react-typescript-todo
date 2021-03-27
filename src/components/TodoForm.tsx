import React from "react";

interface TodoFormProps {
  addHandler(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = ({ addHandler }) => {
  const [title, setTitle] = React.useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  
  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      addHandler(title);
      setTitle("");
    }
  }

  return (
    <div className="input-field col s6">
      <input 
        onChange={changeHandler}
        onKeyPress={onKeyPressHandler}
        value={title}
        placeholder="Введите название задачи"
        type="text" 
      />
    </div>
  )
}