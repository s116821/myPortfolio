import React from "react";
import { Routes, Route } from "react-router-dom";
import DjangoDemoPage from "./components/DjangoDemoPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/django-demo" element={<DjangoDemoPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
