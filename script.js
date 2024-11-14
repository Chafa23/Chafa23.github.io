document.addEventListener('DOMContentLoaded', () => {
    // Navbar animation: Apply 'loaded' class on window load
    document.querySelector('nav').classList.add('loaded');

    // Form validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    // Smooth Scroll between sections
    setupSmoothScroll();

    // Language switcher
    setupLanguageSwitcher();

    // Hamburger menu
    setupHamburgerMenu();

    // Apply saved language on page load
    applySavedLanguage();

    // Update CV download link based on language
    updateCVDownloadLink();

    // Theme toggle
    // setupThemeToggle();

    // Initialize Google Analytics
    // initializeGoogleAnalytics();
});

function validateForm(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if all fields are filled
    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    // Check if the email format is valid
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
}

function setupSmoothScroll() {
    // Add smooth scroll behavior to all anchor links with href starting with '#'
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    const elementsToTranslate = document.querySelectorAll('[data-lang]');
    const translations = {
        en: {
            home: "Home",
            projects: "Projects",
            about: "About",
            skills: "Skills",
            contact: "Contact",
            welcome: "Welcome to My Homepage",
            lead: "Hey, I'm Marcos, a passionate student from Uruguay",
            explore: "Explore my projects and get to know more about my journey.",
            viewWork: "View My Work",
            aboutMeTitle: "About Me",
            aboutMeContent: "I'm Marcos Betancor, second-year Computer Science student at the University of the Republic of Uruguay. I'm dedicated to developing my programming and computational problem-solving skills, always eager to expand my knowledge. Alongside my passion for technology, I have a strong interest in finance, especially in how financial decisions influence business and tech landscapes. Outside of academics, I find my place in the gym and sports, where I've cultivated discipline, resilience, and a strong work ethic that I apply to all areas of my life.",
            project1: "empty",
            project2: "empty",
            project3: "empty",
            programmingLanguages: "Programming Languages",
            frameworks: "Frameworks",
            tools: "Tools",
            languages: "Languages",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send",
            communication: "Communication",
            initiative: "Initiative",
            problemSolving: "Problem-solving",
            teamwork: "Teamwork",
            creativity: "Creativity",
            leadership: "Leadership",
            timeManagement: "Time management",
            adaptability: "Adaptability",
            attentionToDetail: "Attention to detail",
            softSkills: "Soft Skills"
        },
        es: {
            home: "Inicio",
            projects: "Proyectos",
            about: "Sobre mí",
            skills: "Habilidades",
            contact: "Contacto",
            welcome: "Bienvenido a mi página web",
            lead: "Hola, soy Marcos, un estudiante apasionado de Uruguay",
            explore: "Explora mis proyectos y conoce más sobre mi trayectoria.",
            viewWork: "Ver mi trabajo",
            aboutMeTitle: "Sobre mí",
            aboutMeContent: "Soy Marcos Betancor, un estudiante de Ing. En Computación en la Universidad de la República de Uruguay. Estoy dedicado a desarrollar mis habilidades en programación y resolución de problemas computacionales, siempre con ganas de ampliar mis conocimientos. Además de mi pasión por la tecnología, tengo un fuerte interés en las finanzas, especialmente en cómo las decisiones financieras influyen en los entornos empresariales y tecnológicos. Fuera de lo académico, encuntro mi lugar en el gimnasio y los deportes, donde he cultivado disciplina, resiliencia y una ética de trabajo que aplico en todas las áreas de mi vida.",
            project1: "vacío",
            project2: "vacío",
            project3: "vacío",
            programmingLanguages: "Lenguajes de Programación",
            frameworks: "Frameworks",
            tools: "Herramientas",
            languages: "Idiomas",
            name: "Nombre",
            email: "Correo electrónico",
            message: "Mensaje",
            send: "Enviar",
            communication: "Comunicación",
            initiative: "Iniciativa",
            problemSolving: "Resolución de problemas",
            teamwork: "Trabajo en equipo",
            creativity: "Creatividad",
            leadership: "Liderazgo",
            timeManagement: "Gestión del tiempo",
            adaptability: "Adaptabilidad",
            attentionToDetail: "Atención al detalle",
            softSkills: "Habilidades blandas"
        }
    };

    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    applyTranslations(currentLang, elementsToTranslate, translations);
    updateCVDownloadLink(currentLang); // Update CV download link on page load

    if (languageSwitcher) {
        languageSwitcher.value = currentLang;
        languageSwitcher.addEventListener('change', (event) => {
            currentLang = event.target.value;
            localStorage.setItem('selectedLanguage', currentLang);
            applyTranslations(currentLang, elementsToTranslate, translations);
            updateCVDownloadLink(currentLang); // Update CV download link when language changes
        });
    }
}

function applyTranslations(lang, elements, translations) {
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

function setupHamburgerMenu() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navBar-links');
    if (toggleButton && navbarLinks) {
        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }
}

function updateCVDownloadLink(lang) {
    const downloadLink = document.getElementById('download-cv');
    if (downloadLink) {
        if (lang === 'es') {
            downloadLink.href = 'docs/c.v-esp.pdf';
        } else {
            downloadLink.href = 'docs/c.v-eng.pdf';
        }
    }
}

// function initializeGoogleAnalytics() {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID`;
//     document.head.appendChild(script);

//     script.onload = () => {
//         window.dataLayer = window.dataLayer || [];
//         function gtag() {
//             dataLayer.push(arguments);
//         }
//         gtag('js', new Date());
//         gtag('config', 'YOUR_TRACKING_ID');
//     };
// }

// function setupThemeToggle() {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const currentTheme = localStorage.getItem('theme') || 'dark';
//     document.documentElement.setAttribute('data-theme', currentTheme);
//     themeToggleButton.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

//     themeToggleButton.addEventListener('click', () => {
//         const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//         document.documentElement.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//         themeToggleButton.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
//     });
// }
