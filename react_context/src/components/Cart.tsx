import React from 'react'
import { useCart } from '../context/Cart';

const Cart: React.FC = () => {
    const cartContext = useCart()
    const total = cartContext?.items.reduce((a, b) => a + b.value, 0)
    return (
        <div>
            <ul>
                {cartContext && cartContext.items.map((item) => (
                    <li key={item.name}>{item.name} | {item.value}</li>
                ))}
            </ul>
            <h5>Total Bill: {total}</h5>
        </div>
    )
}

export default Cart;