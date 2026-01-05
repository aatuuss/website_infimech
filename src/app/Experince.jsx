import React, { useState, useEffect } from 'react';

const Experience = () => {
  const bgImage = "/img/hero2.jpg";
  const [selectedKey, setSelectedKey] = useState('2019');
  const [showSub2021, setShowSub2021] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Deteksi ukuran layar untuk responsivitas
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        "Numerical Analysis of Refrigeration System using LSHX (Universitas Pancasila, Indonesia)",
        "Numerical Analysis of Multi-thick Chasing Wall of Water Heater with Rockwool and Glasswool Material (ITS, Indonesia)",
        "Design of Pebble Bed Modular Reactor and Numerical Analysis (University of Michigan, US)"
      ]
    },
    '2021': {
      title: "OUR 2021 EXPERIENCES",
      image: "/img/p3.png",
      list: [
        "Modelling Analysis ISO Speed Carborator (Angkatan Udara)",
        "Analisis Pemodelan Momod Sucker Rod PT. Pertamina Hulu Rokan (PT. Pertamina Hulu Rokan)",
        "Analisis Optimasi dan Re desain Lay Out Cooling Pipe (PT. Geodipa Energy)",
        "Modelling Rumah Pompa Ancol Sentiong dan Analisis Ketahanan Resiko Bangunan (PT. Wijaya Karya KSO)",
        "Model Numerik Pemurni Air dengan Prinsip UV dan AOP (PT. Liepzig Textile)",
        "Modelling Analysis of Proton Exchange Membrane Fuel Cell with Various Temperature and Molarity Liquid (PENS)",
        "Numerical Model Flow Over the Cylinder Von Karman Model (PT. Samator Gas, Indonesia)",
        "Model Analisis Numerik pada Penghawaan Sistem Hidroponik (Unsoed, Indonesia)",
        "Numerical Model Cavitation Analysis of Turbine Water Pump (Yonsei University, South Korea)",
        "Analisis Pengaruh Kemiringan Sudut Pitch Terhadap Homogenisasi Produk Campuran Cream (PT. Rich, Indonesia)",
        "Modelling Bubbling Model for Rice Husk Reactor Model Biomassa (UI, Indonesia)",
        "Modelling Analysis of Advance Oxidation Process and Ultrasonic Model for Waste Water Treatment (ITB, Indonesia)",
        "Numerical Model of Nanobubble Generation of Water Purifier (BRIN, Indonesia)",
        "Mesh Manipulation with Inflation and Adaption of Vertical Axis Water Turbin (ITS, Indonesia)"
      ]
    },
    '2021-1': {
      title: "OUR 2021 PROJECT 1 EXPERIENCES",
      image: "/img/p4.jpg",
      list: [
        "Mesh Manipulation with Inflation and Adaption of Vertical Axis Water Turbin (ITS, Indonesia)",
        "Modelling Viscous Model Over the Cylinder with K-epsilon Viscous Model (PT. Samator Gas, Indonesia)",
        "Design of Hydrokinetics Water Turbine for Energy Generating (ITS, Indonesia)",
        "Numerical Simulation of Constrained Melting of Phase Change Material in inclined Rectangular Enclosure (UB, Indonesia)",
        "Modelling and Analysis of Pressure Drop Pipe Existing Pump Station (PT. Jaya Konstruksi, Indonesia)",
        "Phase Change Model for Lauric Acid and Calcium Chloride Hexa-Hydrate (UB, Indonesia)",
        "Numerical Model of Wankel Rotating Engine for Refrigerator of Reactor (University of Birmingham, UK)",
        "Design and Modelling Shell Tube Corrugated Heat Exchanger (MEPhI, Rusia)",
        "Flow Simulation for Spillway Jatibarang Dam and Dam Break Model (PT. Brantas Abipraya, Indonesia)",
        "Numerical Investigation High Pressure Steam Ejector (Compressible Flow Case) (UGM, Indonesia)",
        "Optimasi Flat Plate Heat Exchanger dengan Model Computational Fluid Dynamics (PT. Pertamina, Indonesia)",
        "Design and Analysis Water Treatment Plant - Waste Water Treatment Plant Bakauheni Harbour City, Lampung (PUPR)",
        "Design of Portable Grain Dryer Multi-Capacity (Kementrian Desa dan Daerah Tertinggal, Indonesia)"
      ]
    },
    '2022': {
      title: "OUR 2022 EXPERIENCES",
      image: "/img/p5.png",
      list: [
        "Design Analysis Geometry of Economizer (PT. IKPT)",
        "Analisis Pemodelan Thermal Storage Tank dalam Distribusi Air (PT. BTA)",
        "Analisis Struktur Tangki Penyimpanan Minyak Mentah (PT. BTA)",
        "Modelling Performance Heat Transfer of Fitting Heat Exchanger (PT. WIKA)",
        "Analisis Pemodelan Thermal Storage Tank dengan Variasi Debit Intake (PT. BTA)",
        "Analysis of Turbomachinery Performance with Various Shroud (PT. Medco Energy)",
        "Modelling Performance of Amdae Oil Pump (PT. Tracon Industry)",
        "Analysis Centrifugal Blade for Redesign Model (PT. TGE)",
        "CFD Modelling of Jatibarang Dam Break Model (PT. SupraharmoniaC)",
        "Analysis Performing of Blade Modified and Existing Centrifugal Pump (PT. Pupuk Indonesia)",
        "Motion Modification Model FEA simulation (PT. Pertamina Hulu Rokan)",
        "Simulasi Model Penghawaan Sub Tropis Hidroponik (Unsoed)",
        "Simulasi Pemodelan Molten Salt Heat Removal (ITB)",
        "Pemodelan Simulasi Microbubble Model dengan Water Injection (BRIN – LIPI)",
        "Simulasi Corrugated Heat Exchanger dengan Modifikasi Permukaan (MEPHI - Moscow)",
        "Modelling Analisis Penghawaan Ruang Hotel (PT. ATRIA HOTEL)",
        "TAC Modelling HVAC (UNILA - LAMPUNG)",
        "Modelling System Thermosiphone dan Wind Turbine (ITB)",
        "Modelling Analisis Kekuatan Rangka Sepeda Listrik E-Max (PT. JUARA BIKE)",
        "Modelling Analisis Gasifier Pyrolisis Model (UI)",
        "Numerikal Model Static Kenics Mixer PT. Rich Cream (PT. Rich Cream)",
        "Simulasi Aliran Von Karman pada Cylinder (PT. Samator Gas)",
        "Simulasi Pemodelan Portable LSHX Western Electric (PT. Western Electric Indonesia)",
        "Modelling Analisis Proton Exchange Membrane Fuel Cell (PENS)",
        "Simulasi Analisis Performa Pressure Vessel LNG PT. PGN (PT. PGN)"
      ]
    },
    '2023': {
      title: "OUR 2023 EXPERIENCES",
      image: "/img/p6.png",
      list: [
        "Analisis Numerik Performa Data Center Hall SMEP Tier 3 Lantai 2 (PT. Matin Perkasa)",
        "Analisis Performa Aliran Fluida pada Sucker Rod Hub Modification (PT. Pertamina Hulu Rokan)",
        "Analisis Numerik Performa Data Center Hall SMEP Tier 3 Lantai 1 (PT. Matin Perkasa)",
        "Analisis Numerik Performa Insulasi Dinding Pada Data Center Hall (PT. Seax Indonesia Pratama)",
        "Analisis Numerik Performa Bangunan Golf (PT. Simtex Mechatronic Indojaya)",
        "Model CFD Ruangan Greenbuilding Karawang Mall (PT. Simtex Mechatronic Indojaya)",
        "Analisis Performa Ruang Data Center dan Isolasi (PT. Matin Perkasa)",
        "Analysis Ducting pada Reheater Model Optimisasi Flue Gas (PT. REB)",
        "Pemodelan Performa Data Center dan Sistem Penghawaan (PT. Jaya Teknik Indonesia)",
        "Simulasi CFD Thermal Water Storage Model Discharging (PT. BTA)",
        "Analysis Ducting Model Reheater Model (PT. Semen Gresik)",
        "Pemodelan Numerik pada Perpipaan Minyak Aromatik (PT. Berkah Mekatek Jaya)",
        "Analysis of Wind Flow and HVLS for Cooling System Karawang Mall (Meindhart)",
        "Air Flow Conditionar and HVAC Model for Public Mall (ARUP)",
        "Revamp Design of Reheating Model For Flue Gas Model (PT. Tripatra Engineer)",
        "Analysis Performance of HRSG Aromatic Refinery (PT. REB)"
      ]
    },
    '2024': {
      title: "OUR 2024 EXPERIENCES",
      image: "/img/p7.webp",
      list: [
        "Analisis Pemodelan Biomassa dengan BiomassgasificationFoam (UI)",
        "Oscilating Water Coloumn Desain dengan Helmholtz Resonator (ITS)",
        "Pemodelan Simulasi Kebisingan pada Bangunan Kapal Roro (PT. PAL – PPNS)",
        "Analisis Performa Boiler pada Desain Model Furnace Miring (PT. Indonesia Power)",
        "Analisis Performa Kadar Kimia pada Batu Bara untuk Boiler (PT. Berau Coal)",
        "Simulasi Performa Brake Tulip Circuit (PT. PLN Puslitbang)",
        "Simulasi Performa Tangki Penyimpan Air dengan Kapasitas 42 kubik (PT. Bintang Timur Anugerah)",
        "Analisa Desain dan Perbandingan Software CFD pada OWC (BRIN – BPPT)",
        "Analisis ETTV Kemampuan Dinding dalam Menahan Panas (PT. Matin Perkasa)",
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
        "CFU Engineering Calculation Design - Shanghai Chemtec - China",
        "CFU Modelling Calculation and Performance - MTTST, Australia",
        "Desalter Revamping Kapasitas Unit - CFU Unit V - PT. Kilang Pertamina Internasional (KPI)",
        "Test Separator - Production Separator Design Calculation - MTTST, Australia",
        "Test Separator - Production Separator Proces and Mechanical Calculation - Petronas"
      ]
    },
  };

  const years = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];

  const getButtonStyle = (isActive, isSub = false) => ({
    width: isMobile ? 'auto' : '100%',
    textAlign: 'left',
    padding: isMobile ? '10px 20px' : `12px ${isSub ? '55px' : '25px'}`,
    fontSize: isMobile ? '18px' : (isSub ? '34px' : '32px'),
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    display: isMobile ? 'inline-block' : 'block',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    marginBottom: isMobile ? '0' : '8px',
    marginRight: isMobile ? '10px' : '0',
    borderRadius: '12px',
    backgroundColor: isActive ? (isSub ? '#dbeafe' : '#e6f0ff') : 'transparent',
    color: isActive ? '#2563eb' : '#444',
    borderLeft: !isMobile && isActive ? '10px solid #2563eb' : 'none',
    borderBottom: isMobile && isActive ? '4px solid #2563eb' : 'none',
  });

  const handleYearClick = (year) => {
    if (year === '2021') {
      setShowSub2021(!showSub2021);
      if (!selectedKey.startsWith('2021')) {
        setSelectedKey('2021');
      }
    } else {
      setSelectedKey(year);
      setShowSub2021(false);
    }
  };

  const currentContent = experienceData[selectedKey] || experienceData['2019'];

  return (
    // Penambahan margin: 0 dan padding: 0 pada container terluar
    <div style={{ width: '100%', margin: 0, padding: 0, overflowX: 'hidden', backgroundColor: '#fff' }}>
      
      {/* CSS Injection: Penting untuk menghapus margin bawaan browser */}
      <style>{`
        body, html { 
          margin: 0 !important; 
          padding: 0 !important; 
          overflow-x: hidden; 
        }
        .mobile-nav::-webkit-scrollbar { display: none; }
        .mobile-nav { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* SECTION 1: HERO */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '60vh' : '100vh',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: isMobile ? '5%' : '10%',
        paddingRight: '5%',
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        boxSizing: 'border-box',
        margin: 0 // Memastikan tidak ada margin
      }}>
        {/* LOGO AREA */}
        <a href="/" style={{ position: 'absolute', top: '20px', left: '5%', zIndex: 10 }}>
          <img
            src="/img/logo2.png"
            alt="Infimech logo"
            style={{ width: isMobile ? '150px' : '240px', height: 'auto' }}
          />
        </a>

        {/* CONTENT AREA */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'left' }}>
          <div style={{ 
            display: 'inline-block', 
            background: 'rgba(116, 116, 116, 0.5)', 
            padding: '6px 14px', 
            borderRadius: '20px', 
            fontSize: isMobile ? '12px' : '14px', 
            marginBottom: '15px', 
            backdropFilter: 'blur(4px)', 
            color: '#fff' 
          }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>Home</a> &rsaquo; Experiences
          </div>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: isMobile ? '36px' : '70px', 
            lineHeight: '1.1', 
            fontWeight: '800', 
            margin: 0, 
            textShadow: '0 2px 4px rgba(0,0,0,0.5)' 
          }}>
            OUR <br /> EXPERIENCES
          </h1>
        </div>
      </div>

      {/* SECTION 2: EXPERIENCE CONTENT */}
      <div style={{ 
        padding: isMobile ? '40px 5%' : '80px 10%', 
        fontFamily: 'sans-serif' 
      }}>
        <h2 style={{ 
          textAlign: isMobile ? 'left' : 'center', 
          fontSize: isMobile ? '24px' : '38px', 
          fontWeight: '900', 
          marginBottom: isMobile ? '30px' : '60px', 
          color: '#000' 
        }}>
          OUR EXPERIENCE YEAR TO YEAR
        </h2>

        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          gap: isMobile ? '30px' : '60px' 
        }}>
          
          {/* Navigation */}
          <div 
            className="mobile-nav"
            style={{ 
              width: isMobile ? '100%' : '300px', 
              display: 'flex', 
              flexDirection: isMobile ? 'row' : 'column',
              overflowX: isMobile ? 'auto' : 'visible',
              paddingBottom: isMobile ? '10px' : '0',
              borderBottom: isMobile ? '1px solid #eee' : 'none',
              position: isMobile ? 'sticky' : 'static',
              top: '0',
              backgroundColor: '#fff',
              zIndex: 5
            }}
          >
            {years.map((year) => (
              <div key={year} style={{ display: 'flex', flexDirection: isMobile ? 'row' : 'column' }}>
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
                    {isMobile ? 'P1' : 'Project 1'}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Experience Card */}
          <div style={{ 
            flex: 1, 
            backgroundColor: '#fff', 
            borderRadius: isMobile ? '20px' : '40px', 
            overflow: 'hidden', 
            boxShadow: '0 15px 40px rgba(0,0,0,0.08)', 
            border: '1px solid #f0f0f0'
          }}>
            <div style={{ width: '100%', height: isMobile ? '250px' : '400px' }}> 
              <img 
                src={currentContent.image} 
                alt="Experience Detail" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            <div style={{ padding: isMobile ? '25px' : '40px 50px' }}> 
              <h3 style={{ 
                fontSize: isMobile ? '20px' : '24px', 
                fontWeight: '800', 
                marginBottom: '20px', 
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
                    marginBottom: '15px', 
                    fontSize: isMobile ? '13px' : '15px', 
                    color: '#444', 
                    lineHeight: '1.5' 
                  }}>
                    <span style={{ 
                      width: '6px', 
                      height: '6px', 
                      backgroundColor: '#2563eb', 
                      borderRadius: '50%', 
                      marginTop: '7px', 
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

export default Experince;