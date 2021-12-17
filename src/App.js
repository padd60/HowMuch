import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import TestList from "./components/TestList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TestList />} />
      </Routes>
    </div>
  );
}

export default App;
