import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Import React-Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Redux Components
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  //<Provider store={createStoreWithMiddleware()}>
    <App />,
  //</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();