// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './static/css/index.css';
import App from './Parents/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { settingsReducer } from './Reducer/reducer';
import { legacy_createStore as createStore } from 'redux';

const store = createStore(settingsReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
