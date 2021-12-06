import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
    </>
  );
};

export default App;
