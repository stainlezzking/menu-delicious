import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/bootstrap.min.css';
import App from './App';
import { configureStore} from "@reduxjs/toolkit"
import { Provider, applyMiddleware} from "react-redux"
import reducer from "./store/menuReducer"
import UIreducer from './store/UI_reduces'

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer : {
    menuReducer : reducer,
    UIreducer : UIreducer,
  },
})
root.render(
  <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
