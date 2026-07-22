// Language switcher (ID / EN) — shared across all pages
window.currentLang = window.currentLang || 'id';

const translations = {
    id: {
        // Navigation
        "nav.home": "Beranda",
        "nav.projects": "Proyek",
        "nav.about": "Tentang",
        "nav.contact": "Kontak",
        "nav.hire": "Hubungi Saya",
        // Footer
        "footer.copyright": "© 2026 Haris Fasha.",
        "footer.privacy": "Kebijakan Privasi",
        "footer.terms": "Syarat Layanan",
        "footer.accessibility": "Aksesibilitas",
        // Home
        "home.badge": "SIAP DITERJUNKAN",
        "home.hero.desc": "Membangun pengalaman digital dengan kekuatan tanpa kompromi dan visi yang jernih. Antarmuka yang berani, arsitektur yang tangguh, serta komitmen menjaga pengalaman pengguna di atas segalanya.",
        "home.hero.cta1": "Lihat Proyek",
        "home.hero.cta2": "Hubungi Saya",
        "home.projects.title": "Proyek Terbaru",
        "home.projects.subtitle": "Misi rahasia yang dikerjakan dengan presisi tinggi.",
        "home.projects.viewall": "Lihat Semua Arsip",
        "home.card1.tag1": "Data Ops",
        "home.card1.title": "Platform Analitik Fortress",
        "home.card1.desc": "Rangkaian visualisasi data berdensitas tinggi untuk pemantauan global dan respons cepat.",
        "home.card2.title": "Aplikasi Fitness Krypton",
        "home.card2.category": "Desain UX/UI",
        "home.card3.tag": "Eksperimental",
        "home.card3.title": "Proyek<br>Daily Planet",
        "home.card3.cta": "Baca Studi Kasus",
        // About
        "about.hero.title": "Ditempa dalam <br><span class=\"text-secondary\">Integritas</span>. <br>Dirancang untuk <span class=\"text-tertiary-container\">Dampak</span>.",
        "about.hero.desc": "Saya Kal-El, seorang desainer produk yang berkomitmen membangun pengalaman digital yang teruji oleh waktu. Pendekatan saya memadukan stabilitas struktural tanpa kompromi dengan estetika yang berani dan berpusat pada manusia. Setiap piksel, setiap interaksi, dirancang dengan tujuan.",
        "about.hero.cta": "Lihat Manifesto",
        "about.principles.title": "Prinsip Utama",
        "about.principle1.title": "Struktur yang Tak Tergoyahkan",
        "about.principle1.desc": "Desain harus tangguh terlebih dahulu. Saya merancang antarmuka yang tidak mudah rusak di bawah tekanan, memastikan alur pengguna yang kokoh dan eksekusi teknis yang solid sebelum menerapkan lapisan estetika.",
        "about.principle2.title": "Kejelasan Mutlak",
        "about.principle2.desc": "Kebenaran dalam desain berarti menghilangkan gangguan. Tipografi dengan kontras tinggi dan ruang kosong yang disengaja memandu pengguna tanpa hambatan.",
        "about.principle3.title": "UX yang Memberdayakan",
        "about.principle3.desc": "Setiap interaksi harus membuat pengguna merasa mampu dan memegang kendali. Desain harus mengangkat, bukan membuat frustrasi.",
        "about.principle4.title": "Kecepatan &amp; Presisi",
        "about.principle4.desc": "Lebih cepat dari peluru yang melesat. Performa adalah fitur desain. Saya mengutamakan aset yang ringan dan umpan balik instan.",
        "about.skills.title": "Matriks Kemampuan",
        "about.skills.status": "STATUS_SISTEM: OPTIMAL",
        "about.skills.cat1": "Arsitektur UX/UI",
        "about.skills.cat2": "Eksekusi Teknis",
        "about.skills.designsystems": "Sistem Desain",
        "about.skills.prototyping": "Prototyping",
        "about.skills.research": "Riset Pengguna",
        "about.skills.tailwind": "Framework Tailwind",
        "about.skills.motion": "Desain Motion",
        // Projects
        "projects.hero.title": "Log Misi",
        "projects.hero.desc": "Arsip penerjunan berdampak tinggi. Setiap proyek merupakan solusi struktural yang dirancang untuk stabilitas, skala, dan performa tanpa kompromi.",
        "projects.viewproject": "Lihat Proyek",
        "projects.casestudy": "Studi Kasus",
        "projects.card1.tag1": "UX Enterprise",
        "projects.card1.title": "Sistem Global Watchtower",
        "projects.card1.desc": "Dasbor terpusat untuk memantau umpan satelit global. Dirancang untuk rendering data tanpa jeda dan visibilitas kontras tinggi dalam skenario darurat.",
        "projects.card2.tag": "Aplikasi Mobile",
        "projects.card2.title": "Daily Planet Reader",
        "projects.card2.desc": "Platform agregasi berita mobile-first yang dirancang untuk konsumsi cepat dan integritas jurnalistik tanpa kompromi.",
        "projects.card3.tag": "Infrastruktur",
        "projects.card3.title": "Arsip Fortress",
        "projects.card3.desc": "Antarmuka penyimpanan data yang tidak dapat diubah, dirancang untuk berinteraksi dengan array memori kristal untuk pengarsipan historis jangka panjang.",
        "projects.card4.tag1": "UI FinTech",
        "projects.card4.title": "Ledger Kryptonian",
        "projects.card4.desc": "Portal transaksi terdesentralisasi yang aman. Menampilkan desain struktural kontras tinggi untuk memandu pengguna melalui alur keuangan yang kompleks dengan kejelasan dan kepercayaan penuh.",
        // Contact
        "contact.hero.title": "KIRIM SINYAL",
        "contact.hero.desc": "Siap membentuk tim atau butuh bantuan untuk proyek penting? Hubungi melalui saluran transmisi aman di bawah ini. Waktu respons lebih cepat dari peluru yang melesat.",
        "contact.securechannel": "Saluran Aman",
        "contact.form.name": "Identifikasi",
        "contact.form.name.placeholder": "Nama atau Alias Anda",
        "contact.form.email": "Saluran Komunikasi",
        "contact.form.email.placeholder": "Alamat Email Anda",
        "contact.form.subject": "Arahan Misi",
        "contact.form.subject.placeholder": "Subjek Transmisi",
        "contact.form.message": "Detail Transmisi",
        "contact.form.message.placeholder": "Jelaskan kebutuhan Anda...",
        "contact.form.submit": "Kirim Pesan",
        "contact.coordinates": "Koordinat",
        "contact.priorityfreq": "Frekuensi Prioritas 0-42",
        "contact.globalnetwork": "Jaringan Global",
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.projects": "Projects",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.hire": "Hire Me",
        // Footer
        "footer.copyright": "© 2024 MAN OF STEEL DESIGN. ALL RIGHTS RESERVED.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.accessibility": "Accessibility",
        // Home
        "home.badge": "READY FOR DEPLOYMENT",
        "home.hero.desc": "Forging digital experiences with unwavering strength and visionary clarity. Bold interfaces, resilient architectures, and a commitment to protecting user experience at all costs.",
        "home.hero.cta1": "View Missions",
        "home.hero.cta2": "Signal Me",
        "home.projects.title": "Recent Directives",
        "home.projects.subtitle": "Classified missions executed with precision.",
        "home.projects.viewall": "View Full Archives",
        "home.card1.tag1": "Data Ops",
        "home.card1.title": "Fortress Analytics Platform",
        "home.card1.desc": "A high-density data visualization suite designed for global monitoring and rapid response deployment.",
        "home.card2.title": "Krypton Fitness App",
        "home.card2.category": "UX/UI Design",
        "home.card3.tag": "Experimental",
        "home.card3.title": "Project<br>Daily Planet",
        "home.card3.cta": "Read Case Study",
        // About
        "about.hero.title": "Forged in <br><span class=\"text-secondary\">Integrity</span>. <br>Designed for <span class=\"text-tertiary-container\">Impact</span>.",
        "about.hero.desc": "I am Kal-El, a product designer committed to building digital experiences that stand the test of time. My approach marries uncompromising structural stability with bold, human-centric aesthetics. Every pixel, every interaction, is engineered with purpose.",
        "about.hero.cta": "View Manifesto",
        "about.principles.title": "Core Directives",
        "about.principle1.title": "Unyielding Structure",
        "about.principle1.desc": "Design must first be resilient. I architect interfaces that do not break under pressure, ensuring robust user flows and bulletproof technical execution before applying aesthetic layers.",
        "about.principle2.title": "Absolute Clarity",
        "about.principle2.desc": "Truth in design means eliminating noise. High-contrast typography and intentional white space guide the user flawlessly.",
        "about.principle3.title": "Empowering UX",
        "about.principle3.desc": "Every interaction should make the user feel capable and in control. Design should elevate, never frustrate.",
        "about.principle4.title": "Velocity &amp; Precision",
        "about.principle4.desc": "Faster than a speeding bullet. Performance is a design feature. I prioritize lightweight assets and instantaneous feedback loops.",
        "about.skills.title": "Capabilities Matrix",
        "about.skills.status": "SYSTEM_STATUS: OPTIMAL",
        "about.skills.cat1": "UX/UI Architecture",
        "about.skills.cat2": "Technical Execution",
        "about.skills.designsystems": "Design Systems",
        "about.skills.prototyping": "Prototyping",
        "about.skills.research": "User Research",
        "about.skills.tailwind": "Tailwind Frameworks",
        "about.skills.motion": "Motion Design",
        // Projects
        "projects.hero.title": "Mission Logs",
        "projects.hero.desc": "An archive of high-impact deployments. Each project represents a structural solution engineered for stability, scale, and uncompromising performance.",
        "projects.viewproject": "View Project",
        "projects.casestudy": "Case Study",
        "projects.card1.tag1": "Enterprise UX",
        "projects.card1.title": "Global Watchtower System",
        "projects.card1.desc": "A centralized dashboard for monitoring global satellite feeds. Engineered for zero-latency data rendering and high-contrast visibility in emergency scenarios.",
        "projects.card2.tag": "Mobile App",
        "projects.card2.title": "Daily Planet Reader",
        "projects.card2.desc": "A mobile-first news aggregation platform designed for rapid consumption and uncompromising journalistic integrity.",
        "projects.card3.tag": "Infrastructure",
        "projects.card3.title": "Fortress Archives",
        "projects.card3.desc": "Immutable data storage UI interface, designed to interact with crystalline memory arrays for long-term historical preservation.",
        "projects.card4.tag1": "FinTech UI",
        "projects.card4.title": "Kryptonian Ledger",
        "projects.card4.desc": "A secure, decentralized transaction portal. Features high-contrast structural design to guide users through complex financial flows with absolute clarity and confidence.",
        // Contact
        "contact.hero.title": "SEND A SIGNAL",
        "contact.hero.desc": "Ready to assemble a team or need assistance on a critical project? Reach out using the secure transmission channel below. Response times are faster than a speeding bullet.",
        "contact.securechannel": "Secure Channel",
        "contact.form.name": "Identification",
        "contact.form.name.placeholder": "Your Name or Alias",
        "contact.form.email": "Comms Link",
        "contact.form.email.placeholder": "Your Email Address",
        "contact.form.subject": "Mission Directive",
        "contact.form.subject.placeholder": "Subject of Transmission",
        "contact.form.message": "Transmission Details",
        "contact.form.message.placeholder": "Elaborate on the requirements...",
        "contact.form.submit": "Transmit Message",
        "contact.coordinates": "Coordinates",
        "contact.priorityfreq": "Priority Frequency 0-42",
        "contact.globalnetwork": "Global Network",
    }
};

function applyLanguage(lang) {
    window.currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        const text = translations[lang] && translations[lang][key];
        if (text !== undefined) el.innerHTML = text;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = translations[lang] && translations[lang][key];
        if (text !== undefined) el.setAttribute('placeholder', text);
    });
    document.documentElement.lang = lang;
    try { localStorage.setItem('site-lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let saved = 'id';
    try { saved = localStorage.getItem('site-lang') || 'id'; } catch (e) {}
    applyLanguage(saved);
    document.querySelectorAll('.lang-btn').forEach((btn) => {
        btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });
});
