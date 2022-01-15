import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Portfolio from "./pages/Portfolio";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
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
