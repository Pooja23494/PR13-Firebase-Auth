import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./components/signUp";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Header from "./components/Header";
import './assets/style.css'

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin && <Header setIsLogin={setIsLogin} />}

      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <SignIn setIsLogin={setIsLogin} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setIsLogin={setIsLogin} />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
