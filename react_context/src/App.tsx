import Cart from "./components/Cart";
import Item from "./components/Item";

function App() {
  return (
    <div>
      <Item name="machbook" value={12} />
      <Cart />
    </div>
  );
}

export default App;
