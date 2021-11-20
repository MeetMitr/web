import React from "react";
import "./App.css";
import JoinEventPage from "./pages/JoinEventPage";
import EventPage from "./pages/EventPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index element={<JoinEventPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/event/a" element={<EventPage name="a" />} />
    </Routes>
  );
}

export default App;
