import React,{useState} from "react"
import { useMutation,useQueryClient } from "@tanstack/react-query"
const createTodo= (item)=>{
    return fetch("http://localhost:8000/todo/create",{
        method:"POST",
        headers:{
           "Content-Type":"application/json",
        },
        body:JSON.stringify({title:item}),
    });
};

const Form=()=>{
    const [item,setItem]=useState("");
    const queryCLient=useQueryClient();
    const todoMutation=useMutation({
        mutationFn: () => createTodo(item),
        onSuccess:()=>{
            console.log("success")
            queryCLient.invalidateQueries(['todo'])
        },
        onError:(err)=>{
            console.log(err)
        }
    });
    return(
        <div>
           <input type="text" onChange={e=>setItem(e.target.value)} value={item}/>
           <button onClick={()=>todoMutation.mutate()}>Add</button>
        </div>
    )
}

export default Form;