import React from 'react';

const Specialities = () => {
  const responsiveStyles = `
    .specialities-root, .specialities-root * {
      box-sizing: border-box;
    }

    /* =========================================
       DESKTOP ADJUSTMENTS
    ========================================= */
    @media (min-width: 1025px) {
      .main-content-wrapper {
        max-width: 1100px;
        margin: 0 auto;
      }
      
      .horizontal-card {
        max-width: 1000px;
        margin-left: auto !important;
        margin-right: auto !important;
      }
    }

    /* =========================================
       IPAD / TABLET RESPONSIVENESS (768px - 1024px)
    ========================================= */
    @media (min-width: 768px) and (max-width: 1024px) {
      .hero-title {
        font-size: 42px !important;
      }
      
      .hero-description {
        max-width: 90% !important;
      }

      .card-item-top {
        flex: 1 1 calc(50% - 20px) !important;
        height: 320px !important;
      }

      .bottom-card-item {
        flex: 1 1 45% !important;
        max-width: 45% !important;
      }
    }

    /* =========================================
       MOBILE RESPONSIVENESS (max 767px)
    ========================================= */
    @media (max-width: 767px) {
      .hero-section { 
        padding-left: 20px !important; 
        padding-right: 20px !important; 
        align-items: center !important; 
        text-align: center !important; 
      }
      
      .hero-title { 
        font-size: 32px !important; 
        margin-bottom: 20px !important;
      }

      .hero-description { 
        padding: 25px 20px !important;
        width: 100% !important;
      }

      .logo-link { 
        left: 50% !important; 
        transform: translateX(-50%) !important;
        top: 20px !important; 
      }

      .card-row { 
        flex-direction: column !important; 
      }
      
      .card-item-top, .bottom-card-item { 
        flex: 1 1 100% !important; 
        max-width: 100% !important; 
        height: 300px !important; 
      }

      .horizontal-card {
        flex-direction: column !important;
      }
      
      .side-image { 
        flex: 0 0 220px !important; 
        width: 100% !important; 
      }

      .section-title { 
        font-size: 28px !important; 
      }
    }
  `;

  return (
    <div className="specialities-root" style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{responsiveStyles}</style>
      
      {/* =========================================
          BAGIAN 1: HERO SECTION
      ========================================= */}
      <div 
        className="hero-section"
        style={{
          backgroundImage: 'url("/img/hero1.jpg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '8%', 
          paddingRight: '5%',
          boxSizing: 'border-box',
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          position: 'relative',
          color: '#fff'
        }}
      >
        {/* LOGO - Digeser ke kanan dan turun sedikit */}
        <a 
          href="/" 
          className="logo-link" 
          style={{ 
            position: 'absolute', 
            top: '40px',   /* Turun lebih bawah */
            left: '8%',    /* Geser ke kanan sedikit */
            zIndex: 10 
          }}
        >
          <img 
            src="/img/logo2.png" 
            alt="Logo" 
            className="logo-img" 
            style={{ width: 'clamp(140px, 15vw, 250px)', height: 'auto' }} 
          />
        </a>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '850px', width: '100%', marginTop: '80px' }}>
          
          {/* 1. BREADCRUMB */}
          <div className="breadcrumb" style={{ display: 'flex', marginBottom: '25px' }}>
            <div style={{ backgroundColor: 'rgba(60, 90, 140, 0.6)', padding: '8px 20px', borderRadius: '50px', fontSize: '14px', backdropFilter: 'blur(4px)' }}>
                <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>Home</a>
                <span style={{ margin: '0 8px' }}>&rsaquo;</span>
                <span style={{ opacity: 0.9 }}>Specialities</span>
            </div>
          </div>

          {/* 3. HERO TITLE */}
          <h1 className="hero-title" style={{ 
            fontSize: '60px', 
            fontWeight: '900', 
            marginBottom: '-15px', 
            marginTop: 0,
            textTransform: 'uppercase', 
            textShadow: '0px 4px 10px rgba(0,0,0,0.5)',
            lineHeight: '1',
            position: 'relative',
            zIndex: 10
          }}>
            OUR SPECIALITIES
          </h1>

          {/* 4. HERO DESCRIPTION BELOW TITLE */}
          <div className="hero-description" style={{ 
            backgroundColor: 'rgba(120, 145, 190, 0.4)', 
            padding: '45px 35px 30px 35px', 
            borderRadius: '20px', 
            backdropFilter: 'blur(15px)', 
            WebkitBackdropFilter: 'blur(15px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.4)', 
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '700px', 
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            zIndex: 1
          }}>
            <p style={{ fontSize: '16px', lineHeight: '1.7', fontWeight: '500', margin: 0 }}>
              We deliver end-to-end CFD expertise—from fluid-thermal analysis and advanced 
              industrial applications to solver optimization, OpenFOAM customization, 
              and validation—ensuring efficient and data-driven engineering solutions.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 2: MAIN CONTENT (CARDS)
      ========================================= */}
      <div style={{ padding: '80px 5%', backgroundColor: '#fff', fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
        
        <div className="main-content-wrapper">
          
          <h2 className="section-title" style={{ textAlign: 'center', fontSize: '42px', fontWeight: '900', marginBottom: '50px', textTransform: 'uppercase' }}>
            OUR SPECIALITIES
          </h2>

          {/* ROW 1 */}
          <div className="card-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '30px', justifyContent: 'center' }}>
            <div className="card-item-top" style={{ flex: '1 1 450px', height: '350px', borderRadius: '25px', overflow: 'hidden', position: 'relative', backgroundImage: 'url("/img/mohamed.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '15px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>VALIDATION & OPTIMIZATION</h3>
                <p style={{ margin: 0, fontSize: '14px' }}>Validating results and improving mesh efficiency.</p>
              </div>
            </div>

            <div className="card-item-top" style={{ flex: '1 1 450px', height: '350px', borderRadius: '25px', overflow: 'hidden', position: 'relative', backgroundImage: 'url("/img/matin.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '15px' }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>NUMERICAL METHODS</h3>
                <p style={{ margin: 0, fontSize: '14px' }}>Skilled in FVM/FEM and solver setup.</p>
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="card-row horizontal-card" style={{ display: 'flex', backgroundColor: '#fff', borderRadius: '25px', boxShadow: '0 5px 25px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '30px' }}>
            <div className="side-image" style={{ flex: '0 0 40%', backgroundImage: 'url("/img/rolla.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '220px' }}></div>
            <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>FLUID & THERMAL KNOWLEDGE</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
                Strong grasp of fluid flow, heat transfer, and thermodynamics for real-world applications.
              </p>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="card-row horizontal-card" style={{ display: 'flex', flexDirection: 'row-reverse', backgroundColor: '#fff', borderRadius: '25px', boxShadow: '0 5px 25px rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '50px' }}>
            <div className="side-image" style={{ flex: '0 0 40%', backgroundImage: 'url("/img/khar.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '220px' }}></div>
            <div style={{ flex: '1', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>PROJECT EXPERIENCE</h3>
              <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
                Industrial CFD work in automotive, HVAC, heat exchangers, and advanced cases.
              </p>
            </div>
          </div>

          {/* ROW 4 */}
          <div className="card-row bottom-card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
            {[
              { title: "CODING", text: "C++ and scripting for customizing OpenFOAM solvers.", img: "/img/h-liu.jpg" },
              { title: "TEAMWORK", text: "Working with cross-disciplinary teams and technical findings.", img: "/img/green.jpg" },
              { title: "DESIGN", text: "Using CFD for predictive maintenance and design improvements.", img: "/img/nopparuj.jpg" }
            ].map((item, index) => (
              <div key={index} className="bottom-card-item" style={{ flex: '1 1 300px', maxWidth: '340px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #eee' }}>
                <div style={{ height: '180px', backgroundImage: `url("${item.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '900', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333', margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Specialities;