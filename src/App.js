import React from "react";
import { Routes, Route } from "react-router-dom";
import ProposalPage from "./components/ProposalPage";
import FanControlPage from "./components/FanControlPage";
import ObstacleCoursePage from "./components/ObstacleCoursePage";
import DjangoDemoPage from "./components/DjangoDemoPage";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/proposal" element={<ProposalPage />} />
      <Route path="/fan-control" element={<FanControlPage />} />
      <Route path="/obstacle-course" element={<ObstacleCoursePage />} />
      <Route path="/django-demo" element={<DjangoDemoPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
