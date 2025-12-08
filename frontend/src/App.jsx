import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const App = () => {
  const { token } = useContext(AuthContext);
  return (
    <div className="bg-linear-to-br from-[#1F5A5A] to-black min-h-screen">
      <Toaster />
      <Routes>
        <Route
          path="/signup"
          element={!token ? <Login /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate to="/signup" />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
