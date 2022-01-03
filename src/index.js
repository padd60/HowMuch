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
import axios from "axios";
import { CookiesProvider } from "react-cookie";

axios.defaults.xsrfCookieName = "XSRF-TOKEN";
axios.defaults.xsrfHeaderName = "X-CSRF-TOKEN";
// axios.defaults.headers.common['X-CSRF-TOKEN'] = token;

let member = "";

let board = [
  {
    bno: 1,
    mno: 1,
    title: "test_title1",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname1",
    tagList: [
      "태그를 길게 만들어보자",
      "이것은 장신태그이다~~~~~~~~~~~~~~~~~",
      "태그3",
    ],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
    rcount: 0,
    end: false,
    suggestion: 3000,
  },
  {
    bno: 2,
    mno: 2,
    title:
      "제목을 길게만들어보자 아 샘플 텍스트 만들기 귀찮네 얼마나 길게 해야되는겨?",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    writer: "testname2",
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",

    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["점심뭐먹지?", "점메추부탁", "국밥어떰?"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    rlike: 0,
    rdislike: 0,
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
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2", "태그3"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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
    tagList: ["태그1", "태그2"],
    bdate: "2021/00/00",
    blike: 0,
    bdislike: 0,
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

let API_URL = "http://localhost:8181";

const signup = async (email, pw, nick) => {
  await axios
    .post(API_URL + "/signUp", {
      email: email,
      pw: pw,
      nick: nick,
    })
    .then((result) => {
      console.log("success signup");
      member = result.data;
      console.log(member);
    })
    .catch(console.log("signup error"));
};

// const login = async (username, password) => {
//   await axios
//     .post(API_URL + "/login", {
//       username: username,
//       password: password,
//     })
//     .then((result) => {
//       console.log("success login");
//       console.log(result.data);
//     })
//     .catch((error) => {
//       console.log("login error");
//       console.log(error);
//     });
// };

function memberReducer(state = member, actions) {
  if (actions.type === "signup") {
    console.log("signup");

    signup(actions.payload.email, actions.payload.pw, actions.payload.nick);

    return state;
  }
  // if (actions.type === "login") {
  //   login(actions.payload.username, actions.payload.password);
  //   // test();

  //   return state;
  // }
  return state;
}

function boardReducer(state = board, actions) {
  if (actions.type === "readList") {
    console.log("readList");

    state = actions.payload;

    return state;
  }
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
      <CookiesProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CookiesProvider>
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
