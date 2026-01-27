import React from "react";
import SEO from "../components/SEO";
import { getCFDServiceSchema, getCFDFAQSchema, getBreadcrumbSchema } from "../utils/structuredData";

export default function SimulasiCFD() {

    const items = [
    {
      id: 1,
      title: 'Industri Maritim',
      description: 'Analisis kebisingan pada desain kapal.',
      image: '/img/maritim.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/Report-Pemodelan-Suara.pdf'
    },
    {
      id: 2,
      title: 'Industri Dirgantara',
      description: 'Simulasi model aliran fluida pada pesawat F-16',
      image: '/img/dirgantara.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/REPORT-JET-LES-150ms.pdf'
    },
    {
      id: 3,
      title: 'Industri Energi',
      description: 'Analisis performa water tank cooling storage.',
      image: '/img/industri.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/CFD-Simulation-Report-Tank-42.25-Lps-baffle-25-mm-1.pdf'
    },
    {
      id: 4,
      title: 'Industri Kimia',
      description: 'Analisis Pemodelanpencampuran lemak',
      image: '/img/kimia.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/1712284803434.pdf'
    },
    {
      id: 5,
      title: 'Industri Konstruksi',
      description: 'Analisis aliran udara pada tata letak kota',
      image: '/img/konstruksi.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/Report-Progress-Simulasi-CFD.pdf'
    },
    {
      id: 6,
      title: 'Industri Lingkungan',
      description: 'Pemodelan pipa buangan limbah B3',
      image: '/img/lingkungan.png',
      link: 'https://infistream.id/wp-content/uploads/2024/07/BGC-Kantor-IPA-28022024-1.pdf'
    }
  ];

  // Structured data for CFD service page - optimized for AI search
  const structuredData = [
    getCFDServiceSchema(),
    getCFDFAQSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: 'https://infimech.tech' },
      { name: 'Jasa Simulasi CFD', url: 'https://infimech.tech/jasa-simulasi-cfd' }
    ])
  ];

  return (
    <div>
      <SEO
        title="Jasa Simulasi CFD - Computational Fluid Dynamics Indonesia"
        description="Jasa simulasi CFD profesional untuk analisis aliran fluida dengan OpenFOAM berlisensi. Melayani industri maritim, dirgantara, energi, kimia, konstruksi. 100+ proyek sukses. Konsultasi gratis."
        url="https://infimech.tech/jasa-simulasi-cfd"
        image="https://infimech.tech/img/simulasicfd.jpg"
        imageAlt="Jasa Simulasi CFD - Analisis Aliran Fluida Profesional"
        jsonLd={structuredData}
      />
      
      {/* Hero Banner Section */}
      <div 
        className="relative w-full h-screen bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: 'url(/img/simulasicfd.jpg)',
          backgroundAttachment: 'fixed',
          fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* LOGO */}
        <a 
          href="/" 
          style={{ 
            position: 'absolute', 
            top: '40px',
            left: '8%',
            zIndex: 10 
          }}
        >
          <img 
            src="/img/logo2.png" 
            alt="Logo" 
            style={{ 
              width: 'clamp(140px, 15vw, 250px)', 
              height: 'auto' 
            }} 
          />
        </a>

        {/* Content */}
        <div className="relative z-10 text-white px-4 md:px-[8%] max-w-[850px] w-full" style={{ marginTop: '80px' }}>
          
          {/* BREADCRUMB */}
          <div style={{ display: 'flex', marginBottom: '25px' }}>
            <div style={{ 
              backgroundColor: 'rgba(60, 90, 140, 0.6)', 
              padding: '8px 20px', 
              borderRadius: '50px', 
              fontSize: '14px', 
              backdropFilter: 'blur(4px)' 
            }}>
              <a href="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: '700' }}>Home</a>
              <span style={{ margin: '0 8px' }}>&rsaquo;</span>
              <span style={{ opacity: 0.9 }}>Simulasi CFD</span>
            </div>
          </div>

          {/* HERO TITLE */}
          <h1 style={{ 
            fontSize: 'clamp(36px, 6vw, 60px)', 
            fontWeight: '900', 
            marginBottom: '20px', 
            marginTop: 0,
            textTransform: 'uppercase', 
            textShadow: '0px 4px 10px rgba(0,0,0,0.5)',
            lineHeight: '1.1',
            position: 'relative',
            zIndex: 10
          }}>
            JASA SIMULASI CFD
          </h1>

          {/* HERO DESCRIPTION */}
          <div style={{
            backgroundColor: 'rgba(60, 90, 140, 0.5)',
            padding: '30px 35px',
            borderRadius: '15px',
            fontSize: 'clamp(15px, 1.2vw, 18px)',
            lineHeight: '1.7',
            backdropFilter: 'blur(6px)',
            maxWidth: '100%'
          }}>
            Analisis aliran fluida dengan teknologi CFD terdepan untuk mengoptimalkan desain dan performa produk Anda
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* Judul Utama - Centered */}
        <h2 id="info" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
          Tentang Simulasi CFD
        </h2>

      {/* Sub Judul */}
      <h2 className="text-xl font-bold text-slate-700 mb-12 text-center">
        Jasa Simulasi CFD: Memahami Konsep dan Aplikasinya
      </h2>

      {/* Konten Utama */}
      <div className="text-slate-800 leading-relaxed space-y-6">
        <p>
          Jasa simulasi CFD (Computational Fluid Dynamics) adalah layanan yang memanfaatkan teknologi canggih untuk menganalisis dan memprediksi perilaku aliran fluida. Dengan menggunakan metode numerik dan algoritma komputer, jasa simulasi CFD menawarkan model yang akurat tentang bagaimana fluida seperti udara, air, atau gas berperilaku ketika berinteraksi dengan permukaan padat.
        </p>

        <p>
          Dalam jasa simulasi CFD, aliran fluida dipecah menjadi elemen-elemen kecil yang disebut grid atau mesh. Setiap elemen dianalisis menggunakan persamaan matematis yang mendeskripsikan perilaku fluida. Jasa simulasi CFD memungkinkan insinyur dan ilmuwan untuk memvisualisasikan dinamika fluida yang kompleks dan memahami bagaimana fluida bergerak dan berinteraksi dalam berbagai kondisi.
        </p>

        <p>
          Jasa simulasi CFD sangat penting dalam berbagai industri karena berbagai alasan:
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Desain dan Optimasi Produk:</strong> Dalam industri otomotif dan penerbangan, jasa simulasi CFD digunakan untuk menganalisis aerodinamika kendaraan dan pesawat terbang. Dengan jasa simulasi CFD, desainer dapat mengidentifikasi area-area yang perlu diperbaiki untuk meningkatkan efisiensi bahan bakar dan performa keseluruhan produk.
          </li>
          <li>
            <strong>Analisis Kinerja Sistem:</strong> Jasa simulasi CFD diterapkan dalam industri energi untuk memodelkan sistem pembangkit energi seperti turbin angin dan reaktor nuklir. Melalui jasa simulasi CFD, para insinyur dapat mengevaluasi kinerja sistem dan mengoptimalkan desain untuk efisiensi maksimum dan keamanan operasional.
          </li>
          <li>
            <strong>Simulasi Lingkungan:</strong> Jasa simulasi CFD juga digunakan dalam studi lingkungan untuk analisis penyebaran polusi udara dan pengendalian banjir. Dengan memanfaatkan jasa simulasi CFD, ilmuwan dapat memahami dampak lingkungan dan merancang solusi yang lebih efektif.
          </li>
          <li>
            <strong>Penelitian dan Pengembangan:</strong> Dalam bidang penelitian ilmiah, jasa simulasi CFD memungkinkan peneliti untuk mempelajari fenomena fluida yang sulit diobservasi secara eksperimen. Ini termasuk pemodelan aliran yang kompleks, seperti turbulensi dan interaksi multi-fase, yang memerlukan jasa simulasi CFD untuk memberikan wawasan yang mendalam.
          </li>
        </ol>

        <p>
          Layanan yang termasuk dalam jasa simulasi CFD meliputi pemodelan geometris, setup simulasi, analisis hasil, dan penyajian data. Dengan menggunakan jasa simulasi CFD, klien dapat membuat keputusan berbasis data yang lebih baik, mengurangi biaya pengembangan, dan meningkatkan performa produk mereka.
        </p>

        <p>
          Secara keseluruhan, jasa simulasi CFD merupakan alat yang sangat berharga dalam mengatasi masalah teknik dan ilmiah yang melibatkan aliran fluida. Dengan kemampuannya untuk memberikan prediksi yang akurat dan wawasan yang mendalam, jasa simulasi CFD terus menjadi komponen krusial dalam inovasi dan pengembangan teknologi di berbagai sektor industri.
        </p>
      </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {items.map((item) => (
            <div
              key={item.id}
              className="group"
            >
              {/* Card Container */}
              <div className="h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                
                {/* Image Container */}
                <div className="relative h-40 md:h-44 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content Container */}
                <div className="flex-1 p-4 md:p-5 flex flex-col bg-gradient-to-b from-white to-gray-50">
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-[#274C77] mb-2 leading-tight group-hover:text-[#3B6C8D] transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm mb-3 flex-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-3"></div>

                  {/* View More Link */}
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#3B6C8D] hover:text-[#274C77] font-bold text-sm transition-all duration-300 group/link"
                  >
                    <span className="relative">
                      View Report
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#274C77] group-hover/link:w-full transition-all duration-300"></span>
                    </span>
                    <svg 
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Info */}
        <div className="mt-12 md:mt-14">
          <div className="flex flex-col md:flex-row items-stretch gap-6">
            {/* Card tetap sama warna & style */}
            <div className="md:w-2/3 p-6 bg-blue-50 rounded-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="max-w-2xl">
                  <p className="text-slate-900 font-bold">
                    Kami telah menghandle lebih dari 100 proyek
                  </p>
                  <p className="text-slate-700">
                    Selengkapnya silakan akses di link berikut ini untuk daftar proyek yang pernah kita kerjakan.
                  </p>
                </div>
                <a
                  href="https://infistream.id/wp-content/uploads/2024/07/Infimech-2024-Google-Spreadsheet.pdf"
                  className="text-blue-600 hover:text-blue-800 font-semibold underline inline-flex items-center gap-2 whitespace-nowrap"
                  aria-label="Lihat daftar proyek Infimech (PDF)"
                  title="Lihat daftar proyek (PDF)"
                >
                  <span>Project&nbsp;List</span>
                  <span className="text-slate-500 text-sm">(PDF)</span>
                </a>
              </div>
            </div>

            {/* Gambar di samping card */}
            <div className="md:w-1/3">
              <img
                src="/img/infistream.jpg"
                alt="Infistream"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* INFORMASI TAMBAHAN */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">INFORMASI TAMBAHAN</h3>
          <p className="text-slate-700 leading-relaxed mb-4">
            Infistream Indonesia adalah bagian dari Infimech Technology (PT. Infimech Harmoni Teknologi) telah menggunakan software yang telah berlisensi di bawah GNU Public Licence. Langkah ini merupakan cara terbaik yang kami berikan kepada Anda dari bahayanya software dan jasa simulasi serupa yang banyak menggunakan software CRACK (B A J A K A N).
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Selengkapnya terkait lisensi kami bisa cek di link di bawah ini:
          </p>
          <a
            href="https://www.gnu.org/licenses/quick-guide-gplv3.html"
            className="text-blue-600 hover:text-blue-800 font-semibold underline"
          >
            GNU LV 3 Public License
          </a>
        </section>

        {/* RESIKO SOFTWARE BAJAKAN */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">RESIKO SOFTWARE BAJAKAN</h3>
          <p className="text-slate-700 leading-relaxed">
            Beberapa resiko menggunakan Software Bajakan selain pidana berupa denda dengan nominal mulai 15000 USD – 150000 USD (Rp 150.000.000,00 – Rp 2.500.000.000,00), juga keamanan data Anda dan privasi atau kerahasiaan data yang Anda kerjakan.
          </p>
        </section>
      </div>
    </div>
  );
}
