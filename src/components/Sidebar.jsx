import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 right-0 z-50 h-screen">
      
      {/* WRAPPER */}
      <div className="h-full flex bg-[#EBE9FF] shadow-lg rounded-l-[32px] overflow-hidden">

        {/* LEFT PANEL */}
        {open && (
          <div className="w-100 px-8 py-8 flex flex-col">
            {/* Search */}
<div className="mb-10">
  <input
    type="text"
    placeholder="Search..."
    className="
      w-full
      rounded-full
      px-5
      py-3
      text-sm
      text-slate-700
      bg-white
      shadow-sm
      placeholder:text-slate-400
      focus:outline-none
      focus:ring-2
      focus:ring-blue-200
      transition
    "
  />
</div>

{/* Menu */}
<nav className="space-y-6">
  <p className="text-base font-medium text-slate-800 cursor-pointer hover:text-blue-600 transition">
    Home
  </p>
  <p className="text-base font-medium text-slate-800 cursor-pointer hover:text-blue-600 transition">
    About Us
  </p>
  <p className="text-base font-medium text-slate-800 cursor-pointer hover:text-blue-600 transition">
    Our Services
  </p>
  <p className="text-base font-medium text-slate-800 cursor-pointer hover:text-blue-600 transition">
    Our Specialities
  </p>
  <p className="text-base font-medium text-slate-800 cursor-pointer hover:text-blue-600 transition">
    Our Experiences
  </p>
</nav>

          </div>
        )}

        {/* DIVIDER */}
        {open && <div className="w-px bg-slate-300" />}

        {/* MINI SIDEBAR */}
        <div className="w-20 flex flex-col items-center justify-between py-8">

          {/* Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-800"
          >
            {open ? (
              <span className="text-2xl font-light">✕</span>
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="w-7 h-[2px] bg-slate-800 rounded-full" />
                <span className="w-7 h-[2px] bg-slate-800 rounded-full" />
                <span className="w-7 h-[2px] bg-slate-800 rounded-full" />
              </div>
            )}
          </button>

          {/* Logo */}
          <img
            src="/img/Logo1.png"
            alt="Company logo"
            className="w-14 h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
