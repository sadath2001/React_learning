import React,{useState,useEffect} from "react"

const Counter:React.FC=()=>{
    const [count,setCount]=useState<number>(0)

    useEffect(()=>{
            console.log("Component Mounted")

            return ()=> console.log('component unmounted')

    
    },[])

    useEffect(()=>{
        console.log("counter incremented (new render): ",count)

        return ()=>console.log('counter purana wala unmount hua so value: ',count)
    },[count])
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