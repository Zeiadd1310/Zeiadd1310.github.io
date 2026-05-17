const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'index.html');
let h = fs.readFileSync(file, 'utf8');
let n = 0;
function r(a, b) {
    if (!h.includes(a)) { console.warn('MISSING', a.slice(0, 70)); return; }
    h = h.replace(a, b); n++;
}

// Education
r('<span class="tag-pill purple mb-2" style="display:inline-block;">2022 – 2026</span>\n                            <h4 class="mb-1">Bachelor of Computer Science</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;">Faculty of Computers & AI, Fayoum University</p>',
  '<span class="tag-pill purple mb-2" style="display:inline-block;">2022 – 2026</span>\n                            <h4 class="mb-1" data-i18n="education.degree">Bachelor of Computer Science</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;" data-i18n="education.school">Faculty of Computers & AI, Fayoum University</p>');
r('<p class="mb-3" style="font-size:0.92rem;">Specializing in information systems and mobile application development with hands-on experience in Flutter & Dart, clean architecture (MVVM), and modern UI/UX practices.</p>',
  '<p class="mb-3" style="font-size:0.92rem;" data-i18n="education.desc">Specializing in information systems and mobile application development with hands-on experience in Flutter & Dart, clean architecture (MVVM), and modern UI/UX practices.</p>');

// Certificates
r('<span class="tag-pill mb-2" style="display:inline-block;">Jul – Aug 2025</span>\n                            <h4 class="mb-1">Mobile App Development</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;">Information Technology Institute (ITI)</p>',
  '<span class="tag-pill mb-2" style="display:inline-block;" data-i18n="cert.iti.period">Jul – Aug 2025</span>\n                            <h4 class="mb-1" data-i18n="cert.iti.title">Mobile App Development</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;" data-i18n="cert.iti.org">Information Technology Institute (ITI)</p>');
r('<p class="mb-2" style="font-size:0.92rem;">Intensive Flutter & Dart training with hands-on project development, clean architecture, and API integration.</p>',
  '<p class="mb-2" style="font-size:0.92rem;" data-i18n="cert.iti.desc">Intensive Flutter & Dart training with hands-on project development, clean architecture, and API integration.</p>');
h = h.split('<i class="fas fa-external-link-alt"></i> View Certificate').join('<i class="fas fa-external-link-alt"></i> <span data-i18n="cert.iti.view">View Certificate</span>');

r('<span class="tag-pill mb-2" style="display:inline-block;">Jun 2025 – Jun 2026</span>\n                            <h4 class="mb-1">Mobile Development Certificate</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;">Sprints</p>',
  '<span class="tag-pill mb-2" style="display:inline-block;" data-i18n="cert.sprints.period">Jun 2025 – Jun 2026</span>\n                            <h4 class="mb-1" data-i18n="cert.sprints.title">Mobile Development Certificate</h4>\n                            <p class="mb-0" style="color:var(--cyan); font-size:0.9rem;" data-i18n="cert.sprints.org">Sprints</p>');
r('<p class="mb-3" style="font-size:0.92rem;">Hands-on training focused on Flutter development and building real-world mobile applications.</p>',
  '<p class="mb-3" style="font-size:0.92rem;" data-i18n="cert.sprints.desc">Hands-on training focused on Flutter development and building real-world mobile applications.</p>');

// Experience DEPI
r('<span class="tl-date">Nov 2025 – Present</span>', '<span class="tl-date" data-i18n="exp.depi.date">Nov 2025 – Present</span>');
r('<h3 class="mb-1">Mobile Application Development Trainee</h3>\n                            <p style="color:var(--cyan); font-size:0.9rem; margin-bottom:16px;">Digital Egypt Pioneers Initiative (DEPI) · Cairo</p>',
  '<h3 class="mb-1" data-i18n="exp.depi.role">Mobile Application Development Trainee</h3>\n                            <p style="color:var(--cyan); font-size:0.9rem; margin-bottom:16px;" data-i18n="exp.depi.org">Digital Egypt Pioneers Initiative (DEPI) · Cairo</p>');
r('<p class="car-line"><strong>Challenge:</strong> Mastering advanced Flutter development and clean architecture within a professional, fast-paced training environment.</p>',
  '<p class="car-line" data-i18n-html="exp.depi.c"><strong>Challenge:</strong> Mastering advanced Flutter development and clean architecture within a professional, fast-paced training environment.</p>');
r('<p class="car-line"><strong>Action:</strong> Enrolled in the advanced mobile track, building practical projects using MVVM architecture, BLoC state management, and responsive UI design, while developing professional soft skills.</p>',
  '<p class="car-line" data-i18n-html="exp.depi.a"><strong>Action:</strong> Enrolled in the advanced mobile track, building practical projects using MVVM architecture, BLoC state management, and responsive UI design, while developing professional soft skills.</p>');
r('<p class="car-line"><strong>Result:</strong> Successfully delivering real-world projects with scalable, maintainable code and gaining hands-on experience in modern cross-platform development.</p>',
  '<p class="car-line" data-i18n-html="exp.depi.r"><strong>Result:</strong> Successfully delivering real-world projects with scalable, maintainable code and gaining hands-on experience in modern cross-platform development.</p>');

// Experience ITI  
r('<span class="tl-date" style="color:var(--accent); background:rgba(112,66,248,0.1); border-color:rgba(112,66,248,0.3);">Jul – Aug 2025</span>',
  '<span class="tl-date" style="color:var(--accent); background:rgba(112,66,248,0.1); border-color:rgba(112,66,248,0.3);" data-i18n="exp.iti.date">Jul – Aug 2025</span>');
r('<h3 class="mb-1">Flutter Development Training</h3>\n                            <p style="color:var(--cyan); font-size:0.9rem; margin-bottom:16px;">Information Technology Institute (ITI) · Online</p>',
  '<h3 class="mb-1" data-i18n="exp.iti.role">Flutter Development Training</h3>\n                            <p style="color:var(--cyan); font-size:0.9rem; margin-bottom:16px;" data-i18n="exp.iti.org">Information Technology Institute (ITI) · Online</p>');
r('<p class="car-line"><strong>Challenge:</strong> Rapidly mastering the Flutter framework and building production-ready mobile apps under a tight, intensive schedule.</p>',
  '<p class="car-line" data-i18n-html="exp.iti.c"><strong>Challenge:</strong> Rapidly mastering the Flutter framework and building production-ready mobile apps under a tight, intensive schedule.</p>');
r('<p class="car-line"><strong>Action:</strong> Completed a rigorous program covering Dart, Flutter UI/UX components, Firebase integration, and API consumption with real project delivery.</p>',
  '<p class="car-line" data-i18n-html="exp.iti.a"><strong>Action:</strong> Completed a rigorous program covering Dart, Flutter UI/UX components, Firebase integration, and API consumption with real project delivery.</p>');
r('<p class="car-line"><strong>Result:</strong> Achieved a 99% final evaluation score and built fully functional, Firebase-integrated mobile applications.</p>',
  '<p class="car-line" data-i18n-html="exp.iti.r"><strong>Result:</strong> Achieved a 99% final evaluation score and built fully functional, Firebase-integrated mobile applications.</p>');

// Projects status and github
h = h.replace(/<p class="project-num">PROJECT 01<\/p>/g, '<p class="project-num" data-i18n="projects.num1">PROJECT 01</p>');
h = h.replace(/<p class="project-num">PROJECT 02<\/p>/g, '<p class="project-num" data-i18n="projects.num2">PROJECT 02</p>');
h = h.replace(/<p class="project-num">PROJECT 03<\/p>/g, '<p class="project-num" data-i18n="projects.num3">PROJECT 03</p>');
h = h.replace(/<p class="project-num">PROJECT 04<\/p>/g, '<p class="project-num" data-i18n="projects.num4">PROJECT 04</p>');
h = h.replace(/<span class="project-status status-progress">In Progress<\/span>/g, '<span class="project-status status-progress" data-i18n="projects.inProgress">In Progress</span>');
h = h.replace(/<span class="project-status status-done">Completed<\/span>/g, '<span class="project-status status-done" data-i18n="projects.completed">Completed</span>');
h = h.replace(/<i class="fab fa-github"><\/i>View on GitHub/g, '<i class="fab fa-github"></i><span data-i18n="projects.github">View on GitHub</span>');

r('<h3 class="mb-1">MoveOn — Fitness App</h3>', '<h3 class="mb-1" data-i18n="projects.p1.title">MoveOn — Fitness App</h3>');
r('<h3 class="mb-1">MovieVerse — Movie Explorer</h3>', '<h3 class="mb-1" data-i18n="projects.p2.title">MovieVerse — Movie Explorer</h3>');
r('<h3 class="mb-1">Bookly App</h3>', '<h3 class="mb-1" data-i18n="projects.p3.title">Bookly App</h3>');
r('<h3 class="mb-1">News App</h3>', '<h3 class="mb-1" data-i18n="projects.p4.title">News App</h3>');

// Services
r('<h4 class="mb-2">App Development</h4>', '<h4 class="mb-2" data-i18n="services.app.title">App Development</h4>');
r('<p class="mb-3">Cross-platform Flutter apps for iOS & Android from a single, clean codebase.</p>',
  '<p class="mb-3" data-i18n="services.app.desc">Cross-platform Flutter apps for iOS & Android from a single, clean codebase.</p>');
r('<h4 class="mb-2">Backend Integration</h4>', '<h4 class="mb-2" data-i18n="services.api.title">Backend Integration</h4>');
r('<p class="mb-3">Seamless Firebase & REST API integration with secure auth and real-time data flow.</p>',
  '<p class="mb-3" data-i18n="services.api.desc">Seamless Firebase & REST API integration with secure auth and real-time data flow.</p>');
r('<h4 class="mb-2">UI/UX Implementation</h4>', '<h4 class="mb-2" data-i18n="services.ui.title">UI/UX Implementation</h4>');
r('<p class="mb-3">Pixel-perfect, responsive interfaces from Figma designs using Material Design principles.</p>',
  '<p class="mb-3" data-i18n="services.ui.desc">Pixel-perfect, responsive interfaces from Figma designs using Material Design principles.</p>');
r('<i class="fas fa-tags me-2"></i>View Pricing Plans', '<i class="fas fa-tags me-2"></i><span data-i18n="services.pricing">View Pricing Plans</span>');

// Achievements
r('<h5 class="mb-1">DEPI Selection</h5>', '<h5 class="mb-1" data-i18n="ach.depi.title">DEPI Selection</h5>');
r('<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;">Digital Egypt Pioneers Initiative</p>',
  '<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;" data-i18n="ach.depi.sub">Digital Egypt Pioneers Initiative</p>');
r('<p style="font-size:0.88rem;">Selected to join Egypt\'s prestigious national initiative for advanced mobile development training under MCIT.</p>',
  '<p style="font-size:0.88rem;" data-i18n="ach.depi.desc">Selected to join Egypt\'s prestigious national initiative for advanced mobile development training under MCIT.</p>');
r('<h5 class="mb-1">ITI</h5>', '<h5 class="mb-1" data-i18n="ach.iti.title">ITI</h5>');
r('<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;">Information Technology Institute</p>',
  '<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;" data-i18n="ach.iti.sub">Information Technology Institute</p>');
r('<p style="font-size:0.88rem;">Achieved a perfect score in the intensive Flutter & Dart mobile development program, demonstrating exceptional mastery.</p>',
  '<p style="font-size:0.88rem;" data-i18n="ach.iti.desc">Achieved a perfect score in the intensive Flutter & Dart mobile development program, demonstrating exceptional mastery.</p>');
r('<h5 class="mb-1">4+ Active Projects</h5>', '<h5 class="mb-1" data-i18n="ach.github.title">4+ Active Projects</h5>');
r('<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;">GitHub Open Source</p>',
  '<p style="color:var(--cyan); font-size:0.8rem; margin-bottom:8px;" data-i18n="ach.github.sub">GitHub Open Source</p>');
r('<p style="font-size:0.88rem;">Built and published 4 well-documented Flutter projects on GitHub, showcasing clean architecture and real-world API integration.</p>',
  '<p style="font-size:0.88rem;" data-i18n="ach.github.desc">Built and published 4 well-documented Flutter projects on GitHub, showcasing clean architecture and real-world API integration.</p>');

// Footer
r('<p style="color:var(--accent); font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:12px;">Let\'s Connect</p>',
  '<p style="color:var(--accent); font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:12px;" data-i18n="footer.connect">Let\'s Connect</p>');
r('<p style="font-size:0.92rem; margin-bottom:20px;">I\'m always open to discussing new Flutter projects, freelance opportunities, and collaborations to build great mobile experiences.</p>',
  '<p style="font-size:0.92rem; margin-bottom:20px;" data-i18n="footer.connectDesc">I\'m always open to discussing new Flutter projects, freelance opportunities, and collaborations to build great mobile experiences.</p>');
r('<p style="font-size:0.8rem; margin-bottom:20px;">Flutter Developer · Cairo, Egypt</p>',
  '<p style="font-size:0.8rem; margin-bottom:20px;" data-i18n="footer.tagline">Flutter Developer · Cairo, Egypt</p>');
r('<p style="color:var(--accent); font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:12px;">Who Am I?</p>',
  '<p style="color:var(--accent); font-weight:700; font-size:0.85rem; text-transform:uppercase; letter-spacing:2px; margin-bottom:12px;" data-i18n="footer.who">Who Am I?</p>');
r('<p style="font-size:0.92rem;">I\'m <strong style="color:#fff;">Zeiad Ramadan</strong>, a Flutter Developer passionate about building scalable, cross-platform mobile apps with clean architecture and seamless user experiences.</p>',
  '<p style="font-size:0.92rem;" data-i18n-html="footer.whoDesc">I\'m <strong style="color:#fff;">Zeiad Ramadan</strong>, a Flutter Developer passionate about building scalable, cross-platform mobile apps with clean architecture and seamless user experiences.</p>');
r('<p style="text-align:center; font-size:0.8rem; color:var(--muted);">© 2026 Zeiad Ramadan. All Rights Reserved. Built with <span style="color:var(--accent);">♥</span> & Code.</p>',
  '<p style="text-align:center; font-size:0.8rem; color:var(--muted);" data-i18n-html="footer.rights">© 2026 Zeiad Ramadan. All Rights Reserved. Built with <span style="color:var(--accent);">♥</span> & Code.</p>');

// Modal
r('<h4 class="fw-bold">Pricing Plans</h4>', '<h4 class="fw-bold" data-i18n="modal.title">Pricing Plans</h4>');
r('<p class="mb-4" style="color:var(--muted);">Flexible plans tailored to your project\'s scope and budget.</p>',
  '<p class="mb-4" style="color:var(--muted);" data-i18n="modal.sub">Flexible plans tailored to your project\'s scope and budget.</p>');

if (!h.includes('js/site.js')) {
    h = h.replace(
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>',
        '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>\n<script src="js/site.js"></script>'
    );
}

fs.writeFileSync(file, h);
console.log('Patched', n, 'blocks');
