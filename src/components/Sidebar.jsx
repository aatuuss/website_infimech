import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BACKDROP BLUR */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          style={{ backdropFilter: 'blur(8px)' }}
        />
      )}

      <div className="fixed top-0 right-0 z-50 h-screen">
        <div className="h-full flex bg-[#EBE9FF] shadow-lg rounded-l-[32px] overflow-hidden">

        {/* LEFT PANEL */}
        {open && (
          <div className="w-96 h-full px-8 py-10 flex flex-col overflow-y-auto bg-gradient-to-br from-[#EBE9FF] to-[#F5F3FF]">

            {/* HEADER */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Menu</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>

            {/* Search */}
            {/* <div className="mb-8">
              <div className="relative">
                <svg 
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search menu..."
                  className="w-full rounded-2xl pl-12 pr-5 py-3.5 text-sm text-slate-700 bg-white/80 backdrop-blur-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200"
                />
              </div>
            </div> */}

            {/* MENU — VERTICAL */}
            <nav className="flex flex-col gap-3">
              <Link 
                to="/Home" 
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span className="font-medium">Home</span>
              </Link>

              <Link 
                to="/Contact" 
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Contact</span>
              </Link>

              <Link 
                to="/Servis" 
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">Our Services</span>
              </Link>

              <Link 
                to="/Specialities" 
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <span className="font-medium">Our Specialities</span>
              </Link>

              <Link 
                to="/Experince" 
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl bg-white/60 hover:bg-white hover:shadow-md transition-all duration-200 text-slate-700 hover:text-blue-600"
              >
                <svg className="w-5 h-5 text-slate-500 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="font-medium">Our Experiences</span>
              </Link>
            </nav>

            {/* FOOTER */}
            {/* <div className="mt-auto pt-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-lg mb-2">Need Help?</h3>
                <p className="text-sm text-white/90 mb-3">Contact our team for assistance</p>
                <button className="w-full bg-white text-blue-600 rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-50 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div> */}

          </div>
        )}

        {/* DIVIDER */}
        {open && <div className="w-px bg-slate-300" />}

        {/* MINI SIDEBAR */}
        <div className="w-20 flex flex-col items-center justify-between py-8">
          <button onClick={() => setOpen(!open)} className="text-slate-800">
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

          <img
            src="/img/Logo1.png"
            alt="Company logo"
            className="w-14 h-12 object-contain"
          />
        </div>
      </div>
      </div>
    </>
  );
}
