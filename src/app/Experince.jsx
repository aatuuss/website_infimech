import React, { useState } from 'react';

const Experince = () => {
  const bgImage = "/img/experince.jpeg"; 
  
  const [selectedKey, setSelectedKey] = useState('2019');
  const [showSub2021, setShowSub2021] = useState(false);

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
    width: '100%',
    textAlign: 'left',
    padding: `12px ${isSub ? '55px' : '25px'}`,
    fontSize: isSub ? '34px' : '32px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'sans-serif',
    display: 'block',
    transition: 'all 0.3s ease',
    marginBottom: '8px',
    borderRadius: '12px', 
    backgroundColor: isActive ? (isSub ? '#dbeafe' : '#e6f0ff') : 'transparent',
    color: isActive ? '#000' : '#444',
    borderLeft: isActive ? '10px solid #2563eb' : '10px solid transparent',
    boxShadow: (isActive && isSub) ? '0 4px 15px rgba(37, 99, 235, 0.2)' : 'none',
    transform: (isActive && isSub) ? 'scale(1.02)' : 'scale(1)',
  });

  const handleYearClick = (year) => {
  if (year === '2021') {
    setShowSub2021(!showSub2021);

    // JANGAN paksa balik ke 2021 kalau sedang di subproject
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
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      
      {/* SECTION 1: HERO */}
      <div style={{
        position: 'relative', 
        width: '100%', 
        height: '100vh', 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start',
        paddingLeft: '10%', 
        fontFamily: "'Segoe UI', Roboto, sans-serif", 
        boxSizing: 'border-box'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1 }} />
        
        {/* LOGO AREA (Sesuai Code Request Anda) */}
        <a
          href="/"
          className="hero-logo-link"
          style={{
            position: 'absolute',
            top: '56px',   
            left: '5%',  
            zIndex: 10,
            textDecoration: 'none',
            padding: 0 
          }}
        >
          <img
            src="/img/logo2.png"
            alt="Infimech logo"
            className="hero-logo-img"
            style={{
              width: '250px', 
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </a>

        {/* CONTENT AREA */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ 
            display: 'inline-block', 
            background: 'rgba(255,255,255,0.15)', 
            padding: '8px 16px', 
            borderRadius: '24px', 
            fontSize: '14px', 
            marginBottom: '22px', 
            backdropFilter: 'blur(4px)', 
            border: '1px solid rgba(255,255,255,0.2)', 
            color: '#ffffff' 
          }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a> &rsaquo; Experiences
          </div>
          <h1 style={{ 
            color: '#ffffff', 
            fontSize: '70px', 
            lineHeight: '1.1', 
            fontWeight: '800', 
            margin: 0, 
            textShadow: '0 4px 8px rgba(0,0,0,0.3)' 
          }}>
            OUR <br /> EXPERIENCES
          </h1>
        </div>
      </div>

      {/* SECTION 2: EXPERIENCE CONTENT */}
      <div style={{ backgroundColor: '#ffffff', padding: '50px 10%', fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center', fontSize: '38px', fontWeight: '900', marginBottom: '80px', letterSpacing: '1px', color: '#000' }}>
          OUR EXPERIENCE YEAR TO YEAR
        </h2>

        <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start' }}>
          
          {/* Sidebar Navigasi */}
          <div style={{ width: '380px', display: 'flex', flexDirection: 'column' }}>
            {years.map((year) => (
              <div key={year}>
                <button
                  onClick={() => handleYearClick(year)}
                  style={getButtonStyle(selectedKey === year || (year === '2021' && selectedKey.startsWith('2021')))}
                >
                  {year}
                </button>

                {year === '2021' && showSub2021 && (
                  <div style={{ 
                    marginTop: '10px', 
                    marginBottom: '20px', 
                    borderLeft: '2px dashed #ccc', 
                    marginLeft: '30px', 
                    paddingLeft: '10px' 
                  }}>
                    <button
                    onClick={() => setSelectedKey('2021-1')}
                    style={getButtonStyle(selectedKey === '2021-1', true)}
                    >
                    Project 1
            </button>

                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Kartu Konten */}
<div style={{ 
  flex: 1, 
  backgroundColor: '#fff', 
  borderRadius: '50px', 
  overflow: 'hidden', 
  boxShadow: '0 30px 60px rgba(0,0,0,0.1)', 
  border: '1px solid #f0f0f0',
  display: 'flex',
  flexDirection: 'column' // Memastikan konten tersusun vertikal
}}>
  {/* Image Section - Ukuran dikurangi sedikit agar teks lebih terlihat naik */}
  <div style={{ width: '100%', height: '400px' }}> 
    <img 
      src={currentContent.image} 
      alt="Experience Detail" 
      style={{ 
        width: '100%', 
        height: '100%', // Diubah dari 80% ke 100% agar tidak ada gap putih di bawah gambar
        objectFit: 'cover' 
      }} 
    />
  </div>

  {/* Text Section - Padding atas dikurangi */}
  <div style={{ padding: '30px 50px 50px 50px' }}> 
    <h3 style={{ 
      fontSize: '24px', 
      fontWeight: '800', 
      marginBottom: '20px', // Diubah dari 80px ke 20px agar paragraf naik
      color: '#000', 
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
          fontSize: '14px', 
          color: '#333', 
          lineHeight: '1.6' 
        }}>
          <span style={{ 
            width: '8px', 
            height: '8px', 
            backgroundColor: '#2563eb', 
            borderRadius: '50%', 
            marginTop: '9px', 
            marginRight: '15px', 
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