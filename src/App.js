import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestList from "./components/TestList";
import Mainpage from "./components/Mainpage";
import LoginPage from "./components/LoginPage";
import Account from "./components/Account";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
