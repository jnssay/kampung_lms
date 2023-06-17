import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "../components/Test";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  </Router>
);