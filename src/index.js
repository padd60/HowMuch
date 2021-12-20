import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

let member = ["test", "test2"];

let board = [""];

let reply = [""];

let value = [""];

let attach = [""];

function memberReducer(state = member, actions) {
  return state;
}

function boardReducer(state = board, actions) {
  return state;
}

function replyReducer(state = reply, actions) {
  return state;
}

function valueReducer(state = value, actions) {
  return state;
}

function attachReducer(state = attach, actions) {
  return state;
}

let store = createStore(
  combineReducers({
    memberReducer,
    boardReducer,
    replyReducer,
    valueReducer,
    attachReducer,
  })
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
