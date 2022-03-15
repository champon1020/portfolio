import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Portfolio = React.lazy(() => import("./pages/Portfolio"));

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
      <Suspense
        fallback={
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          ></div>
        }
      >
        <BrowserRouter basename="/">
          <Router />
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
