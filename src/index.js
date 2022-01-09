import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {StateProvider,FilterDataProvider,AuthProvider} from './contexts/index'
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
      <StateProvider>
        <FilterDataProvider>
          <Router>
              <AuthProvider>
                  <App />
              </AuthProvider>
          </Router>
        </FilterDataProvider>
      </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);
