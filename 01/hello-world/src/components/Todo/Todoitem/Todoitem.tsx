import React from "react"

interface Todoitemprops{
    task?:string; // ? means optional parameter
}
const Todoitem: React.FC<Todoitemprops>=(props)=>{
    // console.log('props: '+props.title)
    return(
        <li>{props.task}</li>
    )
}

export default Todoitem;