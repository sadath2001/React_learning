import React from "react";
import { useCart } from "../context/Cart";
interface items {
    name?: string,
    value?: number
}
const Item: React.FC<items> = (props) => {
    const cartContext = useCart()
    console.log(cartContext?.items)
    return (
        <div>
            <h1>{props.name}</h1>
            <h4>{props.value}</h4>
            <button onClick={() => cartContext?.setItems([...cartContext.items, { name: props.name, value: props.value }])}>Add to cart</button>
        </div>
    )
}

export default Item;