import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';


function App() {
  const [todos, setTodos] = useState(() => { 
    const saved = localStorage.getItem( "todos" ); 
    const initialValue = JSON.parse( saved ); 
    return (
      initialValue || []
    ) 
  });    

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random(),
        task: userInput.toLowerCase(),
      }
      setTodos([...todos, newItem])
    }
    if(userInput.length >= 23) {
      setTodos([...todos])
    }
}

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className='container'>
        <header className='todo-header'>
          <h1>To do list</h1>
          <h2>Tasks: {todos.length}</h2>
        </header>
          <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
              return (
                <ToDo
                  todo={todo}
                  key={todo.id}
                  removeTask={removeTask}
                />
              )
            })}
      </div>
    </div>
  )
};

export default App