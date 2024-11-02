import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { increment, decrement } from "./redux/slices/counter/counterSlice";
import Counter from "./components/Counter";

function App() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Counter />
      <button onClick={() => dispatch(increment())}>Increment me</button>
      <button onClick={() => dispatch(decrement())}>Decrement me</button>
    </div>

  );
}

export default App;
