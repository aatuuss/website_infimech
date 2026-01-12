import React, { useState, useEffect } from 'react';

const Experience = () => {
  const bgImage = "/img/hero2.jpg";
  const [selectedKey, setSelectedKey] = useState('2019');
  const [showSub2021, setShowSub2021] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Update ukuran layar saat resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Breakpoints Logic
  const isMobile = windowWidth <= 767;
  const isTablet = windowWidth >= 768 && windowWidth <= 1024; // iPad Portrait & Landscape

  const experienceData = {
    '2019': {
      title: "OUR 2019 EXPERIENCES",
      image: "/img/p1.png",
      list: [
        "Numerical Analysis of Wave Shape Blade VAWT (Universitas Siliwangi, Indonesia)",
        "Design and Optimization Design of Water Funnel for Hydro-Kinetics Power Plant (Ministry of Energy and Mineral)",
        "Effect of Mach and Reynolds Number on Heat Transfer of Diffusing Compressor Cascade Airfoil Heat Exchanger (UGM, Indonesia)",
        "Numerical Analysis of Intercooler and Recuperator System of Compressor Gas Turbine (Tokyo Tech, Japan)",
        "Optimization Design of Funnel Effect of Hydrokinetics Power Plant (ESDM, Indonesia)",
        "High Speed Compressible Flow Analysis of Heat Air Foil Exchanger (U-Tokyo, Japan)",
        "Blade Design for Horizontal Axis Wind Turbine with AoA and Enlargement Area of Blade (UGM, Indonesia)",
        "Hybrid Renewable Power Plant of Solar Cell and VAWT (UGM, Indonesia)"
      ]
    },
    '2020': {
      title: "OUR 2020 EXPERIENCES",
      image: "/img/p2.png",
      list: [
        "Numerical Analysis of Refrigeration System using LSHX (Universitas Pancasila)",
        "Numerical Analysis of Horizontal Axis Wind Turbine (National Taiwan University, Taiwan)",
        "Design and Optimization of Nuclear Reactor for Using CFD Analysis (Politechnica Wroklawska, Poland)",
        "CFD Simulation of HVAC in Tata Bus Cabin Type 713 (Tata Bus, India)",
        "Shipping Vertical Multistage Centrifugal Pump Simulation Using Discrete Element Method (PKHT - UGM)",
        "Modelling Boiler System Analysis for Multi Mesh Editing (Universitas Gadjah Mada, Indonesia)",
        "Design of Heating Plate and Pipe Twist for Thermo-Hydraulic Analysis (RKIT, India)",
        "Frame and Aerodynamic Analysis of Mitsubishi FE 71 (Dinas Perhubungan Kota Tangerang, Indonesia)",
        "Diameter Effect on Steam Quality of Multiphase Flow in PLTP Unit V Kamojang (Universitas Gadjah Mada - PT. PLN)",
        "Finite Element Analysis of Pressure Vessel Slug (Universitas Negeri Malang, Indonesia)",
        "Design and Optimization R407C & R404C refrigerant for Portable Chiller (PT Western Electric, Indonesia)",
        "Numerical Analysis of Multi-thick Chasing Wall of Water Heater with Rockwool and Glasswool Material (ITS, Indonesia)",
        "Design of Pebble Bed Modular Reactor and Numerical Analysis (University of Michigan, US)"
      ]
    },
    '2021': {
      title: "OUR 2021 EXPERIENCES",
      image: "/img/p3.png",
      list: [
        "Modelling Analysis ISO Speed Carborator (Angkatan Udara)",
        "Analisis Pemodelan Momod Sucker Rod PT. Pertamina Hulu Rokan",
        "Analisis Optimasi dan Re desain Lay Out Cooling Pipe (PT. Geodipa Energy)",
        "Modelling Rumah Pompa Ancol Sentiong dan Analisis Ketahanan Resiko (PT. Wijaya Karya KSO)",
        "Model Numerik Pemurni Air dengan Prinsip UV dan AOP (PT. Liepzig Textile)",
        "Numerical Model Flow Over the Cylinder Von Karman Model (PT. Samator Gas, Indonesia)",
        "Numerical Model Cavitation Analysis of Turbine Water Pump (Yonsei University, South Korea)",
        "Modelling Analysis of Advance Oxidation Process and Ultrasonic Model (ITB, Indonesia)",
        "Mesh Manipulation with Inflation and Adaption of Vertical Axis Water Turbin (ITS, Indonesia)"
      ]
    },
    '2021-1': {
      title: "OUR 2021 PROJECT 1",
      image: "/img/p4.jpg",
      list: [
        "Design of Hydrokinetics Water Turbine for Energy Generating (ITS, Indonesia)",
        "Numerical Simulation of Constrained Melting of Phase Change Material (UB, Indonesia)",
        "Modelling and Analysis of Pressure Drop Pipe Existing Pump Station (PT. Jaya Konstruksi)",
        "Numerical Model of Wankel Rotating Engine for Refrigerator of Reactor (Univ. of Birmingham, UK)",
        "Flow Simulation for Spillway Jatibarang Dam and Dam Break Model (PT. Brantas Abipraya)",
        "Optimasi Flat Plate Heat Exchanger dengan Model CFD (PT. Pertamina, Indonesia)",
        "Design and Analysis Water Treatment Plant Bakauheni Harbour City (PUPR)",
        "Design of Portable Grain Dryer Multi-Capacity (Kementrian Desa, Indonesia)"
      ]
    },
    '2022': {
      title: "OUR 2022 EXPERIENCES",
      image: "/img/p5.png",
      list: [
        "Design Analysis Geometry of Economizer (PT. IKPT)",
        "Analisis Pemodelan Thermal Storage Tank (PT. BTA)",
        "Analysis of Turbomachinery Performance with Various Shroud (PT. Medco Energy)",
        "Analysis Performing of Blade Modified and Existing Centrifugal Pump (PT. Pupuk Indonesia)",
        "Simulasi Corrugated Heat Exchanger dengan Modifikasi Permukaan (MEPHI - Moscow)",
        "Modelling Analisis Kekuatan Rangka Sepeda Listrik E-Max (PT. JUARA BIKE)",
        "Simulasi Analisis Performa Pressure Vessel LNG PT. PGN (PT. PGN)"
      ]
    },
    '2023': {
      title: "OUR 2023 EXPERIENCES",
      image: "/img/p6.png",
      list: [
        "Analisis Numerik Performa Data Center Hall SMEP Tier 3 (PT. Matin Perkasa)",
        "Analisis Performa Aliran Fluida pada Sucker Rod Hub Modification (PT. Pertamina Hulu Rokan)",
        "Analisis Numerik Performa Insulasi Dinding Pada Data Center Hall (PT. Seax Indonesia)",
        "Analysis Ducting pada Reheater Model Optimisasi Flue Gas (PT. REB)",
        "Pemodelan Performa Data Center dan Sistem Penghawaan (PT. Jaya Teknik Indonesia)",
        "Air Flow Conditionar and HVAC Model for Public Mall (ARUP)",
        "Analysis Performance of HRSG Aromatic Refinery (PT. REB)"
      ]
    },
    '2024': {
      title: "OUR 2024 EXPERIENCES",
      image: "/img/p7.webp",
      list: [
        "Analisis Pemodelan Biomassa dengan BiomassgasificationFoam (UI)",
        "Oscilating Water Coloumn Desain dengan Helmholtz Resonator (ITS)",
        "Analisis Performa Boiler pada Desain Model Furnace Miring (PT. Indonesia Power)",
        "Analisis Performa Kadar Kimia pada Batu Bara untuk Boiler (PT. Berau Coal)",
        "Analisa Desain dan Perbandingan Software CFD pada OWC (BRIN – BPPT)",
        "Simulasi CFD Performa Pompa dan Desain Aliran Pipa Air Minum (PT. SupraharmoniaC)",
        "Analisis Performa Desain Penampung Air dengan Karbon (PT. Adhi Karya Persada)"
      ]
    },
    '2025': {
      title: "OUR 2025 EXPERIENCES",
      image: "/img/p8.webp",
      list: [
        "Connector Hub Insulation Cable for Data Center - PLN Puslitbang",
        "Adequacy Check Coil Heater Design PKT Unit IV - Tripatra",
        "Spherical Tank Mechanical Calculation - KPI - Tripatra",
        "HVAC Performance of Die Casting Factory TACI - Takenaka Indonesia",
        "Axial Cyclone Separator Design and Performance - MTT ST, Australia",
        "CFU Modelling Calculation and Performance - MTTST, Australia",
        "Desalter Revamping Kapasitas Unit - CFU Unit V - PT. KPI",
        "Test Separator - Production Separator Proces and Mechanical Calculation - Petronas"
      ]
    },
  };

  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const getButtonStyle = (isActive, isSub = false) => ({
    width: '100%',
    textAlign: 'left',
    padding: isMobile ? '10px 20px' : isTablet ? '12px 15px' : `12px ${isSub ? '55px' : '25px'}`,
    fontSize: isMobile ? '16px' : isTablet ? '22px' : (isSub ? '30px' : '32px'),
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    display: isMobile ? 'inline-block' : 'block',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    marginBottom: isMobile ? '0' : '5px',
    marginRight: isMobile ? '10px' : '0',
    borderRadius: '10px',
    backgroundColor: isActive ? (isSub ? '#dbeafe' : '#e6f0ff') : 'transparent',
    color: isActive ? '#2563eb' : '#555',
    borderLeft: !isMobile && isActive ? '6px solid #2563eb' : 'none',
    borderBottom: isMobile && isActive ? '4px solid #2563eb' : 'none',
    opacity: isActive ? 1 : 0.7
  });

  const handleYearClick = (year) => {
    if (year === '2021') {
      setShowSub2021(!showSub2021);
      if (!selectedKey.startsWith('2021')) setSelectedKey('2021');
    } else {
      setSelectedKey(year);
      setShowSub2021(false);
    }
  };

  const currentContent = experienceData[selectedKey] || experienceData['2019'];

  return (
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', backgroundColor: '#fff' }}>
      
      <style>{`
        body, html { margin: 0; padding: 0; overflow-x: hidden; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* SECTION 1: HERO */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '50vh' : isTablet ? '60vh' : '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: isMobile ? '5%' : '10%',
        boxSizing: 'border-box',
      }}>
        <a href="/" style={{ position: 'absolute', top: '20px', left: '5%', zIndex: 10 }}>
          <img src="/img/logo2.png" alt="Logo" style={{ width: isMobile ? '130px' : '220px' }} />
        </a>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'inline-block', 
            background: 'rgba(0, 0, 0, 0.4)', 
            padding: '5px 15px', 
            borderRadius: '20px', 
            fontSize: '14px', 
            marginBottom: '15px', 
            backdropFilter: 'blur(4px)', 
            color: '#fff' 
          }}>
            Home &rsaquo; Experiences
          </div>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: isMobile ? '32px' : isTablet ? '54px' : '70px', 
            lineHeight: '1.1', 
            fontWeight: '800', 
            margin: 0, 
            textShadow: '0 2px 10px rgba(0,0,0,0.3)' 
          }}>
            OUR <br /> EXPERIENCES
          </h1>
        </div>
      </div>

      {/* SECTION 2: CONTENT */}
      <div style={{ 
        padding: isMobile ? '40px 5%' : isTablet ? '60px 5%' : '80px 10%', 
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          textAlign: isMobile ? 'left' : 'center', 
          fontSize: isMobile ? '22px' : '34px', 
          fontWeight: '900', 
          marginBottom: isMobile ? '30px' : '50px'
        }}>
          OUR EXPERIENCE YEAR TO YEAR
        </h2>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: isMobile ? '20px' : isTablet ? '30px' : '60px',
          alignItems: 'flex-start'
        }}>
          
          {/* Navigation / Sidebar */}
          <div 
            className="hide-scrollbar"
            style={{ 
              width: isMobile ? '100%' : isTablet ? '180px' : '300px', // Tablet dirampingkan
              flexShrink: 0,
              display: 'flex', 
              flexDirection: isMobile ? 'row' : 'column',
              overflowX: isMobile ? 'auto' : 'visible',
              position: isMobile ? 'sticky' : 'sticky',
              top: isMobile ? '0' : '20px',
              backgroundColor: '#fff',
              zIndex: 5,
              paddingBottom: isMobile ? '10px' : '0'
            }}
          >
            {years.map((year) => (
              <div key={year} style={{ width: '100%' }}>
                <button
                  onClick={() => handleYearClick(year)}
                  style={getButtonStyle(selectedKey === year || (year === '2021' && selectedKey.startsWith('2021')))}
                >
                  {year}
                </button>
                {year === '2021' && showSub2021 && (
                  <button
                    onClick={() => setSelectedKey('2021-1')}
                    style={getButtonStyle(selectedKey === '2021-1', true)}
                  >
                    {isMobile || isTablet ? 'P1' : 'Project 1'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Experience Card */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#fff', 
            borderRadius: '25px', 
            overflow: 'hidden', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.06)', 
            border: '1px solid #f0f0f0',
            width: '100%',
            maxWidth: isTablet ? '700px' : 'none' // Limit width on iPad agar tidak kepanjangan kesamping
          }}>
            <div style={{ width: '100%', height: isMobile ? '220px' : isTablet ? '300px' : '420px' }}> 
              <img 
                src={currentContent.image} 
                alt="Experience" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            <div style={{ padding: isMobile ? '20px' : isTablet ? '30px' : '45px' }}> 
              <h3 style={{ 
                fontSize: isMobile ? '18px' : '24px', 
                fontWeight: '800', 
                marginBottom: '15px', 
                color: '#2563eb',
                textTransform: 'uppercase' 
              }}>
                {currentContent.title}
              </h3>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {currentContent.list.map((item, index) => (
                  <li key={index} style={{ 
                    display: 'flex', 
                    alignItems: 'flex-start', 
                    marginBottom: '12px', 
                    fontSize: isMobile ? '13px' : isTablet ? '14px' : '16px', 
                    color: '#444', 
                    lineHeight: '1.5' 
                  }}>
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      backgroundColor: '#2563eb', 
                      borderRadius: '50%', 
                      marginTop: '8px', 
                      marginRight: '12px', 
                      flexShrink: 0 
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;