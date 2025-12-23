import Home from "./app/Home";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="min-h-screen relative bg-slate-50">

      {/* SIDEBAR (FIXED, FLOATING) */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="min-h-screen">
        {/* HOME — FULL SCREEN */}
        <Home />

        {/* FOOTER — FULL WIDTH */}
        <Footer />
      </main>

    </div>
  );
}