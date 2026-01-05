import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./app/Home";
import Contact from "./app/Contact";
import Servis from "./app/Servis";
import Specialities from "./app/Specialities";
import Experince from "./app/Experince";
import ExperiencesPage from "./app/experiences/page";
import DetailExperiencesPage from "./app/detailexperiences/page";

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
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
