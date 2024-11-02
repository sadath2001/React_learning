import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
interface TodoItem {
  id: number;
  title: string;
}
function App() {
  const [todos, setTodos] = useState<TodoItem[]>([])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts").then(data => data.json()).then(e => setTodos(e as TodoItem[])).catch(err => console.log(err))

  // }, []);

  useEffect(() => {
    axios.get<TodoItem[]>("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setTodos(response.data))
  }, [])



  return (
    <div className='App'>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
