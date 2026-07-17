// --- Supabase Client Initialization ---
const supabaseUrl = 'https://nulblnrdrfmlxribjboc.supabase.co';
const supabaseKey = 'sb_publishable_5y03TiJC416eBE4iuTW_Qw_yv3qZovI';
let supabaseClient = null;
let siteContactEmail = 'Skimarrakech@gmail.com';

try {
    if (supabaseUrl && window.supabase) {
        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey);
    }
} catch (e) {
    console.error("Supabase init error:", e);
}

// --- 0. PRELOADER LOGIC ---
let loaderRemoved = false;
const removeLoader = () => {
    if (loaderRemoved) return;
    loaderRemoved = true;
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.pointerEvents = 'none';
        setTimeout(() => {
            loader.remove();
            // Restaurar scroll al hash si existe en la URL después de que el loader desaparezca
            if (window.location.hash) {
                const target = document.querySelector(window.location.hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }, 400);
    }
};
// Quitar el preloader tras la carga del contenido (o máximo 1.5s de fallback)
window.addEventListener('load', () => {
    setTimeout(removeLoader, 500);
});
setTimeout(removeLoader, 1500);

// --- 1. GLOBAL HERO HORIZONTAL SCROLL LOGIC ---
try {
    const scrollContainer = document.getElementById('hero-scroll-container');
    const horizontalTrack = document.getElementById('hero-horizontal-track');

    if (scrollContainer && horizontalTrack) {
        function updateHeroScroll() {
            const rect = scrollContainer.getBoundingClientRect();
            const headerHeight = 72; // The top offset

            // If we are above the container
            if (rect.top > headerHeight) {
                horizontalTrack.style.transform = `translateX(0%)`;
                return;
            }

            // If we are completely below the container
            if (rect.bottom < window.innerHeight) {
                const maxTranslate = horizontalTrack.scrollWidth - window.innerWidth;
                horizontalTrack.style.transform = `translate3d(-${maxTranslate}px, 0, 0)`;
                return;
            }

            // Calculate progress based on how far we scrolled inside the container
            const scrollableDistance = rect.height - window.innerHeight + headerHeight;
            const scrolled = headerHeight - rect.top;

            let progress = scrolled / scrollableDistance;
            progress = Math.max(0, Math.min(1, progress));

            const maxTranslate = horizontalTrack.scrollWidth - window.innerWidth;
            horizontalTrack.style.transform = `translate3d(-${progress * maxTranslate}px, 0, 0)`;

            // Button toggle logic
            const btnHorarios = document.getElementById('btn-hero-horarios');
            const btnQuran = document.getElementById('btn-hero-quran');
            if (btnHorarios && btnQuran) {
                const currentSlide = (progress * maxTranslate) / window.innerWidth;
                const isMobile = window.innerWidth < 768;
                const threshold = isMobile ? 1.5 : 0.5;

                if (currentSlide >= threshold) {
                    btnHorarios.classList.add('opacity-0', 'pointer-events-none');
                    btnHorarios.classList.remove('opacity-100', 'pointer-events-auto');

                    btnQuran.classList.remove('opacity-0', 'pointer-events-none');
                    btnQuran.classList.add('opacity-100', 'pointer-events-auto');
                } else {
                    btnHorarios.classList.remove('opacity-0', 'pointer-events-none');
                    btnHorarios.classList.add('opacity-100', 'pointer-events-auto');

                    btnQuran.classList.add('opacity-0', 'pointer-events-none');
                    btnQuran.classList.remove('opacity-100', 'pointer-events-auto');
                }
            }
        }
        window.addEventListener('scroll', updateHeroScroll, { passive: true });
        updateHeroScroll();
    }
} catch (e) {
    console.error("Hero Scroll Error:", e);
}

// --- 2. REST OF THE SCRIPT ---
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function updateMenuState() {
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');
        mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-[28px]">close</span>';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.setAttribute('aria-label', 'Cerrar menú');
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
        mobileMenuBtn.innerHTML = '<span class="material-symbols-outlined text-[28px]">menu</span>';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'Abrir menú');
        document.body.style.overflow = 'auto';
    }
}

mobileMenuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    updateMenuState();
});

// Close mobile menu on link click
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOpen = false;
        updateMenuState();
    });
});

// Simple scroll effect for navbar
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const heroScrollContainer = document.getElementById('hero-scroll-container');
    // The horizontal scroll finishes when we scroll (offsetHeight - window.innerHeight)
    const heroThreshold = heroScrollContainer ? (heroScrollContainer.offsetHeight - window.innerHeight) : 0;

    // Add background styling when not at top
    if (currentScrollY > 20) {
        navbar.classList.add('shadow-[0_4px_30px_rgba(0,0,0,0.8)]');
    } else {
        navbar.classList.remove('shadow-[0_4px_30px_rgba(0,0,0,0.8)]');
    }

    // Hide on scroll down, show on scroll up (ONLY after passing the horizontal hero section)
    // En móviles (<=768px), el menú se queda siempre fijo para evitar que desaparezca.
    if (currentScrollY > lastScrollY && currentScrollY > 100 && currentScrollY > heroThreshold && window.innerWidth > 768) {
        // Scrolling down and past the first page - hide
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.opacity = '0';
    } else {
        // Scrolling up OR still in the first page - show
        navbar.style.transform = 'translateY(0)';
        navbar.style.opacity = '1';
    }

    lastScrollY = currentScrollY;
});

// =====================================================
// MAWAQIT PRAYER TIMES — Calendario anual embebido
// Fuente: https://mawaqit.net/es/mezquita-rahma-palma-de-mallorca-07005-spain
// Formato: calendar[mes-1][día] = [Fajr, Shuruq, Dhuhr, Asr, Maghrib, Isha]
// =====================================================
const MAWAQIT_CALENDAR = [
    {"1":["06:31","08:10","12:53","15:18","17:36","19:06"],"2":["06:31","08:10","12:53","15:18","17:37","19:07"],"3":["06:31","08:10","12:54","15:19","17:38","19:08"],"4":["06:31","08:10","12:54","15:20","17:39","19:09"],"5":["06:31","08:10","12:55","15:21","17:40","19:10"],"6":["06:31","08:10","12:55","15:22","17:40","19:10"],"7":["06:31","08:10","12:56","15:22","17:41","19:11"],"8":["06:31","08:10","12:56","15:23","17:42","19:12"],"9":["06:31","08:10","12:56","15:24","17:43","19:13"],"10":["06:31","08:10","12:57","15:25","17:44","19:14"],"11":["06:31","08:09","12:57","15:26","17:45","19:15"],"12":["06:31","08:09","12:58","15:27","17:46","19:16"],"13":["06:31","08:09","12:58","15:28","17:47","19:17"],"14":["06:31","08:09","12:58","15:29","17:49","19:19"],"15":["06:31","08:08","12:59","15:30","17:50","19:20"],"16":["06:08","07:41","12:59","15:31","17:51","19:21"],"17":["06:30","08:07","12:59","15:32","17:52","19:22"],"18":["06:30","08:07","13:00","15:33","17:53","19:23"],"19":["06:29","08:06","13:00","15:34","17:54","19:24"],"20":["06:29","08:06","13:00","15:35","17:55","19:25"],"21":["06:29","08:05","13:01","15:36","17:56","19:26"],"22":["06:28","08:05","13:01","15:36","17:57","19:27"],"23":["06:28","08:04","13:01","15:37","17:59","19:29"],"24":["06:27","08:03","13:01","15:38","18:00","19:30"],"25":["06:27","08:03","13:02","15:39","18:01","19:31"],"26":["06:26","08:02","13:02","15:40","18:02","19:32"],"27":["06:26","08:01","13:02","15:41","18:03","19:33"],"28":["06:25","08:01","13:02","15:42","18:05","19:35"],"29":["06:24","08:00","13:02","15:43","18:06","19:36"],"30":["06:24","07:59","13:03","15:44","18:07","19:37"],"31":["06:23","07:58","13:03","15:45","18:08","19:38"]},
    {"1":["06:22","07:57","13:03","15:46","18:09","19:39"],"2":["06:21","07:56","13:03","15:47","18:10","19:40"],"3":["06:21","07:55","13:03","15:48","18:12","19:42"],"4":["06:20","07:54","13:03","15:49","18:13","19:43"],"5":["06:19","07:53","13:03","15:50","18:14","19:44"],"6":["06:18","07:52","13:03","15:51","18:15","19:45"],"7":["06:17","07:51","13:03","15:52","18:16","19:46"],"8":["06:16","07:50","13:03","15:53","18:18","19:48"],"9":["06:15","07:49","13:04","15:54","18:19","19:49"],"10":["06:14","07:48","13:04","15:55","18:20","19:50"],"11":["06:13","07:47","13:04","15:56","18:21","19:51"],"12":["06:12","07:45","13:04","15:57","18:22","19:52"],"13":["06:11","07:44","13:04","15:58","18:23","19:53"],"14":["06:10","07:43","13:03","15:59","18:25","19:55"],"15":["06:09","07:42","13:03","15:59","18:26","19:56"],"16":["06:08","07:41","13:03","16:00","18:27","19:57"],"17":["06:07","07:39","13:03","16:01","18:28","19:58"],"18":["06:05","07:38","13:03","16:02","18:29","19:59"],"19":["06:04","07:37","13:03","16:03","18:30","20:00"],"20":["06:03","07:35","13:03","16:04","18:31","20:01"],"21":["06:02","07:34","13:03","16:04","18:33","20:03"],"22":["06:00","07:33","13:03","16:05","18:34","20:04"],"23":["05:59","07:31","13:03","16:06","18:35","20:05"],"24":["05:58","07:30","13:03","16:07","18:36","20:06"],"25":["05:56","07:28","13:02","16:08","18:37","20:07"],"26":["05:55","07:27","13:02","16:08","18:38","20:08"],"27":["05:54","07:25","13:02","16:09","18:39","20:09"],"28":["05:52","07:24","13:02","16:10","18:40","20:10"],"29":["05:51","07:23","13:02","16:11","18:41","20:11"]},
    {"1":["05:51","07:23","13:02","16:11","18:41","20:11"],"2":["05:49","07:21","13:01","16:11","18:42","20:12"],"3":["05:48","07:20","13:01","16:12","18:44","20:14"],"4":["05:46","07:18","13:01","16:13","18:45","20:15"],"5":["05:45","07:17","13:01","16:13","18:46","20:16"],"6":["05:43","07:15","13:01","16:14","18:47","20:17"],"7":["05:42","07:14","13:00","16:15","18:48","20:18"],"8":["05:40","07:12","13:00","16:15","18:49","20:19"],"9":["05:39","07:10","13:00","16:16","18:50","20:20"],"10":["05:37","07:09","13:00","16:16","18:51","20:21"],"11":["05:35","07:07","12:59","16:17","18:52","20:22"],"12":["05:34","07:06","12:59","16:18","18:53","20:23"],"13":["05:32","07:04","12:59","16:18","18:54","20:24"],"14":["05:30","07:03","12:59","16:19","18:55","20:25"],"15":["05:29","07:01","12:58","16:19","18:56","20:26"],"16":["05:27","06:59","12:58","16:20","18:57","20:27"],"17":["05:25","06:58","12:58","16:20","18:58","20:28"],"18":["05:24","06:56","12:57","16:21","18:59","20:29"],"19":["05:22","06:55","12:57","16:21","19:00","20:30"],"20":["05:20","06:53","12:57","16:22","19:01","20:31"],"21":["05:19","06:51","12:57","16:22","19:02","20:32"],"22":["05:17","06:50","12:56","16:23","19:03","20:33"],"23":["05:15","06:48","12:56","16:23","19:04","20:34"],"24":["05:13","06:47","12:56","16:24","19:05","20:35"],"25":["05:12","06:45","12:55","16:24","19:06","20:36"],"26":["05:10","06:43","12:55","16:25","19:07","20:37"],"27":["05:08","06:42","12:55","16:25","19:08","20:38"],"28":["05:06","06:40","12:54","16:25","19:09","20:39"],"29":["06:04","07:39","13:54","17:26","20:10","21:40"],"30":["06:03","07:37","13:54","17:26","20:11","21:41"],"31":["06:01","07:35","13:54","17:27","20:12","21:42"]},
    {"1":["05:59","07:34","13:53","17:27","20:13","21:43"],"2":["05:57","07:32","13:53","17:27","20:14","21:44"],"3":["05:55","07:31","13:53","17:28","20:15","21:45"],"4":["05:53","07:29","13:52","17:28","20:16","21:46"],"5":["05:52","07:28","13:52","17:28","20:17","21:47"],"6":["05:50","07:26","13:52","17:29","20:18","21:48"],"7":["05:48","07:24","13:51","17:29","20:19","21:49"],"8":["05:46","07:23","13:51","17:29","20:20","21:50"],"9":["05:44","07:21","13:51","17:30","20:21","21:51"],"10":["05:42","07:20","13:51","17:30","20:22","21:52"],"11":["05:41","07:18","13:50","17:30","20:23","21:53"],"12":["05:39","07:17","13:50","17:31","20:24","21:54"],"13":["05:37","07:15","13:50","17:31","20:25","21:55"],"14":["05:35","07:14","13:50","17:31","20:26","21:56"],"15":["05:33","07:12","13:49","17:32","20:27","21:57"],"16":["05:31","07:11","13:49","17:32","20:28","21:58"],"17":["05:30","07:09","13:49","17:32","20:29","21:59"],"18":["05:28","07:08","13:49","17:32","20:30","22:00"],"19":["05:26","07:06","13:48","17:33","20:31","22:01"],"20":["05:24","07:05","13:48","17:33","20:32","22:02"],"21":["05:22","07:04","13:48","17:33","20:33","22:03"],"22":["05:21","07:02","13:48","17:34","20:34","22:04"],"23":["05:19","07:01","13:48","17:34","20:35","22:05"],"24":["05:17","06:59","13:48","17:34","20:36","22:06"],"25":["05:15","06:58","13:47","17:34","20:37","22:07"],"26":["05:13","06:57","13:47","17:35","20:38","22:08"],"27":["05:12","06:55","13:47","17:35","20:39","22:09"],"28":["05:10","06:54","13:47","17:35","20:40","22:10"],"29":["05:08","06:53","13:47","17:35","20:41","22:11"],"30":["05:06","06:52","13:47","17:36","20:42","22:12"]},
    {"1":["05:05","06:50","13:46","17:36","20:43","22:13"],"2":["05:03","06:49","13:46","17:36","20:44","22:14"],"3":["05:01","06:48","13:46","17:36","20:45","22:15"],"4":["05:00","06:47","13:46","17:37","20:46","22:16"],"5":["04:58","06:46","13:46","17:37","20:47","22:17"],"6":["04:56","06:44","13:46","17:37","20:48","22:18"],"7":["04:55","06:43","13:46","17:37","20:49","22:19"],"8":["04:53","06:42","13:46","17:38","20:50","22:20"],"9":["04:51","06:41","13:46","17:38","20:51","22:21"],"10":["04:50","06:40","13:46","17:38","20:52","22:22"],"11":["04:48","06:39","13:46","17:38","20:53","22:23"],"12":["04:47","06:38","13:46","17:39","20:54","22:24"],"13":["04:45","06:37","13:46","17:39","20:55","22:25"],"14":["04:44","06:36","13:46","17:39","20:56","22:26"],"15":["04:42","06:35","13:46","17:39","20:57","22:27"],"16":["04:41","06:34","13:46","17:40","20:58","22:28"],"17":["04:40","06:34","13:46","17:40","20:58","22:28"],"18":["04:38","06:33","13:46","17:40","20:59","22:29"],"19":["04:37","06:32","13:46","17:40","21:00","22:30"],"20":["04:35","06:31","13:46","17:41","21:01","22:31"],"21":["04:34","06:30","13:46","17:41","21:02","22:32"],"22":["04:33","06:30","13:46","17:41","21:03","22:33"],"23":["04:32","06:29","13:46","17:41","21:04","22:34"],"24":["04:31","06:28","13:46","17:42","21:05","22:35"],"25":["04:29","06:28","13:46","17:42","21:05","22:35"],"26":["04:28","06:27","13:46","17:42","21:06","22:36"],"27":["04:27","06:26","13:47","17:42","21:07","22:37"],"28":["04:26","06:26","13:47","17:43","21:08","22:38"],"29":["04:25","06:25","13:47","17:43","21:09","22:39"],"30":["04:24","06:25","13:47","17:43","21:09","22:39"],"31":["04:23","06:24","13:47","17:44","21:10","22:40"]},
    {"1":["04:23","06:24","13:47","17:44","21:11","22:41"],"2":["04:22","06:24","13:47","17:44","21:11","22:41"],"3":["04:21","06:23","13:48","17:44","21:12","22:42"],"4":["04:20","06:23","13:48","17:45","21:13","22:43"],"5":["04:20","06:23","13:48","17:45","21:13","22:43"],"6":["04:19","06:22","13:48","17:45","21:14","22:44"],"7":["04:18","06:22","13:48","17:45","21:15","22:45"],"8":["04:18","06:22","13:48","17:46","21:15","22:45"],"9":["04:17","06:22","13:49","17:46","21:16","22:46"],"10":["04:17","06:22","13:49","17:46","21:16","22:46"],"11":["04:17","06:21","13:49","17:46","21:17","22:47"],"12":["04:16","06:21","13:49","17:47","21:17","22:47"],"13":["04:16","06:21","13:49","17:47","21:18","22:48"],"14":["04:16","06:21","13:50","17:47","21:18","22:48"],"15":["04:16","06:21","13:50","17:48","21:19","22:49"],"16":["04:16","06:21","13:50","17:48","21:19","22:49"],"17":["04:16","06:21","13:50","17:48","21:19","22:49"],"18":["04:16","06:22","13:51","17:48","21:20","22:50"],"19":["04:16","06:22","13:51","17:49","21:20","22:50"],"20":["04:16","06:22","13:51","17:49","21:20","22:50"],"21":["04:16","06:22","13:51","17:49","21:20","22:50"],"22":["04:16","06:22","13:51","17:49","21:20","22:50"],"23":["04:16","06:23","13:52","17:49","21:21","22:51"],"24":["04:17","06:23","13:52","17:50","21:21","22:51"],"25":["04:17","06:23","13:52","17:50","21:21","22:51"],"26":["04:18","06:24","13:52","17:50","21:21","22:51"],"27":["04:18","06:24","13:52","17:50","21:21","22:51"],"28":["04:19","06:24","13:53","17:50","21:21","22:51"],"29":["04:19","06:25","13:53","17:51","21:21","22:51"],"30":["04:20","06:25","13:53","17:51","21:21","22:51"]},
    {"1":["04:21","06:26","13:53","17:51","21:21","22:51"],"2":["04:21","06:26","13:53","17:51","21:21","22:51"],"3":["04:22","06:27","13:54","17:51","21:20","22:50"],"4":["04:23","06:27","13:54","17:51","21:20","22:50"],"5":["04:24","06:28","13:54","17:51","21:20","22:50"],"6":["04:25","06:28","13:54","17:52","21:20","22:50"],"7":["04:26","06:29","13:54","17:52","21:20","22:50"],"8":["04:27","06:30","13:54","17:52","21:19","22:49"],"9":["04:28","06:30","13:55","17:52","21:19","22:49"],"10":["04:29","06:31","13:55","17:52","21:18","22:48"],"11":["04:30","06:31","13:55","17:52","21:18","22:48"],"12":["04:31","06:32","13:55","17:52","21:18","22:48"],"13":["04:32","06:33","13:55","17:52","21:17","22:47"],"14":["04:33","06:34","13:55","17:52","21:17","22:47"],"15":["04:35","06:34","13:55","17:52","21:16","22:46"],"16":["04:36","06:35","13:55","17:52","21:15","22:45"],"17":["04:37","06:36","13:56","17:52","21:15","22:45"],"18":["04:38","06:37","13:56","17:52","21:14","22:44"],"19":["04:40","06:37","13:56","17:52","21:14","22:44"],"20":["04:41","06:38","13:56","17:52","21:13","22:43"],"21":["04:42","06:39","13:56","17:52","21:12","22:42"],"22":["04:44","06:40","13:56","17:51","21:11","22:41"],"23":["04:45","06:41","13:56","17:51","21:11","22:41"],"24":["04:46","06:42","13:56","17:51","21:10","22:40"],"25":["04:48","06:42","13:56","17:51","21:09","22:39"],"26":["04:49","06:43","13:56","17:51","21:08","22:38"],"27":["04:50","06:44","13:56","17:50","21:07","22:37"],"28":["04:52","06:45","13:56","17:50","21:06","22:36"],"29":["04:53","06:46","13:56","17:50","21:05","22:35"],"30":["04:55","06:47","13:56","17:50","21:04","22:34"],"31":["04:56","06:48","13:56","17:49","21:03","22:33"]},
    {"1":["04:58","06:49","13:56","17:49","21:02","22:32"],"2":["04:59","06:50","13:56","17:49","21:01","22:31"],"3":["05:00","06:51","13:56","17:48","21:00","22:30"],"4":["05:02","06:51","13:55","17:48","20:59","22:29"],"5":["05:03","06:52","13:55","17:48","20:58","22:28"],"6":["05:05","06:53","13:55","17:47","20:57","22:27"],"7":["05:06","06:54","13:55","17:47","20:56","22:26"],"8":["05:08","06:55","13:55","17:46","20:54","22:24"],"9":["05:09","06:56","13:55","17:46","20:53","22:23"],"10":["05:10","06:57","13:55","17:45","20:52","22:22"],"11":["05:12","06:58","13:55","17:45","20:51","22:21"],"12":["05:13","06:59","13:54","17:44","20:49","22:19"],"13":["05:15","07:00","13:54","17:44","20:48","22:18"],"14":["05:16","07:01","13:54","17:43","20:47","22:17"],"15":["05:17","07:02","13:54","17:43","20:45","22:15"],"16":["05:19","07:03","13:54","17:42","20:44","22:14"],"17":["05:20","07:04","13:53","17:42","20:43","22:13"],"18":["05:22","07:04","13:53","17:41","20:41","22:11"],"19":["05:23","07:05","13:53","17:40","20:40","22:10"],"20":["05:24","07:06","13:53","17:40","20:39","22:09"],"21":["05:26","07:07","13:53","17:39","20:37","22:07"],"22":["05:27","07:08","13:52","17:38","20:36","22:06"],"23":["05:28","07:09","13:52","17:37","20:34","22:04"],"24":["05:30","07:10","13:52","17:37","20:33","22:03"],"25":["05:31","07:11","13:51","17:36","20:31","22:01"],"26":["05:32","07:12","13:51","17:35","20:30","22:00"],"27":["05:33","07:13","13:51","17:34","20:28","21:58"],"28":["05:35","07:14","13:51","17:34","20:27","21:57"],"29":["05:36","07:15","13:50","17:33","20:25","21:55"],"30":["05:37","07:16","13:50","17:32","20:24","21:54"],"31":["05:39","07:17","13:50","17:31","20:22","21:52"]},
    {"1":["05:40","07:17","13:49","17:30","20:21","21:51"],"2":["05:41","07:18","13:49","17:29","20:19","21:49"],"3":["05:42","07:19","13:49","17:28","20:17","21:47"],"4":["05:43","07:20","13:48","17:27","20:16","21:46"],"5":["05:45","07:21","13:48","17:27","20:14","21:44"],"6":["05:46","07:22","13:48","17:26","20:13","21:43"],"7":["05:47","07:23","13:47","17:25","20:11","21:41"],"8":["05:48","07:24","13:47","17:24","20:10","21:40"],"9":["05:49","07:25","13:47","17:23","20:08","21:38"],"10":["05:50","07:26","13:46","17:22","20:06","21:36"],"11":["05:52","07:27","13:46","17:21","20:05","21:35"],"12":["05:53","07:28","13:46","17:20","20:03","21:33"],"13":["05:54","07:29","13:45","17:19","20:01","21:31"],"14":["05:55","07:29","13:45","17:18","20:00","21:30"],"15":["05:56","07:30","13:45","17:17","19:58","21:28"],"16":["05:57","07:31","13:44","17:15","19:56","21:26"],"17":["05:58","07:32","13:44","17:14","19:55","21:25"],"18":["05:59","07:33","13:43","17:13","19:53","21:23"],"19":["06:01","07:34","13:43","17:12","19:52","21:22"],"20":["06:02","07:35","13:43","17:11","19:50","21:20"],"21":["06:03","07:36","13:42","17:10","19:48","21:18"],"22":["06:04","07:37","13:42","17:09","19:47","21:17"],"23":["06:05","07:38","13:42","17:08","19:45","21:15"],"24":["06:06","07:39","13:41","17:07","19:43","21:13"],"25":["06:07","07:40","13:41","17:06","19:42","21:12"],"26":["06:08","07:41","13:41","17:04","19:40","21:10"],"27":["06:09","07:42","13:40","17:03","19:38","21:08"],"28":["06:10","07:42","13:40","17:02","19:37","21:07"],"29":["06:11","07:43","13:40","17:01","19:35","21:05"],"30":["06:12","07:44","13:39","17:00","19:34","21:04"]},
    {"1":["06:13","07:45","13:39","16:59","19:32","21:02"],"2":["06:14","07:46","13:39","16:58","19:30","21:00"],"3":["06:15","07:47","13:38","16:56","19:29","20:59"],"4":["06:16","07:48","13:38","16:55","19:27","20:57"],"5":["06:17","07:49","13:38","16:54","19:26","20:56"],"6":["06:18","07:50","13:37","16:53","19:24","20:54"],"7":["06:19","07:51","13:37","16:52","19:23","20:53"],"8":["06:20","07:52","13:37","16:51","19:21","20:51"],"9":["06:21","07:53","13:37","16:50","19:19","20:49"],"10":["06:22","07:54","13:36","16:48","19:18","20:48"],"11":["06:23","07:55","13:36","16:47","19:16","20:46"],"12":["06:24","07:56","13:36","16:46","19:15","20:45"],"13":["06:25","07:57","13:36","16:45","19:13","20:43"],"14":["06:26","07:58","13:35","16:44","19:12","20:42"],"15":["06:27","07:59","13:35","16:43","19:10","20:40"],"16":["06:28","08:00","13:35","16:42","19:09","20:39"],"17":["06:29","08:01","13:35","16:41","19:07","20:37"],"18":["06:30","08:02","13:34","16:39","19:06","20:36"],"19":["06:31","08:03","13:34","16:38","19:05","20:35"],"20":["06:32","08:04","13:34","16:37","19:03","20:33"],"21":["06:33","08:06","13:34","16:36","19:02","20:32"],"22":["06:34","08:07","13:34","16:35","19:00","20:30"],"23":["06:35","08:08","13:34","16:34","18:59","20:29"],"24":["06:36","08:09","13:34","16:33","18:58","20:28"],"25":["05:37","07:10","12:33","15:32","17:56","19:26"],"26":["05:38","07:11","12:33","15:31","17:55","19:25"],"27":["05:39","07:12","12:33","15:30","17:54","19:24"],"28":["05:40","07:13","12:33","15:29","17:53","19:23"],"29":["05:41","07:14","12:33","15:28","17:51","19:21"],"30":["05:42","07:15","12:33","15:27","17:50","19:20"],"31":["05:43","07:16","12:33","15:26","17:49","19:19"]},
    {"1":["05:44","07:18","12:33","15:25","17:48","19:18"],"2":["05:45","07:19","12:33","15:24","17:47","19:17"],"3":["05:46","07:20","12:33","15:23","17:46","19:16"],"4":["05:47","07:21","12:33","15:22","17:44","19:14"],"5":["05:48","07:22","12:33","15:22","17:43","19:13"],"6":["05:49","07:23","12:33","15:21","17:42","19:12"],"7":["05:50","07:24","12:33","15:20","17:41","19:11"],"8":["05:51","07:25","12:33","15:19","17:40","19:10"],"9":["05:52","07:27","12:33","15:18","17:39","19:09"],"10":["05:53","07:28","12:33","15:18","17:38","19:08"],"11":["05:54","07:29","12:33","15:17","17:37","19:07"],"12":["05:55","07:30","12:33","15:16","17:37","19:07"],"13":["05:56","07:31","12:34","15:16","17:36","19:06"],"14":["05:57","07:32","12:34","15:15","17:35","19:05"],"15":["05:58","07:33","12:34","15:14","17:34","19:04"],"16":["05:59","07:34","12:34","15:14","17:33","19:03"],"17":["05:59","07:36","12:34","15:13","17:33","19:03"],"18":["06:00","07:37","12:35","15:12","17:32","19:02"],"19":["06:01","07:38","12:35","15:12","17:31","19:01"],"20":["06:02","07:39","12:35","15:11","17:31","19:01"],"21":["06:03","07:40","12:35","15:11","17:30","19:00"],"22":["06:04","07:41","12:35","15:10","17:29","18:59"],"23":["06:05","07:42","12:36","15:10","17:29","18:59"],"24":["06:06","07:43","12:36","15:10","17:28","18:58"],"25":["06:07","07:44","12:36","15:09","17:28","18:58"],"26":["06:08","07:45","12:37","15:09","17:27","18:57"],"27":["06:09","07:46","12:37","15:09","17:27","18:57"],"28":["06:10","07:48","12:37","15:08","17:27","18:57"],"29":["06:11","07:49","12:38","15:08","17:26","18:56"],"30":["06:11","07:50","12:38","15:08","17:26","18:56"]},
    {"1":["06:12","07:51","12:38","15:08","17:26","18:56"],"2":["06:13","07:52","12:39","15:08","17:26","18:56"],"3":["06:14","07:53","12:39","15:08","17:25","18:55"],"4":["06:15","07:53","12:40","15:07","17:25","18:55"],"5":["06:16","07:54","12:40","15:07","17:25","18:55"],"6":["06:16","07:55","12:40","15:07","17:25","18:55"],"7":["06:17","07:56","12:41","15:07","17:25","18:55"],"8":["06:18","07:57","12:41","15:07","17:25","18:55"],"9":["06:19","07:58","12:42","15:08","17:25","18:55"],"10":["06:20","07:59","12:42","15:08","17:25","18:55"],"11":["06:20","08:00","12:43","15:08","17:25","18:55"],"12":["06:21","08:00","12:43","15:08","17:26","18:56"],"13":["06:22","08:01","12:44","15:08","17:26","18:56"],"14":["06:22","08:02","12:44","15:08","17:26","18:56"],"15":["06:23","08:03","12:44","15:09","17:26","18:56"],"16":["06:24","08:03","12:45","15:09","17:27","18:57"],"17":["06:24","08:04","12:45","15:09","17:27","18:57"],"18":["06:25","08:05","12:46","15:10","17:27","18:57"],"19":["06:25","08:05","12:46","15:10","17:28","18:58"],"20":["06:26","08:06","12:47","15:10","17:28","18:58"],"21":["06:27","08:06","12:47","15:11","17:29","18:59"],"22":["06:27","08:07","12:48","15:11","17:29","18:59"],"23":["06:27","08:07","12:48","15:12","17:30","19:00"],"24":["06:28","08:08","12:49","15:12","17:30","19:00"],"25":["06:28","08:08","12:49","15:13","17:31","19:01"],"26":["06:29","08:08","12:50","15:14","17:31","19:01"],"27":["06:29","08:09","12:50","15:14","17:32","19:02"],"28":["06:29","08:09","12:51","15:15","17:33","19:03"],"29":["06:30","08:09","12:51","15:15","17:34","19:04"],"30":["06:30","08:10","12:52","15:16","17:34","19:04"],"31":["06:30","08:10","12:52","15:17","17:35","19:05"]}
];
// Prayer names mapped to calendar indices: [0]=Fajr, [1]=Shuruq, [2]=Dhuhr, [3]=Asr, [4]=Maghrib, [5]=Isha
const PRAYER_CALENDAR_MAP = { Fajr: 0, Dhuhr: 2, Asr: 3, Maghrib: 4, Isha: 5 };

/**
 * Gets today's prayer times from the embedded Mawaqit calendar.
 * Returns { Fajr, Dhuhr, Asr, Maghrib, Isha } with HH:MM strings.
 */
function getMawaqitTimesForToday() {
    const now = new Date();
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();    // 1-indexed
    const monthData = MAWAQIT_CALENDAR[month];
    if (!monthData || !monthData[day]) return null;
    const dayTimes = monthData[day];
    return {
        Fajr: dayTimes[0],
        Dhuhr: dayTimes[2],
        Asr: dayTimes[3],
        Maghrib: dayTimes[4],
        Isha: dayTimes[5]
    };
}

/**
 * Updates the prayer card UI with new times.
 */
function applyPrayerTimes(times) {
    if (!times) return;
    Object.entries(times).forEach(([name, time]) => {
        const col = document.querySelector(`.prayer-col[data-prayer="${name}"]`);
        if (col) {
            col.dataset.time = time;
            const timeEl = col.querySelector('.time-el');
            if (timeEl) timeEl.innerText = time;
        }
    });
    initializePrayersArray();
}

// Dynamic Prayer Times Logic
let prayers = [];
function initializePrayersArray() {
    prayers = Array.from(document.querySelectorAll('.prayer-col')).map(col => {
        const timeParts = col.dataset.time.split(':');
        return {
            element: col,
            name: col.dataset.prayer,
            timeStr: col.dataset.time,
            hours: parseInt(timeParts[0], 10),
            minutes: parseInt(timeParts[1], 10)
        };
    });
}

const countdownEl = document.getElementById('countdown');
const nextPrayerNameEl = document.getElementById('next-prayer-name');
const nextPrayerTimeValEl = document.getElementById('next-prayer-time-val');

function updatePrayers() {
    if (prayers.length === 0) return;
    const now = new Date();
    const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();
    const currentTotalSeconds = currentTotalMinutes * 60 + now.getSeconds();

    let nextPrayer = prayers[0];
    let currentPrayer = prayers[prayers.length - 1];
    let nextPrayerTotalSeconds = prayers[0].hours * 3600 + prayers[0].minutes * 60 + (24 * 3600);

    for (let i = 0; i < prayers.length; i++) {
        const prayer = prayers[i];
        const prayerTotalSeconds = prayer.hours * 3600 + prayer.minutes * 60;
        if (prayerTotalSeconds > currentTotalSeconds) {
            nextPrayer = prayer;
            nextPrayerTotalSeconds = prayerTotalSeconds;
            currentPrayer = i > 0 ? prayers[i - 1] : prayers[prayers.length - 1];
            break;
        }
    }

    if (nextPrayerNameEl) nextPrayerNameEl.innerText = nextPrayer.name;
    if (nextPrayerTimeValEl) nextPrayerTimeValEl.innerText = nextPrayer.timeStr;

    prayers.forEach(prayer => {
        const isCurrent = prayer === currentPrayer;
        const col = prayer.element;
        const iconEl = col.querySelector('.icon-el');
        const nameEl = col.querySelector('.name-el');
        const timeEl = col.querySelector('.time-el');
        const indicatorEl = col.querySelector('.current-indicator');

        if (isCurrent) {
            // Active card: solid green, prominent cartulina style
            col.className = 'prayer-col flex-shrink-0 w-[45vw] max-w-[160px] md:max-w-none md:w-auto snap-center rounded-2xl flex flex-col items-center justify-center p-5 md:p-7 relative md:min-h-[220px] transition-all duration-300 bg-[#2C5F44] text-white border-2 border-[#2C5F44] shadow-[0_10px_20px_rgba(44,95,68,0.4)] scale-[1.02] md:scale-100 md:-translate-y-2 z-10';
            
            // Auto-scroll to current prayer on mobile
            if (col.dataset.scrolled !== 'true' && window.innerWidth < 768) {
                const scrollContainer = document.getElementById('prayer-grid-scroll');
                if (scrollContainer) {
                    prayers.forEach(p => p.element.dataset.scrolled = 'false');
                    col.dataset.scrolled = 'true';
                    setTimeout(() => {
                        const scrollLeft = col.offsetLeft - (scrollContainer.clientWidth / 2) + (col.clientWidth / 2);
                        scrollContainer.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                    }, 100);
                }
            }

            iconEl.className = 'material-symbols-outlined mb-3 text-4xl md:text-5xl icon-el text-white';
            iconEl.style.fontVariationSettings = '"FILL" 1';
            nameEl.className = "font-['Outfit'] text-base md:text-lg font-bold uppercase tracking-wide mb-2 name-el text-white";
            timeEl.className = "font-['Outfit'] text-2xl md:text-3xl font-black time-el text-white";
            if (indicatorEl) {
                indicatorEl.classList.remove('hidden', 'bg-tertiary', 'text-white', '-top-3');
                indicatorEl.classList.add('bg-[#fbca1f]', 'text-black', '-top-4', 'border', 'border-black/10');
            }
            // Show progress bar
            const progressWrap = col.querySelector('.prayer-progress');
            if (progressWrap) {
                progressWrap.classList.remove('hidden');
                // Calculate progress since this prayer started
                const prevIdx = prayers.indexOf(currentPrayer);
                const nextIdx = prayers.indexOf(nextPrayer);
                const currentStart = currentPrayer.hours * 3600 + currentPrayer.minutes * 60;
                const nextEnd = nextPrayerTotalSeconds;
                const duration = nextEnd - currentStart;
                const elapsed = currentTotalSeconds - currentStart;
                const pct = duration > 0 ? Math.min(100, Math.max(0, (elapsed / duration) * 100)) : 0;
                const bar = progressWrap.querySelector('.prayer-progress-bar');
                if (bar) bar.style.width = pct + '%';
            }
        } else {
            col.className = 'prayer-col flex-shrink-0 w-[45vw] max-w-[160px] md:max-w-none md:w-auto snap-center rounded-2xl flex flex-col items-center justify-center p-5 md:p-7 relative md:min-h-[220px] transition-all duration-300 bg-white border border-black/10 shadow-[4px_4px_15px_rgba(0,0,0,0.03)] opacity-90 hover:opacity-100 hover:shadow-md hover:-translate-y-1 cursor-pointer';
            iconEl.className = 'material-symbols-outlined mb-3 text-4xl md:text-5xl icon-el text-primary/70';
            iconEl.style.fontVariationSettings = 'normal';
            nameEl.className = "font-['Outfit'] text-base md:text-lg font-bold uppercase tracking-wide text-on-surface mb-2 name-el";
            timeEl.className = "font-['Outfit'] text-2xl md:text-3xl font-black text-on-surface time-el";
            if (indicatorEl) indicatorEl.classList.add('hidden');
            const progressWrap = col.querySelector('.prayer-progress');
            if (progressWrap) progressWrap.classList.add('hidden');
        }
    });

    const hEl = document.getElementById('countdown-h');
    const mEl = document.getElementById('countdown-m');
    const sEl = document.getElementById('countdown-s');

    if (hEl && mEl && sEl) {
        let diffSeconds = nextPrayerTotalSeconds - currentTotalSeconds;
        if (diffSeconds < 0) diffSeconds = 0;
        hEl.innerText = Math.floor(diffSeconds / 3600).toString().padStart(2, '0');
        mEl.innerText = Math.floor((diffSeconds % 3600) / 60).toString().padStart(2, '0');
        sEl.innerText = (diffSeconds % 60).toString().padStart(2, '0');
    }

    if (!window.initialPrayerScrollDone && currentPrayer && currentPrayer.element) {
        const container = document.getElementById('prayers-container');
        if (container) {
            setTimeout(() => {
                const scrollPos = currentPrayer.element.offsetLeft - (container.clientWidth / 2) + (currentPrayer.element.clientWidth / 2);
                container.scrollTo({ left: scrollPos, behavior: 'smooth' });
            }, 500);
        }
        window.initialPrayerScrollDone = true;
    }
}

// Fetch site config from Supabase (phone, email only — prayer times from Mawaqit)
async function fetchSupabaseConfig() {
    if (!supabaseClient) return;
    try {
        const { data: configs, error: configErr } = await supabaseClient
            .from('site_config')
            .select('key, value');
        if (!configErr && configs) {
            configs.forEach(c => {
                if (c.key === 'phone_number') {
                    const phoneEl = document.getElementById('phone-number');
                    if (phoneEl) phoneEl.innerText = c.value;
                }
                if (c.key === 'contact_email') {
                    siteContactEmail = c.value;
                    const emailEl = document.getElementById('contact-email-display');
                    if (emailEl) emailEl.innerText = c.value;
                }
            });
        }
    } catch (e) {
        console.error("Error fetching Supabase config:", e);
    }
}

// Initialize: Apply Mawaqit calendar times for today, then start countdown
window.initialPrayerScrollDone = false;
const todayMawaqitTimes = getMawaqitTimesForToday();
if (todayMawaqitTimes) applyPrayerTimes(todayMawaqitTimes);
initializePrayersArray();
updatePrayers();
setInterval(updatePrayers, 1000);
setTimeout(fetchSupabaseConfig, 500);

// Set today's date label
const dateLabel = document.getElementById('today-date-label');
if (dateLabel) {
    const now = new Date();
    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateLabel.textContent = now.toLocaleDateString('es-ES', opts).replace(/^(.)/, c => c.toUpperCase());
}

// Imam Contact Form Logic
const imamForm = document.getElementById('imam-form');
const imamFormSuccess = document.getElementById('imam-form-success');
const imamFormReset = document.getElementById('imam-form-reset');
const submitBtn = document.getElementById('imam-form-submit');

if (imamForm) {
    imamForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create mailto link
        const mailtoUrl = `mailto:${siteContactEmail}?subject=Consulta: ${encodeURIComponent(subject)}&body=${encodeURIComponent("Nombre: " + name + "\nEmail: " + email + "\n\nMensaje:\n" + message)}`;

        // Simulate loading state
        const submitText = submitBtn.querySelector('.submit-text');
        const submitIcon = submitBtn.querySelector('.submit-icon');
        const originalText = submitText.innerText;
        const originalIcon = submitIcon.innerText;

        submitBtn.disabled = true;
        submitText.innerText = 'Abriendo Correo...';
        submitIcon.innerText = 'hourglass_empty';
        submitIcon.classList.add('animate-spin');

        // Trigger mailto
        window.location.href = mailtoUrl;

        setTimeout(() => {
            imamForm.classList.add('opacity-0', 'pointer-events-none');
            setTimeout(() => {
                imamFormSuccess.classList.remove('hidden');
                // Reset button state
                submitBtn.disabled = false;
                submitText.innerText = originalText;
                submitIcon.innerText = originalIcon;
                submitIcon.classList.remove('animate-spin');
                imamForm.reset();
            }, 300);
        }, 1200);
    });

    imamFormReset.addEventListener('click', () => {
        imamFormSuccess.classList.add('hidden');
        imamForm.classList.remove('opacity-0', 'pointer-events-none');
    });
}

// --- Modal Logic ---
const donationBtns = document.querySelectorAll('.donation-btn');
const donationModal = document.getElementById('donation-modal');
const closeDonationBtn = document.getElementById('close-donation-modal');

donationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        donationModal.showModal();
    });
});

closeDonationBtn.addEventListener('click', () => {
    donationModal.close();
});

// --- Legal Modals Logic ---
const legalTexts = {
    'aviso-legal': {
        title: 'Aviso Legal',
        content: `
            <p><strong>1. Datos identificativos</strong><br>En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, se reflejan los siguientes datos: la asociación titular de dominio web es Mezquita Arrahma, con domicilio a estos efectos en Carrer Hort de Torrella, 11C, 07005 Palma, Illes Balears. Correo electrónico de contacto: info@arrahma.es.</p>
            <p><strong>2. Usuarios</strong><br>El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.</p>
            <p><strong>3. Uso del portal</strong><br>Arrahma proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes a la mezquita o a sus licenciantes a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.</p>
            <p><strong>4. Propiedad intelectual e industrial</strong><br>Arrahma por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma.</p>
        `
    },
    'privacidad': {
        title: 'Política de Privacidad',
        content: `
            <p><strong>1. Tratamiento de datos</strong><br>Mezquita Arrahma se compromete a proteger y respetar tu privacidad. Esta política establece las bases sobre las que procesaremos cualquier dato personal que nos proporciones o que recopilemos de ti.</p>
            <p><strong>2. Finalidad</strong><br>Los datos personales que se recopilen a través de formularios (como el de "Consulta al Imán") se utilizarán exclusivamente para gestionar tus consultas, proporcionarte información relevante y organizar las actividades de la comunidad.</p>
            <p><strong>3. Conservación</strong><br>Los datos proporcionados se conservarán mientras se mantenga la relación con el usuario o durante los años necesarios para cumplir con las obligaciones legales.</p>
            <p><strong>4. Derechos</strong><br>Tienes derecho a obtener confirmación sobre si en Arrahma estamos tratando tus datos personales, por tanto tienes derecho a acceder a tus datos personales, rectificar los datos inexactos o solicitar su supresión cuando los datos ya no sean necesarios para los fines que fueron recogidos.</p>
        `
    },
    'cookies': {
        title: 'Política de Cookies',
        content: `
            <p><strong>¿Qué son las cookies?</strong><br>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
            <p><strong>¿Qué tipos de cookies utiliza esta página web?</strong><br>- <strong>Cookies cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web y la utilización de las diferentes opciones o servicios que en ella existan.<br>- <strong>Cookies de análisis:</strong> Son aquellas que permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</p>
            <p><strong>Revocación y eliminación de cookies</strong><br>Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en tu ordenador.</p>
        `
    }
};

const textModal = document.getElementById('text-modal');
const textModalTitle = document.getElementById('text-modal-title');
const textModalContent = document.getElementById('text-modal-content');
const closeTextModal = document.getElementById('close-text-modal');

function openTextModal(type) {
    const data = legalTexts[type];
    if (data) {
        textModalTitle.innerText = data.title;
        textModalContent.innerHTML = data.content;
        textModal.showModal();
    }
}

closeTextModal.addEventListener('click', () => {
    textModal.close();
});

// Event Listeners for links
document.getElementById('link-aviso')?.addEventListener('click', (e) => { e.preventDefault(); openTextModal('aviso-legal'); });
document.getElementById('link-privacidad')?.addEventListener('click', (e) => { e.preventDefault(); openTextModal('privacidad'); });
document.getElementById('link-cookies-footer')?.addEventListener('click', (e) => { e.preventDefault(); openTextModal('cookies'); });
document.getElementById('open-cookies-policy')?.addEventListener('click', (e) => { e.preventDefault(); openTextModal('cookies'); });
document.getElementById('cookie-more-options')?.addEventListener('click', (e) => { e.preventDefault(); openTextModal('cookies'); });

// --- Cookie Banner Logic ---

const cookieBanner = document.getElementById('cookie-banner');
const acceptCookiesBtn = document.getElementById('accept-cookies');

if (!localStorage.getItem('cookiesAccepted')) {
    // Wait for loading animation (800ms) + small buffer
    setTimeout(() => {
        cookieBanner.classList.remove('translate-y-[150%]');
    }, 1500);
}

acceptCookiesBtn.addEventListener('click', async () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.add('translate-y-[150%]');

    // Guardar el registro en la base de datos de Supabase si está configurada
    if (supabaseClient) {
        try {
            // Reemplaza 'cookie_consents' por el nombre real de tu tabla si es diferente
            await supabaseClient.from('cookie_consents').insert([
                {
                    consent_given: true,
                    user_agent: navigator.userAgent,
                    timestamp: new Date().toISOString()
                }
            ]);
        } catch (e) {
            console.error('Error saving consent to Supabase:', e);
        }
    }
});

// WhatsApp Logic
const waBtn = document.getElementById('whatsapp-btn');
const waModal = document.getElementById('whatsapp-modal');
const closeWaModal = document.getElementById('close-whatsapp-modal');
const waOptions = document.querySelectorAll('.wa-option-btn');
const horariosSection = document.getElementById('horarios');

if (waBtn && horariosSection) {
    window.addEventListener('scroll', () => {
        if (window.scrollY >= horariosSection.offsetTop - window.innerHeight / 2) {
            waBtn.style.opacity = '1';
            waBtn.style.pointerEvents = 'auto';
        } else {
            waBtn.style.opacity = '0';
            waBtn.style.pointerEvents = 'none';
        }
    });

    waBtn.addEventListener('click', () => {
        waModal.showModal();
    });

    closeWaModal.addEventListener('click', () => {
        waModal.close();
    });

    waOptions.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const subject = e.currentTarget.dataset.subject;
            const message = `As-salamu alaykum. Me gustaría hacer una consulta sobre: ${subject}.`;
            const waUrl = `https://wa.me/34685155320?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
            waModal.close();
        });
    });
}

// Close dialogs when clicking outside
const dialogs = [donationModal, textModal, waModal];
dialogs.forEach(dialog => {
    if (!dialog) return;
    dialog.addEventListener('click', (e) => {
        const dialogDimensions = dialog.getBoundingClientRect()
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            dialog.close();
        }
    });
});

// Hero Video Auto-scroll Logic
const heroVideo = document.getElementById('hero-video');
if (heroVideo) {
    heroVideo.playbackRate = 1.25; // Play video 25% faster
    let hasAutoScrolled = false;
    heroVideo.addEventListener('timeupdate', () => {
        if (!hasAutoScrolled && heroVideo.currentTime >= heroVideo.duration - 0.5) {
            hasAutoScrolled = true;
            const nextSection = document.getElementById('hero-step-2');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
}

// --- FRIDAY SPECIAL SURA LOGIC ---
try {
    const kahfCard = document.getElementById('sura-kahf-card');
    const kahfBadge = document.getElementById('kahf-badge');
    const kahfIconContainer = document.getElementById('kahf-icon-container');
    const kahfTitle = document.getElementById('kahf-title');
    const kahfSubtitle = document.getElementById('kahf-subtitle');

    if (kahfCard && kahfBadge) {
        const today = new Date().getDay(); // 5 is Friday
        if (today === 5) {
            // Activate Friday styling
            kahfBadge.classList.remove('hidden');
            
            // Change card border/background
            kahfCard.classList.remove('border-primary/10', 'hover:border-primary/40', 'bg-white/50');
            kahfCard.classList.add('border-[#fbca1f]', 'border-2', 'bg-[#fbca1f]/5');
            
            // Update text colors to match the special theme
            kahfTitle.classList.add('text-[#2C5F44]');
            kahfSubtitle.innerHTML = 'Especial Viernes';
            kahfSubtitle.classList.add('text-[#fbca1f]');
            
            // Change icon container
            kahfIconContainer.classList.remove('bg-[#2C5F44]/10', 'text-[#2C5F44]');
            kahfIconContainer.classList.add('bg-[#fbca1f]', 'text-black', 'shadow-md');
            kahfIconContainer.innerHTML = '<span class="material-symbols-outlined text-[20px]">star</span>';
        }
    }
} catch (e) {
    console.error('Error in Friday special logic:', e);
}

// --- QURAN SURAS FILTER LOGIC ---
function initQuranFilters() {
    const filterButtons = document.querySelectorAll('.sura-filter-btn');
    const suraCards = document.querySelectorAll('.sura-card');
    const viewMoreContainer = document.getElementById('view-more-suras-container');
    const viewMoreBtn = document.getElementById('view-more-suras-btn');

    if (!suraCards.length) return;

    let showAll = false;
    let currentFilter = 'all';

    const updateVisibility = () => {
        let visibleCount = 0;
        let totalMatches = 0;

        suraCards.forEach(card => {
            const cardCategories = card.getAttribute('data-categories').split(',');
            const matchesFilter = (currentFilter === 'all' || cardCategories.includes(currentFilter));

            if (matchesFilter) {
                totalMatches++;
                // Limit to 3 if showAll is false, regardless of the filter
                if (!showAll) {
                    if (visibleCount < 3) {
                        card.classList.remove('hiding');
                        card.style.setProperty('display', '', 'important');
                        // Restart CSS animation
                        card.style.animation = 'none';
                        card.offsetHeight; /* trigger reflow */
                        card.style.animation = null;
                        visibleCount++;
                    } else {
                        card.classList.add('hiding');
                        card.style.setProperty('display', 'none', 'important');
                    }
                } else {
                    card.classList.remove('hiding');
                    card.style.setProperty('display', '', 'important');
                    // Restart CSS animation
                    card.style.animation = 'none';
                    card.offsetHeight; /* trigger reflow */
                    card.style.animation = null;
                    visibleCount++;
                }
            } else {
                card.classList.add('hiding');
                card.style.setProperty('display', 'none', 'important');
            }
        });

        // Toggle "View More" button visibility
        if (viewMoreContainer && viewMoreBtn) {
            if (totalMatches > 3) {
                viewMoreContainer.style.setProperty('display', 'flex', 'important');
                const btnSpan = viewMoreBtn.querySelector('[data-i18n]');
                const btnIcon = viewMoreBtn.querySelector('.material-symbols-outlined');
                
                if (showAll) {
                    if (btnSpan) btnSpan.setAttribute('data-i18n', 'quran.view_less');
                    if (btnIcon) btnIcon.textContent = 'expand_less';
                } else {
                    if (btnSpan) btnSpan.setAttribute('data-i18n', 'quran.view_more');
                    if (btnIcon) btnIcon.textContent = 'expand_more';
                }

                // Force translation trigger
                if (typeof setLanguage === 'function') {
                    const currentHtmlLang = document.documentElement.lang || 'es';
                    setLanguage(currentHtmlLang);
                }
            } else {
                viewMoreContainer.style.setProperty('display', 'none', 'important');
            }
        }
    };

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            // Remove previous listener to avoid duplicates
            button.replaceWith(button.cloneNode(true));
        });

        // Re-select buttons after cloning
        const newFilterButtons = document.querySelectorAll('.sura-filter-btn');
        newFilterButtons.forEach(button => {
            button.addEventListener('click', () => {
                newFilterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                currentFilter = button.getAttribute('data-filter');
                showAll = false;
                updateVisibility();
            });
        });
    }

    if (viewMoreBtn) {
        // Remove previous listener to avoid duplicates
        viewMoreBtn.replaceWith(viewMoreBtn.cloneNode(true));
        const newViewMoreBtn = document.getElementById('view-more-suras-btn');
        newViewMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showAll = !showAll;
            updateVisibility();
        });
    }

    // Initial run
    updateVisibility();
}

// Run immediately and also on DOMContentLoaded
initQuranFilters();
document.addEventListener('DOMContentLoaded', initQuranFilters);


