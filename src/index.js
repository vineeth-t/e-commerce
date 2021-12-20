import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider,FilterDataProvider,Auth} from './contexts/index'
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Auth>
      <StateProvider>
        <FilterDataProvider>
          <Router>
              <App />
          </Router>
        </FilterDataProvider>
      </StateProvider>
    </Auth>
  </React.StrictMode>,
  document.getElementById('root')
);
