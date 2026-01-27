/**
 * Structured Data Helpers for SEO Optimization
 * Schema.org markup untuk AI Search Engines (ChatGPT, Perplexity, Claude, Google AI)
 * 
 * Keyword focus: jasa simulasi CFD, simulasi CFD Indonesia, engineering services
 */

const SITE_URL = 'https://infimech.tech';
const COMPANY_NAME = 'PT Infimech Harmoni Teknologi';
const COMPANY_NAME_SHORT = 'Infimech';

/**
 * Organization Schema - Main company information
 * Critical for AI to understand company identity and services
 */
export const getOrganizationSchema = () => ({
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  'name': COMPANY_NAME,
  'alternateName': COMPANY_NAME_SHORT,
  'url': SITE_URL,
  'logo': {
    '@type': 'ImageObject',
    'url': `${SITE_URL}/img/Logo1.png`,
    'width': 600,
    'height': 600
  },
  'description': 'Penyedia jasa simulasi CFD, engineering consultancy, dan training services terkemuka di Indonesia. Spesialisasi dalam computational fluid dynamics, FEA, dan advanced engineering solutions untuk industri energi, oil & gas, dan petrokimia.',
  'slogan': 'Engineering Solutions with Digital Transformation',
  'email': 'info@infimech.tech',
  'telephone': '+62-81333546332',
  'faxNumber': '+62-21-7538506',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Sovereign Plaza Tower, Jl. TB Simatupang No.36 12th Floor',
    'addressLocality': 'Jakarta Selatan',
    'addressRegion': 'DKI Jakarta',
    'postalCode': '12430',
    'addressCountry': 'ID'
  },
  'contactPoint': [
    {
      '@type': 'ContactPoint',
      'telephone': '+62-81333546332',
      'contactType': 'customer service',
      'areaServed': 'ID',
      'availableLanguage': ['Indonesian', 'English']
    },
    {
      '@type': 'ContactPoint',
      'telephone': '+62-81333546332',
      'contactType': 'sales',
      'areaServed': 'ID',
      'availableLanguage': ['Indonesian', 'English']
    }
  ],
  'sameAs': [
    'https://www.linkedin.com/company/infimech',
    'https://infistream.id'
  ],
  'foundingDate': '2015',
  'numberOfEmployees': {
    '@type': 'QuantitativeValue',
    'value': 50
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  'knowsAbout': [
    'Computational Fluid Dynamics (CFD)',
    'Finite Element Analysis (FEA)',
    'Jasa Simulasi CFD',
    'Engineering Simulation',
    'Digital Twin',
    'OpenFOAM',
    'Process Simulation',
    'Mechanical Design',
    'Thermal Analysis',
    'Turbulence Modeling',
    'Heat Transfer Analysis',
    'Fluid Flow Simulation'
  ]
});

/**
 * WebSite Schema - Search box and site navigation
 */
export const getWebSiteSchema = () => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  'url': SITE_URL,
  'name': COMPANY_NAME_SHORT,
  'publisher': {
    '@id': `${SITE_URL}/#organization`
  },
  'potentialAction': {
    '@type': 'SearchAction',
    'target': {
      '@type': 'EntryPoint',
      'urlTemplate': `${SITE_URL}/search?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
});

/**
 * Professional Service Schema - Main service offering
 * Optimized for "jasa simulasi CFD" keyword
 */
export const getProfessionalServiceSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#service`,
  'name': 'Jasa Simulasi CFD dan Engineering Services',
  'alternateName': ['CFD Simulation Services', 'Computational Fluid Dynamics Consulting'],
  'description': 'Layanan jasa simulasi CFD profesional untuk analisis aliran fluida, thermal analysis, dan optimasi desain engineering. Melayani industri oil & gas, energi, petrokimia, dan manufaktur di seluruh Indonesia.',
  'provider': {
    '@id': `${SITE_URL}/#organization`
  },
  'serviceType': [
    'Computational Fluid Dynamics (CFD) Simulation',
    'Finite Element Analysis (FEA)',
    'Jasa Simulasi CFD',
    'Thermal Analysis',
    'Turbulence Modeling',
    'Heat Transfer Analysis',
    'Multiphase Flow Simulation',
    'Combustion Simulation',
    'Engineering Consultancy',
    'Digital Twin Development'
  ],
  'areaServed': {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Engineering Services',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Jasa Simulasi CFD (Computational Fluid Dynamics)',
          'description': 'Analisis aliran fluida dengan teknologi CFD terdepan menggunakan OpenFOAM untuk optimasi desain produk dan sistem'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Finite Element Analysis (FEA)',
          'description': 'Analisis struktural dan mechanical stress untuk validasi desain engineering'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'Process Simulation and Modeling',
          'description': 'Simulasi proses industri untuk optimasi operasional dan efisiensi'
        }
      }
    ]
  },
  'audience': {
    '@type': 'Audience',
    'audienceType': [
      'Oil & Gas Companies',
      'Power Generation Companies',
      'Petrochemical Industry',
      'Chemical Processing Plants',
      'Manufacturing Industries',
      'EPC Contractors',
      'Mining Companies',
      'Renewable Energy Companies'
    ]
  }
});

/**
 * Service Schema untuk halaman specific service
 */
export const getCFDServiceSchema = () => ({
  '@type': 'Service',
  '@id': `${SITE_URL}/simulasi-cfd#service`,
  'serviceType': 'Jasa Simulasi CFD',
  'name': 'Jasa Simulasi CFD (Computational Fluid Dynamics)',
  'description': 'Layanan jasa simulasi CFD profesional untuk analisis aliran fluida dengan teknologi terdepan. Kami menggunakan OpenFOAM berlisensi GNU untuk memberikan solusi simulasi yang akurat dan terpercaya untuk berbagai industri termasuk maritim, dirgantara, energi, kimia, konstruksi, dan lingkungan.',
  'provider': {
    '@id': `${SITE_URL}/#organization`
  },
  'areaServed': {
    '@type': 'Country',
    'name': 'Indonesia'
  },
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'priceSpecification': {
      '@type': 'PriceSpecification',
      'priceCurrency': 'IDR',
      'price': 'Contact for pricing'
    }
  },
  'category': [
    'CFD Simulation',
    'Computational Fluid Dynamics',
    'Jasa Simulasi',
    'Engineering Analysis'
  ],
  'hasOfferCatalog': {
    '@type': 'OfferCatalog',
    'name': 'Industri yang Dilayani',
    'itemListElement': [
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Maritim',
          'description': 'Analisis kebisingan dan hidrodinamika pada desain kapal'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Dirgantara',
          'description': 'Simulasi model aliran fluida pada pesawat dan komponen aerospace'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Energi',
          'description': 'Analisis performa sistem thermal dan cooling storage'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Kimia',
          'description': 'Analisis pemodelan pencampuran dan reaksi kimia'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Konstruksi',
          'description': 'Analisis aliran udara pada tata letak kota dan bangunan'
        }
      },
      {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': 'CFD untuk Industri Lingkungan',
          'description': 'Pemodelan pipa buangan limbah dan analisis dispersi polutan'
        }
      }
    ]
  },
  'additionalType': 'http://www.productontology.org/id/Computational_fluid_dynamics'
});

/**
 * FAQ Schema untuk halaman CFD
 */
export const getCFDFAQSchema = () => ({
  '@type': 'FAQPage',
  'mainEntity': [
    {
      '@type': 'Question',
      'name': 'Apa itu jasa simulasi CFD?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Jasa simulasi CFD (Computational Fluid Dynamics) adalah layanan yang memanfaatkan teknologi canggih untuk menganalisis dan memprediksi perilaku aliran fluida. Dengan menggunakan metode numerik dan algoritma komputer, jasa simulasi CFD menawarkan model yang akurat tentang bagaimana fluida seperti udara, air, atau gas berperilaku ketika berinteraksi dengan permukaan padat.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Apa keunggulan menggunakan jasa simulasi CFD dari Infimech?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Infimech menggunakan software OpenFOAM yang berlisensi GNU Public License, bukan software bajakan. Ini menjamin keamanan data Anda, menghindari risiko pidana penggunaan software ilegal, dan memberikan hasil simulasi yang legal dan dapat dipertanggungjawabkan. Kami juga memiliki tim expert dengan pengalaman lebih dari 100 proyek di berbagai industri.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Industri apa saja yang dapat menggunakan jasa simulasi CFD?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Jasa simulasi CFD Infimech melayani berbagai industri termasuk: industri maritim (analisis kapal), dirgantara (aerodinamika pesawat), energi (sistem thermal), kimia (proses pencampuran), konstruksi (analisis aliran udara), dan lingkungan (dispersi polusi). Kami juga melayani oil & gas, petrokimia, dan power generation.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Berapa lama waktu yang dibutuhkan untuk menyelesaikan simulasi CFD?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Durasi simulasi CFD tergantung kompleksitas proyek, mulai dari beberapa hari hingga beberapa minggu. Proyek sederhana dapat diselesaikan dalam 1-2 minggu, sedangkan proyek kompleks dengan multiple scenarios mungkin membutuhkan 4-8 minggu. Hubungi kami untuk estimasi yang lebih detail sesuai kebutuhan project Anda.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Apa risiko menggunakan software CFD bajakan?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Risiko menggunakan software CFD bajakan meliputi: (1) Pidana berupa denda 15.000 - 150.000 USD (Rp 150 juta - 2,5 miliar), (2) Risiko keamanan data dan privasi perusahaan, (3) Hasil simulasi yang tidak dapat dipertanggungjawabkan secara legal, (4) Malware dan virus yang dapat merusak sistem. Infimech menggunakan OpenFOAM berlisensi legal untuk menghindari semua risiko ini.'
      }
    },
    {
      '@type': 'Question',
      'name': 'Bagaimana cara memulai proyek simulasi CFD dengan Infimech?',
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': 'Untuk memulai proyek jasa simulasi CFD, Anda dapat menghubungi kami melalui WhatsApp +62 8133 3546 332 atau email info@infimech.tech. Tim kami akan mendiskusikan kebutuhan Anda, memberikan proposal dan timeline, serta estimasi biaya. Kami melayani konsultasi gratis untuk evaluasi awal kebutuhan simulasi CFD Anda.'
      }
    }
  ]
});

/**
 * ItemList Schema untuk halaman services
 */
export const getServiceListSchema = () => ({
  '@type': 'ItemList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'item': {
        '@type': 'Service',
        'name': 'Regular Engineering Service',
        'description': 'Layanan engineering tradisional meliputi Process Simulation, Mechanical Design, Piping Design, Structural Design, Instrumentation, Electrical, Drafting, 3D Modeling, dan Geotechnical'
      }
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'item': {
        '@type': 'Service',
        'name': 'Advanced Engineering Service',
        'description': 'Layanan engineering advanced meliputi CFD (Computational Fluid Dynamics), FEA (Finite Element Analysis), Digital Twin, Vibration Study, Dispersion Study, Fatigue Study, dan Acoustic Study'
      }
    },
    {
      '@type': 'ListItem',
      'position': 3,
      'item': {
        '@type': 'Service',
        'name': 'Web Based Project Management',
        'description': 'Implementasi ERP, EDMS, E-Library, Custom Engineering Application, AI Based Technology, dan Project Management Services'
      }
    },
    {
      '@type': 'ListItem',
      'position': 4,
      'item': {
        '@type': 'Service',
        'name': 'Other Services',
        'description': 'Bid Support, Project Support, Product Design Support, Product Development, Engineering Operation Support, Plant Maintenance Analysis, dan Expertise Support'
      }
    }
  ]
});

/**
 * BreadcrumbList Schema untuk navigation
 */
export const getBreadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  'itemListElement': items.map((item, index) => ({
    '@type': 'ListItem',
    'position': index + 1,
    'name': item.name,
    'item': item.url
  }))
});

/**
 * Aggregate Rating Schema (untuk future use)
 */
export const getAggregateRatingSchema = (rating = 4.8, reviewCount = 50) => ({
  '@type': 'AggregateRating',
  'ratingValue': rating,
  'reviewCount': reviewCount,
  'bestRating': '5',
  'worstRating': '1'
});
