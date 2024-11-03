import { createContext, ReactNode, useContext, useState } from "react";
interface CartContextProviderProps {
    children: ReactNode
}

interface CartContextType {
    items: any[],
    setItems: React.Dispatch<React.SetStateAction<any[]>>;

}
export const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [items, setItems] = useState<any[]>([]);
    return <CartContext.Provider value={{ items, setItems }} >{children}</CartContext.Provider>
};

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}
