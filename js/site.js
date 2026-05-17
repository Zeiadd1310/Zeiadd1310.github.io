(function () {
    'use strict';

    const STORAGE_THEME = 'portfolio-theme';
    const STORAGE_LANG = 'portfolio-lang';

    const translations = {
        en: {
            'meta.title': 'Zeiad Ramadan | Flutter Developer',
            'hero.name': 'Zeiad<br><span class="accent-word">Ramadan</span>',
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.education': 'Education',
            'nav.certificates': 'Certificates',
            'nav.skills': 'Skills',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.services': 'Services',
            'nav.achievements': 'Achievements',
            'hero.eyebrow': "// Hello, I'm",
            'hero.role': 'Flutter Developer · Cross-Platform Mobile',
            'hero.desc': 'Building scalable, user-friendly mobile applications with clean architecture, beautiful UI, and real-world impact.',
            'hero.work': 'View My Work',
            'hero.cv': 'Download CV',
            'hero.badge1': 'Flutter · Dart',
            'hero.badge2': 'Clean Architecture',
            'hero.badge3': 'DEPI · ITI',
            'about.title': 'About Me',
            'about.p1': 'I\'m a <strong>Flutter Developer</strong> from Cairo, Egypt, passionate about crafting high-performance cross-platform mobile apps. I specialize in clean architecture (MVVM), BLoC/Cubit state management, and seamless API integration — building products that are both robust and delightful to use.',
            'about.p2': 'Currently enrolled in the <strong>Digital Egypt Pioneers Initiative (DEPI)</strong> and holding a Flutter certificate from <strong>ITI</strong>, I continuously sharpen my skills through real-world projects. My goal is to contribute to a professional team while pushing the boundaries of what mobile apps can do.',
            'about.stat1': 'Projects',
            'about.stat2': 'ITI Score',
            'about.stat3': 'Years Study',
            'about.quick': 'Quick Info',
            'about.location': 'Cairo, Egypt',
            'about.university': 'Information Systems @ Fayoum University (2022–2026)',
            'about.depi': 'DEPI Mobile Dev Trainee',
            'about.iti': 'ITI Flutter Certificate — 100%',
            'education.title': 'Education',
            'education.period': '2022 – 2026',
            'education.degree': 'Bachelor of Computer Science',
            'education.school': 'Faculty of Computers & AI, Fayoum University',
            'education.desc': 'Specializing in information systems and mobile application development with hands-on experience in Flutter & Dart, clean architecture (MVVM), and modern UI/UX practices.',
            'cert.title': 'Certificates',
            'cert.iti.period': 'Jul – Aug 2025',
            'cert.iti.title': 'Mobile App Development',
            'cert.iti.org': 'Information Technology Institute (ITI)',
            'cert.iti.desc': 'Intensive Flutter & Dart training with hands-on project development, clean architecture, and API integration.',
            'cert.iti.view': 'View Certificate',
            'cert.sprints.period': 'Jun 2025 – Jun 2026',
            'cert.sprints.title': 'Mobile Development Certificate',
            'cert.sprints.org': 'Sprints',
            'cert.sprints.desc': 'Hands-on training focused on Flutter development and building real-world mobile applications.',
            'skills.title': 'My Skills',
            'skills.tech': 'Technical',
            'skills.soft': 'Soft Skills',
            'skills.tools': 'Tools',
            'skills.langTab': 'Languages',
            'skills.arabic': 'Arabic — Native',
            'skills.english': 'English — Intermediate',
            'exp.title': 'Experience',
            'exp.depi.date': 'Nov 2025 – Present',
            'exp.depi.role': 'Mobile Application Development Trainee',
            'exp.depi.org': 'Digital Egypt Pioneers Initiative (DEPI) · Cairo',
            'exp.depi.c': '<strong>Challenge:</strong> Mastering advanced Flutter development and clean architecture within a professional, fast-paced training environment.',
            'exp.depi.a': '<strong>Action:</strong> Enrolled in the advanced mobile track, building practical projects using MVVM architecture, BLoC state management, and responsive UI design, while developing professional soft skills.',
            'exp.depi.r': '<strong>Result:</strong> Successfully delivering real-world projects with scalable, maintainable code and gaining hands-on experience in modern cross-platform development.',
            'exp.iti.date': 'Jul – Aug 2025',
            'exp.iti.role': 'Flutter Development Training',
            'exp.iti.org': 'Information Technology Institute (ITI) · Online',
            'exp.iti.c': '<strong>Challenge:</strong> Rapidly mastering the Flutter framework and building production-ready mobile apps under a tight, intensive schedule.',
            'exp.iti.a': '<strong>Action:</strong> Completed a rigorous program covering Dart, Flutter UI/UX components, Firebase integration, and API consumption with real project delivery.',
            'exp.iti.r': '<strong>Result:</strong> Achieved a 99% final evaluation score and built fully functional, Firebase-integrated mobile applications.',
            'projects.title': 'Featured Projects',
            'projects.num1': 'PROJECT 01',
            'projects.num2': 'PROJECT 02',
            'projects.num3': 'PROJECT 03',
            'projects.num4': 'PROJECT 04',
            'projects.inProgress': 'In Progress',
            'projects.completed': 'Completed',
            'projects.github': 'View on GitHub',
            'projects.p1.title': 'MoveOn — Fitness App',
            'projects.p1.sub': 'Graduation Project · Fayoum University',
            'projects.p2.sub': 'Graduation Project · DEPI',
            'projects.p3.sub': 'Personal Project',
            'projects.p4.sub': 'Personal Project',
            'projects.p1.c': '<strong style="color:var(--accent);">Challenge:</strong> Building a comprehensive fitness companion covering workouts and nutrition without internet dependency.',
            'projects.p1.a': '<strong style="color:var(--accent);">Action:</strong> Implemented MVVM + BLoC/Cubit architecture with local data persistence via Shared Preferences for a seamless offline experience.',
            'projects.p1.r': '<strong style="color:var(--accent);">Result:</strong> A personal-trainer-like app with clean, scalable architecture ready for deployment.',
            'projects.p2.title': 'MovieVerse — Movie Explorer',
            'projects.p2.sub': 'Graduation Project · DEPI',
            'projects.p2.c': '<strong style="color:var(--accent);">Challenge:</strong> Developing an IMDb-like experience with real-time movie data, ratings, and a persistent watchlist.',
            'projects.p2.a': '<strong style="color:var(--accent);">Action:</strong> Integrated movie APIs with BLoC state management and local storage for watchlist and user ratings persistence.',
            'projects.p2.r': '<strong style="color:var(--accent);">Result:</strong> A polished movie explorer app with full cast details, reviews, and seamless offline watchlist access.',
            'projects.p3.title': 'Bookly App',
            'projects.p3.sub': 'Personal Project',
            'projects.p3.c': '<strong style="color:var(--accent);">Challenge:</strong> Creating a clean, searchable book browser powered by the Google Books API with a smooth reading experience.',
            'projects.p3.a': '<strong style="color:var(--accent);">Action:</strong> Built with MVVM architecture and repository pattern using BLoC, consuming Google Books API with full search functionality.',
            'projects.p3.r': '<strong style="color:var(--accent);">Result:</strong> A feature-complete book discovery app with the latest titles available for reading and download.',
            'projects.p4.title': 'News App',
            'projects.p4.sub': 'Personal Project',
            'projects.p4.c': '<strong style="color:var(--accent);">Challenge:</strong> Fetching and presenting categorized live news in a clean, easy-to-browse interface.',
            'projects.p4.a': '<strong style="color:var(--accent);">Action:</strong> Consumed a news REST API and organized articles by category with a smooth browsing experience.',
            'projects.p4.r': '<strong style="color:var(--accent);">Result:</strong> A responsive, category-driven news reader delivering real-time articles in a clean Flutter UI.',
            'services.title': 'My Services',
            'services.app.title': 'App Development',
            'services.app.desc': 'Cross-platform Flutter apps for iOS & Android from a single, clean codebase.',
            'services.api.title': 'Backend Integration',
            'services.api.desc': 'Seamless Firebase & REST API integration with secure auth and real-time data flow.',
            'services.ui.title': 'UI/UX Implementation',
            'services.ui.desc': 'Pixel-perfect, responsive interfaces from Figma designs using Material Design principles.',
            'services.pricing': 'View Pricing Plans',
            'ach.title': 'Achievements',
            'ach.depi.title': 'DEPI Selection',
            'ach.depi.sub': 'Digital Egypt Pioneers Initiative',
            'ach.depi.desc': 'Selected to join Egypt\'s prestigious national initiative for advanced mobile development training under MCIT.',
            'ach.iti.title': 'ITI',
            'ach.iti.sub': 'Information Technology Institute',
            'ach.iti.desc': 'Achieved a perfect score in the intensive Flutter & Dart mobile development program, demonstrating exceptional mastery.',
            'ach.github.title': '4+ Active Projects',
            'ach.github.sub': 'GitHub Open Source',
            'ach.github.desc': 'Built and published 4 well-documented Flutter projects on GitHub, showcasing clean architecture and real-world API integration.',
            'contact.title': 'Get In Touch',
            'contact.sub': 'Open to freelance work, collaborations, and full-time opportunities. Let\'s build something great together.',
            'contact.email': 'Email',
            'contact.phone': 'Phone',
            'contact.whatsapp': 'WhatsApp',
            'contact.namePh': 'Your Name',
            'contact.emailPh': 'Your Email',
            'contact.subjectPh': 'Subject',
            'contact.messagePh': 'Tell me about your project...',
            'contact.send': 'Send Message',
            'contact.sending': 'Sending...',
            'contact.sent': 'Message Sent!',
            'contact.success': '✓ Message sent! I will get back to you soon.',
            'contact.error': '✗ Something went wrong. Please email me directly.',
            'footer.connect': 'Let\'s Connect',
            'footer.connectDesc': 'I\'m always open to discussing new Flutter projects, freelance opportunities, and collaborations to build great mobile experiences.',
            'footer.tagline': 'Flutter Developer · Cairo, Egypt',
            'footer.who': 'Who Am I?',
            'footer.whoDesc': 'I\'m <strong style="color:#fff;">Zeiad Ramadan</strong>, a Flutter Developer passionate about building scalable, cross-platform mobile apps with clean architecture and seamless user experiences.',
            'footer.rights': '© 2026 Zeiad Ramadan. All Rights Reserved. Built with <span style="color:var(--accent);">♥</span> & Code.',
            'modal.title': 'Pricing Plans',
            'modal.sub': 'Flexible plans tailored to your project\'s scope and budget.',
            'modal.starter': 'Starter',
            'modal.basic': 'Basic',
            'modal.standard': 'Standard',
            'modal.pro': 'Pro',
            'modal.popular': 'Most Popular',
            'modal.premium': 'Premium',
            'modal.enterprise': 'Enterprise',
            'modal.custom': 'Custom',
            'modal.letsTalk': 'Let\'s Talk',
            'modal.choose': 'Choose Plan',
            'modal.contact': 'Contact Me',
            'modal.f1': 'Simple Flutter UI',
            'modal.f2': 'Basic Features',
            'modal.f3': 'Up to 3 Revisions',
            'modal.f4': 'Email Support',
            'modal.f5': '5–7 Day Delivery',
            'modal.f6': 'Custom UI/UX Design',
            'modal.f7': 'API Integration',
            'modal.f8': 'Up to 7 Revisions',
            'modal.f9': 'Priority Chat Support',
            'modal.f10': 'Source Code Provided',
            'modal.f11': 'Full App Development',
            'modal.f12': 'Firebase + Admin Panel',
            'modal.f13': 'Unlimited Revisions',
            'modal.f14': '24/7 Premium Support',
            'modal.f15': '1 Month Free Maintenance',
            'modal.f16': 'Enterprise-Grade Solutions',
            'modal.f17': 'Custom Architecture',
            'modal.f18': 'Dedicated Support',
            'modal.f19': 'Long-term Maintenance',
            'modal.f20': 'Tailored to Your Needs',
            'ui.themeLight': 'Switch to light mode',
            'ui.themeDark': 'Switch to dark mode',
            'ui.langSwitch': 'Switch language'
        },
        ar: {
            'meta.title': 'زياد رمضان | مطور فلاتر',
            'hero.name': 'زياد<br><span class="accent-word">رمضان</span>',
            'nav.home': 'الرئيسية',
            'nav.about': 'عني',
            'nav.education': 'التعليم',
            'nav.certificates': 'الشهادات',
            'nav.skills': 'المهارات',
            'nav.experience': 'الخبرة',
            'nav.projects': 'المشاريع',
            'nav.services': 'الخدمات',
            'nav.achievements': 'الإنجازات',
            'hero.eyebrow': '// مرحباً، أنا',
            'hero.role': 'مطور فلاتر · تطبيقات متعددة المنصات',
            'hero.desc': 'أبني تطبيقات موبايل قابلة للتوسع وسهلة الاستخدام بهندسة نظيفة وواجهات جميلة وتأثير حقيقي.',
            'hero.work': 'عرض أعمالي',
            'hero.cv': 'تحميل السيرة الذاتية',
            'hero.badge1': 'فلاتر · دارت',
            'hero.badge2': 'هندسة نظيفة',
            'hero.badge3': 'مبادرة رواد · ITI',
            'about.title': 'نبذة عني',
            'about.p1': 'أنا <strong>مطور فلاتر</strong> من القاهرة، مصر، شغوف ببناء تطبيقات موبايل عالية الأداء. أتخصص في الهندسة النظيفة (MVVM)، وإدارة الحالة BLoC/Cubit، وتكامل واجهات برمجة التطبيقات — لمنتجات قوية وممتعة الاستخدام.',
            'about.p2': 'أنا حالياً ضمن <strong>مبادرة رواد مصر الرقمية (DEPI)</strong> وحاصل على شهادة فلاتر من <strong>ITI</strong>، وأطور مهاراتي باستمرار عبر مشاريع واقعية. هدفي المساهمة في فريق محترف ودفع حدود ما يمكن لتطبيقات الموبايل تحقيقه.',
            'about.stat1': 'مشاريع',
            'about.stat2': 'درجة ITI',
            'about.stat3': 'سنوات دراسة',
            'about.quick': 'معلومات سريعة',
            'about.location': 'القاهرة، مصر',
            'about.university': 'نظم المعلومات · جامعة الفيوم (2022–2026)',
            'about.depi': 'متدرب تطوير موبايل — مبادرة رواد',
            'about.iti': 'شهادة فلاتر ITI — 100%',
            'education.title': 'التعليم',
            'education.period': '2022 – 2026',
            'education.degree': 'بكالوريوس علوم الحاسب',
            'education.school': 'كلية الحاسبات والذكاء الاصطناعي، جامعة الفيوم',
            'education.desc': 'تخصص في نظم المعلومات وتطوير تطبيقات الموبايل مع خبرة عملية في فلاتر ودارت والهندسة النظيفة (MVVM) وممارسات UI/UX الحديثة.',
            'cert.title': 'الشهادات',
            'cert.iti.period': 'يوليو – أغسطس 2025',
            'cert.iti.title': 'تطوير تطبيقات الموبايل',
            'cert.iti.org': 'معهد تكنولوجيا المعلومات (ITI)',
            'cert.iti.desc': 'تدريب مكثف على فلاتر ودارت مع مشاريع عملية وهندسة نظيفة وتكامل API.',
            'cert.iti.view': 'عرض الشهادة',
            'cert.sprints.period': 'يونيو 2025 – يونيو 2026',
            'cert.sprints.title': 'شهادة تطوير الموبايل',
            'cert.sprints.org': 'Sprints',
            'cert.sprints.desc': 'تدريب عملي يركز على فلاتر وبناء تطبيقات موبايل واقعية.',
            'skills.title': 'مهاراتي',
            'skills.tech': 'تقنية',
            'skills.soft': 'مهارات شخصية',
            'skills.tools': 'أدوات',
            'skills.langTab': 'لغات',
            'skills.arabic': 'العربية — لغة أم',
            'skills.english': 'الإنجليزية — متوسط',
            'exp.title': 'الخبرة',
            'exp.depi.date': 'نوفمبر 2025 – حتى الآن',
            'exp.depi.role': 'متدرب تطوير تطبيقات الموبايل',
            'exp.depi.org': 'مبادرة رواد مصر الرقمية (DEPI) · القاهرة',
            'exp.depi.c': '<strong>التحدي:</strong> إتقان فلاتر المتقدم والهندسة النظيفة في بيئة تدريب احترافية سريعة.',
            'exp.depi.a': '<strong>الإجراء:</strong> الانضمام للمسار المتقدم وبناء مشاريع عملية بـ MVVM وBLoC وتصميم واجهات متجاوبة وتطوير المهارات الناعمة.',
            'exp.depi.r': '<strong>النتيجة:</strong> تسليم مشاريع واقعية بكود قابل للتوسع وخبرة عملية في التطوير متعدد المنصات.',
            'exp.iti.date': 'يوليو – أغسطس 2025',
            'exp.iti.role': 'تدريب تطوير فلاتر',
            'exp.iti.org': 'معهد تكنولوجيا المعلومات (ITI) · أونلاين',
            'exp.iti.c': '<strong>التحدي:</strong> إتقان فلاتر بسرعة وبناء تطبيقات جاهزة للإنتاج ضمن جدول مكثف.',
            'exp.iti.a': '<strong>الإجراء:</strong> إكمال برنامج يشمل دارت ومكونات UI/UX وفايربيس واستهلاك API مع تسليم مشاريع.',
            'exp.iti.r': '<strong>النتيجة:</strong> تحقيق 99% في التقييم النهائي وبناء تطبيقات متكاملة مع فايربيس.',
            'projects.title': 'مشاريع مميزة',
            'projects.num1': 'مشروع 01',
            'projects.num2': 'مشروع 02',
            'projects.num3': 'مشروع 03',
            'projects.num4': 'مشروع 04',
            'projects.inProgress': 'قيد التنفيذ',
            'projects.completed': 'مكتمل',
            'projects.github': 'عرض على GitHub',
            'projects.p1.title': 'MoveOn — تطبيق لياقة',
            'projects.p1.sub': 'مشروع تخرج · جامعة الفيوم',
            'projects.p2.sub': 'مشروع تخرج · DEPI',
            'projects.p3.sub': 'مشروع شخصي',
            'projects.p4.sub': 'مشروع شخصي',
            'projects.p1.c': '<strong style="color:var(--accent);">التحدي:</strong> بناء رفيق لياقة شامل للتمارين والتغذية بدون إنترنت.',
            'projects.p1.a': '<strong style="color:var(--accent);">الإجراء:</strong> تطبيق MVVM + BLoC/Cubit مع تخزين محلي عبر Shared Preferences لتجربة offline.',
            'projects.p1.r': '<strong style="color:var(--accent);">النتيجة:</strong> تطبيق مثل مدرب شخصي بهندسة نظيفة جاهز للنشر.',
            'projects.p2.title': 'MovieVerse — مستكشف أفلام',
            'projects.p2.sub': 'مشروع تخرج · DEPI',
            'projects.p2.c': '<strong style="color:var(--accent);">التحدي:</strong> تجربة شبيهة بـ IMDb ببيانات أفلام وتقييمات وقائمة مشاهدة.',
            'projects.p2.a': '<strong style="color:var(--accent);">الإجراء:</strong> تكامل APIs مع BLoC وتخزين محلي للقائمة والتقييمات.',
            'projects.p2.r': '<strong style="color:var(--accent);">النتيجة:</strong> تطبيق أفلام متقن مع تفاصيل طاقم ومراجعات وقائمة offline.',
            'projects.p3.title': 'تطبيق Bookly',
            'projects.p3.sub': 'مشروع شخصي',
            'projects.p3.c': '<strong style="color:var(--accent);">التحدي:</strong> متصفح كتب نظيف مدعوم بـ Google Books API.',
            'projects.p3.a': '<strong style="color:var(--accent);">الإجراء:</strong> بناء بـ MVVM ونمط repository وBLoC مع بحث كامل.',
            'projects.p3.r': '<strong style="color:var(--accent);">النتيجة:</strong> تطبيق اكتشاف كتب كامل مع أحدث العناوين.',
            'projects.p4.title': 'تطبيق أخبار',
            'projects.p4.sub': 'مشروع شخصي',
            'projects.p4.c': '<strong style="color:var(--accent);">التحدي:</strong> عرض أخبار حية مصنفة بواجهة سهلة التصفح.',
            'projects.p4.a': '<strong style="color:var(--accent);">الإجراء:</strong> استهلاك REST API وتنظيم المقالات حسب التصنيف.',
            'projects.p4.r': '<strong style="color:var(--accent);">النتيجة:</strong> قارئ أخبار متجاوب يعرض مقالات فورية بواجهة فلاتر نظيفة.',
            'services.title': 'خدماتي',
            'services.app.title': 'تطوير التطبيقات',
            'services.app.desc': 'تطبيقات فلاتر لـ iOS وAndroid من قاعدة كود واحدة نظيفة.',
            'services.api.title': 'تكامل الخلفية',
            'services.api.desc': 'تكامل Firebase وREST API مع مصادقة آمنة وبيانات فورية.',
            'services.ui.title': 'تنفيذ UI/UX',
            'services.ui.desc': 'واجهات متجاوبة بدقة من Figma وفق مبادئ Material Design.',
            'services.pricing': 'عرض خطط الأسعار',
            'ach.title': 'الإنجازات',
            'ach.depi.title': 'القبول في DEPI',
            'ach.depi.sub': 'مبادرة رواد مصر الرقمية',
            'ach.depi.desc': 'اختياري للانضمام للمبادرة الوطنية المرموقة لتدريب تطوير الموبايل المتقدم.',
            'ach.iti.title': 'ITI',
            'ach.iti.sub': 'معهد تكنولوجيا المعلومات',
            'ach.iti.desc': 'درجة كاملة في برنامج فلاتر ودارت المكثف، بإتقان استثنائي.',
            'ach.github.title': '+4 مشاريع نشطة',
            'ach.github.sub': 'مفتوح المصدر على GitHub',
            'ach.github.desc': 'بناء ونشر 4 مشاريع فلاتر موثقة على GitHub بهندسة نظيفة وتكامل API.',
            'contact.title': 'تواصل معي',
            'contact.sub': 'متاح للعمل الحر والتعاون وفرص العمل بدوام كامل. لنبني شيئاً رائعاً معاً.',
            'contact.email': 'البريد',
            'contact.phone': 'الهاتف',
            'contact.whatsapp': 'واتساب',
            'contact.namePh': 'اسمك',
            'contact.emailPh': 'بريدك الإلكتروني',
            'contact.subjectPh': 'الموضوع',
            'contact.messagePh': 'أخبرني عن مشروعك...',
            'contact.send': 'إرسال الرسالة',
            'contact.sending': 'جاري الإرسال...',
            'contact.sent': 'تم الإرسال!',
            'contact.success': '✓ تم إرسال الرسالة! سأرد عليك قريباً.',
            'contact.error': '✗ حدث خطأ. يرجى مراسلتي بالبريد مباشرة.',
            'footer.connect': 'لنتواصل',
            'footer.connectDesc': 'متاح دائماً لمناقشة مشاريع فلاتر جديدة وفرص العمل الحر والتعاون لبناء تجارب موبايل رائعة.',
            'footer.tagline': 'مطور فلاتر · القاهرة، مصر',
            'footer.who': 'من أنا؟',
            'footer.whoDesc': 'أنا <strong style="color:#fff;">زياد رمضان</strong>، مطور فلاتر شغوف ببناء تطبيقات متعددة المنصات قابلة للتوسع بهندسة نظيفة وتجربة سلسة.',
            'footer.rights': '© 2026 زياد رمضان. جميع الحقوق محفوظة. صُنع بـ <span style="color:var(--accent);">♥</span> والكود.',
            'modal.title': 'خطط الأسعار',
            'modal.sub': 'خطط مرنة حسب نطاق مشروعك وميزانيتك.',
            'modal.starter': 'مبتدئ',
            'modal.basic': 'أساسي',
            'modal.standard': 'قياسي',
            'modal.pro': 'احترافي',
            'modal.popular': 'الأكثر شعبية',
            'modal.premium': 'مميز',
            'modal.enterprise': 'مؤسسات',
            'modal.custom': 'مخصص',
            'modal.letsTalk': 'لنتحدث',
            'modal.choose': 'اختر الخطة',
            'modal.contact': 'تواصل معي',
            'modal.f1': 'واجهة فلاتر بسيطة',
            'modal.f2': 'ميزات أساسية',
            'modal.f3': 'حتى 3 تعديلات',
            'modal.f4': 'دعم بالبريد',
            'modal.f5': 'تسليم 5–7 أيام',
            'modal.f6': 'تصميم UI/UX مخصص',
            'modal.f7': 'تكامل API',
            'modal.f8': 'حتى 7 تعديلات',
            'modal.f9': 'دعم دردشة أولوية',
            'modal.f10': 'تسليم الكود المصدري',
            'modal.f11': 'تطوير تطبيق كامل',
            'modal.f12': 'Firebase + لوحة تحكم',
            'modal.f13': 'تعديلات غير محدودة',
            'modal.f14': 'دعم مميز 24/7',
            'modal.f15': 'صيانة مجانية شهر',
            'modal.f16': 'حلول على مستوى المؤسسات',
            'modal.f17': 'هندسة مخصصة',
            'modal.f18': 'دعم مخصص',
            'modal.f19': 'صيانة طويلة الأمد',
            'modal.f20': 'حسب احتياجاتك',
            'ui.themeLight': 'التبديل إلى الوضع الفاتح',
            'ui.themeDark': 'التبديل إلى الوضع الداكن',
            'ui.langSwitch': 'تغيير اللغة'
        }
    };

    function getTheme() {
        return document.documentElement.getAttribute('data-theme') || 'dark';
    }

    function getLang() {
        return document.documentElement.lang === 'ar' ? 'ar' : 'en';
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_THEME, theme);
        const btn = document.getElementById('themeToggle');
        if (!btn) return;
        const isLight = theme === 'light';
        btn.setAttribute('aria-label', isLight ? translations[getLang()]['ui.themeDark'] : translations[getLang()]['ui.themeLight']);
        const icon = btn.querySelector('i');
        if (icon) {
            icon.className = isLight ? 'fas fa-moon' : 'fas fa-sun';
        }
    }

    function applyLanguage(lang) {
        const t = translations[lang] || translations.en;
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem(STORAGE_LANG, lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.placeholder = t[key];
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
        });

        if (t['meta.title']) document.title = t['meta.title'];

        const langBtn = document.getElementById('langToggle');
        if (langBtn) langBtn.textContent = lang === 'ar' ? 'EN' : 'ع';

        applyTheme(getTheme());

        const submitBtn = document.getElementById('submitBtn');
        if (submitBtn && !submitBtn.disabled && submitBtn.dataset.i18nState !== 'sent') {
            submitBtn.innerHTML = t['contact.send'] + ' <i class="fas fa-paper-plane ms-2"></i>';
        }
    }

    function initToggles() {
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                applyTheme(getTheme() === 'light' ? 'dark' : 'light');
            });
        }

        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.addEventListener('click', function () {
                applyLanguage(getLang() === 'ar' ? 'en' : 'ar');
            });
        }
    }

    window.portfolioSite = {
        applyLanguage: applyLanguage,
        applyTheme: applyTheme,
        getLang: getLang,
        translations: translations
    };

    document.addEventListener('DOMContentLoaded', function () {
        initToggles();
        applyLanguage(getLang());
    });
})();
