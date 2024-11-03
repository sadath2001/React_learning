import Counter from '../components/Counter';
import { useContext } from 'react';
import { CounterContext } from "../context/Counter"
function CounterPage() {
    const counterState = useContext(CounterContext);
    return (
        <div>
            <h1>Counter Value: {counterState?.count}</h1>
            <Counter />
            <Counter />
            <Counter />
        </div>
    );
}

export default CounterPage;
