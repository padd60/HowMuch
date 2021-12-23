import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import LoginPage from "./components/LoginPage";
import Account from "./components/Account";
import Welcome from "./components/Welcome";
import BoardMain from "./components/BoardMain";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/boardmain" element={<BoardMain />} />
      </Routes>
    </div>
  );
}

export default App;
