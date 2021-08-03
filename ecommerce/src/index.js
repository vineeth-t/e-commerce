import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupMockServer} from './api/mock.server';
import {CartProvider} from './contexts/cart-context'
setupMockServer();
ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
