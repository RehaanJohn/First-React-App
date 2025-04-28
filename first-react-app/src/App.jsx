// src/App.jsx
import React from "react";
import "./css/App.css";

import VideoBackground from "./components/VideoBackground";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      {/* 1) Full-screen video loop behind everything */}
      <VideoBackground />

      {/* 2) Your app UI */}
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
