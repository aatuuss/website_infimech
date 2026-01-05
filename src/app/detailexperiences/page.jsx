import { Link, useParams } from "react-router-dom";

const DETAIL_EXPERIENCES = [
  {
    id: 1,
    title: "High-Performance & Accuracy Advantages",
    image: "/img/High-Performance & Accuracy Advantages.png",
    sections: [
      {
        subtitle: "Higher Accuracy",
        content: "Hexahedral meshes follow the flow direction better, giving more accurate results and reducing numerical errors.",
      },
      {
        subtitle: "Better Stability & Faster Convergence",
        content: "Hex meshes help solvers run more smoothly and reach solutions faster with fewer iterations.",
      },
      {
        subtitle: "Fewer Elements Needed",
        content: "A hex mesh can achieve high accuracy with fewer cells, lowering memory use and computation time.",
      },
      {
        subtitle: "More Efficient to Compute",
        content: "Hex cells make matrix operations easier for the solver, improving overall simulation speed.",
      },
      {
        subtitle: "Great for Boundary Layers",
        content: "Hex meshes capture boundary layers more accurately, which is important for heat transfer, turbulence, and shear stress.",
      },
      {
        subtitle: "Higher Mesh Quality",
        content: "Hex meshes naturally have better orthogonality and lower skewness, leading to more reliable simulation results.",
      },
    ],
  },
  {
    id: 2,
    title: "CFD Tools & Numerical Modeling Expertise",
    image: "/img/Experience with CFD tools OpenFOAM.png",
    sections: [
      {
        subtitle: "OpenFOAM Experience",
        content: "Knowledge of pre-processing tools (e.g., mesh generation using SnappyHexMesh) and post-processing software (ParaView).",
      },
      {
        subtitle: "Software & Licensing",
        content: "Infimech provide the license software and opensource solutions for comprehensive CFD analysis.",
      },
      {
        subtitle: "High-Accuracy Modeling",
        content: "OpenFOAM provides high accuracy and detailed modelling for simulation based on research papers which can be accessed by users.",
      },
      {
        subtitle: "Transparent Validation",
        content: "Historical equations and numerics which can be opened to validate the result and ensure reliability.",
      },
    ],
  },
  {
    id: 3,
    title: "Fluid Flow & Turbulence Modeling Expertise",
    image: "/img/Fluid Flow Analysis (Single).png",
    sections: [
      {
        subtitle: "Fluid Flow Analysis (Single)",
        content: "Simulation of internal and external flows (e.g., gas, water, steam) across industrial systems such as pipelines, heat exchangers, and pumps.",
      },
      {
        subtitle: "Relevance for Infimech",
        content: "Key for optimizing fluid transport systems and flue gas flow in HRSG and heaters.",
      },
      {
        subtitle: "Solver Examples",
        content: "simpleFoam (steady-state incompressible flows) and multiphaseEulerFoam (multiphase flows like CO2/O2 separation in water).",
      },
      {
        subtitle: "Turbulence Modeling Experience",
        content: "Simulating turbulent flows in complex systems (piping networks, combustion systems) using RANS and LES models.",
      },
      {
        subtitle: "Advanced Solver",
        content: "pimpleFoam (transient flows with turbulence models) for improved flow prediction and design optimization.",
      },
    ],
  },
  {
    id: 4,
    title: "Heat Transfer & Thermal Management Expertise",
    image: "/img/Heat Transfer and Thermal Management.png",
    sections: [
      {
        subtitle: "Conjugate Heat Transfer Analysis",
        content: "Expertise in analyzing conjugate heat transfer between fluid and solid surfaces, as used in heaters and reactors.",
      },
      {
        subtitle: "Relevance for Infimech",
        content: "Helps optimize performance in thermal processes, especially for energy-related systems like HRSG units.",
      },
      {
        subtitle: "Solver Examples",
        content: "chtMultiRegionFoam (conjugate heat transfer) and buoyantSimpleFoam (buoyancy-driven heat transfer).",
      },
      {
        subtitle: "System Optimization",
        content: "Advanced thermal management to improve efficiency and performance in industrial heating and cooling systems.",
      },
    ],
  },
  {
    id: 5,
    title: "Multiphase Flow Simulation Expertise",
    image: "/img/Multiphase Flows.png",
    sections: [
      {
        subtitle: "Multiphase Flow Experience",
        content: "Simulation of internal and external flows (e.g., gas, water, steam) across industrial systems such as pipelines, heat exchangers, and pumps.",
      },
      {
        subtitle: "Relevance for Infimech",
        content: "Key for optimizing fluid transport systems and flue gas flow in HRSG and heaters.",
      },
      {
        subtitle: "Solver Examples",
        content: "simpleFoam (steady-state incompressible flows) and multiphaseEulerFoam (multiphase flows like CO2/O2 separation in water).",
      },
      {
        subtitle: "Industrial Applications",
        content: "Advanced multiphase modeling for complex industrial processes involving gas-liquid or liquid-liquid interactions.",
      },
    ],
  },
  {
    id: 6,
    title: "Combustion & Chemical Reaction Simulation Expertise",
    image: "/img/Combustion & Chemical Reaction Simulation Expertise.png",
    sections: [
      {
        subtitle: "Combustion Modeling",
        content: "Modeling of combustion processes for flue gas analysis, important for improving efficiency in heaters and power generation systems.",
      },
      {
        subtitle: "Relevance for Infimech",
        content: "Essential in projects involving fuel combustion and environmental compliance.",
      },
      {
        subtitle: "Solver Examples",
        content: "coalChemistryFoam and reactingFoam (combustion and gas-phase reactions).",
      },
      {
        subtitle: "Environmental Compliance",
        content: "Advanced modeling to ensure efficient combustion and meet environmental standards in energy systems.",
      },
    ],
  },
];

const DetailExperiencesPage = () => {
  const { id } = useParams();
  const experienceId = parseInt(id) || 1;
  const detail = DETAIL_EXPERIENCES.find((exp) => exp.id === experienceId) || DETAIL_EXPERIENCES[0];

  return (
    <div className="bg-white min-h-screen relative overflow-hidden">
      {/* LOGO BACKGROUND - LEFT */}
      <img
        src="/img/Logo1.png"
        alt="Logo Background Left"
        className="absolute -left-56 top-1/2 w-[700px] -translate-y-1/2 opacity-20 pointer-events-none z-0"
      />

      <header className="px-4 sm:px-6 py-6 sm:py-8 md:px-12 lg:px-20 flex flex-col gap-3 items-start relative z-10">
        <img src="/img/logo4.png" alt="Infimech" className="h-8 sm:h-10 md:h-12" />

        <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
          <Link to="/Home" className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link to="/experiences" className="px-2 sm:px-3 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
            Key Experiences
          </Link>
          <span className="text-gray-400">›</span>
          <span className="px-2 sm:px-3 py-1 rounded-full bg-gray-200 text-gray-700">
            Detail Key Experiences
          </span>
        </nav>
      </header>

      <main className="px-6 pb-14 md:px-12 lg:px-20 relative z-10">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-10 lg:grid-cols-2 items-start">
            {/* LEFT - IMAGE */}
            <div className="flex justify-center">
              <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md">
                <img
                  src={detail.image}
                  alt={detail.title}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-[#3B6C8D] leading-tight">
                {detail.title}
              </h1>

              <div className="space-y-6">
                {detail.sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-[#274C77] mb-2">
                      {section.subtitle}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NAVIGATION */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <Link
              to="/experiences"
              className="inline-flex items-center gap-2 rounded-full bg-[#3B6C8D] px-6 py-3 text-white font-semibold shadow-md hover:-translate-y-0.5 transition-transform"
            >
              ← Back to Experiences
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailExperiencesPage;
