import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#EBE9FF] from-0% to-white to-[84%] text-slate-700">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">

        {/* COMPANY INFO */}
        <div className="space-y-4 lg:col-span-2 text-center lg:text-left">
          <img
            src="/img/logo4.png"
            alt="Infimech Logo"
            className="h-10 sm:h-12 lg:h-14 object-contain mx-auto lg:mx-0"
          />

          {/* JUDUL PERUSAHAAN */}
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-slate-900">
            PT Infimech Harmoni Teknologi
          </p>

          {/* ALAMAT */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm space-y-3 sm:space-y-4">

            {/* JAKARTA OFFICE */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sovereign+Plaza+Tower,+Jl.+TB+Simatupang+No.36+12th+Floor,+West+Cilandak,+South+Jakarta+City,+Jakarta+12430"
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1 hover:text-blue-600 transition flex items-start gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold text-sm sm:text-base text-slate-900">
                  Jakarta Office
                </p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Sovereign Plaza Tower, Jl. TB Simatupang No.36 12th Floor, West Cilandak, Cilandak, South Jakarta City, Jakarta 12430
                </p>
              </div>
            </a>

            {/* YOGYAKARTA OFFICE */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Kaliurang+KM+4.5+gg.+Siti+Sonya,+Ruko+Omah+Mborek+No.2,+Sleman,+Yogyakarta+55281"
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1 hover:text-blue-600 transition flex items-start gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold text-sm sm:text-base text-slate-900">
                  Yogyakarta Office
                </p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Jl. Kaliurang KM 4.5 gg. Siti Sonya, Ruko Omah Mbarek No. 2, Sinduadi, Mlati, Sleman, Yogyakarta, 55281
                </p>
              </div>
            </a>

            {/* MALANG OFFICE */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Jl.+Mayang+08,+Bunulrejo,+Blimbing,+Kota+Malang,+Jawa+Timur+65123"
              target="_blank"
              rel="noopener noreferrer"
              className="block space-y-1 hover:text-blue-600 transition flex items-start gap-2"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="font-semibold text-sm sm:text-base text-slate-900">
                  Malang Office
                </p>
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Jl. Mayang 08, Bunulrejo, Blimbing, Kota Malang, Jawa Timur, 65123
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* ABOUT COMPANY */}
        <div className="col-span-1 text-left">
          <h4 className="font-semibold text-slate-900 mb-4 text-sm sm:text-base">
            About Company
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm whitespace-normal">
            <li>
              <Link to="/Contact" className="hover:text-blue-600 cursor-pointer inline-block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="sm:col-span-1 lg:col-span-2 text-left">
          <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-4">
            Our Services
          </h4>
          <ul className="space-y-3 text-xs sm:text-sm whitespace-normal">
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer inline-block">
                Regular Engineering Service
              </Link>
            </li>
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer inline-block">
                Advanced Engineering Service
              </Link>
            </li>
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer inline-block">
                Other Services
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-blue-600 text-white text-xs sm:text-sm px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto text-center">
          © Hak Cipta INFIMECH.type
        </div>
      </div>
    </footer>
  );
}
