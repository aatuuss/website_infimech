import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./app/Home";
import Contact from "./app/Contact";
import Servis from "./app/Servis";
import Specialities from "./app/Specialities";
import Experince from "./app/Experince";

import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";
import ExperiencesPage from "./app/ExperiencesPage";
import DetailExperiencesPage from "./app/DetailExperiencesPage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen relative bg-slate-50">
        <Sidebar />

        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/servis" element={<Servis />} />
            <Route path="/specialities" element={<Specialities />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/experince" element={<Experince />} />
            <Route path="/experiencesPage" element={<ExperiencesPage />} />
            <Route
              path="/detailexperiencesPage/:id"
              element={<DetailExperiencesPage />}
            />
          </Routes>

          <Footer />
        <Chatbot />
        </main>
      </div>
    </BrowserRouter>
  );
}
