import React from "react";

export default function Contact() {
  return (
    <section className="relative bg-white min-h-screen flex items-center py-8 sm:py-12 lg:py-16 overflow-hidden px-4 sm:px-6">
      {/* LOGO BACKGROUND */}
      <img
        src="/img/Logo1.png"
        alt="Logo Background"
        className="absolute -left-32 sm:-left-40 lg:-left-50 top-1/2 w-[300px] sm:w-[400px] lg:w-[500px] -translate-y-1/2 opacity-20 pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        {/* Title */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-[#3B6C8D] mb-10 sm:mb-12 lg:mb-16">
          Contact Us
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Brand + Offices */}
          <div className="order-2 lg:order-1 flex flex-col justify-start h-full">
            <a
              href="https://wa.me/6281333546332"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 pointer-events-auto"
              onClick={(e) => {
                try {
                  // prefer normal anchor but fallback to window.open if needed
                  // keep default behavior for normal clicks
                } catch (err) {
                  e.preventDefault();
                  window.open('https://wa.me/6281333546332', '_blank');
                }
              }}
            >
              <img src="/img/logo4.png" alt="Infimech" className="w-40 sm:w-48 mb-6 sm:mb-8 cursor-pointer" />
            </a>

            {/* Jakarta */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0 mt-0.5">
                  {/* Map Pin */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D] text-sm sm:text-base">Jakarta Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sovereign%20Plaza%20Tower%2C%20Jl.%20TB%20Simatupang%20No.36%2012th%20Floor%2C%20West%20Cilandak%2C%20Cilandak%2C%20South%20Jakarta%20City%2C%20Jakarta%2012430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline leading-tight"
                  >
                    Sovereign Plaza Tower, Jl. TB Simatupang No.36 12th Floor, West
                    Cilandak, Cilandak, South Jakarta City, Jakarta 12430
                  </a>
                </div>
              </div>
            </div>

            {/* Yogyakarta */}
            <div className="mb-5 sm:mb-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D] text-sm sm:text-base">Yogyakarta Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kaliurang%20km%204%2C%20Gg.%20Siti%20Sonya%20No.10%20B%205%2C%20Pogung%20Kidul%2C%20Sinduadi%2C%20Kec.%20Mlati%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline leading-tight"
                  >
                    Jl. Kaliurang km 4, Gg. Siti Sonya No.10 B 5, Pogung Kidul, Sinduadi, Kec. Mlati, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                  </a>
                </div>
              </div>
            </div>

            {/* Malang */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D] text-sm sm:text-base">Malang Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.%20Mayang%20No.08%2C%20Bunulrejo%2C%20Kec.%20Blimbing%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline leading-tight"
                  >
                    Jl. Mayang No.08, Bunulrejo, Kec. Blimbing, Kota Malang, Jawa Timur 65123
                  </a>
                </div>
              </div>
            </div>

            {/* Contact lines (mobile/tablet) - hidden on desktop */}
            <div className="space-y-3 sm:space-y-4 lg:hidden">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Phone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l3 6-2 2a11 11 0 006 6l2-2 6 3v2a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-gray-700">+62 8133 3546 332</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Fax */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 9h12m-2 4h2a2 2 0 012 2v3H4v-3a2 2 0 012-2h2m8 0V9H8v4" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-gray-700">021 7538506</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Mail */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm0 4l8 6 8-6" />
                  </svg>
                </span>
                <span className="text-xs sm:text-sm text-gray-700">info@infimech.tech</span>
              </div>
            </div>
          </div>

          {/* Right: Contact lines (desktop) - inline, no card */}
          <div className="hidden lg:flex order-1 lg:order-2 flex-col justify-start h-full lg:pl-32 lg:mt-15">
            <div className="space-y-3 sm:space-y-4 lg:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Phone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l3 6-2 2a11 11 0 006 6l2-2 6 3v2a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z" />
                  </svg>
                </span>
                <a
                  href="https://wa.me/6281333546332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-gray-700 hover:text-[#3B6C8D] cursor-pointer"
                >
                  +62 8133 3546 332
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Fax */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 9h12m-2 4h2a2 2 0 012 2v3H4v-3a2 2 0 012-2h2m8 0V9H8v4" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-700">021 7538506</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                  {/* Mail */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 sm:h-4 w-3 sm:w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm0 4l8 6 8-6" />
                  </svg>
                </span>
                <span className="text-sm sm:text-base text-gray-700">info@infimech.tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
