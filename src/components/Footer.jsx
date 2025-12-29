import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#EBE9FF] from-0% to-white to-[84%] text-slate-700">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-5 gap-10 pl-10">

        {/* COMPANY INFO */}
        <div className="space-y-4 md:col-span-2 text-center md:text-center pl-8">
          <img
            src="/img/logo2.png"
            alt="Infimech Logo"
            className="h-14 object-contain mx-auto"
          />

          {/* JUDUL PERUSAHAAN */}
          <p className="font-semibold text-[25px] text-slate-900">
            PT Infimech Harmoni Teknologi
          </p>

          {/* ALAMAT — KLIK JUDUL & ALAMAT LANGSUNG KE GOOGLE MAPS */}
<div className="mt-2 text-sm space-y-2 text-left">

  {/* JAKARTA OFFICE */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Sovereign+Plaza+Tower,+Jl.+TB+Simatupang+No.36+12th+Floor,+West+Cilandak,+South+Jakarta+City,+Jakarta+12430"
    target="_blank"
    rel="noopener noreferrer"
    className="block space-y-1 hover:text-blue-600 transition flex items-start gap-2"
  >
    <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
    <div>
      <p className="font-semibold text-base text-slate-900">
        Jakarta Office
      </p>
      <p className="text-slate-600 leading-relaxed text-sm">
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
    <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
    <div>
      <p className="font-semibold text-base text-slate-900">
        Yogyakarta Office
      </p>
      <p className="text-slate-600 leading-relaxed text-sm">
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
    <svg className="w-5 h-5 text-slate-900 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
    <div>
      <p className="font-semibold text-base text-slate-900">
        Malang Office
      </p>
      <p className="text-slate-600 leading-relaxed text-sm">
        Jl. Mayang 08, Bunulrejo, Blimbing, Kota Malang, Jawa Timur, 65123
      </p>
    </div>
  </a>

</div>

        </div>

        {/* ABOUT COMPANY */}
        <div className="md:col-span-1 text-lg text-left pl-16">
          <h4 className="font-semibold text-slate-900 mb-4">
            About Company
          </h4>
          <ul className="space-y-3 text-sm whitespace-normal">
            <li>
              <Link to="/Contact" className="hover:text-blue-600 cursor-pointer text-lg break-words inline-block">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="md:col-span-2 text-lg text-left pl-16">
          <h4 className="font-semibold text-slate-900 text-lg mb-4">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm whitespace-normal">
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer text-lg break-words inline-block">
                Regular Engineering Service
              </Link>
            </li>
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer text-lg break-words inline-block">
                Advanced Engineering Service
              </Link>
            </li>
            {/* <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer text-lg break-words inline-block">
                Web Based Project Management Services
              </Link>
            </li> */}
            <li>
              <Link to="/Servis" className="hover:text-blue-600 cursor-pointer text-lg break-words inline-block">
                Other Services
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-blue-600 text-white text-sm px-8 py-4">
        <div className="max-w-7xl mx-auto text-center">
          © Hak Cipta INFIMECH.type
        </div>
      </div>
    </footer>
  );
}
