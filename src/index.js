import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {setupMockServer} from './api/mock.server';
import {StateProvider,FilterDataProvider} from './contexts/index'

setupMockServer();
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <FilterDataProvider>
      <App />
      </FilterDataProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
