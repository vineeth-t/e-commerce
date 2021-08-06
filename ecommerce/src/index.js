import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupMockServer} from './api/mock.server';
import {StateProvider} from './contexts/state-context'
setupMockServer();
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
