import React,{useState} from "react"

const Counter:React.FC=()=>{
    const [count,setCount]=useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
    const handleDecrement=()=>{
        if(count===0) return;
        setCount(count-1)

    }
    return(

        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Counter;