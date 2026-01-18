// === DATA PROJEK (TIDAK DIUBAH, SESUAI PERMINTAAN) ===
const projectsData = [
    {
        title: "Smart Nutrition Monitoring System",
        image: "img/smart.png", 
        description: "Sistem IoT berbasis ESP32 untuk memantau nutrisi tanah (pH, TDS, kelembaban) pada tanaman padi secara real-time. Data ditampilkan pada dashboard web Firebase dan dianalisis menggunakan Logika Fuzzy untuk memberikan rekomendasi pertanian cerdas.",
        tech: "Machine Learning · IoT · Embedded Systems · Fuzzy Logic",
        link: "https://www.youtube.com/watch?v=hjmWv9Ygwkk" 
    },
    {
        title: "Stain Detection System for Garment Quality Inspection",
        image: "img/Stain.png", 
        description: "Aplikasi web untuk mendeteksi noda pada pakaian menggunakan pemrosesan citra digital (Canny Edge & HSV) tanpa Machine Learning. Dirancang untuk membantu proses quality control di industri tekstil dengan visualisasi area noda yang akurat.",
        tech: "Digital Image Processing · OpenCV · Python · Image Segmentation",
        link: "https://www.youtube.com/watch?v=zUBa70NDVxg"
    },
    {
        title: "Autonomous Firefighting Robot",
        image: "img/Robot.jpeg",
        description: "Robot pemadam api otonom berbasis ESP32 dengan kendali PID yang mampu mengikuti garis, mendeteksi api, dan memadamkannya. Dilengkapi algoritma Smart Recovery untuk kembali ke jalur secara otomatis jika tersesat.",
        tech: "OpenCV · ESP32 · Arduino IDE · MQTT",
        link: "https://www.youtube.com/watch?v=193cNYVd9Z8"
    },
    {
        title: "Redesign Website Yamaha Fortuna Cirebon",
        image: "img/Yamaha.png",
        description: "Proyek kolaborasi industri untuk merancang ulang website Yamaha Fortuna Cirebon guna meningkatkan UX dan aksesibilitas informasi. Website mencakup informasi penjualan, suku cadang, servis, serta dashboard admin untuk pengelolaan konten.",
        tech: "Laravel · HTML/CSS · Front-End · JavaScript",
        link: "https://www.youtube.com/watch?v=yKDii3phCH4"
    },
    {
        title: "Automated Sorting System Using Dobot Robotic Arm",
        image: "img/Dobot.png",
        description: "Sistem pick-and-place otomatis menggunakan lengan robot Dobot, konveyor, dan sensor warna. Robot mendeteksi objek, menghentikan konveyor, mengidentifikasi warna, dan memindahkan barang ke lokasi yang sesuai secara presisi.",
        tech: "Dobot Arm · Robot Programming · Automation",
        link: ""
    },
    {
        title: "Real Time Drowsiness & Gesture Detection",
        image: "img/AI2.png",
        description: "Sistem visi komputer berbasis MediaPipe dan OpenCV untuk mendeteksi kantuk (eye tracking) dan menghitung jari tangan (gesture control) secara real-time. Berfungsi sebagai prototipe sistem keselamatan pengemudi dan antarmuka tanpa sentuh.",
        tech: "OpenCV · Python · Computer Vision · MediaPipe",
        link: "https://www.youtube.com/watch?v=jmtSpNGnufo"
    },
    {
        title: "TERMINAL AI AGENT & CUSTOM TOOL",
        image: "img/AI.png",
        description: "Agen AI berbasis terminal (CLI) menggunakan Python dan OpenRouter API. Sistem ini mampu mengonversi file (PDF ke Word), mengecek status sistem (CPU/RAM), dan menjalankan perintah otomatis melalui pengenalan teks (Regex).",
        tech: "Python · AI · Machine Learning · CLI Automation",
        link: ""
    },
    {
        title: "Cataract Diagnosis Expert System",
        image: "img/Katarak.png",
        description: "Sistem pakar berbasis web untuk mendiagnosis jenis katarak menggunakan metode Forward Chaining dan Certainty Factor. Menampilkan persentase keyakinan diagnosis berdasarkan gejala yang dipilih pengguna.",
        tech: "HTML · CSS · JavaScript · JSON · Expert System",
        link: ""
    },
    {
        title: "Edu Connect - Private Tutoring App Design",
        image: "img/Edu.png",
        description: "Desain prototipe aplikasi mobile (Figma) untuk menghubungkan orang tua dengan tutor privat. Fitur mencakup pencarian tutor, jadwal ketersediaan, dan sistem pemesanan yang dirancang dengan pendekatan User-Centered Design.",
        tech: "Figma · Design Thinking · UI/UX · Prototyping",
        link: "https://www.figma.com/file/1xJEUEQcUss71IBxTaOzHw/Edu-Connect"
    },
    {
        title: "PLC Delta Automation & HMI Simulation",
        image: "img/Delta.png",
        description: "Simulasi otomasi industri menggunakan PLC Delta dan HMI DOPSoft untuk sistem pengisian botol dan kontrol level tangki air. Mengintegrasikan ladder logic untuk kendali sensor, motor konveyor, dan visualisasi status real-time.",
        tech: "PLC Delta · HMI · Automation Logic",
        link: ""
    },
    {
        title: "Automated Cutting Machine Simulation (Omron PLC)",
        image: "img/Omron.png",
        description: "Pemrograman PLC Omron untuk mengontrol silinder hidrolik double-acting secara otomatis dalam siklus looping. Menggunakan sensor proximity untuk akurasi gerakan dan dilengkapi mode darurat (emergency stop).",
        tech: "PLC Omron · CX-Programmer · Hydraulic Control",
        link: "https://www.youtube.com/watch?v=B7XNn_T1zVo"
    },
    {
        title: "Automatic Rice Weighing System",
        image: "img/Timbangan.png",
        description: "Timbangan beras otomatis berbasis ESP32 yang mengintegrasikan load cell, sensor inframerah, dan servo. Alat ini membuka katup aliran beras dan menutupnya secara otomatis saat berat target tercapai dengan presisi tinggi.",
        tech: "IoT · ESP32 · GUI · Component Integration",
        link: "https://www.youtube.com/watch?v=v72xuCXyyV0"
    },
    {
        title: "Farminista – Farmer Administration App",
        image: "img/Farn.png",
        description: "Aplikasi desktop JavaFX untuk administrasi kelompok tani. Mendukung pencatatan data petani, pembukuan transaksi, dan penyimpanan database MySQL, dibangun dengan konsep Object-Oriented Programming (OOP) yang kuat.",
        tech: "JavaFX · MySQL · OOP · JDBC",
        link: "https://www.youtube.com/watch?v=2jXDzGZ9hkM"
    },
    {
        title: "Electric Scooter Rental Management Web",
        image: "img/Scooter.png",
        description: "Aplikasi web manajemen penyewaan skuter listrik dengan fitur pengelolaan data penyewa, tarif, transaksi, dan pelaporan otomatis. Memudahkan admin memantau status skuter dan pendapatan harian.",
        tech: "MySQL · HTML/CSS · PHP · JavaScript",
        link: "https://github.com/mrzqiaullah27/Peminjaman-Skuter-Elektrik"
    },
    {
        title: "Hand-Cranked Portable Power Bank",
        image: "img/PCB.png",
        description: "Rancang bangun power bank portabel dengan generator dinamo tuas tekan. Mengubah energi mekanik menjadi listrik darurat untuk mengisi daya perangkat seluler, menerapkan konsep energi terbarukan skala kecil.",
        tech: "Electrical Wiring · PCB Design · Renewable Energy",
        link: ""
    },
    {
        title: "Laundry Cashier Application",
        image: "img/laundry.png",
        description: "Program kasir berbasis Bahasa C (Console) untuk menghitung transaksi laundry secara otomatis. Fitur mencakup input data pelanggan, perhitungan berat, estimasi selesai, dan cetak struk digital sederhana.",
        tech: "C Programming · Algorithm · Data Structure",
        link: ""
    }
];

// === LOGIC RENDER (DENGAN PENGECEKAN HALAMAN) ===
const container = document.getElementById('projectsContainer');

// Cek dulu, apakah elemen 'projectsContainer' ada di halaman ini?
// Kalau tidak ada (misal di halaman Home), jangan jalankan kode di bawah.
if (container) {
    projectsData.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';
        
        let linkHtml = '';
        if (project.link && project.link.trim() !== "") {
            linkHtml = `
            <div class="project-link-wrapper">
                <a href="${project.link}" target="_blank" class="project-link">
                    Lihat Detail <i class="ri-arrow-right-line"></i>
                </a>
            </div>`;
        }

        const skillsArray = project.tech.split('·');
        const tagsHtml = skillsArray.map(skill => `<span class="tech-tag">${skill.trim()}</span>`).join('');

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                
                <div class="project-meta">
                    <div class="tech-tags">
                        ${tagsHtml}
                    </div>
                </div>
                
                ${linkHtml}
            </div>
        `;
        container.appendChild(card);
    });
}

// === AUTO YEAR ===
const yearSpan = document.getElementById("year");
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// === MOBILE NAV ===
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        const isFlex = navLinks.style.display === 'flex';
        navLinks.style.display = isFlex ? 'none' : 'flex';
        
        if (!isFlex) {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '1.5rem';
            navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            navLinks.style.gap = '1rem';
            navLinks.style.zIndex = '999';
        }
    });
}