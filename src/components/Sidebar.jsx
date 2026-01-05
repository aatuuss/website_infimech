import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE TOP NAVBAR ================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <img
            src="/img/Logo1.png"
            alt="Infimech"
            className="h-8 object-contain"
          />

          <HamburgerButton open={open} onClick={() => setOpen(!open)} />
        </div>

        {open && (
          <nav className="bg-white border-t">
            <MobileMenu to="/Home" label="Home" />
            <MobileMenu to="/Servis" label="Our Services" />
            <MobileMenu to="/Specialities" label="Our Specialities" />
            <MobileMenu to="/Experince" label="Our Experiences" />
            <MobileMenu to="/Contact" label="Contact" />
          </nav>
        )}
      </header>

      {/* SPACER MOBILE */}
      <div className="md:hidden h-16" />

      {/* ================= DESKTOP SIDEBAR ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="hidden md:block fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      <div className="hidden md:block fixed top-0 right-0 z-50 h-screen">
        <div className="h-full flex bg-[#EBE9FF] shadow-lg rounded-l-[32px] overflow-hidden">

          {open && (
            <div className="w-96 h-full px-8 py-10 bg-gradient-to-br from-[#EBE9FF] to-[#F5F3FF]">
              <h2 className="text-2xl font-bold mb-8">Menu</h2>

              <nav className="flex flex-col gap-3">
                <DesktopMenu to="/Home" label="Home" />
                <DesktopMenu to="/Contact" label="Contact" />
                <DesktopMenu to="/Servis" label="Our Services" />
                <DesktopMenu to="/Specialities" label="Our Specialities" />
                <DesktopMenu to="/Experince" label="Our Experiences" />
              </nav>
            </div>
          )}

          {open && <div className="w-px bg-slate-300" />}

          <div className="w-20 flex flex-col items-center justify-between py-8">
            <HamburgerButton open={open} onClick={() => setOpen(!open)} />

            <img
              src="/img/Logo1.png"
              alt="Logo"
              className="w-14 h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* ================= REUSABLE COMPONENT ================= */

function HamburgerButton({ open, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col justify-center items-center gap-1.5 w-10 h-10"
    >
      <span
        className={`h-[2px] w-6 bg-[#0B2F6B] transition-all duration-300 ${
          open ? "rotate-45 translate-y-[6px]" : ""
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-[#0B2F6B] transition-all duration-300 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-[2px] w-6 bg-[#0B2F6B] transition-all duration-300 ${
          open ? "-rotate-45 -translate-y-[6px]" : ""
        }`}
      />
    </button>
  );
}

function DesktopMenu({ to, label }) {
  return (
    <Link
      to={to}
      className="px-5 py-4 rounded-2xl bg-white/60 hover:bg-white transition"
    >
      {label}
    </Link>
  );
}

function MobileMenu({ to, label }) {
  return (
    <Link
      to={to}
      className="block px-6 py-4 text-slate-800 hover:bg-slate-100"
    >
      {label}
    </Link>
  );
}
