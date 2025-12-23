import { useState } from "react";

export default function Home() {
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

  const [active, setActive] = useState(0);
  const angle = 360 / services.length;

  const outerRadius = 120;
  const innerRadius = 102;

  const startAngle = active * angle;
  const endAngle = startAngle + angle;

  const polar = (cx, cy, r, deg) => {
    const rad = (deg - 90) * (Math.PI / 180);
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  };

  const arcPath = (cx, cy, r, start, end) => {
    const s = polar(cx, cy, r, end);
    const e = polar(cx, cy, r, start);
    const large = end - start <= 180 ? 0 : 1;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${large} 0 ${e.x} ${e.y}`;
  };

  const title = services[active].title.toUpperCase();
  const splitIndex =
    title.length > 22 ? Math.ceil(title.length / 2) : title.length;

  const line1 = title.slice(0, splitIndex);
  const line2 = title.slice(splitIndex);

  return (
    <section className="bg-[#FFFFFF]">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="/img/about.jpg"
          alt="Hero Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-0 z-0">
          <div
            className="absolute inset-y-0 left-0 w-[80%] backdrop-blur-md backdrop-saturate-110 bg-black/5"
            style={{
              clipPath: `
                polygon(
                  0% 0%,
                  80% 0%,
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

        <div className="relative z-10 flex h-full max-w-3xl flex-col px-10 md:px-20 text-white">
          <div className="pt-16">
            <img
              src="/img/logo2.png"
              alt="Infimech Logo"
              className="mb-14 w-56 md:w-64"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center -mt-40">
            <h1 className="mb-10 text-3xl font-semibold leading-tight md:text-4xl">
              To Engineering Solutions <br />
              with Digital Transformation
            </h1>

            <button className="group w-fit rounded-full bg-white px-10 py-3.5 font-semibold text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50">
              <span className="flex items-center gap-2">
                About Us
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
        <section className="relative z-10 py-10 lg:py-10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-16 px-8 lg:grid-cols-2 items-center">
            <div className="grid grid-cols-2 gap-6">
              <img
                src="/img/meeting.jpg"
                className="h-48 w-full rounded-xl object-cover"
              />
              <img
                src="/img/meeting1.jpg"
                className="h-48 w-full rounded-xl object-cover"
              />
              <img
                src="/img/meeting2.jpg"
                className="col-span-2 h-60 w-full rounded-xl object-cover"
              />
            </div>

            <div>
              <h2 className="mb-6 text-6xl font-semibold text-[#3B6C8D]">
                ABOUT COMPANY
              </h2>

              <p className="mb-4 text-black leading-relaxed">
                PT Infimech Harmoni Teknologi is an Indonesian startup providing
                engineering consultancy, simulation, and training services.
              </p>

              <p className="mb-10 text-black leading-relaxed">
                We help industries optimize design, improve performance, and
                solve complex engineering problems using digital tools.
              </p>

              <div className="mb-10 grid grid-cols-3 gap-8">
                <div>
                  <p className="text-sm text-[#3B6C8D]">Project Done</p>
                  <p className="text-5xl font-semibold text-[#3B6C8D]">100+</p>
                </div>
                <div>
                  <p className="text-sm text-[#3B6C8D]">Clients</p>
                  <p className="text-5xl font-semibold text-[#3B6C8D]">20+</p>
                </div>
                <div>
                  <p className="text-sm text-[#3B6C8D]">Partners</p>
                  <p className="text-5xl font-semibold text-[#3B6C8D]">10+</p>
                </div>
              </div>

              <button className="group inline-flex items-center gap-2 rounded-full bg-[#3B6C8D] px-9 py-3 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#345F7C]">
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
        <section className="relative z-10 py-8 lg:py-10">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-y-16 gap-x-12 px-8 lg:grid-cols-2 lg:px-16 lg:-translate-x-14 items-start">
            {/* TITLE (FULL WIDTH) */}
            <div className="lg:col-span-2">
              <h2 className="mb-2 text-center text-6xl font-semibold text-[#3B6C8D]">
                OUR VALUE
              </h2>
            </div>

            {/* ===== VISION CARD ===== */}
            <div className="flex h-full flex-col max-w-lg mx-auto">
              <img
                src="/img/meeting4.jpg"
                alt="Our Vision"
                className="mb-6 h-[240px] w-full rounded-2xl object-cover shadow-md"
              />
              <h3 className="mb-4 text-3xl font-semibold text-[#3B6C8D]">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
                As an Indonesian engineering company with a global presence and
                advanced engineering services, committed to becoming a
                world-class company.
              </p>
            </div>

            {/* ===== MISSION CARD ===== */}
            <div className="flex h-full flex-col max-w-lg mx-auto">
              <img
                src="/img/meeting3.jpg"
                alt="Our Mission"
                className="mb-6 h-[240px] w-full rounded-2xl object-cover shadow-md"
              />
              <h3 className="mb-4 text-3xl font-semibold text-[#3B6C8D]">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-gray-600">
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
      <section className="relative bg-white py-5">
        <h2 className="text-center text-5xl font-semibold text-[#3B6C8D] mb-20">
          OUR SERVICES
        </h2>

        <div
          className="
    max-w-7xl
    mx-auto
    px-16
    lg:pl-24
    lg:pr-32
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-24
    items-center
    -mt-12
    lg:-mt-10
  "
        >
          {/* DONUT */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
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

          return i === active
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

                <text fill="white" fontSize="12" fontWeight="600">
                  <textPath
                    href="#arcOuter"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    {line1}
                  </textPath>
                </text>

                {line2 && (
                  <text fill="white" fontSize="11" fontWeight="600">
                    <textPath
                      href="#arcInner"
                      startOffset="50%"
                      textAnchor="middle"
                    >
                      {line2}
                    </textPath>
                  </text>
                )}
              </svg>

              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-40 h-40 bg-white rounded-full" />
              </div>
            </div>
          </div>

          {/* CARD + ARROWS */}
<div className="flex flex-col items-start gap-10">
  <div
    className="
      bg-[#EBE9FF]
      shadow-lg
      rounded-[32px]
      p-10
      max-w-md
      w-full
      h-[420px]
      flex
      flex-col
    "
  >
    <h3 className="text-xl font-semibold mb-4 text-[#3B6C8D] shrink-0">
      {services[active].title}
    </h3>

    <ul
      className="
        list-disc
        pl-5
        space-y-2
        text-gray-700
        overflow-y-auto
        pr-2
        flex-1
      "
    >
      {services[active].items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>

  <div className="flex gap-6">
    <button
      onClick={() =>
        setActive((p) => (p === 0 ? services.length - 1 : p - 1))
      }
      className="w-12 h-12 rounded-full border hover:bg-gray-100"
    >
      ←
    </button>

    <button
      onClick={() => setActive((p) => (p + 1) % services.length)}
      className="w-12 h-12 rounded-full border hover:bg-gray-100"
    >
      →
    </button>
  </div>
</div>
        </div>
      </section>
    </section>
  );
}
