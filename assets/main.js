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
    {"1": ["06:33", "08:10", "12:53", "15:18", "17:36", "19:07"], "2": ["06:34", "08:10", "12:53", "15:19", "17:37", "19:08"], "3": ["06:34", "08:10", "12:54", "15:19", "17:38", "19:09"], "4": ["06:34", "08:10", "12:54", "15:20", "17:39", "19:10"], "5": ["06:34", "08:10", "12:55", "15:21", "17:40", "19:10"], "6": ["06:34", "08:10", "12:55", "15:22", "17:40", "19:11"], "7": ["06:34", "08:10", "12:56", "15:23", "17:41", "19:12"], "8": ["06:34", "08:10", "12:56", "15:24", "17:42", "19:13"], "9": ["06:34", "08:10", "12:56", "15:24", "17:43", "19:14"], "10": ["06:34", "08:10", "12:57", "15:25", "17:44", "19:15"], "11": ["06:34", "08:09", "12:57", "15:26", "17:45", "19:16"], "12": ["06:34", "08:09", "12:58", "15:27", "17:46", "19:16"], "13": ["06:34", "08:09", "12:58", "15:28", "17:47", "19:17"], "14": ["06:33", "08:09", "12:58", "15:29", "17:49", "19:18"], "15": ["06:33", "08:08", "12:59", "15:30", "17:50", "19:19"], "16": ["06:33", "08:08", "12:59", "15:31", "17:51", "19:20"], "17": ["06:33", "08:07", "12:59", "15:32", "17:52", "19:21"], "18": ["06:32", "08:07", "13:00", "15:33", "17:53", "19:22"], "19": ["06:32", "08:06", "13:00", "15:34", "17:54", "19:23"], "20": ["06:32", "08:06", "13:00", "15:35", "17:55", "19:24"], "21": ["06:31", "08:05", "13:01", "15:36", "17:56", "19:25"], "22": ["06:31", "08:05", "13:01", "15:37", "17:57", "19:26"], "23": ["06:30", "08:04", "13:01", "15:38", "17:59", "19:27"], "24": ["06:30", "08:03", "13:01", "15:39", "18:00", "19:28"], "25": ["06:29", "08:03", "13:02", "15:40", "18:01", "19:29"], "26": ["06:29", "08:02", "13:02", "15:41", "18:02", "19:30"], "27": ["06:28", "08:01", "13:02", "15:42", "18:03", "19:31"], "28": ["06:28", "08:01", "13:02", "15:43", "18:05", "19:32"], "29": ["06:27", "08:00", "13:02", "15:44", "18:06", "19:33"], "30": ["06:26", "07:59", "13:03", "15:45", "18:07", "19:34"], "31": ["06:26", "07:58", "13:03", "15:46", "18:08", "19:35"]},
    {"1": ["06:25", "07:57", "13:03", "15:47", "18:09", "19:36"], "2": ["06:24", "07:56", "13:03", "15:48", "18:10", "19:37"], "3": ["06:23", "07:55", "13:03", "15:49", "18:12", "19:38"], "4": ["06:22", "07:54", "13:03", "15:50", "18:13", "19:39"], "5": ["06:22", "07:53", "13:03", "15:51", "18:14", "19:40"], "6": ["06:21", "07:52", "13:03", "15:51", "18:15", "19:41"], "7": ["06:20", "07:51", "13:03", "15:52", "18:16", "19:42"], "8": ["06:19", "07:50", "13:03", "15:53", "18:18", "19:44"], "9": ["06:18", "07:49", "13:04", "15:54", "18:19", "19:45"], "10": ["06:17", "07:48", "13:04", "15:55", "18:20", "19:46"], "11": ["06:16", "07:47", "13:04", "15:56", "18:21", "19:47"], "12": ["06:15", "07:45", "13:04", "15:57", "18:22", "19:48"], "13": ["06:14", "07:44", "13:04", "15:58", "18:23", "19:49"], "14": ["06:13", "07:43", "13:03", "15:59", "18:25", "19:50"], "15": ["06:11", "07:42", "13:03", "16:00", "18:26", "19:51"], "16": ["06:10", "07:41", "13:03", "16:01", "18:27", "19:52"], "17": ["06:09", "07:39", "13:03", "16:01", "18:28", "19:53"], "18": ["06:08", "07:38", "13:03", "16:02", "18:29", "19:54"], "19": ["06:07", "07:37", "13:03", "16:03", "18:30", "19:55"], "20": ["06:05", "07:35", "13:03", "16:04", "18:31", "19:56"], "21": ["06:04", "07:34", "13:03", "16:05", "18:33", "19:57"], "22": ["06:03", "07:33", "13:03", "16:06", "18:34", "19:58"], "23": ["06:02", "07:31", "13:03", "16:06", "18:35", "19:59"], "24": ["06:00", "07:30", "13:03", "16:07", "18:36", "20:00"], "25": ["05:59", "07:28", "13:02", "16:08", "18:37", "20:01"], "26": ["05:57", "07:27", "13:02", "16:09", "18:38", "20:02"], "27": ["05:56", "07:25", "13:02", "16:09", "18:39", "20:03"], "28": ["05:55", "07:24", "13:02", "16:10", "18:40", "20:05"], "29": ["05:53", "07:23", "13:02", "16:11", "18:41", "20:06"]},
    {"1": ["05:53", "07:23", "13:02", "16:11", "18:41", "20:06"], "2": ["05:52", "07:21", "13:01", "16:12", "18:42", "20:07"], "3": ["05:50", "07:20", "13:01", "16:12", "18:44", "20:08"], "4": ["05:49", "07:18", "13:01", "16:13", "18:45", "20:09"], "5": ["05:47", "07:17", "13:01", "16:14", "18:46", "20:10"], "6": ["05:46", "07:15", "13:01", "16:14", "18:47", "20:11"], "7": ["05:44", "07:14", "13:00", "16:15", "18:48", "20:12"], "8": ["05:43", "07:12", "13:00", "16:15", "18:49", "20:13"], "9": ["05:41", "07:10", "13:00", "16:16", "18:50", "20:14"], "10": ["05:40", "07:09", "13:00", "16:17", "18:51", "20:15"], "11": ["05:38", "07:07", "12:59", "16:17", "18:52", "20:16"], "12": ["05:36", "07:06", "12:59", "16:18", "18:53", "20:17"], "13": ["05:35", "07:04", "12:59", "16:18", "18:54", "20:18"], "14": ["05:33", "07:03", "12:59", "16:19", "18:55", "20:19"], "15": ["05:31", "07:01", "12:58", "16:20", "18:56", "20:21"], "16": ["05:30", "06:59", "12:58", "16:20", "18:57", "20:22"], "17": ["05:28", "06:58", "12:58", "16:21", "18:58", "20:23"], "18": ["05:26", "06:56", "12:57", "16:21", "18:59", "20:24"], "19": ["05:25", "06:55", "12:57", "16:22", "19:00", "20:25"], "20": ["05:23", "06:53", "12:57", "16:22", "19:01", "20:26"], "21": ["05:21", "06:51", "12:57", "16:23", "19:02", "20:27"], "22": ["05:19", "06:50", "12:56", "16:23", "19:03", "20:28"], "23": ["05:18", "06:48", "12:56", "16:24", "19:04", "20:29"], "24": ["05:16", "06:47", "12:56", "16:24", "19:05", "20:31"], "25": ["05:14", "06:45", "12:55", "16:24", "19:06", "20:32"], "26": ["05:12", "06:43", "12:55", "16:25", "19:07", "20:33"], "27": ["05:11", "06:42", "12:55", "16:25", "19:08", "20:34"], "28": ["05:09", "06:40", "12:54", "16:26", "19:09", "20:35"], "29": ["06:07", "07:39", "13:54", "17:26", "20:10", "21:36"], "30": ["06:05", "07:37", "13:54", "17:26", "20:11", "21:38"], "31": ["06:04", "07:35", "13:54", "17:27", "20:12", "21:39"]},
    {"1": ["06:02", "07:34", "13:53", "17:27", "20:13", "21:40"], "2": ["06:00", "07:32", "13:53", "17:28", "20:14", "21:41"], "3": ["05:58", "07:31", "13:53", "17:28", "20:15", "21:42"], "4": ["05:56", "07:29", "13:52", "17:28", "20:16", "21:44"], "5": ["05:54", "07:28", "13:52", "17:29", "20:17", "21:45"], "6": ["05:53", "07:26", "13:52", "17:29", "20:18", "21:46"], "7": ["05:51", "07:24", "13:51", "17:29", "20:19", "21:47"], "8": ["05:49", "07:23", "13:51", "17:30", "20:20", "21:48"], "9": ["05:47", "07:21", "13:51", "17:30", "20:21", "21:50"], "10": ["05:45", "07:20", "13:51", "17:30", "20:22", "21:51"], "11": ["05:44", "07:18", "13:50", "17:31", "20:23", "21:52"], "12": ["05:42", "07:17", "13:50", "17:31", "20:24", "21:54"], "13": ["05:40", "07:15", "13:50", "17:31", "20:25", "21:55"], "14": ["05:38", "07:14", "13:50", "17:32", "20:26", "21:56"], "15": ["05:36", "07:12", "13:49", "17:32", "20:27", "21:57"], "16": ["05:34", "07:11", "13:49", "17:32", "20:28", "21:59"], "17": ["05:33", "07:09", "13:49", "17:32", "20:29", "22:00"], "18": ["05:31", "07:08", "13:49", "17:33", "20:30", "22:01"], "19": ["05:29", "07:06", "13:48", "17:33", "20:31", "22:03"], "20": ["05:27", "07:05", "13:48", "17:33", "20:32", "22:04"], "21": ["05:25", "07:04", "13:48", "17:33", "20:33", "22:05"], "22": ["05:24", "07:02", "13:48", "17:34", "20:34", "22:07"], "23": ["05:22", "07:01", "13:48", "17:34", "20:35", "22:08"], "24": ["05:20", "06:59", "13:48", "17:34", "20:36", "22:09"], "25": ["05:18", "06:58", "13:47", "17:35", "20:37", "22:11"], "26": ["05:17", "06:57", "13:47", "17:35", "20:38", "22:12"], "27": ["05:15", "06:55", "13:47", "17:35", "20:39", "22:14"], "28": ["05:13", "06:54", "13:47", "17:35", "20:40", "22:15"], "29": ["05:11", "06:53", "13:47", "17:36", "20:41", "22:16"], "30": ["05:10", "06:52", "13:47", "17:36", "20:42", "22:18"]},
    {"1": ["05:08", "06:50", "13:46", "17:36", "20:43", "22:19"], "2": ["05:06", "06:49", "13:46", "17:36", "20:44", "22:21"], "3": ["05:05", "06:48", "13:46", "17:37", "20:45", "22:22"], "4": ["05:03", "06:47", "13:46", "17:37", "20:46", "22:23"], "5": ["05:01", "06:46", "13:46", "17:37", "20:47", "22:25"], "6": ["05:00", "06:44", "13:46", "17:37", "20:48", "22:26"], "7": ["04:58", "06:43", "13:46", "17:38", "20:49", "22:28"], "8": ["04:57", "06:42", "13:46", "17:38", "20:50", "22:29"], "9": ["04:55", "06:41", "13:46", "17:38", "20:51", "22:30"], "10": ["04:53", "06:40", "13:46", "17:38", "20:52", "22:32"], "11": ["04:52", "06:39", "13:46", "17:38", "20:53", "22:33"], "12": ["04:50", "06:38", "13:46", "17:39", "20:54", "22:35"], "13": ["04:49", "06:37", "13:46", "17:39", "20:55", "22:36"], "14": ["04:47", "06:36", "13:46", "17:39", "20:56", "22:37"], "15": ["04:46", "06:35", "13:46", "17:39", "20:57", "22:39"], "16": ["04:45", "06:34", "13:46", "17:40", "20:58", "22:40"], "17": ["04:43", "06:34", "13:46", "17:40", "20:58", "22:42"], "18": ["04:42", "06:33", "13:46", "17:40", "20:59", "22:43"], "19": ["04:41", "06:32", "13:46", "17:40", "21:00", "22:44"], "20": ["04:39", "06:31", "13:46", "17:41", "21:01", "22:46"], "21": ["04:38", "06:30", "13:46", "17:41", "21:02", "22:47"], "22": ["04:37", "06:30", "13:46", "17:41", "21:03", "22:48"], "23": ["04:36", "06:29", "13:46", "17:42", "21:04", "22:50"], "24": ["04:35", "06:28", "13:46", "17:42", "21:05", "22:51"], "25": ["04:33", "06:28", "13:46", "17:42", "21:05", "22:52"], "26": ["04:32", "06:27", "13:46", "17:42", "21:06", "22:53"], "27": ["04:31", "06:26", "13:47", "17:43", "21:07", "22:54"], "28": ["04:30", "06:26", "13:47", "17:43", "21:08", "22:56"], "29": ["04:29", "06:25", "13:47", "17:43", "21:09", "22:57"], "30": ["04:28", "06:25", "13:47", "17:43", "21:09", "22:58"], "31": ["04:28", "06:24", "13:47", "17:44", "21:10", "22:59"]},
    {"1": ["04:27", "06:24", "13:47", "17:44", "21:11", "23:00"], "2": ["04:26", "06:24", "13:47", "17:44", "21:11", "23:01"], "3": ["04:25", "06:23", "13:48", "17:44", "21:12", "23:02"], "4": ["04:24", "06:23", "13:48", "17:45", "21:13", "23:03"], "5": ["04:24", "06:23", "13:48", "17:45", "21:13", "23:04"], "6": ["04:23", "06:22", "13:48", "17:45", "21:14", "23:05"], "7": ["04:23", "06:22", "13:48", "17:45", "21:15", "23:06"], "8": ["04:22", "06:22", "13:48", "17:46", "21:15", "23:07"], "9": ["04:22", "06:22", "13:49", "17:46", "21:16", "23:07"], "10": ["04:21", "06:22", "13:49", "17:46", "21:16", "23:08"], "11": ["04:21", "06:21", "13:49", "17:47", "21:17", "23:09"], "12": ["04:21", "06:21", "13:49", "17:47", "21:17", "23:09"], "13": ["04:20", "06:21", "13:49", "17:47", "21:18", "23:10"], "14": ["04:20", "06:21", "13:50", "17:47", "21:18", "23:11"], "15": ["04:20", "06:21", "13:50", "17:48", "21:19", "23:11"], "16": ["04:20", "06:21", "13:50", "17:48", "21:19", "23:12"], "17": ["04:20", "06:21", "13:50", "17:48", "21:19", "23:12"], "18": ["04:20", "06:22", "13:51", "17:48", "21:20", "23:12"], "19": ["04:20", "06:22", "13:51", "17:49", "21:20", "23:13"], "20": ["04:20", "06:22", "13:51", "17:49", "21:20", "23:13"], "21": ["04:20", "06:22", "13:51", "17:49", "21:20", "23:13"], "22": ["04:21", "06:22", "13:51", "17:49", "21:20", "23:13"], "23": ["04:21", "06:23", "13:52", "17:49", "21:21", "23:14"], "24": ["04:21", "06:23", "13:52", "17:50", "21:21", "23:14"], "25": ["04:22", "06:23", "13:52", "17:50", "21:21", "23:14"], "26": ["04:22", "06:24", "13:52", "17:50", "21:21", "23:14"], "27": ["04:23", "06:24", "13:52", "17:50", "21:21", "23:14"], "28": ["04:23", "06:24", "13:53", "17:50", "21:21", "23:13"], "29": ["04:24", "06:25", "13:53", "17:51", "21:21", "23:13"], "30": ["04:24", "06:25", "13:53", "17:51", "21:21", "23:13"]},
    {"1": ["04:25", "06:26", "13:53", "17:51", "21:21", "23:13"], "2": ["04:26", "06:26", "13:53", "17:51", "21:21", "23:12"], "3": ["04:27", "06:27", "13:54", "17:51", "21:20", "23:12"], "4": ["04:27", "06:27", "13:54", "17:51", "21:20", "23:11"], "5": ["04:28", "06:28", "13:54", "17:51", "21:20", "23:11"], "6": ["04:29", "06:28", "13:54", "17:52", "21:20", "23:10"], "7": ["04:30", "06:29", "13:54", "17:52", "21:20", "23:10"], "8": ["04:31", "06:30", "13:54", "17:52", "21:19", "23:09"], "9": ["04:32", "06:30", "13:55", "17:52", "21:19", "23:09"], "10": ["04:33", "06:31", "13:55", "17:52", "21:18", "23:08"], "11": ["04:34", "06:31", "13:55", "17:52", "21:18", "23:07"], "12": ["04:35", "06:32", "13:55", "17:52", "21:18", "23:06"], "13": ["04:36", "06:33", "13:55", "17:52", "21:17", "23:05"], "14": ["04:37", "06:34", "13:55", "17:52", "21:17", "23:05"], "15": ["04:39", "06:34", "13:55", "17:52", "21:16", "23:04"], "16": ["04:40", "06:35", "13:55", "17:52", "21:15", "23:03"], "17": ["04:41", "06:36", "13:56", "17:52", "21:15", "23:02"], "18": ["04:42", "06:37", "13:56", "17:52", "21:14", "23:01"], "19": ["04:44", "06:37", "13:56", "17:52", "21:14", "22:59"], "20": ["04:45", "06:38", "13:56", "17:52", "21:13", "22:58"], "21": ["04:46", "06:39", "13:56", "17:51", "21:12", "22:57"], "22": ["04:47", "06:40", "13:56", "17:51", "21:11", "22:56"], "23": ["04:49", "06:41", "13:56", "17:51", "21:11", "22:55"], "24": ["04:50", "06:42", "13:56", "17:51", "21:10", "22:54"], "25": ["04:51", "06:42", "13:56", "17:51", "21:09", "22:52"], "26": ["04:53", "06:43", "13:56", "17:51", "21:08", "22:51"], "27": ["04:54", "06:44", "13:56", "17:50", "21:07", "22:50"], "28": ["04:56", "06:45", "13:56", "17:50", "21:06", "22:48"], "29": ["04:57", "06:46", "13:56", "17:50", "21:05", "22:47"], "30": ["04:58", "06:47", "13:56", "17:50", "21:04", "22:45"], "31": ["05:00", "06:48", "13:56", "17:49", "21:03", "22:44"]},
    {"1": ["05:01", "06:49", "13:56", "17:49", "21:02", "22:42"], "2": ["05:03", "06:50", "13:56", "17:49", "21:01", "22:41"], "3": ["05:04", "06:51", "13:56", "17:48", "21:00", "22:39"], "4": ["05:05", "06:51", "13:55", "17:48", "20:59", "22:38"], "5": ["05:07", "06:52", "13:55", "17:48", "20:58", "22:36"], "6": ["05:08", "06:53", "13:55", "17:47", "20:57", "22:35"], "7": ["05:10", "06:54", "13:55", "17:47", "20:56", "22:33"], "8": ["05:11", "06:55", "13:55", "17:46", "20:54", "22:32"], "9": ["05:12", "06:56", "13:55", "17:46", "20:53", "22:30"], "10": ["05:14", "06:57", "13:55", "17:45", "20:52", "22:28"], "11": ["05:15", "06:58", "13:55", "17:45", "20:51", "22:27"], "12": ["05:17", "06:59", "13:54", "17:44", "20:49", "22:25"], "13": ["05:18", "07:00", "13:54", "17:44", "20:48", "22:23"], "14": ["05:19", "07:01", "13:54", "17:43", "20:47", "22:22"], "15": ["05:21", "07:02", "13:54", "17:43", "20:45", "22:20"], "16": ["05:22", "07:03", "13:54", "17:42", "20:44", "22:18"], "17": ["05:23", "07:04", "13:53", "17:41", "20:43", "22:16"], "18": ["05:25", "07:04", "13:53", "17:41", "20:41", "22:15"], "19": ["05:26", "07:05", "13:53", "17:40", "20:40", "22:13"], "20": ["05:27", "07:06", "13:53", "17:39", "20:39", "22:11"], "21": ["05:29", "07:07", "13:53", "17:39", "20:37", "22:09"], "22": ["05:30", "07:08", "13:52", "17:38", "20:36", "22:08"], "23": ["05:31", "07:09", "13:52", "17:37", "20:34", "22:06"], "24": ["05:33", "07:10", "13:52", "17:36", "20:33", "22:04"], "25": ["05:34", "07:11", "13:51", "17:36", "20:31", "22:02"], "26": ["05:35", "07:12", "13:51", "17:35", "20:30", "22:00"], "27": ["05:36", "07:13", "13:51", "17:34", "20:28", "21:59"], "28": ["05:38", "07:14", "13:51", "17:33", "20:27", "21:57"], "29": ["05:39", "07:15", "13:50", "17:33", "20:25", "21:55"], "30": ["05:40", "07:16", "13:50", "17:32", "20:24", "21:53"], "31": ["05:41", "07:17", "13:50", "17:31", "20:22", "21:51"]},
    {"1": ["05:43", "07:17", "13:49", "17:30", "20:21", "21:49"], "2": ["05:44", "07:18", "13:49", "17:29", "20:19", "21:48"], "3": ["05:45", "07:19", "13:49", "17:28", "20:17", "21:46"], "4": ["05:46", "07:20", "13:48", "17:27", "20:16", "21:44"], "5": ["05:47", "07:21", "13:48", "17:26", "20:14", "21:42"], "6": ["05:49", "07:22", "13:48", "17:25", "20:13", "21:40"], "7": ["05:50", "07:23", "13:47", "17:24", "20:11", "21:38"], "8": ["05:51", "07:24", "13:47", "17:23", "20:10", "21:37"], "9": ["05:52", "07:25", "13:47", "17:22", "20:08", "21:35"], "10": ["05:53", "07:26", "13:46", "17:21", "20:06", "21:33"], "11": ["05:54", "07:27", "13:46", "17:20", "20:05", "21:31"], "12": ["05:56", "07:28", "13:46", "17:19", "20:03", "21:29"], "13": ["05:57", "07:29", "13:45", "17:18", "20:01", "21:28"], "14": ["05:58", "07:29", "13:45", "17:17", "20:00", "21:26"], "15": ["05:59", "07:30", "13:45", "17:16", "19:58", "21:24"], "16": ["06:00", "07:31", "13:44", "17:15", "19:56", "21:22"], "17": ["06:01", "07:32", "13:44", "17:14", "19:55", "21:20"], "18": ["06:02", "07:33", "13:43", "17:13", "19:53", "21:19"], "19": ["06:03", "07:34", "13:43", "17:12", "19:52", "21:17"], "20": ["06:04", "07:35", "13:43", "17:11", "19:50", "21:15"], "21": ["06:05", "07:36", "13:42", "17:10", "19:48", "21:13"], "22": ["06:06", "07:37", "13:42", "17:09", "19:47", "21:12"], "23": ["06:08", "07:38", "13:42", "17:08", "19:45", "21:10"], "24": ["06:09", "07:39", "13:41", "17:06", "19:43", "21:08"], "25": ["06:10", "07:40", "13:41", "17:05", "19:42", "21:06"], "26": ["06:11", "07:41", "13:41", "17:04", "19:40", "21:05"], "27": ["06:12", "07:42", "13:40", "17:03", "19:38", "21:03"], "28": ["06:13", "07:42", "13:40", "17:02", "19:37", "21:01"], "29": ["06:14", "07:43", "13:40", "17:01", "19:35", "21:00"], "30": ["06:15", "07:44", "13:39", "17:00", "19:34", "20:58"]},
    {"1": ["06:16", "07:45", "13:39", "16:59", "19:32", "20:56"], "2": ["06:17", "07:46", "13:39", "16:57", "19:30", "20:55"], "3": ["06:18", "07:47", "13:38", "16:56", "19:29", "20:53"], "4": ["06:19", "07:48", "13:38", "16:55", "19:27", "20:51"], "5": ["06:20", "07:49", "13:38", "16:54", "19:26", "20:50"], "6": ["06:21", "07:50", "13:37", "16:53", "19:24", "20:48"], "7": ["06:22", "07:51", "13:37", "16:52", "19:23", "20:47"], "8": ["06:23", "07:52", "13:37", "16:50", "19:21", "20:45"], "9": ["06:24", "07:53", "13:37", "16:49", "19:19", "20:44"], "10": ["06:25", "07:54", "13:36", "16:48", "19:18", "20:42"], "11": ["06:26", "07:55", "13:36", "16:47", "19:16", "20:40"], "12": ["06:27", "07:56", "13:36", "16:46", "19:15", "20:39"], "13": ["06:28", "07:57", "13:36", "16:45", "19:13", "20:38"], "14": ["06:29", "07:58", "13:35", "16:44", "19:12", "20:36"], "15": ["06:30", "07:59", "13:35", "16:42", "19:10", "20:35"], "16": ["06:31", "08:00", "13:35", "16:41", "19:09", "20:33"], "17": ["06:32", "08:01", "13:35", "16:40", "19:07", "20:32"], "18": ["06:33", "08:02", "13:34", "16:39", "19:06", "20:30"], "19": ["06:34", "08:03", "13:34", "16:38", "19:05", "20:29"], "20": ["06:35", "08:04", "13:34", "16:37", "19:03", "20:28"], "21": ["06:36", "08:06", "13:34", "16:36", "19:02", "20:26"], "22": ["06:37", "08:07", "13:34", "16:35", "19:00", "20:25"], "23": ["06:38", "08:08", "13:34", "16:34", "18:59", "20:24"], "24": ["06:39", "08:09", "13:34", "16:33", "18:58", "20:23"], "25": ["05:40", "07:10", "12:33", "15:32", "17:56", "19:21"], "26": ["05:41", "07:11", "12:33", "15:31", "17:55", "19:20"], "27": ["05:42", "07:12", "12:33", "15:30", "17:54", "19:19"], "28": ["05:43", "07:13", "12:33", "15:29", "17:53", "19:18"], "29": ["05:44", "07:14", "12:33", "15:28", "17:51", "19:17"], "30": ["05:44", "07:15", "12:33", "15:27", "17:50", "19:16"], "31": ["05:45", "07:16", "12:33", "15:26", "17:49", "19:15"]},
    {"1": ["05:46", "07:18", "12:33", "15:25", "17:48", "19:14"], "2": ["05:47", "07:19", "12:33", "15:24", "17:47", "19:13"], "3": ["05:48", "07:20", "12:33", "15:23", "17:46", "19:12"], "4": ["05:49", "07:21", "12:33", "15:22", "17:44", "19:11"], "5": ["05:50", "07:22", "12:33", "15:21", "17:43", "19:10"], "6": ["05:51", "07:23", "12:33", "15:21", "17:42", "19:09"], "7": ["05:52", "07:24", "12:33", "15:20", "17:41", "19:08"], "8": ["05:53", "07:25", "12:33", "15:19", "17:40", "19:07"], "9": ["05:54", "07:27", "12:33", "15:18", "17:39", "19:06"], "10": ["05:55", "07:28", "12:33", "15:17", "17:38", "19:05"], "11": ["05:56", "07:29", "12:33", "15:17", "17:37", "19:05"], "12": ["05:57", "07:30", "12:33", "15:16", "17:37", "19:04"], "13": ["05:58", "07:31", "12:34", "15:15", "17:36", "19:03"], "14": ["05:59", "07:32", "12:34", "15:15", "17:35", "19:03"], "15": ["06:00", "07:33", "12:34", "15:14", "17:34", "19:02"], "16": ["06:01", "07:34", "12:34", "15:13", "17:33", "19:01"], "17": ["06:02", "07:36", "12:34", "15:13", "17:33", "19:01"], "18": ["06:03", "07:37", "12:35", "15:12", "17:32", "19:00"], "19": ["06:04", "07:38", "12:35", "15:12", "17:31", "19:00"], "20": ["06:05", "07:39", "12:35", "15:11", "17:31", "18:59"], "21": ["06:06", "07:40", "12:35", "15:11", "17:30", "18:59"], "22": ["06:07", "07:41", "12:35", "15:10", "17:29", "18:58"], "23": ["06:08", "07:42", "12:36", "15:10", "17:29", "18:58"], "24": ["06:09", "07:43", "12:36", "15:09", "17:28", "18:58"], "25": ["06:10", "07:44", "12:36", "15:09", "17:28", "18:57"], "26": ["06:11", "07:45", "12:37", "15:09", "17:27", "18:57"], "27": ["06:11", "07:46", "12:37", "15:09", "17:27", "18:57"], "28": ["06:12", "07:48", "12:37", "15:08", "17:27", "18:57"], "29": ["06:13", "07:49", "12:38", "15:08", "17:26", "18:56"], "30": ["06:14", "07:50", "12:38", "15:08", "17:26", "18:56"]},
    {"1": ["06:15", "07:51", "12:38", "15:08", "17:26", "18:56"], "2": ["06:16", "07:52", "12:39", "15:07", "17:26", "18:56"], "3": ["06:17", "07:53", "12:39", "15:07", "17:25", "18:56"], "4": ["06:18", "07:53", "12:40", "15:07", "17:25", "18:56"], "5": ["06:18", "07:54", "12:40", "15:07", "17:25", "18:56"], "6": ["06:19", "07:55", "12:40", "15:07", "17:25", "18:56"], "7": ["06:20", "07:56", "12:41", "15:07", "17:25", "18:56"], "8": ["06:21", "07:57", "12:41", "15:07", "17:25", "18:56"], "9": ["06:22", "07:58", "12:42", "15:07", "17:25", "18:56"], "10": ["06:22", "07:59", "12:42", "15:08", "17:25", "18:56"], "11": ["06:23", "08:00", "12:43", "15:08", "17:25", "18:57"], "12": ["06:24", "08:00", "12:43", "15:08", "17:26", "18:57"], "13": ["06:24", "08:01", "12:44", "15:08", "17:26", "18:57"], "14": ["06:25", "08:02", "12:44", "15:08", "17:26", "18:57"], "15": ["06:26", "08:03", "12:44", "15:09", "17:26", "18:58"], "16": ["06:26", "08:03", "12:45", "15:09", "17:27", "18:58"], "17": ["06:27", "08:04", "12:45", "15:09", "17:27", "18:58"], "18": ["06:28", "08:05", "12:46", "15:10", "17:27", "18:59"], "19": ["06:28", "08:05", "12:46", "15:10", "17:28", "18:59"], "20": ["06:29", "08:06", "12:47", "15:10", "17:28", "19:00"], "21": ["06:29", "08:06", "12:47", "15:11", "17:29", "19:00"], "22": ["06:30", "08:07", "12:48", "15:11", "17:29", "19:01"], "23": ["06:30", "08:07", "12:48", "15:12", "17:30", "19:01"], "24": ["06:31", "08:08", "12:49", "15:12", "17:30", "19:02"], "25": ["06:31", "08:08", "12:49", "15:13", "17:31", "19:02"], "26": ["06:31", "08:08", "12:50", "15:14", "17:31", "19:03"], "27": ["06:32", "08:09", "12:50", "15:14", "17:32", "19:04"], "28": ["06:32", "08:09", "12:51", "15:15", "17:33", "19:04"], "29": ["06:33", "08:09", "12:51", "15:16", "17:34", "19:05"], "30": ["06:33", "08:10", "12:52", "15:16", "17:34", "19:06"], "31": ["06:33", "08:10", "12:52", "15:17", "17:35", "19:06"]}
];
// Prayer names mapped to calendar indices: [0]=Fajr, [1]=Shuruq, [2]=Dhuhr, [3]=Asr, [4]=Maghrib, [5]=Isha
const PRAYER_CALENDAR_MAP = { Fajr: 0, Dhuhr: 2, Asr: 3, Maghrib: 4, Isha: 5 };

/**
 * Gets today's prayer times from the embedded Mawaqit calendar.
 * Returns { Fajr, Dhuhr, Asr, Maghrib, Isha } with HH:MM strings.
 */
function getMawaqitTimesForToday() {
    const calendar = window.ACTIVE_MAWAQIT_CALENDAR || MAWAQIT_CALENDAR;
    const now = new Date();
    const month = now.getMonth(); // 0-indexed
    const day = now.getDate();    // 1-indexed
    const monthData = calendar[month];
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

const prayerNamesMap = {
    es: { Fajr: 'Fajr', Shuruq: 'Shuruq', Dhuhr: 'Dhuhr', Asr: 'Asr', Maghrib: 'Maghrib', Isha: 'Isha' },
    ar: { Fajr: 'الفجر', Shuruq: 'الشروق', Dhuhr: 'الظهر', Asr: 'العصر', Maghrib: 'المغرب', Isha: 'العشاء' }
};

function getLocalizedPrayerName(name) {
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'es';
    if (prayerNamesMap[lang] && prayerNamesMap[lang][name]) {
        return prayerNamesMap[lang][name];
    }
    return name;
}

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

    if (nextPrayerNameEl) nextPrayerNameEl.innerText = getLocalizedPrayerName(nextPrayer.name);
    if (nextPrayerTimeValEl) nextPrayerTimeValEl.innerText = nextPrayer.timeStr;

    prayers.forEach(prayer => {
        const isCurrent = prayer === currentPrayer;
        const col = prayer.element;
        const iconEl = col.querySelector('.icon-el');
        const nameEl = col.querySelector('.name-el');
        const timeEl = col.querySelector('.time-el');
        const indicatorEl = col.querySelector('.current-indicator');

        if (nameEl) nameEl.innerText = getLocalizedPrayerName(prayer.name);

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

// Fetch site config from Supabase (phone, email, overrides)
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
                if (c.key === 'prayer_overrides') {
                    try {
                        const overrides = JSON.parse(c.value);
                        applyPrayerTimes(overrides);
                    } catch (err) {}
                }
            });
        }
    } catch (e) {
        console.error("Error fetching Supabase config:", e);
    }
}

// Sincronización dinámica opcional con el JSON de Mawaqit
async function syncMawaqitLive() {
    try {
        const res = await fetch('assets/mawaqit-data.json?t=' + Date.now());
        if (res.ok) {
            const data = await res.json();
            if (data && data.calendar && data.calendar.length === 12) {
                window.ACTIVE_MAWAQIT_CALENDAR = data.calendar;
                const times = getMawaqitTimesForToday();
                if (times) applyPrayerTimes(times);
            }
        }
    } catch (e) {
        // Fallback silencioso al calendario embebido
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
setTimeout(syncMawaqitLive, 800);

// Set today's date label with Arabic/Spanish localization
function updateDateLabel() {
    const dateLabel = document.getElementById('today-date-label');
    if (dateLabel) {
        const now = new Date();
        const isAr = (typeof currentLang !== 'undefined' && currentLang === 'ar');
        const locale = isAr ? 'ar-SA' : 'es-ES';
        const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dateLabel.textContent = now.toLocaleDateString(locale, opts).replace(/^(.)/, c => c.toUpperCase());
    }
}
updateDateLabel();

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

// ==========================================================================
// JUTBA MODAL READER CONTROLLER (MYNEXT Bento Grid & Motion Design)
// ==========================================================================
const jutbaData = {
    1: {
        tag: { es: 'Jutba 1 • Al-I\'tisam', ar: 'الخطبة 1 • الاعتصام' },
        badgeClass: 'jutba-badge-unity',
        badge: { es: 'Unidad y Sunnah', ar: 'الاعتصام والجماعة' },
        title: { es: 'La Unión de la Comunidad y Aferrarse a la Guía', ar: 'الاعتصام بكتاب الله وسنة نبيه ولزوم الجماعة' },
        content: {
            es: `
                <div class="space-y-6 text-on-surface-variant">
                    <div class="bg-[#006233]/10 border-l-4 border-[#006233] p-5 rounded-r-2xl">
                        <span class="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#006233] block mb-2">Sagrado Corán • Surah Al-Imran (103)</span>
                        <p class="font-['Amiri'] text-xl text-primary font-semibold leading-loose text-right mb-3" dir="rtl">
                            ﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِّنَ النَّارِ فَأَنقَذَكُم مِّنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمْ آيَاتِهِ لَعَلَّكُمْ تَهْتَدُونَ ﴾
                        </p>
                        <p class="text-sm italic text-on-surface leading-relaxed">
                            «Y aferraos a la cuerda de Alá todos juntos y no os dividáis. Y recordad la bendición de Alá sobre vosotros: cuando erais enemigos unos de otros y Él unió vuestros corazones, convirtiéndoos por Su gracia en hermanos; y estabais al borde de un abismo del Fuego y os salvó de él. Así Alá os aclara Sus aleyas para que os guiéis.»
                        </p>
                        <span class="text-[11px] text-on-surface-variant/80 block mt-2">Surah Al-Imran: 103 • Juz 4 • Página 63</span>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-['Outfit'] text-lg font-bold text-on-surface uppercase tracking-wide">
                            Ahadiz Proféticos Auténticos sobre el Aferramiento y la Unidad
                        </h4>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] uppercase tracking-wider block mb-1">1. La complacencia de Alá y Su Mensajero (Sahih Muslim):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right mb-2" dir="rtl">
                                عَنْ أَبِي هُرَيْرَةَ رضي الله عنه قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «إِنَّ اللَّهَ يَرْضَى لَكُمْ ثَلَاثًا، وَيَكْرَهُ لَكُمْ ثَلَاثًا: يَرْضَى لَكُمْ أَنْ تَعْبُدوهُ وَلَا تُشْرِكُوا بِهِ شَيْئًا، وَأَنْ تَعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا، وَيَكْرَهُ لَكُمْ قِيلَ وَقَالَ، وَكَثْرَةَ السُّؤَالِ، وَإِضَاعَةَ الْمَالِ».
                            </p>
                            <p class="text-sm text-on-surface-variant leading-relaxed">
                                Narró Abu Huraira (que Alá esté complacido con él) que el Mensajero de Alá ﷺ dijo: <em>«Ciertamente Alá se complace para vosotros con tres cosas y detesta tres: se complace con que Le adoréis sin asociarle nada, que os aferréis todos juntos a la cuerda de Alá y no os dividáis; y detesta para vosotros los chismes y habladurías, el preguntar en exceso y el derroche del dinero.»</em> (Transmitido por Muslim).
                            </p>
                        </div>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] uppercase tracking-wider block mb-1">2. Aferrarse al Libro de Alá y a la Sunnah (Al-Hakim, sahih por Al-Albani):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right mb-2" dir="rtl">
                                عَنْ أَبِي هُرَيْرَةَ رضي الله عنه أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: «إِنِّي قَدْ خَلَّفْتُ فِيكُمْ شَيْئَيْنِ لَنْ تَضِلُّوا بَعْدَهُمَا أَبَدًا مَا أَخَذْتُمْ بِهِمَا وَعَمِلْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّتِي، وَلَنْ يَتَفَرَّقَا حَتَّى يَرِدَا عَلَى الْحَوْضِ».
                            </p>
                            <p class="text-sm text-on-surface-variant leading-relaxed">
                                El Mensajero de Alá ﷺ dijo: <em>«He dejado entre vosotros dos cosas con las cuales jamás os extraviaréis mientras os aferréis a ellas y obréis conforme a ellas: el Libro de Alá y mi Sunnah. Y nunca se separarán hasta que se encuentren conmigo en la Fuente (Al-Hawd).»</em>
                            </p>
                        </div>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] uppercase tracking-wider block mb-1">3. Permanecer con la comunidad y no apartarse (At-Tirmidhi, hasan):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right mb-2" dir="rtl">
                                عَنِ ابْنِ عُمَرَ رضي الله عنهما أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: «إِنَّ اللَّهَ لَا يَجْمَعُ أُمَّةَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى ضَلَالَةٍ، وَيَدُ اللَّهِ مَعَ الْجَمَاعَةِ، وَمَنْ شَذَّ شَذَّ فِي النَّارِ».
                            </p>
                            <p class="text-sm text-on-surface-variant leading-relaxed">
                                Ibn Omar (que Alá esté complacido con ambos) narró que el Mensajero de Alá ﷺ dijo: <em>«Alá no unirá a la nación de Muhammad sobre el extravío. La Mano de Alá está con la comunidad, y quien se aparta por su cuenta, se aparta hacia el Fuego.»</em>
                            </p>
                        </div>
                    </div>
                </div>
            `,
            ar: `
                <div class="space-y-6 text-on-surface-variant" dir="rtl">
                    <div class="bg-[#006233]/10 border-r-4 border-[#006233] p-5 rounded-l-2xl">
                        <span class="font-['Cairo'] text-xs font-bold uppercase tracking-widest text-[#006233] block mb-2">القرآن الكريم • سورة آل عمران (الآية 103)</span>
                        <p class="font-['Amiri'] text-xl text-primary font-semibold leading-loose text-right mb-3">
                            ﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ۚ وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِّنَ النَّارِ فَأَنقَذَكُم مِّنْهَا ۗ كَذَٰلِكَ يُبَيِّنُ اللَّهُ لَكُمْ آيَاتِهِ لَعَلَّكُمْ تَهْتَدُونَ ﴾
                        </p>
                        <p class="text-xs text-on-surface-variant/80 font-['Cairo']">سورة: آل عمران - الجزء: 4 - الصفحة: 63</p>
                    </div>

                    <div class="space-y-4 font-['Cairo']">
                        <h4 class="text-lg font-bold text-on-surface">الأحاديث النبوية الصحيحة في الاعتصام ولزوم الجماعة</h4>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] block mb-1">١. رضا الله ورسوله بالاعتصام (رواه مسلم):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right leading-loose">
                                عَنْ أَبِي هُرَيْرَةَ رضي الله عنه قَالَ: قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «إِنَّ اللَّهَ يَرْضَى لَكُمْ ثَلَاثًا، وَيَكْرَهُ لَكُمْ ثَلَاثًا: يَرْضَى لَكُمْ أَنْ تَعْبُدوهُ وَلَا تُشْرِكُوا بِهِ شَيْئًا، وَأَنْ تَعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا، وَيَكْرَهُ لَكُمْ قِيلَ وَقَالَ، وَكَثْرَةَ السُّؤَالِ، وَإِضَاعَةَ الْمَالِ».
                            </p>
                        </div>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] block mb-1">٢. التمسك بكتاب الله وسنة نبيه (رواه الحاكم وصححه الألباني):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right leading-loose">
                                عَنْ أَبِي هُرَيْرَةَ رضي الله عنه أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: «إِنِّي قَدْ خَلَّفْتُ فِيكُمْ شَيْئَيْنِ لَنْ تَضِلُّوا بَعْدَهُمَا أَبَدًا مَا أَخَذْتُمْ بِهِمَا وَعَمِلْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّتِي، وَلَنْ يَتَفَرَّقَا حَتَّى يَرِدَا عَلَى الْحَوْضِ».
                            </p>
                        </div>

                        <div class="arabic-hadith-box">
                            <span class="text-xs font-bold text-[#a87c2b] block mb-1">٣. لزوم جماعة المسلمين وعدم التفرق (رواه الترمذي وقال الألباني: حسن):</span>
                            <p class="font-['Amiri'] text-base md:text-lg text-primary text-right leading-loose">
                                عَنِ ابْنِ عُمَرَ رضي الله عنهما أَنَّ رَسُولَ اللَّهِ صلى الله عليه وسلم قَالَ: «إِنَّ اللَّهَ لَا يَجْمَعُ أُمَّةَ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ عَلَى ضَلَالَةٍ، وَيَدُ اللَّهِ مَعَ الْجَمَاعَةِ، وَمَنْ شَذَّ شَذَّ فِي النَّارِ».
                            </p>
                        </div>
                    </div>
                </div>
            `
        }
    },
    2: {
        tag: { es: 'Jutba 2 • Pregunta 8003', ar: 'الخطبة 2 • سؤال 8003' },
        badgeClass: 'jutba-badge-fiqh',
        badge: { es: 'Fiqh y Pureza', ar: 'فقه وطهارة' },
        title: { es: 'Purificación fuera de casa y la Oración a tiempo', ar: 'الطهارة والاستنجاء خارج البيت وأداء الصلاة في وقتها' },
        content: {
            es: `
                <div class="space-y-6 text-on-surface-variant">
                    <div class="bg-primary/5 border-l-4 border-primary p-5 rounded-r-2xl">
                        <span class="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-primary block mb-2">Consulta de la Comunidad • Pregunta 8003</span>
                        <p class="text-sm md:text-base italic text-on-surface font-medium leading-relaxed">
                            «Normalmente paso la mayor parte del día en el colegio y tengo que ir al baño. Ya que no puedo ir hasta mi casa para hacer istinyah, ¿debo hacer el wudú y rezar o debo perderme la oración y recuperarla más tarde?»
                        </p>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-['Outfit'] text-lg font-bold text-on-surface uppercase tracking-wide">
                            Texto de la Respuesta
                        </h4>
                        <p class="text-sm leading-relaxed">
                            Alabado sea Al-lah, y que la paz y las bendiciones sean con el Mensajero de Al-lah.
                            Cuando termina de hacer sus necesidades, la persona debe limpiarse las impurezas con agua, que es lo mejor y lo más apropiado, o con algo que elimine las impurezas, como papel higiénico, tela, piedras u otra cosa.
                        </p>

                        <div class="bg-white/80 p-5 rounded-xl border border-[#a87c2b]/20 space-y-3">
                            <p class="font-bold text-on-surface text-sm">
                                El Sheij Ibn 'Uzaimin dijo: <em>“Luego de hacer sus necesidades, la persona debe hacer una de las siguientes tres cosas:</em>
                            </p>
                            <ol class="space-y-3 text-sm list-decimal list-inside pl-2">
                                <li>
                                    <strong>Está permitido purificarse con agua.</strong> La evidencia de esto es el hadiz narrado por Anas (que Al-lah esté complacido con él): <em>‘Cuando el Profeta (la paz y las bendiciones de Al-lah sean con él) solía hacer sus necesidades, un muchacho y yo le alcanzábamos un recipiente con agua y una lanza corta (que usaba como sutrah para la oración)... y él se purificaba con el agua’</em> (Al Bujari, 149; Muslim, 271). El motivo es que la forma básica de eliminar las impurezas es utilizando agua.
                                </li>
                                <li>
                                    <strong>Puede purificarse utilizando piedras (o papel higiénico/toallitas limpias).</strong> Hacer istiymar o eliminar las impurezas con piedras es suficiente. Este permiso proviene de las palabras y acciones del Mensajero de Al-lah ﷺ. Salman narró: <em>‘El Mensajero de Al-lah ﷺ nos prohibió usar menos de tres piedras para realizar el istiymar’</em> (Muslim, 262). Ibn Mas'ud y Abu Huraira narraron que el Profeta ﷺ usaba piedras para limpiarse (Al Bujari 122, 154). Esto indica que el istiymar está plenamente permitido.
                                </li>
                                <li>
                                    <strong>Limpiarse con piedras/papel y luego con agua.</strong> No hay duda de que es más efectivo para limpiarse cuando se dispone de ambos.
                                </li>
                            </ol>
                            <p class="text-xs text-[#a87c2b] font-semibold mt-2">(Ash-Sharh Al Mumti', 1/103-105)</p>
                        </div>

                        <div class="bg-amber-500/10 p-5 rounded-xl border border-amber-500/30">
                            <h5 class="font-bold text-on-surface text-sm mb-2">Conclusión y Dictamen:</h5>
                            <p class="text-sm leading-relaxed">
                                Basándonos en lo expuesto, <strong>usted no tiene excusa para no rezar o para retrasar la oración</strong> para después de la hora prescrita por no poder hacer istinyah con agua, porque puede eliminar la impureza y limpiarse usando papel y similares. Todo el mundo puede llevar papel en el bolsillo para limpiarse. Si no hay agua en el retrete escolar, debe quitarse la impureza con papel y similares, y luego hacer la ablución menor (wudú) en los lavabos y rezar. <strong>No está permitido retrasar la oración hasta que haya pasado su tiempo prescrito.</strong>
                            </p>
                            <p class="text-xs font-semibold text-primary mt-3">Y Al-lah sabe más.</p>
                        </div>
                    </div>
                </div>
            `,
            ar: `
                <div class="space-y-6 text-on-surface-variant" dir="rtl">
                    <div class="bg-primary/5 border-r-4 border-primary p-5 rounded-l-2xl">
                        <span class="font-['Cairo'] text-xs font-bold uppercase tracking-widest text-primary block mb-2">سؤال رقم 8003</span>
                        <p class="text-sm md:text-base font-semibold text-on-surface leading-relaxed font-['Cairo']">
                            «أقضي معظم يومي في المدرسة أو العمل وأحتاج لدخول الخلاء، ولا أستطيع العودة إلى بيتي للاستنجاء بالماء. فهل أتوضأ وأصلي أم أؤخر الصلاة حتى أعود للمنزل؟»
                        </p>
                    </div>

                    <div class="space-y-4 font-['Cairo']">
                        <h4 class="text-lg font-bold text-on-surface">نص الإجابة والبيان الفقهي</h4>
                        <p class="text-sm leading-relaxed">
                            الحمد لله والصلاة والسلام على رسول الله. بعد قضاء الحاجة يجب على المسلم إزالة النجاسة بالماء وهو الأفضل والأكمل، أو بما يزيل النجاسة ويطهرها كالمناديل الورقية الطاهرة ونحوها (الاستجمار).
                        </p>

                        <div class="bg-white/80 p-5 rounded-xl border border-[#a87c2b]/20 space-y-3">
                            <p class="font-bold text-on-surface text-sm">
                                قال الشيخ ابن عثيمين رحمه الله: <em>«إذا قضى الإنسان حاجته فإنه يفعل أحد أمور ثلاثة:</em>
                            </p>
                            <ol class="space-y-2 text-sm list-decimal list-inside pr-2 leading-relaxed">
                                <li><strong>التطهر بالماء (الاستنجاء):</strong> وهو الأصل في إزالة الخبث والنجاسات لحديث أنس رضي الله عنه في الصحيحين.</li>
                                <li><strong>التطهر بالحجارة أو ما يقوم مقامها كالمناديل (الاستجمار):</strong> بشرط ألا ينقص عن ثلاث مسحات منقية، وهو كافٍ ومجزئ شرعاً بسنة النبي ﷺ القولية والفعلية.</li>
                                <li><strong>الجمع بين الاستجمار بالمناديل ثم الماء:</strong> وهو أبلغ في الإنقاء.</li>
                            </ol>
                            <p class="text-xs text-[#a87c2b] font-semibold mt-1">(الشرح الممتع 1/103-105)</p>
                        </div>

                        <div class="bg-amber-500/10 p-5 rounded-xl border border-amber-500/30">
                            <h5 class="font-bold text-on-surface text-sm mb-2">الخلاصة والتوجيه:</h5>
                            <p class="text-sm leading-relaxed">
                                لا يجوز تأخير الصلاة عن وقتها بحجة عدم وجود الماء للاستنجاء، بل الواجب إزالة النجاسة بالمناديل الورقية الطاهرة ثم الوضوء بالماء وأداء الصلاة في وقتها المحدد في المدرسة أو العمل، فالصلاة كتاب موقوت.
                            </p>
                            <p class="text-xs font-bold text-primary mt-2">والله أعلم.</p>
                        </div>
                    </div>
                </div>
            `
        }
    },
    3: {
        tag: { es: 'Jutba 3 • Derechos y Propiedad', ar: 'الخطبة 3 • حقوق العباد' },
        badgeClass: 'jutba-badge-ethics',
        badge: { es: 'Ética y Justicia', ar: 'حقوق وأخلاق' },
        title: { es: 'El Respeto a los Límites y la Propiedad Ajena', ar: 'حرمة التعدي على حقوق الآخرين وحدود الأرض' },
        content: {
            es: `
                <div class="space-y-6 text-on-surface-variant">
                    <div class="bg-[#C1272D]/10 border-l-4 border-[#C1272D] p-5 rounded-r-2xl">
                        <span class="font-['Outfit'] text-xs font-bold uppercase tracking-widest text-[#C1272D] block mb-2">Hadiz Profético • Sahih Muslim</span>
                        <p class="font-['Amiri'] text-xl text-primary font-semibold leading-loose text-right mb-2" dir="rtl">
                            قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «لَعَنَ اللَّهُ مَنْ غَيَّرَ مَنَارَ الْأَرْضِ»
                        </p>
                        <p class="text-base font-bold text-on-surface">
                            El Profeta Muhammad ﷺ dijo: «Que Allah maldiga a quien altere los límites de la tierra.»
                        </p>
                        <span class="text-xs text-on-surface-variant/80 block mt-1">(Transmitido por Muslim)</span>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-['Outfit'] text-lg font-bold text-on-surface uppercase tracking-wide">
                            Significado y Desglose
                        </h4>
                        
                        <div class="space-y-3 text-sm leading-relaxed">
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «Que Allah maldiga»:</strong> Significa que este acto es un pecado grave (Kabirah), pues la maldición divina implica ser apartado de la misericordia de Al-lah.
                            </div>
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «Los límites de la tierra»:</strong> Son las señales, piedras o mojones que delimitan las propiedades y terrenos entre las personas.
                            </div>
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «Alterar los límites de la tierra»:</strong> Significa mover, quitar o cambiar esas señales con el fin de apropiarse injustamente de parte del terreno de otra persona o modificar los linderos sin derecho.
                            </div>
                        </div>

                        <div class="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h5 class="font-bold text-on-surface text-sm mb-2">Enseñanza del Hadiz:</h5>
                            <p class="text-sm leading-relaxed">
                                Este hadiz prohíbe estrictamente invadir la propiedad ajena o modificar los límites de un terreno para obtener un beneficio injusto. El Islam protege de manera inviolable los derechos de propiedad y considera este tipo de usurpación una de las mayores injusticias sociales y morales.
                            </p>
                        </div>
                    </div>
                </div>
            `,
            ar: `
                <div class="space-y-6 text-on-surface-variant" dir="rtl">
                    <div class="bg-[#C1272D]/10 border-r-4 border-[#C1272D] p-5 rounded-l-2xl">
                        <span class="font-['Cairo'] text-xs font-bold uppercase tracking-widest text-[#C1272D] block mb-2">الحديث الشريف • صحيح مسلم</span>
                        <p class="font-['Amiri'] text-2xl text-primary font-bold leading-loose mb-2">
                            قَالَ رَسُولُ اللَّهِ صلى الله عليه وسلم: «لَعَنَ اللَّهُ مَنْ غَيَّرَ مَنَارَ الْأَرْضِ»
                        </p>
                        <span class="text-xs text-on-surface-variant font-['Cairo']">(رواه مسلم)</span>
                    </div>

                    <div class="space-y-4 font-['Cairo']">
                        <h4 class="text-lg font-bold text-on-surface">معاني الحديث ودلالاته</h4>

                        <div class="space-y-3 text-sm leading-relaxed">
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «لعن الله»:</strong> يدل على أن هذا الفعل من كبائر الذنوب، فاللعن هو الطرد والإبعاد عن رحمة الله عز وجل.
                            </div>
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «منار الأرض»:</strong> هي المعالم والحدود والعلامات الفاصلة بين أملاك الناس وأراضيهم.
                            </div>
                            <div class="p-3 bg-white/70 rounded-xl border border-black/5">
                                <strong class="text-on-surface">• «غير منار الأرض»:</strong> أي قدمها أو أخرها أو أزالها بقصد اغتصاب شيء من أرض جاره واقتطاع حقوق الآخرين بالباطل.
                            </div>
                        </div>

                        <div class="bg-primary/5 p-5 rounded-xl border border-primary/20">
                            <h5 class="font-bold text-on-surface text-sm mb-2">التوجيه النبوي:</h5>
                            <p class="text-sm leading-relaxed">
                                يقرر الحديث الشريف حرمة أموال الناس وملكياتهم، وتجريم أي تعدٍ أو جور على حقوق الجيران والأراضي، فالظلم ظلمات يوم القيامة.
                            </p>
                        </div>
                    </div>
                </div>
            `
        }
    }
};

let activeJutbaId = null;

function initJutbaReader() {
    const modal = document.getElementById('jutba-modal');
    const modalBadge = document.getElementById('jutba-modal-badge');
    const modalTag = document.getElementById('jutba-modal-tag');
    const modalContent = document.getElementById('jutba-modal-content');
    const closeBtn = document.getElementById('jutba-modal-close');
    const bottomCloseBtn = document.getElementById('jutba-modal-bottom-close');
    const openBtns = document.querySelectorAll('.jutba-open-btn');

    if (!modal) return;

    function openJutba(id) {
        const item = jutbaData[id];
        if (!item) return;

        activeJutbaId = id;
        const lang = (typeof currentLang !== 'undefined') ? currentLang : 'es';

        if (modalTag) modalTag.textContent = item.tag[lang] || item.tag.es;
        if (modalBadge) {
            modalBadge.textContent = item.badge[lang] || item.badge.es;
            modalBadge.className = 'jutba-badge ' + item.badgeClass;
        }
        if (modalContent) {
            modalContent.innerHTML = item.content[lang] || item.content.es;
            modalContent.scrollTop = 0;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeJutba() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        activeJutbaId = null;
    }

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const id = btn.getAttribute('data-jutba');
            openJutba(id);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closeJutba);
    if (bottomCloseBtn) bottomCloseBtn.addEventListener('click', closeJutba);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeJutba();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeJutba();
        }
    });

    // Reactive update on language change
    window.addEventListener('languageChanged', (e) => {
        if (activeJutbaId && modal.classList.contains('active')) {
            openJutba(activeJutbaId);
        }
        if (typeof updatePrayers === 'function') {
            updatePrayers();
        }
        if (typeof updateDateLabel === 'function') {
            updateDateLabel();
        }
    });
}

document.addEventListener('DOMContentLoaded', initJutbaReader);
initJutbaReader();



