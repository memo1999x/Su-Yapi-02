document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Preloader animasyonu
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        mainContent.classList.remove('hidden');
    }, 1500); // 1.5 saniye sonra ana sayfaya geçiş

    // Projeler linkine tıklama
    document.getElementById('projects-link').addEventListener('click', () => {
        window.location.href = 'projects.html'; // Projeler sayfasına yönlendirme
    });

    // Scroll sırasında navbar efektleri
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });

    // "Daha Fazlasını Gör" butonuna animasyon eklemek
    document.querySelector(".btn-more").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "tum-projeler.html";
    });

    // LIGHTBOX: Fotoğraf tıklandığında full-screen açılmasını sağlar
    document.querySelectorAll('.gallery-images a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            const img = document.createElement('img');
            img.src = link.querySelector('img').src;
            lightbox.appendChild(img);

            // Sayfaya lightbox ekle
            document.body.appendChild(lightbox);

            // Lightbox tıklandığında kapatma
            lightbox.addEventListener('click', function() {
                document.body.removeChild(lightbox);
            });
        });
    });

    // Logo animasyonu (3D döndürme)
    const logo = document.querySelector(".navbar .logo img");
    logo.style.transform = 'rotateY(0deg)';
    logo.style.transition = 'transform 2s ease-in-out';
    
    setTimeout(() => {
        logo.style.transform = 'rotateY(360deg)';
        setTimeout(() => {
            logo.style.display = 'none'; // Logo kaybolur
        }, 2000); // Logo dönüş animasyonu sonrası kaybolma
    }, 1000); // 1 saniye sonra logo animasyonu başlar

    // Galeri sağ ve sol ok geçişi
    document.querySelector(".next-btn").addEventListener("click", function() {
        const galleryContainer = document.querySelector(".gallery-container");
        galleryContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });

    document.querySelector(".prev-btn").addEventListener("click", function() {
        const galleryContainer = document.querySelector(".gallery-container");
        galleryContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
});
