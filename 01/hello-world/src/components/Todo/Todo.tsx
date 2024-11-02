import React from "react"
import Todoitem from "./Todoitem/Todoitem";
import "./style.css"

interface todoItem{
    id:number;
    task:string;
}

interface todoItemProps{
    item:todoItem[];
}
const Todo: React.FC<todoItemProps>=(props)=>{
    return(
        <div className="todo-container"> 
            <ol>
            {
                props.item.map(i=><Todoitem key={i.id} task={i.task}/>)
            }

        </ol></div>
       
    )
}

export default Todo;