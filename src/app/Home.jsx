import { useState } from "react";
import { Link } from "react-router-dom";

const SLIDES1 = [
  // ===== SLIDE 1 =====
  [
    {
      id: 1,
      title: "High-Performance & Accuracy Advantages",
      image: "/img/High-Performance & Accuracy Advantages.jpg",
    },
    {
      id: 2,
      title: "CFD Tools & Numerical Modeling Expertise",
      image: "/img/CFD Tools & Numerical Modeling Expertise.jpg",
    },
    {
      id: 3,
      title: "Fluid Flow & Turbulence Modeling Expertise",
      image: "/img/Fluid Flow & Turbulence Modeling Expertise.jpg",
    },
  ],

  // ===== SLIDE 2 =====
  [
    {
      id: 4,
      title: "Heat Transfer & Thermal Management Expertise",
      image: "/img/Heat Transfer & Thermal Management Expertise.jpg",
    },
    {
      id: 5,
      title: "Multiphase Flow Simulation Expertise",
      image: "/img/Multiphase Flow Simulation Expertise.jpg",
    },
    {
      id: 6,
      title: "Combustion & Chemical Reaction Simulation Expertise",
      image: "/img/Combustion & Chemical Reaction Simulation Expertise.jpg",
    },
  ],
];

const CLIENT_LOGOS = [
  { id: 1, src: "/img/client/arup.png", alt: "Arup", url: "https://www.arup.com" },
  { id: 2, src: "/img/client/brin.png", alt: "BRIN", url: "https://www.brin.go.id" },
  { id: 3, src: "/img/client/cameron.png", alt: "Cameron", url: "https://www.slb.com/onesubs/cameron" },
  { id: 4, src: "/img/client/casale.png", alt: "Casale", url: "https://www.casale.ch" },
  { id: 5, src: "/img/client/cba-energy.png", alt: "CBA Energy", url: "https://www.cba-energy.com" },
  { id: 6, src: "/img/client/chandra-asri.png", alt: "Chandra Asri", url: "https://www.cap.co.id" },
  { id: 7, src: "/img/client/chevron.png", alt: "Chevron", url: "https://www.chevron.com" },
  { id: 8, src: "/img/client/dishub.png", alt: "Dishub", url: "https://dishub.jakarta.go.id" },
  { id: 9, src: "/img/client/dss.png", alt: "DSS", url: "https://www.dss.co.id" },
  { id: 10, src: "/img/client/indomarine.png", alt: "Indomarine", url: "https://www.indomarine.co.id" },

  { id: 11, src: "/img/client/itb.png", alt: "ITB", url: "https://www.itb.ac.id" },
  { id: 12, src: "/img/client/its.png", alt: "ITS", url: "https://www.its.ac.id" },
  { id: 13, src: "/img/client/jaya-teknik.png", alt: "Jaya Teknik", url: "https://www.jayateknik.com" },
  { id: 14, src: "/img/client/kementerian-perindustrian-republik-indonesia.png", alt: "Kemenperin", url: "https://www.kemenperin.go.id" },
  { id: 15, src: "/img/client/kilang-pertamina-internasional.png", alt: "Kilang Pertamina", url: "https://www.pertamina.com" },
  { id: 16, src: "/img/client/kpi.png", alt: "KPI", url: "https://www.kpi.co.id" },
  { id: 17, src: "/img/client/kraft.png", alt: "Kraft", url: "https://www.kraftheinz.com" },
  { id: 18, src: "/img/client/lerindro.png", alt: "Lerindro", url: "https://www.lerindro.com" },
  { id: 19, src: "/img/client/lipi.png", alt: "LIPI", url: "https://www.lipi.go.id" },
  { id: 20, src: "/img/client/matin-perkasa.png", alt: "Matin Perkasa", url: "https://www.matinperkasa.com" },

  { id: 21, src: "/img/client/meinhardt.png", alt: "Meinhardt", url: "https://www.meinhardtgroup.com" },
  { id: 22, src: "/img/client/pertamina-hulurokan.png", alt: "Pertamina Hulu Rokan", url: "https://www.phr.pertamina.com" },
  { id: 23, src: "/img/client/pertamina-kalimantan.png", alt: "Pertamina Kalimantan", url: "https://www.pertamina.com" },
  { id: 24, src: "/img/client/pertamina.png", alt: "Pertamina", url: "https://www.pertamina.com" },
  { id: 25, src: "/img/client/pln.png", alt: "PLN", url: "https://web.pln.co.id/" },
  { id: 26, src: "/img/client/politeknik-perkebunan-yogyakarta.png", alt: "Politeknik Perkebunan Yogyakarta", url: "https://siakad.polteklpp.ac.id" },
  { id: 27, src: "/img/client/PPSDM-migas.png", alt: "PPSDM Migas", url: "https://ppsdmmigas.esdm.go.id" },
  { id: 28, src: "/img/client/pt-adijaya-karya-makmur.png", alt: "PT Adijaya Karya Makmur", url: "https://www.adijayakarya.com" },
  { id: 29, src: "/img/client/pt-alfa-semesta.png", alt: "PT Alfa Semesta", url: "https://www.alfasemesta.co.id" },
  { id: 30, src: "/img/client/pt-bintang-timur-anugerah.png", alt: "PT Bintang Timur Anugerah", url: "https://www.bta.co.id" },

  { id: 31, src: "/img/client/pt-boma-bisma-indra.png", alt: "PT Boma Bisma Indra", url: "https://ptbbi.co.id/" },
  { id: 32, src: "/img/client/pupuk-kaltim.png", alt: "Pupuk Kaltim", url: "https://www.pupukkaltim.com" },
  { id: 33, src: "/img/client/puspetindo.png", alt: "Puspetindo", url: "https://puspetindo.com/" },
  { id: 34, src: "/img/client/reka-energy.png", alt: "Reka Energy", url: "https://rekaenergi.com/" },
  { id: 35, src: "/img/client/schlumber.png", alt: "Schlumberger", url: "https://www.slb.com/" },
  { id: 36, src: "/img/client/simtex-mechatronic.png", alt: "Simtex Mechatronic", url: "https://www.simtex.co.id/" },
  { id: 37, src: "/img/client/sinarmas.png", alt: "Sinarmas", url: "https://www.sinarmas.com/" },
  { id: 38, src: "/img/client/taci.png", alt: "TACI", url: "https://tacindonesia.id/index/" },
  { id: 39, src: "/img/client/takenaka.png", alt: "Takenaka", url: "http://takenaka.asia/indonesia" },
  { id: 40, src: "/img/client/tata.png", alt: "Tata", url: "http://tatamotors.co.id/" },

  { id: 41, src: "/img/client/tentara-nasional-angkatan-udara.png", alt: "TNI AU", url: "https://www.tni-au.mil.id" },
  { id: 42, src: "/img/client/timas.png", alt: "Timas", url: "https://www.timas.com/" },
  { id: 43, src: "/img/client/tripatra.png", alt: "Tripatra", url: "https://www.tripatra.com" },
  { id: 44, src: "/img/client/ugm.png", alt: "UGM", url: "https://www.ugm.ac.id" },
  { id: 46, src: "/img/client/um.png", alt: "UM", url: "https://um.ac.id/" },
  { id: 47, src: "/img/client/umm.png", alt: "UMM", url: "https://www.umm.ac.id" },
  { id: 48, src: "/img/client/uns.png", alt: "UNS", url: "https://uns.ac.id/id/" },
  { id: 49, src: "/img/client/wijaya-karya.png", alt: "Wijaya Karya", url: "https://www.wika.co.id" },
];

/* =========================
   SLIDE DATA (8 SLIDES)
========================= */
const SLIDES = [
  {
    title: "Oil & Gas Companies",
    image: "/img/servis-hero.jpg",
  },
  {
    title: "Power Generation Companies",
    image: "/img/matin.jpg",
  },
  {
    title: "Petrochemical and Chemical Processing Plants",
    image: "/img/4.jpg",
  },
  {
    title: "Mining Companies",
    image: "/img/carl.jpg",
  },
  {
    title: "EPC Contractors",
    image: "/img/mohamed.jpg",
  },
  {
    title: "Manufacturing Industries",
    image: "/img/manufacturing.png",
  },
  {
    title: "Renewable Energy",
    image: "/img/energy.png",
  },
];

export default function Home() {
  // separate indices so sliders don't interfere
  const [serviceIdx, setServiceIdx] = useState(0);
  const [industryIdx, setIndustryIdx] = useState(0);
  const [expIdx, setExpIdx] = useState(0);

  const totalIndustry = SLIDES.length;
  const totalExp = SLIDES1.length;

  const prevIndustry = () =>
    setIndustryIdx((i) => (i === 0 ? totalIndustry - 1 : i - 1));

  const nextIndustry = () =>
    setIndustryIdx((i) => (i === totalIndustry - 1 ? 0 : i + 1));

  const prevExp = () =>
    setExpIdx((i) => (i === 0 ? totalExp - 1 : i - 1));

  const nextExp = () =>
    setExpIdx((i) => (i === totalExp - 1 ? 0 : i + 1));
  
  const services = [
    {
      title: "Regular Engineering Service",
      items: [
        "Process Simulation and Modeling",
        "Mechanical Design",
        "Piping Design",
        "Structural Design",
        "Instrumentation & Control Design",
        "Electrical Engineering Service",
        "Drafting",
        "3D Modeling",
        "Geotechnical Engineering Study",
      ],
      color: "#2563EB",
    },
    {
      title: "Advanced Engineering Service",
      items: [
        "Computational Fluid Dynamics (CFD)",
        "Finite Element Analysis (FEA)",
        "Digital Twin",
        "Vibration Study",
        "Dispersion Study",
        "Fatigue Study",
        "Acoustic Study",
      ],
      color: "#3B82F6",
    },
    {
      title: "Web Based Project Management",
      items: [
        "Implement ERP in Project Management",
        "Implement EDMS in Project Management",
        "Implement E-Library",
        "Custom Engineering Application",
        "Implement AI Based Technology",
        "Project Controller Service",
        "Document Controller Service",
        "Project Management Services",
      ],
      color: "#60A5FA",
    },
    {
      title: "Other Services",
      items: [
        "Bid Support",
        "Project Support ",
        "Product Design Support ",
        "Product Development Support ",
        "Engineering Operation Support ",
        "Plant Maintenance Analysis Support",
        " Expertise Support",
      ],
      color: "#93C5FD",
    },
  ];

  const angle = 360 / services.length;

  const outerRadius = 120;
  const innerRadius = 102;

  const startAngle = serviceIdx * angle;
  const endAngle = startAngle + angle;

  const polar = (cx, cy, r, deg) => {
    const rad = (deg - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const arcPath = (cx, cy, r, start, end) => {
    const s = polar(cx, cy, r, start);
    const e = polar(cx, cy, r, end);
    const large = end - start <= 180 ? 0 : 1;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 1 ${e.x} ${e.y}`;
  };

  const title = services[serviceIdx].title.toUpperCase();
  const splitIndex =
    title.length > 22 ? Math.ceil(title.length / 2) : title.length;

  const line1 = title.slice(0, splitIndex);
  const line2 = title.slice(splitIndex);

  return (
    <section className="bg-[#FFFFFF]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[65vh] md:h-screen w-full overflow-hidden">
        <img
          src="/img/about.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover object-top md:object-center"
        />

        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-y-0 left-0 w-full md:w-[80%] backdrop-blur-md backdrop-saturate-110 bg-black/5"
            style={{
              clipPath: `
                polygon(
                  0% 0%,
                  100% 0%,
                  55% 0%,
                  35% 50%,
                  50% 90%,
                  55% 100%,
                  0% 100%
                )
              `,
            }}
          />
        </div>

        <div className="relative z-10 flex h-full max-w-3xl flex-col px-4 sm:px-10 md:px-20 text-white py-8 md:py-0">
          <div className="pt-8 md:pt-16">
            <img
              src="/img/logo2.png"
              alt="Infimech Logo"
              className="mb-8 md:mb-14 w-40 sm:w-48 md:w-56 lg:w-64"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center md:-mt-40">
            <h1 className="mb-6 md:mb-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              Engineering Solutions <br />
              with Digital Transformation
            </h1>

            <button className="group w-fit rounded-full bg-white px-8 sm:px-10 py-3 sm:py-3.5 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                Contact
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT + VALUE WRAPPER ================= */}
      <section className="relative bg-white overflow-hidden">
        {/* LOGO BACKGROUND */}
        <img
          src="/img/Logo1.png"
          alt="Logo Background"
          className="
      absolute
      -left-56
      top-1/2
      w-[700px]
      -translate-y-1/2
      opacity-19
      pointer-events-none
      z-0
    "
        />

        {/* ================= ABOUT COMPANY ================= */}
        <section className="relative z-10 py-10 lg:py-10 px-4 sm:px-6">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 items-center">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <img
                src="/img/meeting.jpg"
                className="h-32 sm:h-40 md:h-48 w-full rounded-xl object-cover"
              />
              <img
                src="/img/meeting1.jpg"
                className="h-32 sm:h-40 md:h-48 w-full rounded-xl object-cover"
              />
              <img
                src="/img/meeting2.jpg"
                className="col-span-2 h-40 sm:h-56 md:h-60 w-full rounded-xl object-cover"
              />
            </div>

            <div className="px-2 sm:px-0">
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#3B6C8D]">
                ABOUT COMPANY
              </h2>

              <p className="mb-3 sm:mb-4 text-sm sm:text-base text-black leading-relaxed">
                PT Infimech Harmoni Teknologi is an Indonesian startup providing
                engineering consultancy, simulation, and training services.
              </p>

              <p className="mb-6 sm:mb-10 text-sm sm:text-base text-black leading-relaxed">
                We help industries optimize design, improve performance, and
                solve complex engineering problems using digital tools.
              </p>

              <div className="mb-8 sm:mb-10 grid grid-cols-3 gap-4 sm:gap-8">
                <div>
                  <p className="text-xs sm:text-sm text-[#3B6C8D]">Project Done</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D]">150+</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-[#3B6C8D]">Clients</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D]">50+</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-[#3B6C8D]">Partners</p>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D]">10+</p>
                </div>
              </div>

              <button className="group inline-flex items-center gap-2 rounded-full bg-[#3B6C8D] px-6 sm:px-9 py-2.5 sm:py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#345F7C] text-sm sm:text-base">
                What We Do
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ================= OUR VALUE ================= */}
        <section className="relative z-10 py-8 lg:py-10 px-4 sm:px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-2 lg:-translate-x-15">
            {/* TITLE (FULL WIDTH) */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-[#3B6C8D]">
                OUR VALUE
              </h2>
            </div>

            {/* ===== VISION CARD ===== */}
            <div className="flex h-full flex-col">
              <img
                src="/img/meeting4.jpg"
                alt="Our Vision"
                className="mb-4 sm:mb-6 h-32 sm:h-48 w-full rounded-2xl object-cover shadow-md"
              />
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B6C8D]">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                As an Indonesian engineering company with a global presence and
                advanced engineering services, committed to becoming a
                world-class company.
              </p>
            </div>

            {/* ===== MISSION CARD ===== */}
            <div className="flex h-full flex-col">
              <img
                src="/img/meeting3.jpg"
                alt="Our Mission"
                className="mb-4 sm:mb-6 h-32 sm:h-48 w-full rounded-2xl object-cover shadow-md"
              />
              <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-semibold text-[#3B6C8D]">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                We are dedicated to delivering world-class, value-driven
                engineering services tailored to the evolving needs of clients
                in construction, oil and gas, power generation, and
                petrochemical sectors. By integrating innovative
                technologies—from traditional engineering solutions to high-end
                computational tools like CFD and FEA—we aim to elevate project
                outcomes, ensuring greater safety, reliability, and efficiency.
              </p>
            </div>
          </div>
        </section>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="relative bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D] mb-12 sm:mb-16 lg:mb-20">
          OUR SERVICES
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start lg:items-center">
          {/* DONUT */}
          <div className="flex justify-center order-1 lg:order-1">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
      ${services
        .map((s, i) => `${s.color} ${i * angle}deg ${(i + 1) * angle}deg`)
        .join(",")}
    )`,
                }}
              />

              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
                style={{
                  background: `conic-gradient(
      ${services
        .map((s, i) => {
          const start = i * angle;
          const end = start + angle;

          return i === serviceIdx
            ? `${s.color} ${start}deg ${end}deg`
            : `transparent ${start}deg ${end}deg`;
        })
        .join(",")}
    )`,
                  transform: "scale(1.06)",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.35)",
                }}
              />

              <svg className="absolute inset-0 z-10" viewBox="0 0 320 320">
                <defs>
                  <path
                    id="arcOuter"
                    d={arcPath(160, 160, outerRadius, startAngle, endAngle)}
                  />
                  <path
                    id="arcInner"
                    d={arcPath(160, 160, innerRadius, startAngle, endAngle)}
                  />
                </defs>

                <text fill="white" fontSize="16" fontWeight="700" className="text-xs sm:text-sm" style={{ letterSpacing: '0.5px' }}>
                  <textPath
                    href="#arcOuter"
                    startOffset="50%"
                    textAnchor="middle"
                    side="left"
                    dominantBaseline="text-after-edge"
                  >
                    {line1}
                  </textPath>
                </text>

                {line2 && (
                  <text fill="white" fontSize="15" fontWeight="700" className="text-xs sm:text-sm" style={{ letterSpacing: '0.5px' }}>
                    <textPath
                      href="#arcInner"
                      startOffset="50%"
                      textAnchor="middle"
                      side="left"
                      dominantBaseline="text-after-edge"
                    >
                      {line2}
                    </textPath>
                  </text>
                )}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 bg-white rounded-full shadow-inner" />
              </div>
            </div>
          </div>

          {/* CARD + ARROWS */}
          <div className="flex flex-col gap-5 order-2 lg:order-2 w-full max-w-lg lg:max-w-md mx-auto">
            <div
              className="bg-[#EBE9FF] shadow-xl rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 w-full min-h-[360px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col order-1"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#3B6C8D] shrink-0 border-b-2 border-[#3B6C8D] pb-3">
                {services[serviceIdx].title}
              </h3>

              <ul
                className="list-disc pl-6 space-y-3 text-sm sm:text-base text-gray-700 overflow-y-auto pr-2 flex-1"
              >
                {services[serviceIdx].items.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-start gap-5 sm:gap-6 order-2">
              <button
                onClick={() =>
                  setServiceIdx((p) => (p === 0 ? services.length - 1 : p - 1))
                }
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#3B6C8D] text-[#3B6C8D] hover:bg-[#3B6C8D] hover:text-white flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                ←
              </button>

              <button
                onClick={() => setServiceIdx((p) => (p + 1) % services.length)}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border-2 border-[#3B6C8D] text-[#3B6C8D] hover:bg-[#3B6C8D] hover:text-white flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* ================= INDUSTRY CATEGORY ================= */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden px-4 sm:px-6">
        {/* LOGO BACKGROUND */}
        <img
          src="/img/Logo1.png"
          alt="Logo Background"
          className="absolute -right-32 sm:-right-48 lg:-right-56 top-1/2 w-[400px] sm:w-[500px] lg:w-[700px] -translate-y-1/2 opacity-19 pointer-events-none z-0"
        />
        
        <div className="mx-auto max-w-7xl text-center relative z-10">

          {/* ===== TITLE ===== */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D] mb-12 sm:mb-16 lg:mb-20">
            INDUSTRY CATEGORY
          </h2>

          {/* ===== SLIDER ===== */}
          <div className="relative flex items-center justify-center overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 pb-4">
            <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-0 min-w-max lg:min-w-0">
              {/* LEFT SIDE - 3 SLIDES (HIDDEN ON MOBILE) */}
              <div className="hidden lg:flex items-center mr-[-40px]">
                {[...Array(3)].map((_, offset) => {
                  const index =
                    (industryIdx - 3 + offset + SLIDES.length) % SLIDES.length;
                  const slide = SLIDES[index];
                  const sizes = ["w-32 h-32", "w-40 h-40", "w-56 h-56"];

                  return (
                    <div
                      key={`left-${offset}`}
                      className={`relative rounded-[20px] overflow-hidden ${sizes[offset]} -mr-6 transition-all hover:opacity-80 flex-shrink-0`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>

              {/* CENTER - ACTIVE SLIDE */}
              <div className="relative z-50 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 flex-shrink-0 overflow-hidden rounded-[20px] sm:rounded-[32px]">
                <img
                  src={SLIDES[industryIdx].image}
                  alt={SLIDES[industryIdx].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-center px-4 sm:px-6 pb-3 sm:pb-4 pt-8 bg-gradient-to-t from-[#274C77]/80 via-[#274C77]/60 to-transparent">
                  <h3 className="text-sm sm:text-lg font-semibold leading-snug text-white text-center">
                    {SLIDES[industryIdx].title}
                  </h3>
                </div>
              </div>

              {/* RIGHT SIDE - 3 SLIDES (HIDDEN ON MOBILE) */}
              <div className="hidden lg:flex items-center ml-[-40px]">
                {[...Array(3)].map((_, offset) => {
                  const index = (industryIdx + 1 + offset) % SLIDES.length;
                  const slide = SLIDES[index];
                  const sizes = ["w-56 h-56", "w-40 h-40", "w-32 h-32"];
                  const zOrder = ["z-30", "z-20", "z-10"];

                  return (
                    <div
                      key={`right-${offset}`}
                      className={`relative rounded-[20px] overflow-hidden ${sizes[offset]} ${zOrder[offset]} -ml-6 transition-all hover:opacity-80 flex-shrink-0`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="mt-8 sm:mt-10 lg:mt-10 flex items-center justify-center gap-4 sm:gap-6">
            <button onClick={prevIndustry} className="text-2xl sm:text-3xl lg:text-3xl hover:opacity-70 transition">
              ‹
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {SLIDES.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full transition-all ${
                    i === industryIdx ? "bg-[#274C77]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button onClick={nextIndustry} className="text-2xl sm:text-3xl lg:text-3xl hover:opacity-70 transition">
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ================= CLIENT LOGOS ================= */}
      <section className="bg-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">

          {/* HEADER */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D] mb-4 sm:mb-5">
              OUR CLIENTS
            </h2>

            <p className="mt-3 sm:mt-4 max-w-3xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base px-2">
              Trusted by a diverse range of energy, petrochemical, and power sector
              partners for precision-engineered metering and process solutions.
            </p>
          </div>

          {/* LOGO GRID */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 items-center justify-items-center">
            {CLIENT_LOGOS.map((logo) => (
              <a
                key={logo.id}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-16 sm:h-20 lg:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300 cursor-pointer p-2"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ================= KEY EXPERIENCES ================= */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">

          {/* ===== TITLE ===== */}
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#3B6C8D] mb-10 sm:mb-14 lg:mb-20">
            KEY EXPERIENCES
          </h2>


          {/* CARD SLIDER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10">
            {SLIDES1[expIdx % SLIDES1.length].map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-[16px] sm:rounded-[24px] overflow-hidden shadow-sm flex flex-col hover:shadow-md transition-shadow"
              >
                {/* IMAGE */}
                <div className="h-32 sm:h-40 md:h-48 lg:h-[200px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col p-4 sm:p-5 lg:p-6 flex-1">
                  <h3 className="text-[#274C77] text-sm sm:text-base lg:text-lg font-medium leading-snug pb-3 sm:pb-4">
                    {item.title}
                  </h3>

                  <div className="border-b border-gray-300 mb-auto"></div>

                  <div className="pt-3 sm:pt-4">
                    <Link
                      to="/experiencesPage"
                      className="text-xs sm:text-sm text-[#274C77] font-medium hover:underline"
                    >
                      Explore More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={prevExp}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition text-sm"
            >
              ←
            </button>

            <div className="relative w-16 sm:w-24 h-[2px] bg-gray-300 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-black transition-all duration-300"
                style={{
                  width: `${((expIdx + 1) / totalExp) * 100}%`,
                }}
              />
            </div>

            <button
              onClick={nextExp}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition text-sm"
            >
              →
            </button>
          </div>

        </div>
      </section>

    </section>
  );
}
