import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [showWaPopup, setShowWaPopup] = useState(false);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);
  const [popupPos, setPopupPos] = useState({ top: -9999, left: -9999 });

  useLayoutEffect(() => {
    if (!showWaPopup) return;
    const updatePos = () => {
      const btn = buttonRef.current;
      const pop = popupRef.current;
      if (!btn || !pop) return;
      const b = btn.getBoundingClientRect();
      const p = pop.getBoundingClientRect();
      // On mobile (narrow screens) place the popup below the top navbar a bit;
      // on desktop keep the popup to the left and vertically centered with the button.
      const isMobile = window.innerWidth < 768;
      let left, top;
      if (isMobile) {
        // place popup just below the button/navbar with a small gap
        top = Math.min(window.innerHeight - p.height - 12, Math.round(b.bottom + 8));
        // keep popup within viewport horizontally, align start with button
        left = Math.max(12, Math.round(b.left));
      } else {
        // place popup to the left of the button and vertically centered with the button
        left = Math.max(12, b.left - p.width - 12);
        top = Math.max(12, Math.round(b.top + b.height / 2 - p.height / 2));
      }
      setPopupPos({ top, left });
    };

    // slight delay to allow popup to render and measure accurately
    const id = requestAnimationFrame(updatePos);

    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, true);

    // close popup when user scrolls, wheels, or touches the page
    const onScrollClose = () => setShowWaPopup(false);
    const onWheelClose = () => setShowWaPopup(false);
    const onTouchClose = () => setShowWaPopup(false);

    window.addEventListener("scroll", onScrollClose, true);
    window.addEventListener("wheel", onWheelClose, { passive: true, capture: true });
    window.addEventListener("touchstart", onTouchClose, { passive: true, capture: true });

    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos, true);
      window.removeEventListener("scroll", onScrollClose, true);
      window.removeEventListener("wheel", onWheelClose, true);
      window.removeEventListener("touchstart", onTouchClose, true);
    };
  }, [showWaPopup]);

  return (
    <>
      {/* ================= MOBILE TOP NAVBAR ================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            ref={buttonRef}
            onClick={() => setShowWaPopup((s) => !s)}
            className="relative"
            title="Hubungi via WhatsApp"
            aria-label="Hubungi via WhatsApp"
          >
            <img
              src="/img/Logo1.png"
              alt="Infimech"
              className="h-8 object-contain cursor-pointer"
            />
          </button>



          <HamburgerButton open={open} onClick={() => setOpen(!open)} />
        </div>

        {open && (
          <nav className="bg-white border-t">
            <MobileMenu to="/Home" label="Home" />
            <MobileMenu to="/Contact" label="Contact Us" />
            <MobileMenu to="/Servis" label="Our Services" />
            <MobileMenu to="/Specialities" label="Our Specialities" />
            <MobileMenu to="/Experince" label="Our Experiences" />
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
                <DesktopMenu to="/Contact" label="Contact Us" />
                <DesktopMenu to="/Servis" label="Our Services" />
                <DesktopMenu to="/Specialities" label="Our Specialities" />
                <DesktopMenu to="/Experince" label="Our Experiences" />
              </nav>
            </div>
          )}

          {open && <div className="w-px bg-slate-300" />}

          <div className="w-20 flex flex-col items-center justify-between py-8">
            <HamburgerButton open={open} onClick={() => setOpen(!open)} />
            <div className="relative">
              <button
                ref={buttonRef}
                onClick={() => setShowWaPopup((s) => !s)}
                className="relative cursor-pointer"
                title="Hubungi via WhatsApp"
                aria-label="Hubungi via WhatsApp"
              >
                <img src="/img/Logo1.png" alt="Logo" className="w-14 h-12 object-contain" />
                <span className="absolute -right-1 -bottom-1 w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.52 3.48A11.88 11.88 0 0012.06.12 11.88 11.88 0 003.6 3.48 11.77 11.77 0 000 12.06c0 2.11.55 4.17 1.6 6.01L.6 23.4l5.48-1.44A11.75 11.75 0 0012 24c3.16 0 6.12-1.18 8.36-3.42A11.88 11.88 0 0024 12.06a11.77 11.77 0 00-3.48-8.58zM12 21.6c-2.14 0-4.13-.64-5.82-1.84l-.42-.27-3.26.86.86-3.18-.28-.41A9.66 9.66 0 012.4 12.06c0-5.28 4.32-9.6 9.6-9.6s9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM17.34 14.7c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14s-.73.91-.9 1.1c-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.14.19 1.85 2.94 4.49 4.12 3.14 1.4 3.14.93 3.71.87.57-.06 1.66-.68 1.9-1.34.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
                  </svg>
                </span>
              </button>

              {/* popup is rendered to body via portal (see below) */}
            </div>

          </div>
        </div>
      </div>
      {showWaPopup && createPortal(
        <div
          ref={popupRef}
          style={{ position: "fixed", top: `${popupPos.top}px`, left: `${popupPos.left}px` }}
          className="z-50"
        >
          <div className="flex items-center gap-3 bg-[#E6F9EA] rounded-full px-4 py-2 shadow-lg">
            <img src="/img/Logo1.png" alt="Infimech logo" className="w-10 h-10 rounded-full bg-white p-1 object-contain border-2 border-white shadow-sm" />
            <div className="text-sm font-semibold text-[#0f172a]">Hubungi Kami</div>
            <a href="https://wa.me/6281333546332" target="_blank" rel="noopener noreferrer" className="ml-2 bg-[#25D366] text-white p-2 rounded-full shadow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.52 3.48A11.88 11.88 0 0012.06.12 11.88 11.88 0 003.6 3.48 11.77 11.77 0 000 12.06c0 2.11.55 4.17 1.6 6.01L.6 23.4l5.48-1.44A11.75 11.75 0 0012 24c3.16 0 6.12-1.18 8.36-3.42A11.88 11.88 0 0024 12.06a11.77 11.77 0 00-3.48-8.58zM12 21.6c-2.14 0-4.13-.64-5.82-1.84l-.42-.27-3.26.86.86-3.18-.28-.41A9.66 9.66 0 012.4 12.06c0-5.28 4.32-9.6 9.6-9.6s9.6 4.32 9.6 9.6-4.32 9.6-9.6 9.6zM17.34 14.7c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14s-.73.91-.9 1.1c-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.17.19-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.64-1.54-.88-2.12-.23-.56-.47-.48-.64-.49l-.55-.01c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.14.19 1.85 2.94 4.49 4.12 3.14 1.4 3.14.93 3.71.87.57-.06 1.66-.68 1.9-1.34.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z" />
              </svg>
            </a>
          </div>
        </div>
      , document.body)}
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
