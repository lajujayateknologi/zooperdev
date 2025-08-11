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

      // Portfolio
      'portfolio-title': 'Portfolio Kami',
      'portfolio-subtitle': 'Beberapa proyek yang telah kami selesaikan dengan sukses',
      'space-app-desc': 'Aplikasi internal HRIS yang digunakan oleh SALT.',
      'senyumku-title': 'Investasi & Tabungan',
      'senyumku-desc': 'Aplikasi perbankan digital dari Amar Bank dengan berbagai fitur menarik. Saya membuat fitur transaksi seperti Billing Payment dan QRIS.',
      'tunaiku-title': 'Pinjaman Online Cepat',
      'tunaiku-desc': 'Aplikasi pinjaman online yang cepat dan aman, dengan proses pengajuan sederhana hanya melalui aplikasi tanpa jaminan.',
      'anekapay-title': 'Jualan Tanpa Modal',
      'anekapay-desc': 'Salah satu produk dari PT Anekapay Teknologi Indonesia yang menjual berbagai produk digital yang hanya menargetkan pedagang.',
      'rexionone-desc': 'Aplikasi untuk absensi karyawan.',
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

      // Portfolio
      'portfolio-title': 'Our Portfolio',
      'portfolio-subtitle': 'Some projects that we have successfully completed',
      'space-app-desc': 'Internal HRIS application used by SALT.',
      'senyumku-title': 'Investment & Savings',
      'senyumku-desc': 'A digital banking application from Amar Bank with a lots of interesting features. I create transaction feature like Billing Payment and QRIS.',
      'tunaiku-title': 'Fast Online Loans',
      'tunaiku-desc': 'A fast and safe online loan application, with a simple submission process only through the application and without collateral.',
      'anekapay-title': 'Sell Without Capital',
      'anekapay-desc': 'One of the products from PT Anekapay Teknologi Indonesia which sells a variety of digital products that only target traders.',
      'rexionone-desc': 'An application for employee attendance.',
      'evenkita-desc': 'Online booking tickets such as music events and seminars.',
      'peace-desc': 'An online registration information system site that I created for the PEACE course in Kampung Inggris Pare.',
      'gis-desc': 'A Geo Mapping site for traffic signs created by Multec.TC and provided for Sampang Regency, Madura.',
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
    
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Language toggle clicked!');
      languageSelector.classList.toggle('active');
      console.log('Active class toggled, now active:', languageSelector.classList.contains('active'));
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!languageSelector.contains(e.target)) {
        languageSelector.classList.remove('active');
      }
    });

    // Language option handlers
    const langOptions = document.querySelectorAll('.lang-option');
    console.log('Found language options:', langOptions.length);

    langOptions.forEach((option, index) => {
      console.log(`Setting up option ${index} for language: ${option.dataset.lang}`);
      option.addEventListener('click', function(e) {
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
