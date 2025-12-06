import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
const App = () => {
  return (
    <div className="bg-linear-to-br from-[#1F5A5A] to-black min-h-screen">
      <Routes>
        <Route path="/signup" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default App;
