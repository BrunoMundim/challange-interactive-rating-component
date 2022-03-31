import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import SubmitScreen from "./components/SubmitScreen";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/submit" element={<SubmitScreen />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
