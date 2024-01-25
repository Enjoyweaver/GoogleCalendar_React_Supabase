// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CalendarPage from "./calendar/page"; // Update the import path if needed
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
