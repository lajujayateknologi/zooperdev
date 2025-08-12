// Enhanced JavaScript for Company Profile Website
document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript loaded successfully');

  // Language translations
  const translations = {
    id: {
      // Navigation
      'nav-home': 'Beranda',
      'nav-about': 'Tentang',
      'nav-services': 'Layanan',
      'nav-why': 'Keunggulan',
      'nav-portfolio': 'Portfolio',
      'nav-contact': 'Kontak',

      // Hero Section
      'hero-title': 'Transformasi Digital Dimulai Dari Sini',
      'hero-subtitle': 'Solusi IT profesional untuk mengoptimalkan bisnis Anda menuju era digital',
      'hero-cta1': 'Konsultasi Gratis',
      'hero-cta2': 'Pelajari Lebih Lanjut',

      // About Us Section
      'about-title': 'Tentang Kami',
      'about-subtitle': 'Partner terpercaya untuk transformasi digital bisnis Anda',
      'about-mission-title': 'Misi Kami',
      'about-mission-text': 'Membantu perusahaan Indonesia dalam mengadopsi teknologi digital untuk meningkatkan efisiensi operasional dan pertumbuhan bisnis yang berkelanjutan.',
      'about-vision-title': 'Visi Kami',
      'about-vision-text': 'Menjadi konsultan IT terdepan yang menghadirkan solusi inovatif dan terpercaya untuk transformasi digital di Indonesia.',
      'about-stat1-number': '10+',
      'about-stat1-text': 'Proyek Selesai',
      'about-stat2-number': '98%',
      'about-stat2-text': 'Kepuasan Klien',
      'about-stat3-number': '2+',
      'about-stat3-text': 'Tahun Pengalaman',

      // Services Section
      'services-title': 'Layanan Kami',
      'services-subtitle': 'Solusi teknologi komprehensif untuk kebutuhan bisnis modern',
      'service1-title': 'IT Consulting',
      'service1-desc': 'Konsultasi strategis untuk optimalisasi infrastruktur IT, analisis kebutuhan teknologi, dan perencanaan transformasi digital yang sesuai dengan tujuan bisnis Anda.',
      'service1-feature1': 'Analisis infrastruktur IT',
      'service1-feature2': 'Perencanaan strategis teknologi',
      'service1-feature3': 'Optimalisasi sistem existing',
      'service2-title': 'Software Development',
      'service2-desc': 'Pengembangan aplikasi custom, sistem manajemen, dan solusi perangkat lunak yang disesuaikan dengan kebutuhan spesifik bisnis Anda.',
      'service2-feature1': 'Aplikasi web & mobile',
      'service2-feature2': 'Sistem manajemen bisnis',
      'service2-feature3': 'API & integrasi sistem',
      'service3-title': 'Software as a Service',
      'service3-desc': 'Solusi berbasis cloud yang dapat diakses kapan saja dan dimana saja, dengan maintenance dan update otomatis untuk efisiensi operasional maksimal.',
      'service3-feature1': 'Solusi berbasis cloud',
      'service3-feature2': 'Maintenance & support 24/7',
      'service3-feature3': 'Skalabilitas tinggi',

      // Why Choose Us Section
      'why-title': 'Mengapa Memilih Kami',
      'why-subtitle': 'Keunggulan yang membuat kami berbeda dari yang lain',
      'why1-title': 'Kualitas Terjamin',
      'why1-desc': 'Menggunakan teknologi terkini dan metodologi pengembangan terbaik untuk menghasilkan solusi berkualitas tinggi.',
      'why2-title': 'Pengiriman Cepat',
      'why2-desc': 'Proses pengembangan yang efisien dengan timeline yang jelas dan komunikasi yang transparan.',
      'why3-title': 'Tim Profesional',
      'why3-desc': 'Tim yang berdedikasi tinggi dengan sertifikasi internasional dan komitmen pada kualitas.',
      'why4-title': 'Support 24/7',
      'why4-desc': 'Dukungan teknis berkelanjutan untuk memastikan sistem Anda berjalan optimal setiap saat.',

      // Contact Section
      'contact-title': 'Hubungi Kami',
      'contact-subtitle': 'Mari diskusikan kebutuhan teknologi bisnis Anda',
      'contact-address-title': 'Alamat',
      'contact-address-text': 'Citra Garden City No. B2, Ds. Sambirejo, Kec. Pare, Kabupaten Kediri, Jawa Timur 64226',
      'contact-phone-title': 'Telepon',
      'contact-email-title': 'Email',
      'contact-form-name': 'Nama Lengkap *',
      'contact-form-email': 'Email *',
      'contact-form-company': 'Perusahaan',
      'contact-form-service': 'Layanan yang Diminati',
      'contact-form-service-placeholder': 'Pilih Layanan',
      'contact-form-service-software': 'Software Development',
      'contact-form-service-consulting': 'IT Consulting',
      'contact-form-service-saas': 'Software as a Service',
      'contact-form-service-other': 'Lainnya',
      'contact-form-message': 'Pesan *',
      'contact-form-message-placeholder': 'Ceritakan kebutuhan bisnis Anda...',
      'contact-form-submit': 'Kirim Pesan',

      // Footer Section
      'footer-company-desc': 'Partner terpercaya untuk transformasi digital bisnis Anda.',
      'footer-quicklinks-title': 'Quick Links',
      'footer-quicklinks-about': 'Tentang Kami',
      'footer-quicklinks-services': 'Layanan',
      'footer-quicklinks-portfolio': 'Portfolio',
      'footer-quicklinks-contact': 'Kontak',
      'footer-legal-title': 'Legal',
      'footer-legal-privacy': 'Kebijakan Privasi',
      'footer-legal-terms': 'Syarat & Ketentuan',
      'footer-copyright': '© 2025 PT Laju Jaya Media Teknologi. All rights reserved.',

      // Portfolio
      'portfolio-title': 'Portfolio Kami',
      'portfolio-subtitle': 'Beberapa proyek yang telah kami selesaikan dengan sukses',
      'space-app-desc': 'SPACE (SALT Platform for Advance Collaboration of the Employee) adalah sistem untuk solusi lengkap yang memungkinkan karyawan untuk mengoptimalkan tenaga kerja dan menciptakan lingkungan kerja yang lebih kolaboratif dan produktif.',
      'amar-bank-desc': 'Aplikasi perbankan digital dari Amar Bank dengan berbagai fitur tabungan, investasi, dan layanan keuangan yang inovatif.',
      'tunaiku-desc': 'Aplikasi pinjaman online yang cepat dan aman, dengan proses pengajuan sederhana hanya melalui aplikasi tanpa jaminan.',
      'anekapay-desc': 'Salah satu produk dari PT Anekapay Teknologi Indonesia yang menjual berbagai produk digital yang hanya menargetkan pedagang.',
      'rexionone-desc': 'Aplikasi manajemen kehadiran karyawan dengan fitur check-in/out berbasis GPS dan layanan mandiri untuk pengajuan cuti, upload dokumen, serta pengelolaan data karyawan.',
      'evenkita-desc': 'Platform pemesanan tiket online seperti event musik dan seminar.',
      'peace-desc': 'Situs sistem informasi pendaftaran online yang saya buat untuk kursus PEACE di Kampung Inggris Pare.',
      'gis-desc': 'Situs Geo Mapping untuk rambu lalu lintas yang dibuat oleh Multec.TC dan disediakan untuk Kabupaten Sampang, Madura.',
      'simlab-desc': 'Sistem informasi manajemen peminjaman peralatan laboratorium. Aplikasi ini digunakan oleh STIKES Pamenang Pare.'
    },
    en: {
      // Navigation
      'nav-home': 'Home',
      'nav-about': 'About',
      'nav-services': 'Services',
      'nav-why': 'Why Us',
      'nav-portfolio': 'Portfolio',
      'nav-contact': 'Contact',

      // Hero Section
      'hero-title': 'Digital Transformation Starts Here',
      'hero-subtitle': 'Professional IT solutions to optimize your business for the digital era',
      'hero-cta1': 'Free Consultation',
      'hero-cta2': 'Learn More',

      // About Us Section
      'about-title': 'About Us',
      'about-subtitle': 'Trusted partner for your business digital transformation',
      'about-mission-title': 'Our Mission',
      'about-mission-text': 'Helping Indonesian companies adopt digital technology to improve operational efficiency and sustainable business growth.',
      'about-vision-title': 'Our Vision',
      'about-vision-text': 'To become a leading IT consultant that provides innovative and trusted solutions for digital transformation in Indonesia.',
      'about-stat1-number': '10+',
      'about-stat1-text': 'Projects Completed',
      'about-stat2-number': '98%',
      'about-stat2-text': 'Client Satisfaction',
      'about-stat3-number': '2+',
      'about-stat3-text': 'Years Experience',

      // Services Section
      'services-title': 'Our Services',
      'services-subtitle': 'Comprehensive technology solutions for modern business needs',
      'service1-title': 'IT Consulting',
      'service1-desc': 'Strategic consulting for IT infrastructure optimization, technology needs analysis, and digital transformation planning that aligns with your business objectives.',
      'service1-feature1': 'IT infrastructure analysis',
      'service1-feature2': 'Strategic technology planning',
      'service1-feature3': 'Existing system optimization',
      'service2-title': 'Software Development',
      'service2-desc': 'Custom application development, management systems, and software solutions tailored to your specific business needs.',
      'service2-feature1': 'Web & mobile applications',
      'service2-feature2': 'Business management systems',
      'service2-feature3': 'API & system integration',
      'service3-title': 'Software as a Service',
      'service3-desc': 'Cloud-based solutions accessible anytime and anywhere, with automatic maintenance and updates for maximum operational efficiency.',
      'service3-feature1': 'Cloud-based solutions',
      'service3-feature2': '24/7 maintenance & support',
      'service3-feature3': 'High scalability',

      // Why Choose Us Section
      'why-title': 'Why Choose Us',
      'why-subtitle': 'Advantages that make us different from others',
      'why1-title': 'Guaranteed Quality',
      'why1-desc': 'Using the latest technology and best development methodologies to produce high-quality solutions.',
      'why2-title': 'Fast Delivery',
      'why2-desc': 'Efficient development process with clear timelines and transparent communication.',
      'why3-title': 'Professional Team',
      'why3-desc': 'Highly dedicated team with international certifications and commitment to quality.',
      'why4-title': '24/7 Support',
      'why4-desc': 'Continuous technical support to ensure your systems run optimally at all times.',

      // Contact Section
      'contact-title': 'Contact Us',
      'contact-subtitle': 'Let\'s discuss your business technology needs',
      'contact-address-title': 'Address',
      'contact-address-text': 'Citra Garden City No. B2, Ds. Sambirejo, Kec. Pare, Kabupaten Kediri, East Java 64226',
      'contact-phone-title': 'Phone',
      'contact-email-title': 'Email',
      'contact-form-name': 'Full Name *',
      'contact-form-email': 'Email *',
      'contact-form-company': 'Company',
      'contact-form-service': 'Service of Interest',
      'contact-form-service-placeholder': 'Select Service',
      'contact-form-service-software': 'Software Development',
      'contact-form-service-consulting': 'IT Consulting',
      'contact-form-service-saas': 'Software as a Service',
      'contact-form-service-other': 'Others',
      'contact-form-message': 'Message *',
      'contact-form-message-placeholder': 'Tell us about your business needs...',
      'contact-form-submit': 'Send Message',

      // Footer Section
      'footer-company-desc': 'Trusted partner for your business digital transformation.',
      'footer-quicklinks-title': 'Quick Links',
      'footer-quicklinks-about': 'About Us',
      'footer-quicklinks-services': 'Services',
      'footer-quicklinks-portfolio': 'Portfolio',
      'footer-quicklinks-contact': 'Contact',
      'footer-legal-title': 'Legal',
      'footer-legal-privacy': 'Privacy Policy',
      'footer-legal-terms': 'Terms & Conditions',
      'footer-copyright': '© 2025 PT Laju Jaya Media Teknologi. All rights reserved.',

      // Portfolio
      'portfolio-title': 'Our Portfolio',
      'portfolio-subtitle': 'Some projects that we have successfully completed',
      'space-app-desc': 'SPACE (SALT Platform for Advance Collaboration of the Employee) is a comprehensive solution system that enables employees to optimize workforce and create a more collaborative and productive work environment.',
      'amar-bank-desc': 'A digital banking application from Amar Bank with various savings, investment, and innovative financial service features.',
      'tunaiku-desc': 'A fast and safe online loan application, with a simple submission process only through the application and without collateral.',
      'anekapay-desc': 'One of the products from PT Anekapay Teknologi Indonesia which sells a variety of digital products that only target traders.',
      'rexionone-desc': 'Employee attendance management application with GPS-based check-in/out features and self-service for leave applications, document uploads, and employee data management.',
      'evenkita-desc': 'Online ticket booking platform for events like music concerts and seminars.',
      'peace-desc': 'An online registration information system website that I created for the PEACE course in Kampung Inggris Pare.',
      'gis-desc': 'A Geo Mapping website for traffic signs created by Multec.TC and provided for Sampang Regency, Madura.',
      'simlab-desc': 'A laboratory equipment lending management information system. This application is used by STIKES Pamenang Pare.'
    }
  };

  // Language functionality
  let currentLang = localStorage.getItem('language') || 'id';

  function updateLanguage(lang) {
    console.log('Updating language to:', lang);
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update language button text
    const langText = document.querySelector('.lang-text');
    if (langText) {
      langText.textContent = lang.toUpperCase();
    }

    // Update active language option
    document.querySelectorAll('.lang-option').forEach(option => {
      option.classList.remove('active');
      if (option.dataset.lang === lang) {
        option.classList.add('active');
      }
    });

    // Update all translatable elements
    document.querySelectorAll('[data-id]').forEach(element => {
      const key = element.dataset.id;
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else if (element.tagName === 'OPTION') {
          element.textContent = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
        console.log(`Updated ${key}: ${translations[lang][key]}`);
      }
    });
  }

  // Expose updateLanguage to global scope
  window.updateLanguage = updateLanguage;

  // Initialize language
  updateLanguage(currentLang);
  console.log('Language initialized:', currentLang);

  // Language selector functionality
  const langToggle = document.getElementById('lang-toggle');
  const languageSelector = document.querySelector('.language-selector');

  console.log('Language elements found:', {
    langToggle: !!langToggle,
    languageSelector: !!languageSelector
  });

  if (langToggle && languageSelector) {
    console.log('Setting up language selector');

    langToggle.addEventListener('click', function (e) {
      e.preventDefault();
      console.log('Language toggle clicked!');
      languageSelector.classList.toggle('active');
      console.log('Active class toggled, now active:', languageSelector.classList.contains('active'));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
      if (!languageSelector.contains(e.target)) {
        languageSelector.classList.remove('active');
      }
    });

    // Language option handlers
    const langOptions = document.querySelectorAll('.lang-option');
    console.log('Found language options:', langOptions.length);

    langOptions.forEach((option, index) => {
      console.log(`Setting up option ${index} for language: ${option.dataset.lang}`);
      option.addEventListener('click', function (e) {
        e.preventDefault();
        const lang = this.dataset.lang;
        console.log('Language option clicked:', lang);
        updateLanguage(lang);
        languageSelector.classList.remove('active');
      });
    });

    console.log('Language selector setup complete');
  } else {
    console.error('Language selector elements not found');
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        // Account for fixed navbar height
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const data = {
        nama: formData.get('nama'),
        email: formData.get('email'),
        perusahaan: formData.get('perusahaan'),
        layanan: formData.get('layanan'),
        pesan: formData.get('pesan')
      };

      // Basic validation
      if (!data.nama || !data.email || !data.pesan) {
        alert('Mohon lengkapi semua field yang wajib diisi.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        alert('Format email tidak valid.');
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Mengirim...';
      submitBtn.disabled = true;

      // Simulate form submission (replace with actual endpoint)
      setTimeout(() => {
        alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('.service-card, .why-item, .portfolio-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Lazy loading for images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    imageObserver.observe(img);
  });

});
