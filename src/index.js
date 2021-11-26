import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider,FilterDataProvider,Auth} from './contexts/index'
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <FilterDataProvider>
        <Router>
          <Auth>
            <App />
          </Auth>
        </Router>
      </FilterDataProvider>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
