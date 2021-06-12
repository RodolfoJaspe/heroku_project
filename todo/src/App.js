import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css";
import ls from 'local-storage';

function url(path){
    return process.env.NODE_ENV == "development" ? `http://localhost:5000${path}`: path
}
 
const todos = [ 
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]

function App () {
    const [data, setData] = useState("Hi")
    useEffect(()=>{
        fetch(url("/api/"))
            .then(res=>res.json())
            .then(apiData => setData(apiData.data))
    },[])

    
    const [state, setState] = useState({
        todos: todos
    })

  const toggleTodo = todoId => {
      const updatedTodos = state.todos.map(todo => {
          if(todoId === todo.id) {
            return {...todo, completed : !todo.completed}
          }
          return todo
      })
      console.log("updated todos", updatedTodos)
      setState({...state,
      todos: updatedTodos})
  }

  const addTodo = newTodo => {
      console.log(newTodo)
      setState({
          ...state, 
          todos : [...state.todos, {
              task: newTodo,
              id: Date.now(),
              completed: false
          }]
      })
      ls.setItem('newTodo', newTodo);
  }

  const clearCompleted = () => {
      setState({
          ...state,
          todos : state.todos.filter(todo => !todo.completed)
      })
  }
    return (
      <div className="app">
          <h1>To-do List</h1>
        <TodoForm 
            addTodo={addTodo}
            clearCompleted={clearCompleted}
             />
        <TodoList 
            todos={state.todos} 
            toggleTodo={toggleTodo}
            />
      </div>
    );
}

export default App;
