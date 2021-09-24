import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//IMPORT REACT-BOOTSTRAP CSS LIBRARY
import 'bootstrap/dist/css/bootstrap.min.css';
//IMPORT REDUX TOOLKIT 
import { store } from "./services/store";
import { Provider } from "react-redux";


ReactDOM.render(
 <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
