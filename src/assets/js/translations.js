// Traductor
const translations = {
    en: {
        'home': 'Home',
        'about': 'About',
        'skills': 'Skills',
        'projects': 'Projects',
        'contact': 'Contact',
        'welcome': 'Welcome to My Portfolio',
        'hero-subtitle': 'Computer Science Student | Web Developer',
        'hero-description': 'Passionate about technology and innovation, currently pursuing a degree in Computer Science.',
        'view-projects': 'View Projects',
        'contact-me': 'Contact Me',
        'about-title': 'About Me',
        'about-intro': 'Hi! I\'m Marcos Betancor, a passionate Computer Science student from Tala, Uruguay.',
        'about-description': 'Currently pursuing my degree, I\'m deeply interested in web development, software engineering, and emerging technologies. I love solving complex problems and creating innovative solutions that make a difference.',
        'about-interests': 'When I\'m not coding, you can find me exploring new technologies, or working on personal projects that challenge my skills and creativity.',
        'years-experience': 'Years Learning',
        'projects-completed': 'Projects',
        'technologies': 'Technologies',
        'download-cv': 'Download CV',
        'get-in-touch': 'Get In Touch',
        'skills-title': 'My Skills',
        'web-development': 'Web Development',
        'programming-languages': 'Programming Languages',
        'backend-database': 'Backend & Database',
        'languages': 'Languages',
        'english': 'English (Fluent)',
        'spanish': 'Spanish (Native)',
        'web-technologies': 'Web Technologies',
        'tools-frameworks': 'Tools & Frameworks',
        'soft-skills': 'Soft Skills',
        'problem-solving': 'Problem Solving',
        'teamwork': 'Teamwork',
        'communication': 'Communication',
        'adaptability': 'Adaptability',
        'creativity': 'Creativity',
        'time-management': 'Time Management',
        'projects-title': 'My Projects',
        'filter-all': 'All',
        'filter-web': 'Web Development',
        'filter-app': 'Applications',
        'project-restaurant-title': 'Restaurant Ecommerce',
        'project-restaurant-desc': 'A modern restaurant website built with Next.js and React, featuring online ordering system with MercadoPago payment integration, responsive design with Tailwind CSS, and Firebase backend for real-time data management.',
        'project-business-title': 'Business Website',
        'project-business-desc': 'A modern website for a business featuring responsive design, interactive elements, and optimized user experience for showcasing services and content.',
        'project-finance-title': 'Finance',
        'project-finance-desc': 'Finance app is a web application that allows users to simulate buying and selling stocks, tracking their portfolio, and viewing transaction history. It integrates real-time stock data and requires user authentication for a personalized experience.',
        'project-art-title': 'Art Website',
        'project-art-desc': 'An elegant art portfolio website showcasing creative works with modern design, image galleries, and responsive layout for optimal viewing.',
        'footer-subtitle': 'Computer Science Student | Web Developer',
        'footer-rights': 'All rights reserved.',
        'contact-title': 'Get In Touch',
        'name': 'Name',
        'email': 'Email',
        'subject': 'Subject',
        'message': 'Message',
        'send-message': 'Send Message',
        'location': 'Location',
        'phone': 'Phone'
    },
    es: {
        'home': 'Inicio',
        'about': 'Acerca de',
        'skills': 'Habilidades',
        'projects': 'Proyectos',
        'contact': 'Contacto',
        'welcome': 'Bienvenido a Mi Portafolio',
        'hero-subtitle': 'Estudiante Tec. En Informática | Desarrollador Web',
        'hero-description': 'Apasionado por la tecnología e innovación, actualmente estudiando Tec. En Informática.',
        'view-projects': 'Ver Proyectos',
        'contact-me': 'Contáctame',
        'about-title': 'Acerca de Mí',
        'about-intro': '¡Hola! Soy Marcos Betancor, un apasionado estudiante de Tec. En Informática.',
        'about-description': 'Actualmente cursando mi carrera, estoy profundamente interesado en el desarrollo web, ingeniería de software y tecnologías emergentes. Me encanta resolver problemas complejos y crear soluciones innovadoras que marquen la diferencia.',
        'about-interests': 'Cuando no estoy programando, puedes encontrarme explorando nuevas tecnologías, o trabajando en proyectos personales que desafían mis habilidades y creatividad.',
        'years-experience': 'Años Aprendiendo',
        'projects-completed': 'Proyectos',
        'technologies': 'Tecnologías',
        'download-cv': 'Descargar CV',
        'get-in-touch': 'Ponte en Contacto',
        'skills-title': 'Mis Habilidades',
        'web-development': 'Desarrollo Web',
        'programming-languages': 'Lenguajes de Programación',
        'backend-database': 'Backend y Base de Datos',
        'languages': 'Idiomas',
        'english': 'Inglés (Fluente)',
        'spanish': 'Español (Nativo)',
        'web-technologies': 'Tecnologías Web',
        'tools-frameworks': 'Herramientas y Frameworks',
        'soft-skills': 'Habilidades Blandas',
        'problem-solving': 'Resolución de Problemas',
        'teamwork': 'Trabajo en Equipo',
        'communication': 'Comunicación',
        'adaptability': 'Adaptabilidad',
        'creativity': 'Creatividad',
        'time-management': 'Gestión del Tiempo',
        'projects-title': 'Mis Proyectos',
        'filter-all': 'Todos',
        'filter-web': 'Desarrollo Web',
        'filter-app': 'Aplicaciones',
        'project-restaurant-title': 'Ecommerce de Restaurante',
        'project-restaurant-desc': 'Un sitio web moderno para restaurante construido con Next.js y React, con sistema de pedidos en línea con integración de MercadoPago, diseño responsivo con Tailwind CSS, y backend Firebase para gestión de datos en tiempo real.',
        'project-business-title': 'Sitio Web Empresarial',
        'project-business-desc': 'Un sitio web moderno para una empresa con diseño responsivo, elementos interactivos y experiencia de usuario optimizada para mostrar servicios y contenido.',
        'project-finance-title': 'Finanzas',
        'project-finance-desc': 'La aplicación Finance es una aplicación web que permite a los usuarios simular la compra y venta de acciones, hacer seguimiento de su portafolio y ver el historial de transacciones. Integra datos de acciones en tiempo real y requiere autenticación de usuario para una experiencia personalizada.',
        'project-art-title': 'Sitio Web de Arte',
        'project-art-desc': 'Un elegante sitio web de portafolio de arte que muestra trabajos creativos con diseño moderno, galerías de imágenes y diseño responsivo para una visualización óptima.',
        'footer-subtitle': 'Estudiante Tec. En Informática | Desarrollador Web',
        'footer-rights': 'Todos los derechos reservados.',
        'contact-title': 'Ponte en Contacto',
        'name': 'Nombre',
        'email': 'Correo Electrónico',
        'subject': 'Asunto',
        'message': 'Mensaje',
        'send-message': 'Enviar Mensaje',
        'location': 'Ubicación',
        'phone': 'Teléfono'
    }
};

// Aplicar traducciones a los data-lang
function applyTranslations(language) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
}

// Cambia el cv dependiendo del idioma
function updateCVDownloadLink(language) {
    const cvLink = document.querySelector('[data-lang="download-cv"]');
    if (cvLink) {
        const href = language === 'es' ? 'assets/docs/c.v-esp.pdf' : 'assets/docs/c.v-eng.pdf';
        cvLink.setAttribute('href', href);
    }
}

function setupLanguageSwitcher() {
    const languageSwitcher = document.getElementById('language-switcher');
    if (!languageSwitcher) return;
    
    languageSwitcher.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        applyTranslations(selectedLanguage);
        updateCVDownloadLink(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });
}

// Guarda el idioma 
function applySavedLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const languageSwitcher = document.getElementById('language-switcher');
    
    if (languageSwitcher) {
        languageSwitcher.value = savedLanguage;
        applyTranslations(savedLanguage);
        updateCVDownloadLink(savedLanguage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupLanguageSwitcher();
    applySavedLanguage();
});
