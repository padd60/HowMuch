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

let member = [
  {
    mno: 1,
    email: "test@naver.com",
    nick: "testname1",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 2,
    email: "test@naver.com",
    nick: "testname2",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 3,
    email: "test@naver.com",
    nick: "testname3",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 4,
    email: "test@naver.com",
    nick: "testname4",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 5,
    email: "test@naver.com",
    nick: "testname5",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 6,
    email: "test@naver.com",
    nick: "testname6",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 7,
    email: "test@naver.com",
    nick: "testname7",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 8,
    email: "test@naver.com",
    nick: "testname8",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 9,
    email: "test@naver.com",
    nick: "testname9",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 10,
    email: "test@naver.com",
    nick: "testname10",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 11,
    email: "test@naver.com",
    nick: "testname11",
    pw: "qwer1234",
    point: 0,
  },
  {
    mno: 12,
    email: "test@naver.com",
    nick: "testname12",
    pw: "qwer1234",
    point: 0,
  },
];

let board = [
  {
    bno: 1,
    mno: 1,
    title: "test_title1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname1",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 3000,
  },
  {
    bno: 2,
    mno: 2,
    title: "test_title2",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname2",
    tag: "태그1,태그2",
    bdate: "2021/00/00",

    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 3,
    mno: 3,
    title: "test_title3",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname3",
    tag: "태그1",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 50000,
  },
  {
    bno: 4,
    mno: 4,
    title: "test_title4",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname4",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 5,
    mno: 5,
    title: "test_title5",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname5",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 10000,
  },
  {
    bno: 6,
    mno: 6,
    title: "test_title6",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname6",
    tag: "태그1,태그2",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 7,
    mno: 7,
    title: "test_title7",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname7",
    tag: "태그1",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 8,
    mno: 8,
    title: "test_title8",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname8",
    tag: "태그1,태그2",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 9,
    mno: 9,
    title: "test_title9",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname9",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 10,
    mno: 10,
    title: "test_title10",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname10",
    tag: "태그1",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 11,
    mno: 11,
    title: "test_title11",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname11",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 12,
    mno: 12,
    title: "test_title12",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname12",
    tag: "태그1,태그2",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
];

let reply = [
  {
    mno: 1,
    bno: 1,
    rno: 1,
    replyer: "testname1",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 2,
    bno: 2,
    rno: 2,
    replyer: "testname2",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 3,
    bno: 3,
    rno: 3,
    replyer: "testname3",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 4,
    bno: 4,
    rno: 4,
    replyer: "testname4",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 5,
    bno: 5,
    rno: 5,
    replyer: "testname5",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 6,
    bno: 6,
    rno: 6,
    replyer: "testname6",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 7,
    bno: 7,
    rno: 7,
    replyer: "testname7",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 8,
    bno: 8,
    rno: 8,
    replyer: "testname8",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 9,
    bno: 9,
    rno: 9,
    replyer: "testname9",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 10,
    bno: 10,
    rno: 10,
    replyer: "testname10",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 11,
    bno: 11,
    rno: 11,
    replyer: "testname11",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
  {
    mno: 12,
    bno: 12,
    rno: 12,
    replyer: "testname12",
    rcontent:
      "장식하는 힘차게 무한한 피는 보이는 이상은 하는 봄바람이다. 작고 가는 몸이 하였으며, 것이다.",
    rdate: "2021/00/00",
    rupdate: "2021/11/11",
    like: 0,
    dislike: 0,
  },
];

let hotBoard = [
  {
    bno: 9,
    mno: 9,
    title: "test_title9",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname9",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
  {
    bno: 5,
    mno: 5,
    title: "test_title5",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname5",
    tag: "태그1,태그2,태그3",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 10000,
  },
  {
    bno: 12,
    mno: 12,
    title: "test_title12",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname12",
    tag: "태그1,태그2",
    bdate: "2021/00/00",
    like: 0,
    dislike: 0,
    rcount: 0,
    end: false,
    suggestion: 0,
  },
];

let value = [
  {
    vno: 1,
    rater: "rater1",
    email: "test@naver.com",
    price: 1000,
    vdate: "2021/00/00",
    bno: 1,
  },
  {
    vno: 2,
    rater: "rater2",
    email: "test@naver.com",
    price: 1500,
    vdate: "2021/00/00",
    bno: 1,
  },
  {
    vno: 3,
    rater: "rater3",
    email: "test@naver.com",
    price: 2000,
    vdate: "2021/00/00",
    bno: 1,
  },
  {
    vno: 4,
    rater: "rater4",
    email: "test@naver.com",
    price: 5000,
    vdate: "2021/00/00",
    bno: 1,
  },
  {
    vno: 5,
    rater: "rater5",
    email: "test@naver.com",
    price: 10000,
    vdate: "2021/00/00",
    bno: 1,
  },
];

let attach = [
  {
    uuid: "sample_uuid",
    path: "project/images",
    filename: "sample_image",
    bno: 1,
  },
];

function memberReducer(state = member, actions) {
  return state;
}

function boardReducer(state = board, actions) {
  return state;
}

function hotBoardReducer(state = hotBoard, actions) {
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
    hotBoardReducer,
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
