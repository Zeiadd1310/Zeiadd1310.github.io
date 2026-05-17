const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let h = fs.readFileSync(file, 'utf8');
let missing = 0;

function r(from, to) {
    if (to === null) return;
    if (!h.includes(from)) {
        console.warn('MISSING:', from.slice(0, 90));
        missing++;
        return;
    }
    h = h.replace(from, to);
}

const pairs = [
    ['<a class="nav-link" href="#home">Home</a>', '<a class="nav-link" href="#home" data-i18n="nav.home">Home</a>'],
    ['<a class="nav-link" href="#about">About</a>', '<a class="nav-link" href="#about" data-i18n="nav.about">About</a>'],
    ['<a class="nav-link" href="#education">Education</a>', '<a class="nav-link" href="#education" data-i18n="nav.education">Education</a>'],
    ['<a class="nav-link" href="#certificates">Certificates</a>', '<a class="nav-link" href="#certificates" data-i18n="nav.certificates">Certificates</a>'],
    ['<a class="nav-link" href="#skills">Skills</a>', '<a class="nav-link" href="#skills" data-i18n="nav.skills">Skills</a>'],
    ['<a class="nav-link" href="#experience">Experience</a>', '<a class="nav-link" href="#experience" data-i18n="nav.experience">Experience</a>'],
    ['<a class="nav-link" href="#projects">Projects</a>', '<a class="nav-link" href="#projects" data-i18n="nav.projects">Projects</a>'],
    ['<a class="nav-link" href="#services">Services</a>', '<a class="nav-link" href="#services" data-i18n="nav.services">Services</a>'],
    ['<a class="nav-link" href="#achievements">Achievements</a>', '<a class="nav-link" href="#achievements" data-i18n="nav.achievements">Achievements</a>'],
    ["<p class=\"hero-eyebrow\" style=\"font-family:'Open Sans', sans-serif;\">// Hello, I'm</p>", "<p class=\"hero-eyebrow\" style=\"font-family:'Open Sans', sans-serif;\" data-i18n=\"hero.eyebrow\">// Hello, I'm</p>"],
    ['<p class="hero-role">Flutter Developer · Cross-Platform Mobile</p>', '<p class="hero-role" data-i18n="hero.role">Flutter Developer · Cross-Platform Mobile</p>'],
    ['<p class="hero-desc">Building scalable, user-friendly mobile applications with clean architecture, beautiful UI, and real-world impact.</p>', '<p class="hero-desc" data-i18n="hero.desc">Building scalable, user-friendly mobile applications with clean architecture, beautiful UI, and real-world impact.</p>'],
    ['<a href="#projects" class="btn-primary-glow">View My Work</a>', '<a href="#projects" class="btn-primary-glow" data-i18n="hero.work">View My Work</a>'],
    ['class="btn-ghost"><i class="fas fa-download me-2"></i>Download CV</a>', 'class="btn-ghost" data-i18n="hero.cv"><i class="fas fa-download me-2"></i>Download CV</a>'],
    ['<span class="badge-dot" style="background:#7042f8;"></span>Flutter · Dart', '<span class="badge-dot" style="background:#7042f8;"></span><span data-i18n="hero.badge1">Flutter · Dart</span>'],
    ['<span class="badge-dot" style="background:#00e5ff;"></span>Clean Architecture', '<span class="badge-dot" style="background:#00e5ff;"></span><span data-i18n="hero.badge2">Clean Architecture</span>'],
    ['<span class="badge-dot" style="background:#00e564;"></span>DEPI · ITI', '<span class="badge-dot" style="background:#00e564;"></span><span data-i18n="hero.badge3">DEPI · ITI</span>'],
    ['<h2 class="section-title"><span class="accent-line"></span>About Me</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="about.title">About Me</span></h2>'],
    ["<p class=\"mb-3\">I'm a <strong style=\"color:#fff;\">Flutter Developer</strong> from Cairo, Egypt, passionate about crafting high-performance cross-platform mobile apps. I specialize in clean architecture (MVVM), BLoC/Cubit state management, and seamless API integration — building products that are both robust and delightful to use.</p>", '<p class="mb-3" data-i18n-html="about.p1">I\'m a <strong style="color:#fff;">Flutter Developer</strong> from Cairo, Egypt, passionate about crafting high-performance cross-platform mobile apps. I specialize in clean architecture (MVVM), BLoC/Cubit state management, and seamless API integration — building products that are both robust and delightful to use.</p>'],
    ['<motion.div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></div>', null],
    ['<div class="col-4"><div class="stat-chip"><span class="num">4+</span><motion.div class="label">Projects</div></div></div>', null],
    ['<div class="col-4"><div class="stat-chip"><span class="num">4+</span><motion.div class="label">Projects</motion.div></motion.div></motion.div>', null],
    ['<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></motion.div>', null],
    ['<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></motion.div>', '<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label" data-i18n="about.stat1">Projects</div></div></div>'],
    ['<motion.div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></motion.div>', null],
    ['<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></div>', '<motion.div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label" data-i18n="about.stat1">Projects</div></div></div>'],
];

// Remove duplicate/wrong entries - use clean list only
const clean = pairs.filter(p => p[1] !== null && !p[0].includes('motion'));

for (const [from, to] of clean) {
    r(from, to);
}

// Stat chips - exact from file
r('<motion.div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></motion.div>', null);
r('<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label">Projects</div></div></div>', '<div class="col-4"><div class="stat-chip"><span class="num">4+</span><div class="label" data-i18n="about.stat1">Projects</div></div></div>');
r('<div class="col-4"><div class="stat-chip"><span class="num">100%</span><motion.div class="label">ITI Score</motion.div></motion.div></motion.div>', null);
r('<div class="col-4"><div class="stat-chip"><span class="num">100%</span><div class="label">ITI Score</div></div></div>', '<div class="col-4"><div class="stat-chip"><span class="num">100%</span><div class="label" data-i18n="about.stat2">ITI Score</div></div></div>');
r('<div class="col-4"><div class="stat-chip"><span class="num">2+</span><div class="label">Years Study</div></div></div>', '<div class="col-4"><div class="stat-chip"><span class="num">2+</span><div class="label" data-i18n="about.stat3">Years Study</div></div></div>');

r('<p class="section-label mb-3">Quick Info</p>', '<p class="section-label mb-3" data-i18n="about.quick">Quick Info</p>');
r('<span style="color:var(--text);">Cairo, Egypt</span>', '<span style="color:var(--text);" data-i18n="about.location">Cairo, Egypt</span>');
r('<span style="color:var(--text);">Information Systems @ Fayoum University (2022–2026)</span>', '<span style="color:var(--text);" data-i18n="about.university">Information Systems @ Fayoum University (2022–2026)</span>');
r('<span style="color:var(--text);">DEPI Mobile Dev Trainee</span>', '<span style="color:var(--text);" data-i18n="about.depi">DEPI Mobile Dev Trainee</span>');
r('<span style="color:var(--text);">ITI Flutter Certificate — 100%</span>', '<span style="color:var(--text);" data-i18n="about.iti">ITI Flutter Certificate — 100%</span>');

r('<h2 class="section-title"><span class="accent-line"></span>Education</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="education.title">Education</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>Certificates</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="cert.title">Certificates</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>My Skills</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="skills.title">My Skills</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>Experience</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="exp.title">Experience</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>Featured Projects</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="projects.title">Featured Projects</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>My Services</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="services.title">My Services</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>Achievements</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="ach.title">Achievements</span></h2>');
r('<h2 class="section-title"><span class="accent-line"></span>Get In Touch</h2>', '<h2 class="section-title"><span class="accent-line"></span><span data-i18n="contact.title">Get In Touch</span></h2>');

r('<button class="skill-tab-btn active" data-tab="tech">Technical</button>', '<button class="skill-tab-btn active" data-tab="tech" data-i18n="skills.tech">Technical</button>');
r('<button class="skill-tab-btn" data-tab="soft">Soft Skills</button>', '<button class="skill-tab-btn" data-tab="soft" data-i18n="skills.soft">Soft Skills</button>');
r('<button class="skill-tab-btn" data-tab="tools">Tools</button>', '<button class="skill-tab-btn" data-tab="tools" data-i18n="skills.tools">Tools</button>');
r('<button class="skill-tab-btn" data-tab="lang">Languages</button>', '<button class="skill-tab-btn" data-tab="lang" data-i18n="skills.langTab">Languages</button>');
r('<div class="skill-chip"><i style="color:#00e564;" class="fas fa-star"></i><span>Arabic — Native</span></div>', '<div class="skill-chip"><i style="color:#00e564;" class="fas fa-star"></i><span data-i18n="skills.arabic">Arabic — Native</span></div>');
r('<div class="skill-chip"><i style="color:#7042f8;" class="fas fa-language"></i><span>English — Intermediate</span></div>', '<div class="skill-chip"><i style="color:#7042f8;" class="fas fa-language"></i><span data-i18n="skills.english">English — Intermediate</span></motion.div>');

r('<p class="section-sub">Open to freelance work, collaborations, and full-time opportunities. Let\'s build something great together.</p>', '<p class="section-sub" data-i18n="contact.sub">Open to freelance work, collaborations, and full-time opportunities. Let\'s build something great together.</p>');
r('<div><h6>Email</h6>', '<div><h6 data-i18n="contact.email">Email</h6>');
r('<div><h6>Phone</h6>', '<motion.div><h6 data-i18n="contact.phone">Phone</h6>');
r('<div><h6>WhatsApp</h6>', '<div><h6 data-i18n="contact.whatsapp">WhatsApp</h6>');

r('name="name" placeholder="Your Name"', 'name="name" placeholder="Your Name" data-i18n-placeholder="contact.namePh"');
r('name="email" placeholder="Your Email"', 'name="email" placeholder="Your Email" data-i18n-placeholder="contact.emailPh"');
r('name="subject" placeholder="Subject"', 'name="subject" placeholder="Subject" data-i18n-placeholder="contact.subjectPh"');
r('name="message" placeholder="Tell me about your project..."', 'name="message" placeholder="Tell me about your project..." data-i18n-placeholder="contact.messagePh"');
r('id="submitBtn" class="btn-primary-glow w-100" style="border:none; cursor:pointer; text-align:center;">\n                        Send Message <i class="fas fa-paper-plane ms-2"></i>', 'id="submitBtn" class="btn-primary-glow w-100" style="border:none; cursor:pointer; text-align:center;" data-i18n="contact.send">\n                        Send Message <i class="fas fa-paper-plane ms-2"></i>');

r(">Let's Connect</p>", '>Let\'s Connect</p>', null);

fs.writeFileSync(file, h);
console.log('Missing:', missing);
