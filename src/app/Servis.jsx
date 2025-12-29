import React, { useState } from 'react';

export default function Servis() {
  // === STATE UNTUK SLIDER (SERVICES CATEGORY) ===
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data Slide Services Category
  const slides = [
    {
      title: 'PROJECT BASED',
      description: 'Generated from short-term assignments that deliver specific engineering outputs such as design, simulation, or analysis.',
      img: '/img/1.jpg' 
    },
    {
      title: 'RETAINED BASED',
      description: 'Derived from ongoing partnerships where clients receive regular assistance through monthly retainers.',
      img: '/img/2.jpg' 
    },
    {
      title: 'CONSULTING',
      description: 'Collected from on-demand advisory or technical services billed by the hour.',
      img: '/img/mohamed.jpg' 
    },
    {
      title: 'FIXED-PRICE PACKAGES',
      description: 'Produced through standardized service bundles offered at a predetermined price.',
      img: '/img/4.jpg' 
    },
    {
      title: 'LICENSING',
      description: 'Selling digital tools, templates, or engineering spreadsheets, either one-time or by subscription.',
      img: '/img/5.jpg' 
    },
    {
      title: 'TRAINING & WORKSHOPS',
      description: 'Providing skill-building sessions on engineering software, design practices, or maintenance topics.',
      img: '/img/6.jpg' 
    },
    {
      title: 'SOFTWARE PROFICIENCY',
      description: 'Skiled in CFD tools like OpenFOAM, including meshing (SnappyHexMesh) and visualization (ParaView).',
      img: '/img/7.jpg' 
    }
  ];

  // Logic Next & Prev
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      {/* GLOBAL FIX ANTI HORIZONTAL SCROLL & CSS TAMBAHAN */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0.4; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Grid Layout untuk Specialities */
        .specialities-grid {
          display: grid;
          grid-template-columns: 40% 58%; 
          gap: 2%;
          margin-top: 40px;
        }

        .spec-right-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        /* Glassmorphism Effect */
        .glass-overlay {
          background: rgba(255, 255, 255, 0.10); 
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: background 0.3s ease; /* Animasi hover */
        }
        
        .glass-overlay:hover {
          background: rgba(255, 255, 255, 0.20); 
        }

        /* === RESPONSIVE STYLES === */
        @media (max-width: 1100px){
          .hero-logo-img { width: 180px !important; } 
          .hero-title { font-size: 58px !important; }
          .hero-content { width: 65% !important; padding-left: 6rem !important; }
        }

        @media (max-width: 980px){
          .services-cards { grid-template-columns: repeat(2, 1fr) !important; }
          
          .category-container {
            flex-direction: column-reverse !important;
            gap: 40px !important;
            text-align: center !important;
          }
          .category-nav {
            justify-content: center !important;
          }
          .category-content {
            padding-right: 0 !important;
          }

          .specialities-grid {
            grid-template-columns: 1fr !important;
            gap: 30px;
          }
          .spec-left-card {
             height: 400px !important;
          }
          
          /* === FIX MOBILE OVERLAY === */
          /* Di layar kecil, overlay dibuat full agar teks terbaca */
          .hero-overlay-custom {
            clip-path: none !important;
            width: 100% !important;
            background: rgba(14, 54, 100, 0.95) !important;
          }
        }

        @media (max-width: 760px){
          .servis-hero { height: 75vh !important; min-height: auto !important; }
          .hero-logo-img { width: 140px !important; }
          .hero-logo-link { padding: 20px !important; }
          
          .hero-content {
            width: 100% !important;
            padding: 30px !important;
            margin-top: 6rem !important;
          }
          .hero-title { font-size: 40px !important; }
        }

        @media (max-width: 640px){
          .services-cards { grid-template-columns: 1fr !important; }
          .services-heading { font-size: 28px !important; }
          .services-section { padding: 40px 1rem !important; }
        }
        
        @media (max-width: 900px) {
          .web-pm-card {
            grid-template-columns: 1fr !important;
            padding: 28px !important;
          }
          .web-pm-content {
            margin-left: 0 !important;
            padding-left: 0 !important;
            margin-top: 20px;
          }
        }
      `}</style>

      {/* ================= HERO SECTION (UPDATED) ================= */}
      <section
        className="servis-hero"
        style={{
          position: 'relative',
          minHeight: '600px',
          height: '90vh', 
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          width: '100%',
          margin: 0,
        }}
      >
        {/* 1. BACKGROUND IMAGE (FULL WIDTH) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: "url('/img/servis-hero.jpg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0
          }}
        />

        {/* 2. ANGLED BLUE OVERLAY */}
        <div
          className="hero-overlay-custom"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%', 
            height: '100%',
            
            // WARNA: Deep Blue (#0E3664) hampir solid
            backgroundColor: 'rgba(14, 54, 100, 0.5)', 
            
            // BENTUK: Panah Masuk (<)
            clipPath: 'polygon(0 0, 50% 0, 40% 50%, 50% 100%, 0 100%)',
            
            zIndex: 1,
            pointerEvents: 'none'
          }}
        />

        {/* LOGO */}
        <a
          href="/"
          className="hero-logo-link"
          style={{
            position: 'absolute',
            top: '0.9px',   
            left: '5%',  
            zIndex: 10,
            textDecoration: 'none',
            padding: 0 
          }}
        >
          <img
            src="/img/logo-baru-removebg.png"
            alt="Infimech logo"
            className="hero-logo-img"
            style={{
              width: '240px', 
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </a>

        {/* HERO CONTENT */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 2,
            width: '50%', 
            paddingLeft: '10rem', 
            color: '#fff',
            marginTop: '7rem'
          }}
        >
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.15)',
              padding: '8px 16px',
              borderRadius: '24px',
              fontSize: '14px',
              marginBottom: '22px',
              backdropFilter: 'blur(4px)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a> › Services
          </div>

          <h1
            className="hero-title"
            style={{
              fontSize: '70px',
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: '1px',
              margin: 0,
              textShadow: '0 4px 10px rgba(0,0,0,0.3)' 
            }}
          >
            OUR <br /> SERVICES
          </h1>

          <p
            style={{
              marginTop: '24px',
              maxWidth: '900px',
              fontSize: '17px',
              lineHeight: 1.7,
              opacity: 0.95
            }}
          >
            The services we provide include Regular Engineering Services, <br />
            Advanced Engineering Services, and <br />
            Web-Based Project Management Services.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT WRAPPER ================= */}
      <section
        className="services-section"
        style={{
          position: 'relative',
          backgroundColor: '#F8FAFC',
          padding: '50px 2rem 120px',
          width: '100%',
          overflowX: 'hidden'
        }}
      >
        
        {/* CONTAINER KONTEN */}
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative' }}>
          
          {/* HEADER SERVICES */}
          <h2
            className="services-heading"
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              fontSize: '36px',
              fontWeight: 900,
              marginBottom: '48px',
              letterSpacing: '1px',
              color: '#333'
            }}
          >
            SERVICES
          </h2>

          {/* BACKGROUND IMAGE (LOGO) */}
          <div 
            style={{
                position: 'absolute',
                top: '10px',   
                left: '0',      
                width: '60%',   
                height: '1000px',
                backgroundImage: "url('/img/Logo1.png')", 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'left center', 
                backgroundSize: 'contain',
                opacity: 0.05, 
                transform: 'translateX(-50%)', 
                zIndex: 10, 
                pointerEvents: 'none' 
            }}
          />

          {/* 1. SERVICES GRID CARDS */}
          <div
            className="services-cards"
            style={{
              position: 'relative',
              zIndex: 2, 
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px'
            }}
          >
            {[
              {
                title: 'Regular Engineering Service',
                img: '/img/reguler.jpg',
                items: ['Process Simulation', 'Mechanical Design', 'Piping Design', 'Structural Design', 'Instrumentation', 'Electrical', 'Drafting', '3D Modeling', 'Geotechnical']
              },
              {
                title: 'Advanced Engineering Service',
                img: '/img/advanced.png',
                items: ['CFD', 'FEA', 'Vibration Study', 'Dispersion Study', 'Fatigue Study', 'Acoustic Study']
              },
              {
                title: 'Other Services',
                img: '/img/other.png',
                items: ['Bid Support', 'Project Support', 'Product Design Support', 'Product Development', 'Engineering Operation', 'Plant Maintenance', 'Expertise Support']
              }
            ].map((card, i) => (
              <article
                key={i}
                style={{
                  background: '#fff',
                  borderRadius: '22px',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.08)', 
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <img src={card.img} alt={card.title} style={{ width: '100%', height: '210px', objectFit: 'cover' }} />
                <div style={{ padding: '24px 28px', flex: 1 }}>
                  <h3 style={{ fontWeight: 800, marginBottom: '12px', color: '#111' }}>{card.title}</h3>
                  <ul 
                    style={{ 
                      paddingLeft: '20px', 
                      lineHeight: 1.7, 
                      color: '#444', 
                      listStyleType: 'disc', 
                      margin: 0 
                    }}
                  >
                    {card.items.map((item, idx) => (
                      <li key={idx} style={{ paddingLeft: '5px' }}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* 2. WEB BASED PROJECT MANAGEMENT CARD */}
          <div style={{ marginTop: '50px', position: 'relative', zIndex: 2 }}>
            <div
              className="web-pm-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                background: '#fff',
                borderRadius: '22px',
                boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                padding: '20px 28px',
                position: 'relative'
              }}
            >
              <div>
                <img src="/img/erp-web.png" alt="Web Based" style={{ width: '90%', height: '180px', objectFit: 'cover', borderRadius: '14px', display: 'block' }} />
              </div>
              <div className="web-pm-content" style={{ justifySelf: 'start', marginLeft: '-60px' }}>
                <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '10px', lineHeight: 1.2, color: '#111' }}>
                  Web Based<br />Project Management Services
                </h3>
                <ul 
                  style={{ 
                    paddingLeft: '20px', 
                    margin: 0, 
                    fontSize: '13.5px', 
                    lineHeight: 1.55, 
                    color: '#333',
                    listStyleType: 'disc' 
                  }}
                >
                  {['Implement ERP', 'Implement EDMS', 'Implement E-Library', 'Custom App', 'AI Based Tech', 'Project Controller', 'Document Controller', 'PM Services'].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. SERVICES CATEGORY (SLIDER) */}
          <div style={{ marginTop: '100px', position: 'relative', zIndex: 2 }}>
            <h2
              style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 900,
                marginBottom: '60px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#000'
              }}
            >
              SERVICES CATEGORY
            </h2>

            <div 
              className="category-container"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px' }}
            >
              <div className="category-content" style={{ flex: 1, paddingRight: '20px' }}>
                <div key={currentSlide} className="fade-in">
                  <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: '#000', textTransform: 'uppercase' }}>
                    {slides[currentSlide].title}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#333', marginBottom: '40px', fontWeight: 500 }}>
                    {slides[currentSlide].description}
                  </p>
                </div>

                <div className="category-nav" style={{ display: 'flex', gap: '150px', marginTop: '20px' }}>
                  <button 
                    onClick={prevSlide} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <svg width="30" height="30" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 12M2 12L12 22M2 12H42" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  <button 
                    onClick={nextSlide} 
                    style={{ background: 'none', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <svg width="30" height="30" viewBox="0 0 44 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32 2L42 12M42 12L32 22M42 12H2" stroke="black" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div className="fade-in" key={currentSlide + '-img'} style={{ width: '100%', maxWidth: '450px', height: '320px', borderRadius: '40px', border: '10px solid #D9D9D9', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                  <img src={slides[currentSlide].img} alt={slides[currentSlide].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* 4. OUR SPECIALITIES */}
          <div style={{ marginTop: '100px', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
             <h2
              style={{
                textAlign: 'center',
                fontSize: '36px',
                fontWeight: 900,
                marginBottom: '40px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: '#000'
              }}
            >
              OUR SPECIALITIES
            </h2>

            <div className="specialities-grid">
              
              {/* LEFT: Large Vertical Card */}
              <div 
                className="spec-left-card"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%', 
                  minHeight: '400px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: '#000' 
                }}
              >
                <img 
                  src="/img/green.jpg" 
                  alt="Fluid & Thermal Knowledge"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                />
                
                <div 
                  className="glass-overlay"
                  style={{
                    position: 'absolute',
                    bottom: '10px', 
                    left: '10px',   
                    right: '10px', 
                    borderRadius: '20px',
                    padding: '20px 25px',
                    color: '#fff'
                  }}
                >
                  {/* TITLE AS LINK */}
                  <a href="/fluid-thermal" style={{ textDecoration: 'none', color: '#fff' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px', cursor: 'pointer' }}>
                      FLUID & THERMAL KNOWLEDGE
                    </h3>
                  </a>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.4, opacity: 0.9 }}>
                    Strong grasp of fluid flow, heat transfer, and thermodynamics...
                  </p>
                </div>
              </div>

              {/* RIGHT: Grid of 4 Items */}
              <div className="spec-right-grid">
                {[
                  { title: 'PROJECT EXPERIENCE', img: '/img/khar.jpg', link: '/project-experience' },
                  { title: 'NUMERICAL METHODS', img: '/img/matin.jpg', link: '/numerical-methods' },
                  { title: 'CODING', img: '/img/mohamed.jpg', link: '/coding' },
                  { title: 'VALIDATION & OPTIMIZATION', img: '/img/h-liu.jpg', link: '/validation' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '140px',
                      borderRadius: '24px',
                      overflow: 'hidden',
                    }}
                  >
                    <img 
                      src={item.img} 
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    
                    <div
                      className="glass-overlay"
                      style={{
                        position: 'absolute',
                        bottom: '10px', 
                        left: '50%',
                        transform: 'translateX(-50%)',
                        // === PERBAIKAN DI SINI ===
                        width: '50%',           // Mengatur lebar agar sama (90% dari container)
                        textAlign: 'center',    // Agar teks berada di tengah kotak
                        whiteSpace: 'nowrap',   // Mencegah teks turun ke bawah
                        // =========================
                        backgroundColor: 'rgba(255, 255, 255, 0.55)', 
                        backdropFilter: 'blur(0.02px)',
                        WebkitBackdropFilter: 'blur(0.02px)',
                        border: '1px solid rgba(255, 255, 255, 0.4)',
                        padding: '10px',
                        borderRadius: '15px'
                      }}
                    >
                      {/* TITLE AS LINK */}
                      <a href={item.link} style={{ textDecoration: 'none', color: '#fff' }}>
                        <h4 style={{ margin: 0, color: '#fff', fontWeight: 800, fontSize: '14px', textTransform: 'uppercase', cursor: 'pointer' }}>
                          {item.title}
                        </h4>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* === TOMBOL READ MORE AS LINK === */}
            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-start' }}>
              <a 
                href="/specialities" // Link tujuan read more
                style={{
                  backgroundColor: '#002D5B', 
                  color: '#ffffff',
                  textDecoration: 'none', // Hilangkan garis bawah
                  padding: '16px 40px',
                  borderRadius: '50px', 
                  fontSize: '14px',
                  fontWeight: '900', 
                  letterSpacing: '0.5px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                READ MORE
                <svg width="40" height="10" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 1L23 7L17 13M23 7H0" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}