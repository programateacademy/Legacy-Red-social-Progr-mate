import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./assets/styles/global.scss";
import { store } from './redux/store';
import { Provider } from 'react-redux'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("app"));
