import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { ContextProvider } from "./context/Counter"
import { CartContextProvider } from './context/Cart';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <CartContextProvider>
      <App />

    </CartContextProvider>
    {/* </ContextProvider> */}

  </React.StrictMode>
);
