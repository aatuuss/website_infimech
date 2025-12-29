import React from "react";

export default function Contact() {
  return (
    <section className="relative bg-white py-5 overflow-hidden">
      {/* LOGO BACKGROUND */}
      <img
        src="/img/Logo1.png"
        alt="Logo Background"
        className="absolute -left-50 top-1/2 w-[500px] -translate-y-1/2 opacity-20 pointer-events-none z-0"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        {/* Title */}
        <h1 className="text-center text-5xl font-semibold text-[#3B6C8D] mb-12">
          Contact Us
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Brand + Offices */}
          <div>
            <img src="/img/logo2.png" alt="Infimech" className="w-48 mb-8" />

            {/* Jakarta */}
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  {/* Map Pin */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D]">Jakarta Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Sovereign%20Plaza%20Tower%2C%20Jl.%20TB%20Simatupang%20No.36%2012th%20Floor%2C%20West%20Cilandak%2C%20Cilandak%2C%20South%20Jakarta%20City%2C%20Jakarta%2012430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline"
                  >
                    Sovereign Plaza Tower, Jl. TB Simatupang No.36 12th Floor, West
                    Cilandak, Cilandak, South Jakarta City, Jakarta 12430
                  </a>
                </div>
              </div>
            </div>

            {/* Yogyakarta */}
            <div className="mb-6">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D]">Yogyakarta Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.%20Kaliurang%20KM%204.5%20Gg.%20Siti%20Somya%2C%20Ruko%20Omah%20Mbarek%20No.%202%2C%20Sinduwadi%2C%20Mlati%2C%20Sleman%2C%20Yogyakarta%2C%2055281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline"
                  >
                    Jl. Kaliurang KM 4.5 Gg. Siti Somya, Ruko Omah Mbarek No. 2, Sinduwadi,
                    Mlati, Sleman, Yogyakarta, 55281
                  </a>
                </div>
              </div>
            </div>

            {/* Malang */}
            <div className="mb-8">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11a3 3 0 100-6 3 3 0 000 6zm0 10s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-[#3B6C8D]">Malang Office</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Jl.%20Banyupatih%20No.%207%2C%20Bunderrejo%2C%20Kec.%20Blimbing%2C%20Kota%20Malang%2C%20Jawa%20Timur%2C%20Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-[#3B6C8D] hover:underline"
                  >
                    Jl. Banyupatih No. 7, Bunderrejo, Kec. Blimbing, Kota Malang,
                    Jawa Timur, Indonesia
                  </a>
                </div>
              </div>
            </div>

            {/* Contact lines */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  {/* Phone */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h2l3 6-2 2a11 11 0 006 6l2-2 6 3v2a2 2 0 01-2 2h-1C9.163 22 2 14.837 2 6V5z" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700">+62 8133 3546 332</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  {/* Fax */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9V4h12v5M6 9h12m-2 4h2a2 2 0 012 2v3H4v-3a2 2 0 012-2h2m8 0V9H8v4" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700">021 7538506</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100">
                  {/* Mail */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4 text-[#3B6C8D]">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h16v16H4V4zm0 4l8 6 8-6" />
                  </svg>
                </span>
                <span className="text-sm text-gray-700">info@infimech.tech</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            className="space-y-6 lg:ml-20"
            action="mailto:info@infimech.tech"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B6C8D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#3B6C8D]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={6}
                name="message"
                required
                className="w-full max-w-sm rounded-md border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#3B6C8D]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center w-[180px] rounded-md bg-gray-500 px-6 py-2 font-medium text-white hover:bg-gray-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
