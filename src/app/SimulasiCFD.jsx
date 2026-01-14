import React from "react";

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

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
      {/* Judul Utama - Centered */}
      <h2 className="text-5xl md:text-5xl font-bold text-slate-900 mb-8 text-center">
        JASA SIMULASI CFD
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

<div className="w-full py-2 md:py-2 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className=""
            >
              {/* Card Container */}
              <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                
                {/* Image Container */}
                <div className="relative h-40 md:h-48 overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content Container */}
                <div className="flex-1 p-4 md:p-5 flex flex-col">
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs md:text-sm mb-4 flex-1 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Info Section */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-gray-200">
                  </div>

                  {/* View More Link */}
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-[#3B6C8D] hover:text-[#3B6C8D] font-semibold text-sm transition-colors duration-300 group"
                  >
                    View More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
