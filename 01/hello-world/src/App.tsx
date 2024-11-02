import React from 'react';
import Todo from './components/Todo/Todo';
import Counter from './components/Counter/Counter';
import { useState } from 'react';
const myTodoItems=[
  {
    id:1,
    task:'i have to watch tv',
  },{
     id:2,
    task:'i have to eat curry',
  }
]

const App: React.FC=()=> {
  const [visible,isVisible]=useState<boolean>(true)
  return (
    <div>
        <Todo item={myTodoItems}/>
        {visible?<Counter/>:""}
        <button onClick={()=>isVisible(!visible)}>Click me</button>
      </div>
  );
}

export default App;
