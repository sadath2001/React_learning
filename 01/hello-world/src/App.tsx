import React from 'react';
import Todo from './components/Todo/Todo';
import Counter from './components/Counter/Counter';

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
  return (
    <div>
        <Todo item={myTodoItems}/>
        <Counter/>
      </div>
  );
}

export default App;
