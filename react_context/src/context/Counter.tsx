import { createContext, ReactNode, useState } from "react";
import { useContext } from "react";
interface ContextProviderProps {
    children: ReactNode;
}

interface CounterContextType {
    count: number;
    // setCount: React.Dispatch<React.SetStateAction<number>>;
    setCount: (num: number) => void;
}
export const CounterContext = createContext<CounterContextType | null>(null);

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [count, setCount] = useState<number>(0);
    return <CounterContext.Provider value={{ count, setCount }}>{children}</CounterContext.Provider>
}
export const useCount = () => {
    const cart = useContext(CounterContext);
    return cart;

}