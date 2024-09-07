import React, { useState, createContext, useEffect } from 'react';
import "./App.css";
import TodoInput from './components/TodoInput.jsx';
import Todolist from './components/TodoList.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const TodoContext = createContext();

function App() {
  const [listTodo, setListTodo] = useState([]);

  // Retrieve todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('listTodo');
    if (savedTodos) {
      setListTodo(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever listTodo changes
  useEffect(() => {
    if (listTodo.length > 0) {
      localStorage.setItem('listTodo', JSON.stringify(listTodo));
    }
  }, [listTodo]);

  let addList = (inputText) => {
    if (inputText !== '') {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo(newListTodo);
  };

  return (
    <TodoContext.Provider value={{ listTodo, addList, deleteListItem }}>
      <div className="main-container">
        <div className="center-container">
          <TodoInput />
          <h1 className="app-heading">TODO</h1>
          <hr />
          {listTodo.length === 0 ? (
            <p>No Todos Available</p>
          ) : (
            <ul>
              {listTodo.map((listItem, i) => (
                <Todolist key={i} index={i} item={listItem} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;


