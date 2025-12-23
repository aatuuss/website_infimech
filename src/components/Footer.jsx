export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#EBE9FF] from-0% to-white to-[84%] text-slate-700">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* COMPANY INFO */}
        <div className="space-y-4 md:col-span-2">
          <img
            src="/img/logo2.png"
            alt="Infimech Logo"
            className="h-16 object-contain"
          />

          {/* JUDUL PERUSAHAAN */}
          <p className="font-semibold text-[25px] text-slate-900">
            PT Infimech Harmoni Teknologi
          </p>

          {/* ALAMAT — KLIK JUDUL & ALAMAT LANGSUNG KE GOOGLE MAPS */}
<div className="mt-10 text-sm space-y-4">

  {/* JAKARTA OFFICE */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Sovereign+Plaza+Tower,+Jl.+TB+Simatupang+No.36+12th+Floor,+West+Cilandak,+South+Jakarta+City,+Jakarta+12430"
    target="_blank"
    rel="noopener noreferrer"
    className="block space-y-1 hover:text-blue-600 transition"
  >
    <p className="font-semibold text-lg text-slate-900">
      Jakarta Office
    </p>
    <p className="text-slate-600 leading-relaxed">
      Sovereign Plaza Tower, Jl. TB Simatupang No.36 12th Floor,
      West Cilandak, South Jakarta City, Jakarta 12430
    </p>
  </a>

  {/* YOGYAKARTA OFFICE */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Jl.+Kaliurang+KM+4.5+gg.+Siti+Sonya,+Ruko+Omah+Mborek+No.2,+Sleman,+Yogyakarta+55281"
    target="_blank"
    rel="noopener noreferrer"
    className="block space-y-1 hover:text-blue-600 transition"
  >
    <p className="font-semibold text-lg text-slate-900">
      Yogyakarta Office
    </p>
    <p className="text-slate-600 leading-relaxed">
      Jl. Kaliurang KM 4.5 gg. Siti Sonya, Ruko Omah Mbarek No. 2, Sinduadi, Mlati, Sleman, Yogyakarta, 55281
    </p>
  </a>

  {/* MALANG OFFICE */}
  <a
    href="https://www.google.com/maps/search/?api=1&query=Jl.+Mayang+08,+Bunulrejo,+Blimbing,+Kota+Malang,+Jawa+Timur+65123"

    target="_blank"
    rel="noopener noreferrer"
    className="block space-y-1 hover:text-blue-600 transition"
  >
    <p className="font-semibold text-lg text-slate-900">
      Malang Office
    </p>
    <p className="text-slate-600 leading-relaxed">
      Jl. Mayang 08, Bunulrejo, Blimbing, Kota Malang, Jawa Timur, 65123
    </p>
  </a>

</div>

        </div>

        {/* ABOUT COMPANY */}
        <div className="md:col-span-1 text-lg">
          <h4 className="font-semibold text-slate-900 mb-4">
            About Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* OUR SERVICES */}
        <div className="md:col-span-1 text-lg">
          <h4 className="font-semibold text-slate-900 mb-4">
            Our Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">
              Regular Engineering Service
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Advanced Engineering Service
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Web Based Project Management Services
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              Other Services
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-blue-600 text-white text-sm px-8 py-4">
        <div className="max-w-7xl mx-auto">
          © Hak Cipta INFIMECH.type
        </div>
      </div>
    </footer>
  );
}
