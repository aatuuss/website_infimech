import React from 'react';

const Specialities = () => {
  // Style tag untuk menangani responsivitas secara menyeluruh
  const responsiveStyles = `
    /* Scoped reset only inside this component */
    .specialities-root, .specialities-root * {
      box-sizing: border-box;
    }

    @media (max-width: 768px) {
      /* Hero Section Adjustments */
      .hero-section { 
        padding-left: 20px !important; 
        padding-right: 20px !important; 
        align-items: center !important; 
        text-align: center !important; 
        background-attachment: scroll !important; /* Mencegah lag di mobile */
      }
      
      .hero-title { 
        font-size: 32px !important; 
        margin-left: 0 !important; 
        margin-bottom: 10px !important; /* Menghilangkan margin negatif agar tidak bertabrakan */
        line-height: 1.2 !important;
        text-shadow: 0px 2px 5px rgba(0,0,0,0.5) !important;
      }

      .hero-description { 
        padding: 30px 20px !important; /* Padding lebih kecil agar teks tidak tercekik */
        border-radius: 20px !important;
        width: 100% !important; /* Memastikan lebar kotak mengikuti layar */
        max-width: 100% !important;
        margin: 0 auto !important;
        backdrop-filter: blur(15px) !important; /* Memperjelas efek blur */
        -webkit-backdrop-filter: blur(15px) !important;
      }

      .hero-description p {
        font-size: 14px !important;
        line-height: 1.5 !important;
      }

      .breadcrumb { 
        justify-content: center !important; 
        margin-bottom: 15px !important;
        transform: scale(0.9); /* Sedikit diperkecil di mobile */
      }

      /* Logo Adjustment */
      .logo-link { 
        left: 50% !important; 
        transform: translateX(-50%) !important; 
        top: 20px !important; 
        width: 100% !important;
        display: flex !important;
        justify-content: center !important;
      }
      .logo-img { 
        width: 160px !important; 
      }

      /* Main Content Cards Adjustment */
      .card-row { 
        flex-direction: column !important; 
        gap: 20px !important; 
        margin-bottom: 20px !important;
      }
      .card-item { 
        flex: 1 1 100% !important; 
        max-width: 100% !important; 
        height: 300px !important; 
      }
      .side-image { 
        flex: 0 0 220px !important; 
        width: 100% !important; 
      }
      .section-title { 
        font-size: 28px !important; 
        margin-bottom: 35px !important; 
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
        {/* LOGO */}
        <a
          href="/"
          className="logo-link"
          style={{
            position: 'absolute',
            top: '10px',   
            left: '5%',  
            zIndex: 10,
            textDecoration: 'none',
          }}
        >
          <img
            src="/img/logo2.png"
            alt="Infimech logo"
            className="logo-img"
            style={{
              width: 'clamp(120px, 15vw, 250px)', 
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </a>

        {/* CONTENT WRAPPER HERO */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', width: '100%', marginTop: '60px' }}>
          {/* Breadcrumb */}
          <div className="breadcrumb" style={{ display: 'flex', marginBottom: '20px' }}>
            <div 
                style={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(60, 90, 140, 0.6)', 
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
            >
                <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>Home</a>
                <span style={{ margin: '0 8px' }}>&rsaquo;</span>
                <span style={{ opacity: 0.9 }}>Specialities</span>
            </div>
          </div>

          {/* Judul Hero */}
          <h1 
            className="hero-title"
            style={{
              fontSize: '50px',
              fontWeight: '900',
              marginBottom: '-25px', 
              marginLeft: '20px', 
              position: 'relative',
              zIndex: 5,
              textTransform: 'uppercase',
              textShadow: '0px 4px 8px rgba(0,0,0,0.4)',
              lineHeight: '1.1',
              letterSpacing: '-1px'
            }}
          >
            OUR SPECIALITIES
          </h1>

          {/* Deskripsi Hero */}
          <div 
            className="hero-description"
            style={{
              backgroundColor: 'rgba(120, 145, 190, 0.4)', 
              padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)', 
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.4)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '680px',
              width: '100%', // Menambah width 100% agar responsif
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
              zIndex: 1
            }}
          >
            <p style={{ fontSize: 'clamp(13px, 2vw, 16px)', lineHeight: '1.6', fontWeight: '500', margin: 0, textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
              We deliver end-to-end CFD expertise—from fluid-thermal analysis and advanced 
              industrial applications to solver optimization, OpenFOAM customization, and 
              validation—ensuring efficient, accurate, and data-driven engineering solutions.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          BAGIAN 2: MAIN CONTENT (CARDS)
      ========================================= */}
      <div 
        style={{ 
          padding: '60px 5%', 
          backgroundColor: '#fff', 
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          color: '#000',
          position: 'relative',
        }}
      >
        {/* JUDUL SECTION */}
        <h2 className="section-title" style={{ 
          textAlign: 'center', 
          fontSize: '42px', 
          fontWeight: '900', 
          marginBottom: '50px',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1
        }}>
          OUR SPECIALITIES
        </h2>

        {/* ROW 1: DUA KARTU */}
        <div className="card-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '30px', justifyContent: 'center' }}>
          
          <div className="card-item" style={{
            flex: '1 1 400px',
            height: '350px',
            borderRadius: '25px',
            overflow: 'hidden',
            position: 'relative',
            backgroundImage: 'url("/img/mohamed.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px', right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '20px', borderRadius: '15px'
            }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>VALIDATION & OPTIMIZATION</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#111' }}>Validating results and improving mesh efficiency.</p>
            </div>
          </div>

          <div className="card-item" style={{
            flex: '1 1 400px',
            height: '350px',
            borderRadius: '25px',
            overflow: 'hidden',
            position: 'relative',
            backgroundImage: 'url("/img/matin.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              position: 'absolute', bottom: '20px', left: '20px', right: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)', padding: '20px', borderRadius: '15px'
            }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>NUMERICAL METHODS</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#111' }}>Skilled in FVM/FEM and solver setup.</p>
            </div>
          </div>
        </div>

        {/* ROW 2: FLUID & THERMAL */}
        <div className="card-row" style={{
          display: 'flex',
          backgroundColor: '#fff',
          borderRadius: '25px',
          boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '30px',
        }}>
          <div className="side-image" style={{
            flex: '0 0 40%', 
            backgroundImage: 'url("/img/rolla.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '200px'
          }}></div>
          <div style={{ flex: '1', padding: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>FLUID & THERMAL KNOWLEDGE</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333' }}>
              Strong grasp of fluid flow, heat transfer, and thermodynamics for real-world applications.
            </p>
          </div>
        </div>

        {/* ROW 3: PROJECT EXPERIENCE */}
        <div className="card-row" style={{
          display: 'flex',
          flexDirection: 'row-reverse',
          backgroundColor: '#fff',
          borderRadius: '25px',
          boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '50px',
        }}>
          <div className="side-image" style={{
            flex: '0 0 40%', 
            backgroundImage: 'url("/img/khar.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '200px'
          }}></div>
          <div style={{ flex: '1', padding: '30px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>PROJECT EXPERIENCE</h3>
            <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333' }}>
              Industrial CFD work in automotive, HVAC, heat exchangers, and advanced cases.
            </p>
          </div>
        </div>

        {/* ROW 4: 3 BOTTOM CARDS */}
        <div className="card-row" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          {[
            { title: "CODING", text: "C++ and scripting for customizing OpenFOAM solvers.", img: "/img/h-liu.jpg" },
            { title: "TEAMWORK", text: "Working with cross-disciplinary teams and technical findings.", img: "/img/green.jpg" },
            { title: "DESIGN", text: "Using CFD for predictive maintenance and design improvements.", img: "/img/nopparuj.jpg" }
          ].map((item, index) => (
            <div key={index} className="card-item" style={{
              flex: '1 1 300px',
              maxWidth: '350px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              overflow: 'hidden',
              border: '1px solid #eee'
            }}>
              <div style={{ height: '200px', backgroundImage: `url("${item.img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
              <div style={{ padding: '20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '900', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialities;