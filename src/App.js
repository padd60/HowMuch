import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import TestList from "./components/TestList";
import Mainpage from "./components/Mainpage";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </div>
  );
}

export default App;
