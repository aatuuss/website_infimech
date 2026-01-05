import React from 'react';

const Specialities = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      
      {/* =========================================
          BAGIAN 1: HERO SECTION
      ========================================= */}
      <div 
        style={{
          backgroundImage: 'url("/img/specialities.jpeg")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 'max(20px, 5vw)',
          paddingRight: '20px',
          paddingBottom: '40px',
          paddingTop: '80px',
          boxSizing: 'border-box',
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          position: 'relative',
          color: '#fff'
        }}
      >
        {/* LOGO */}
        <a
          href="/"
          style={{
            position: 'absolute',
            top: '20px',   
            left: 'max(20px, 5vw)',  
            zIndex: 10,
            textDecoration: 'none',
            padding: 0
          }}
        >
          <img
            src="/img/logo2.png"
            alt="Infimech logo"
            style={{
              width: 'clamp(120px, 15vw, 250px)', 
              maxWidth: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </a>

        {/* CONTENT WRAPPER HERO */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '100%', marginTop: 'clamp(40px, 6vw, 60px)' }}>
          {/* Breadcrumb */}
          <div 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: 'rgba(60, 90, 140, 0.6)', 
              padding: 'clamp(6px, 1vw, 8px) clamp(12px, 2vw, 20px)',
              borderRadius: '50px',
              fontSize: 'clamp(11px, 2vw, 14px)',
              fontWeight: '600',
              marginBottom: 'clamp(12px, 2vw, 20px)',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          >
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>Home</a>
            <span style={{ margin: '0 8px' }}>&rsaquo;</span>
            <span style={{ opacity: 0.9 }}>Specialities</span>
          </div>

          {/* Judul Hero */}
          <h1 
            style={{
              fontSize: 'clamp(32px, 8vw, 64px)',
              fontWeight: '900',
              marginBottom: 'clamp(-20px, -2vw, -30px)', 
              marginLeft: 'clamp(0px, 2vw, 20px)', 
              position: 'relative',
              zIndex: 5,
              textTransform: 'uppercase',
              textShadow: '0px 4px 8px rgba(0,0,0,0.4)',
              lineHeight: '1',
              letterSpacing: '-1px'
            }}
          >
            OUR SPECIALITIES
          </h1>

          {/* Deskripsi Hero */}
          <div 
            style={{
              backgroundColor: 'rgba(120, 145, 190, 0.4)', 
              padding: 'clamp(30px, 5vw, 60px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px) clamp(20px, 4vw, 40px)', 
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255, 255, 255, 0.4)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '680px',
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
          padding: 'clamp(40px, 8vw, 80px) clamp(16px, 5vw, 10%)',
          backgroundColor: '#fff', 
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          color: '#000',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* BACKGROUND IMAGE (LOGO) */}
          <div 
            style={{
                position: 'absolute',
                top: '300px',   
                left: '0',      
                width: '60%',   
                height: '1000px',
                backgroundImage: "url('/img/logo3.png')", 
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center', 
                backgroundSize: 'contain',
                opacity: 0.10, 
                transform: 'translateX(110%)', 
                zIndex: 10, 
                pointerEvents: 'none' 
            }}
          />

        {/* JUDUL SECTION */}
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '42px', 
          fontWeight: '900', 
          marginBottom: '60px',
          textTransform: 'uppercase',
          color: '#000',
          position: 'relative',
          zIndex: 1
        }}>
          OUR SPECIALITIES
        </h2>

        {/* --- ROW 1: DUA KARTU ATAS --- */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '40px', 
          marginBottom: '50px',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* CARD 1: VALIDATION */}
          <div style={{
            flex: '1 1 400px',
            height: '350px',
            borderRadius: '25px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backgroundImage: 'url("/img/mohamed.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '25px',
              left: '25px',
              right: '25px',
              backgroundColor: 'rgba(255, 255, 255, 0.55)', 
              backdropFilter: 'blur(0.05px)',
              WebkitBackdropFilter: 'blur(0.05px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '20px',
              borderRadius: '15px'
            }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>VALIDATION & OPTIMIZATION</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#111', fontWeight: '500' }}>
                Validating results and improving mesh and computation efficiency.
              </p>
            </div>
          </div>

          {/* CARD 2: NUMERICAL */}
          <div style={{
            flex: '1 1 400px',
            height: '350px',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            backgroundImage: 'url("/img/matin.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div style={{
              position: 'absolute',
              bottom: '25px',
              left: '25px',
              right: '25px',
              backgroundColor: 'rgba(255, 255, 255, 0.55)', 
              backdropFilter: 'blur(0.05px)',
              WebkitBackdropFilter: 'blur(0.05px)',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '20px',
              borderRadius: '15px'
            }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '18px', fontWeight: '800' }}>NUMERICAL METHODS</h3>
              <p style={{ margin: 0, fontSize: '14px', color: '#111', fontWeight: '500' }}>
                Skilled in FVM/FEM and solver setup (turbulence models, convergence, stability).
              </p>
            </div>
          </div>
        </div>

        {/* --- ROW 2: CARD FLUID --- */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: '30px',
          boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '40px',
          minHeight: '220px', 
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap'
        }}>
          {/* Gambar Kiri */}
          <div style={{
            flex: '0 0 32%', 
            minWidth: '250px', 
            backgroundImage: 'url("/img/rolla.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '220px'
          }}></div>
          
          {/* Teks Kanan */}
          <div style={{
            flex: '1', 
            padding: '30px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>FLUID & THERMAL KNOWLEDGE</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', margin: 0 }}>
              Strong grasp of fluid flow, heat transfer, and thermodynamics for real-world applications.
            </p>
          </div>
        </div>

        {/* --- ROW 3: CARD PROJECT --- */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderRadius: '30px',
          boxShadow: '0 5px 25px rgba(0,0,0,0.08)',
          overflow: 'hidden',
          marginBottom: '60px',
          minHeight: '220px',
          position: 'relative',
          zIndex: 1,
          flexWrap: 'wrap-reverse' 
        }}>
          {/* Teks Kiri */}
          <div style={{
            flex: '1', 
            padding: '30px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '10px' }}>PROJECT EXPERIENCE</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', margin: 0 }}>
              Industrial CFD work in automotive, HVAC, heat exchangers, and advanced cases like multiphase and FSI.
            </p>
          </div>

          {/* Gambar Kanan */}
          <div style={{
            flex: '0 0 32%', 
            minWidth: '250px',
            backgroundImage: 'url("/img/khar.jpg")', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '220px'
          }}></div>
        </div>

        {/* --- ROW 4: NEW 3 CARDS (Update: Ramping & Memanjang) --- */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* New Card 1: CODING */}
          <div style={{
            flex: '1 1 260px', // Update: Basis flex lebih kecil agar ramping
            maxWidth: '300px', // Update: Max width diperkecil (ramping)
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee'
          }}>
            {/* Image Section */}
            <div style={{
              height: '250px', // Update: Tinggi diperbesar (memanjang ke bawah)
              width: '100%',
              backgroundImage: 'url("/img/h-liu.jpg")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            {/* Content Section */}
            <div style={{ padding: '25px', flex: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '15px', textTransform: 'uppercase' }}>
                CODING
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
                C++ and scripting for customizing OpenFOAM solvers.
              </p>
            </div>
          </div>

          {/* New Card 2: TEAMWORK */}
          <div style={{
            flex: '1 1 260px', // Update: Basis flex lebih kecil
            maxWidth: '300px', // Update: Max width diperkecil
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee'
          }}>
            {/* Image Section */}
            <div style={{
              height: '250px', // Update: Tinggi diperbesar
              width: '100%',
              backgroundImage: 'url("/img/green.jpg")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            {/* Content Section */}
            <div style={{ padding: '25px', flex: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '15px', textTransform: 'uppercase' }}>
                TEAMWORK & COMMUNICATION
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
                Working with cross-disciplinary teams and presenting technical findings.
              </p>
            </div>
          </div>

          {/* New Card 3: DESIGN */}
          <div style={{
            flex: '1 1 260px', // Update: Basis flex lebih kecil
            maxWidth: '300px', // Update: Max width diperkecil
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid #eee'
          }}>
            {/* Image Section */}
            <div style={{
              height: '250px', // Update: Tinggi diperbesar
              width: '100%',
              backgroundImage: 'url("/img/nopparuj.jpg")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            {/* Content Section */}
            <div style={{ padding: '25px', flex: 1 }}>
              <h3 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '15px', textTransform: 'uppercase' }}>
                DESIGN & MAINTENANCE INSIGHTS
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#333' }}>
                Using CFD for predictive maintenance and design improvements.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Specialities;