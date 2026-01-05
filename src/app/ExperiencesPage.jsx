import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const SLIDES1 = [
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

const ExperiencesPage = () => {
  const items = useMemo(() => SLIDES1.flat(), []);
  const [active, setActive] = useState(0);

  const total = items.length;
  const slide = items[active];

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i === total - 1 ? 0 : i + 1));

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      

      {/* LOGO BACKGROUND - RIGHT */}
      <img
        src="/img/Logo1.png"
        alt="Logo Background Right"
        className="absolute -right-56 top-1/2 w-[700px] -translate-y-1/2 opacity-20 pointer-events-none z-0"
      />

      <header className="px-6 py-8 md:px-12 lg:px-20 flex flex-col gap-3 items-start relative z-10">
        <img src="/img/logo4.png" alt="Infimech" className="h-10 md:h-12" />

        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/Home" className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            Key Experiences
          </span>
        </nav>
      </header>

      <main className="px-6 pb-14 md:px-12 lg:px-40 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3B6C8D] tracking-tight">
            KEY EXPERIENCES
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
            Infimech delivers high-precision CFD simulations using hexahedral meshing and OpenFOAM,
            ensuring faster convergence, reduced computational load, and accurate resolution of complex flow,
            heat transfer, and combustion phenomena in industrial systems.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.05fr] items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-start">
              <h2 className="text-xl md:text-2xl font-semibold text-[#3B6C8D] max-w-md leading-snug">
                {slide.title}
              </h2>
            </div>

            <Link
              to={`/detailexperiences/${slide.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#2D63E6] px-6 py-3 text-white font-semibold shadow-md hover:-translate-y-0.5 transition-transform"
            >
              Explore More
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[360px] md:h-[440px] object-cover"
              />
            </div>
          </div>
        </section>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Previous slide"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-[#2D63E6] w-10" : "bg-gray-300 w-6"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </main>
    </div>
  );
};

export default ExperiencesPage;
