import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Servis from './app/Servis';
import Specialities from './app/Specialities';
import Experience from "./app/Experince";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/servis" element={<Servis />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative bg-slate-50">

        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" replace />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Servis" element={<Servis />} />
            <Route path="/Specialities" element={<Specialities />} />
            <Route path="/Experince" element={<Experince />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/detailexperiences/:id" element={<DetailExperiencesPage />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}
