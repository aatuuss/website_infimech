import React, { useMemo, useState } from 'react';

export default function Servis() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        title: 'PROJECT BASED',
        description: 'Generated from short-term assignments that deliver specific engineering outputs such as design, simulation, or analysis.',
        img: '/img/1.jpg',
      },
      {
        title: 'RETAINED BASED',
        description: 'Derived from ongoing partnerships where clients receive regular assistance through monthly retainers.',
        img: '/img/2.jpg',
      },
      {
        title: 'CONSULTING',
        description: 'Collected from on-demand advisory or technical services billed by the hour.',
        img: '/img/mohamed.jpg',
      },
      {
        title: 'FIXED-PRICE PACKAGES',
        description: 'Produced through standardized service bundles offered at a predetermined price.',
        img: '/img/4.jpg',
      },
      {
        title: 'LICENSING',
        description: 'Selling digital tools, templates, or engineering spreadsheets, either one-time or by subscription.',
        img: '/img/5.jpg',
      },
      {
        title: 'TRAINING & WORKSHOPS',
        description: 'Providing skill-building sessions on engineering software, design practices, or maintenance topics.',
        img: '/img/6.jpg',
      },
      {
        title: 'SOFTWARE PROFICIENCY',
        description: 'Skilled in CFD tools like OpenFOAM, including meshing (SnappyHexMesh) and visualization (ParaView).',
        img: '/img/7.jpg',
      },
    ],
    []
  );

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap');

        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: 'Poppins', sans-serif;
        }

        *, *::before, *::after { box-sizing: border-box; }

        .fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn {
          from { opacity: 0.4; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

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

        .glass-overlay {
          background: rgba(255, 255, 255, 0.10); 
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .spec-link {
          text-decoration: none;
          color: inherit;
          transition: opacity 0.3s;
        }
        .spec-link:hover {
          opacity: 0.7;
        }

        /* ================= RESPONSIVE MOBILE FIX ================= */
        @media (max-width: 980px) {
          /* Hero Mobile */
          .servis-hero {
            height: auto !important;
            min-height: 600px !important;
            padding: 120px 20px 60px 20px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: flex-start !important;
          }

          .hero-overlay-custom {
            clip-path: none !important;
            background: linear-gradient(90deg, rgba(14, 54, 100, 0.9) 0%, rgba(14, 54, 100, 0.4) 100%) !important;
            width: 100% !important;
          }

          .hero-logo-link {
            top: 30px !important;
            left: 20px !important;
          }

          .hero-logo-img {
            width: 180px !important;
          }

          .hero-content {
            width: 100% !important;
            padding-left: 0 !important;
            margin-top: 0 !important;
          }

          .hero-title {
            font-size: 32px !important;
            line-height: 1.1 !important;
          }

          .hero-desc {
            font-size: 15px !important;
            max-width: 100% !important;
          }

          /* Content Mobile */
          .services-cards { grid-template-columns: 1fr !important; gap: 20px !important; }
          .web-pm-card { grid-template-columns: 1fr !important; padding: 20px !important; text-align: center; }
          .web-pm-content { margin-left: 0 !important; margin-top: 15px; }
          .category-container { flex-direction: column-reverse !important; text-align: center !important; gap: 30px !important; }
          .category-nav { justify-content: center !important; gap: 40px !important; }
          .specialities-grid { grid-template-columns: 1fr !important; }
          .spec-mini-label-box { width: 85% !important; }
        }
      `}</style>

      {/* ================= HERO SECTION ================= */}
      <section className="servis-hero" style={{ position: 'relative', minHeight: '600px', height: '90vh', display: 'flex', alignItems: 'center', overflow: 'hidden', width: '100%' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('/img/servis-hero.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', zIndex: 0 }} />
        
        <div className="hero-overlay-custom" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(14, 54, 100, 0.5)', clipPath: 'polygon(0 0, 50% 0, 40% 50%, 50% 100%, 0 100%)', zIndex: 1, pointerEvents: 'none' }} />

        <a href="/" className="hero-logo-link" style={{ position: 'absolute', top: '56px', left: '5%', zIndex: 10 }}>
          <img src="/img/logo2.png" className="hero-logo-img" alt="Logo" style={{ width: '250px', height: 'auto' }} />
        </a>

        <div className="hero-content" style={{ position: 'relative', zIndex: 2, width: '55%', paddingLeft: '10rem', color: '#fff', marginTop: '7rem' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '8px 16px', borderRadius: '24px', fontSize: '14px', marginBottom: '22px', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</a> › Services
          </div>
          <h1 className="hero-title" style={{ fontSize: '52px', lineHeight: 0.95, fontWeight: 900, letterSpacing: '1px', margin: 0 }}>
            OUR <br /> SERVICES
          </h1>
          <p className="hero-desc" style={{ marginTop: '24px', maxWidth: '600px', fontSize: '17px', lineHeight: 1.7, opacity: 0.95 }}>
            The services we provide include Regular Engineering Services, Advanced Engineering Services, and Web-Based Project Management Services.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section style={{ position: 'relative', backgroundColor: '#F8FAFC', padding: '80px 2rem 120px', width: '100%' }}>
        <div style={{ maxWidth: '1024px', margin: '0 auto', position: 'relative' }}>
          
          <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 900, marginBottom: '48px', letterSpacing: '1px', color: '#333' }}>SERVICES</h2>

          {/* Background Logo Overlay */}
          <div style={{ position: 'absolute', top: '0', left: '0', width: '60%', height: '1000px', backgroundImage: "url('/img/Logo1.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'contain', opacity: 0.05, transform: 'translateX(-50%)', zIndex: 0, pointerEvents: 'none' }} />

          {/* 1. SERVICES GRID */}
          <div className="services-cards" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
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
              <article key={i} style={{ background: '#fff', borderRadius: '22px', boxShadow: '0 12px 35px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={card.img} alt={card.title} style={{ width: '100%', height: '210px', objectFit: 'cover' }} />
                <div style={{ padding: '24px 28px', flex: 1 }}>
                  <h3 style={{ fontWeight: 800, fontSize: '18px', marginBottom: '12px', color: '#111' }}>{card.title}</h3>
                  <ul style={{ paddingLeft: '20px', lineHeight: 1.7, color: '#444', listStyleType: 'disc', margin: 0, fontSize: '14px' }}>
                    {card.items.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* 2. WEB BASED PM CARD */}
          <div style={{ marginTop: '50px', position: 'relative', zIndex: 2 }}>
            <div className="web-pm-card" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', alignItems: 'center', background: '#fff', borderRadius: '22px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', padding: '25px 35px' }}>
              <img src="/img/erp-web.png" alt="Web PM" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '14px' }} />
              <div className="web-pm-content" style={{ marginLeft: '-40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', color: '#111' }}>Web Based<br />Project Management Services</h3>
                <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: 1.6, color: '#333', listStyleType: 'disc', margin: 0 }}>
                  {['Implement ERP', 'Implement EDMS', 'Implement E-Library', 'Custom App', 'AI Based Tech', 'Project Controller', 'PM Services'].map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. SLIDER CATEGORY */}
          <div style={{ marginTop: '100px', position: 'relative', zIndex: 2 }}>
            <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 900, marginBottom: '60px', textTransform: 'uppercase' }}>SERVICES CATEGORY</h2>
            <div className="category-container" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
              <div style={{ flex: 1 }}>
                <div key={currentSlide} className="fade-in">
                  <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', textTransform: 'uppercase' }}>{slides[currentSlide].title}</h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', marginBottom: '40px' }}>{slides[currentSlide].description}</p>
                </div>
                <div className="category-nav" style={{ display: 'flex', gap: '120px' }}>
                  <button onClick={prevSlide} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <svg width="40" height="24" viewBox="0 0 44 24" fill="none"><path d="M12 2L2 12M2 12L12 22M2 12H42" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                  <button onClick={nextSlide} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                    <svg width="40" height="24" viewBox="0 0 44 24" fill="none"><path d="M32 2L42 12M42 12L32 22M42 12H2" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </button>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                <div className="fade-in" key={currentSlide + '-img'} style={{ width: '100%', height: '320px', borderRadius: '40px', border: '10px solid #D9D9D9', overflow: 'hidden' }}>
                  <img src={slides[currentSlide].img} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </div>
          </div>

          {/* 4. SPECIALITIES */}
          <div style={{ marginTop: '100px', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
            <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 900, marginBottom: '40px', textTransform: 'uppercase' }}>OUR SPECIALITIES</h2>
            <div className="specialities-grid">
              {/* Card Besar Sebelah Kiri */}
              <div style={{ position: 'relative', height: '100%', minHeight: '420px', borderRadius: '24px', overflow: 'hidden', background: '#000' }}>
                <img src="/img/green.jpg" alt="Fluid" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
                <div className="glass-overlay" style={{ position: 'absolute', bottom: '15px', left: '15px', right: '15px', borderRadius: '20px', padding: '25px', color: '#fff' }}>
                  <a href="/specialities" className="spec-link">
                    <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', fontWeight: 900 }}>FLUID & THERMAL KNOWLEDGE</h3>
                  </a>
                  <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.5, opacity: 0.9 }}>Strong grasp of fluid flow, heat transfer, and thermodynamics...</p>
                </div>
              </div>

              {/* Grid Sebelah Kanan */}
              <div className="spec-right-grid">
                {[
                  { title: 'PROJECT EXPERIENCE', img: '/img/khar.jpg' },
                  { title: 'NUMERICAL METHODS', img: '/img/matin.jpg' },
                  { title: 'CODING', img: '/img/mohamed.jpg' },
                  { title: 'VALIDATION & OPTIMIZATION', img: '/img/h-liu.jpg' }
                ].map((item, idx) => (
                  <div key={idx} style={{ position: 'relative', height: '140px', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="spec" />
                    <div className="glass-overlay spec-mini-label-box" style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', width: '60%', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.65)', padding: '10px', borderRadius: '15px' }}>
                      <a href="/specialities" className="spec-link">
                        <h4 style={{ margin: 0, color: '#002D5B', fontWeight: 900, fontSize: '13px' }}>{item.title}</h4>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <a href="/specialities" style={{ backgroundColor: '#002D5B', color: '#fff', textDecoration: 'none', padding: '16px 40px', borderRadius: '50px', fontSize: '14px', fontWeight: '900', display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
                READ MORE <svg width="30" height="10" viewBox="0 0 24 14" fill="none"><path d="M17 1L23 7L17 13M23 7H0" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}