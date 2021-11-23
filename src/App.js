import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import List from "./view/List";
import CreateLink from "./view/CreateLink";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/create" caseSensitive={false} element={<CreateLink />} />
        <Route path="/" caseSensitive={false} element={<List />} />
      </Routes>
    </Router>
  );
}