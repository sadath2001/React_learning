import React from "react";
import { useCount } from "../context/Counter";
const Counter: React.FC = () => {
    const counterContext = useCount();
    return (
        <div>
            <h1>Count is: {counterContext?.count} </h1>
            <button onClick={() => counterContext?.setCount(counterContext?.count + 1)}>Increment</button>
            <button onClick={() => counterContext?.setCount(counterContext.count - 1)}>Decrement</button>
        </div>
    )
}

export default Counter;
