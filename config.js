// config.js
// هذا الملف يحتوي على جميع النصوص والإعدادات القابلة للتعديل لواجهة المستخدم.
// يمكن تعديل هذه القيم بسهولة لتحديث محتوى الموقع.

export const websiteConfig = {
    siteTitle: "Sirius Tech | حلول تكنولوجية للمستقبل",
    companyName: "Sirius Tech",
    navLinks: [
        {text: "عن الشركة", href: "#about"},
        {text: "خدماتنا", href: "#services"},
        {text: "أعمالنا", href: "#portfolio"},
        {text: "لماذا نحن؟", href: "#why-choose-us"},
    ],
    headerContactButtonText: "اتصل بنا",
    hero: {
        heading: "تقنيات مبتكرة. حلول استثنائية.",
        subheading: 'نحن نبني المستقبل الرقمي من خلال حلول تقنية متكاملة ومصممة خصيصًا لتلبية طموحات أعمالك.',
        buttonText: 'اكتشف خدماتنا',
    },
    about: {
        heading: 'نحن نرسم ملامح المستقبل الرقمي',
        text: 'في Sirius Tech، نحن لا نكتفي بتقديم حلول تقنية، بل نبني شراكات استراتيجية تهدف إلى تحقيق النمو والتميز. رؤيتنا هي تمكين الشركات من خلال التكنولوجيا، وتحويل التحديات إلى فرص نجاح.',
        points: [
            {
                icon: '✨',
                title: 'الرؤية والابتكار',
                description: 'نسعى دائمًا لاستكشاف آفاق جديدة وتطبيق أحدث التقنيات لتحقيق نتائج غير مسبوقة.'
            },
            {
                icon: '🏆',
                title: 'الجودة والاتقان',
                description: 'نلتزم بأعلى معايير الجودة في كل تفصيلة من عملنا، من التخطيط إلى التنفيذ.'
            },
            {
                icon: '🤝',
                title: 'الشراكة والنجاح',
                description: 'نعمل جنبًا إلى جنب مع عملائنا كفريق واحد لتحقيق أهداف مشتركة ونجاح مستدام.'
            },
        ],
        imagePlaceholder: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    },
    whyChooseUs: {
        heading: 'لماذا Sirius Tech؟',
        features: [
            {
                iconPath: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
                title: 'نهج محوره العميل',
                description: 'نضع احتياجاتك في صميم كل ما نقوم به، ونقدم حلولًا مخصصة تضمن رضاك التام.'
            },
            {
                iconPath: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
                title: 'حلول متكاملة',
                description: 'نقدم مجموعة شاملة من الخدمات التقنية تحت سقف واحد، مما يوفر عليك الوقت والجهد.'
            },
            {
                iconPath: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z',
                title: 'خبرة موثوقة',
                description: 'فريقنا مكون من خبراء ومطورين متخصصين يمتلكون شغفًا بالتكنولوجيا والتزامًا بالتميز.'
            },
        ],
    },
    services: {
        heading: 'خدماتنا',
        items: [
            {
                icon: '🖥️',
                title: 'تطوير المواقع والتطبيقات',
                description: 'تصميم وتطوير مواقع وتطبيقات عصرية، سريعة، وآمنة تعكس هوية علامتك التجارية.'
            },
            {
                icon: '🤖',
                title: 'حلول الذكاء الاصطناعي',
                description: 'استخدام قوة الذكاء الاصطناعي لأتمتة العمليات، تحليل البيانات، وتقديم تجارب مستخدم ذكية.'
            },
            {
                icon: '🛡️',
                title: 'الأمن السيبراني',
                description: 'حماية أصولك الرقمية وبياناتك الحساسة من خلال استراتيجيات أمنية متقدمة وشاملة.'
            },
            {
                icon: '☁️',
                title: 'الحوسبة السحابية',
                description: 'بناء ونقل وإدارة البنية التحتية لتكنولوجيا المعلومات الخاصة بك على السحابة لتحقيق المرونة والكفاءة.'
            },
            {
                icon: '💡',
                title: 'الاستشارات التقنية',
                description: 'نقدم رؤى وخبرات استراتيجية لمساعدتك في اتخاذ قرارات تقنية مستنيرة تدفع أعمالك للأمام.'
            },
            {
                icon: '🎨',
                title: 'تصميم واجهة وتجربة المستخدم',
                description: 'نصنع تجارب رقمية سلسة وجذابة تضمن تفاعل المستخدمين وتحقق أهدافك.'
            },
        ],
    },
    portfolio: {
        heading: 'من أعمالنا',
        categories: [
            {id: 'all', name: 'الكل'},
            {id: 'admin', name: 'إدارية'},
            {id: 'finance', name: 'مالية'},
            {id: 'ai', name: 'ذكاء اصطناعي'},
            {id: 'delivery', name: 'توصيل'},
            {id: 'health', name: 'طبية'},
            {id: 'education', name: 'تعليم'},
            {id: 'e-payment', name: 'دفع إلكتروني'},
            {id: 'ecommerce', name: 'تجارة إلكترونية'}
        ],
        projects: [
            {
                title: 'نظام اطباء الاسنان',
                description: 'نظام متكامل يؤتمت العمل اليومي لعيادات الاسنان',
                detailsLink: 'https://www.figma.com/proto/2FVIRDlJ6soopQ095e4CYI/%D8%A7%D8%B7%D8%A8%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B3%D9%86%D8%A7%D9%86?node-id=1-2&p=f&t=6tVtQMMF33mQ6n17-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
                category: 'health'
            },
            {
                title: 'نظام ادارة الصالات الرياضية',
                description: 'تطبيق مبايل و ويب متكامل لإدارة الصالات الرياضية والرياضين بفعالية، وتحسين سير العمل.',
                detailsLink: 'https://www.figma.com/design/7vro8a1J7xrnK845njfzlI/Gym-App?node-id=0-1&t=RzlMSkUSn20nWoXx-1',
                category: 'admin'
            },
            {
                title: 'نظام مختص للمذاخر و الصيدليات',
                description: 'نظام مختص بتنظيم عمل الصيدليات و المذاخر وادارة الادوية بشكل فعال',
                detailsLink: 'https://www.figma.com/design/sDyYYOkSmukW0czASfzyv4/Penicillin-Dashboard--Copy-?node-id=55-2416&t=ZPaH7ulbYyGNorKM-0',
                category: 'health'
            },
            {
                title: 'منصة إدارة البلدية',
                description: 'تطبيق ويب متكامل لإدارة المشاريع والمهام بفعالية، وتحسين سير العمل.',
                detailsLink: 'https://www.figma.com/proto/7I9qCRUCuGWwcAkneVhIu6/%D8%A8%D9%84%D8%AF%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D9%86%D8%A8%D8%A7%D8%B1?node-id=5-6140&t=GD65iP1iLbbNdZhl-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
                category: 'admin'
            },
            {
                title: 'تطبيق التوصيل السريع',
                description: 'تطبيق جوال متقدم لخدمات التوصيل السريع، يضمن كفاءة وسرعة في العمليات اللوجستية.',
                detailsLink: 'https://www.figma.com/design/o6Upwv4Cm0FHtKfN0sz2oY/SAMONA?node-id=0-1&p=f&t=KDFlEhhnfpNr4oPS-0',
                category: 'delivery'
            },
            {
                title: 'مكتبة الكترونية',
                description: 'مكتبة الكترونية تعرض احدث الكتب المنشورة بمختلف المجالات صالحة للقرائة و التحميل',
                detailsLink: 'https://www.figma.com/proto/j6Hi3bT1bNyVqgul2tWknk/Library?node-id=1-2&t=ZL51Ki8kd200buSx-6',
                category: 'education'
            },
            // {
            //     title: 'بوابة دفع إلكتروني آمنة',
            //     description: 'منصة ويب لمعالجة المدفوعات عبر الإنترنت بأعلى معايير الأمان العالمية.',
            //     detailsLink: '#',
            //     category: 'e-payment'
            // },
            // {
            //     title: 'مساعد افتراضي ذكي',
            //     description: 'نظام محادثة ذكي لخدمة العملاء، يعتمد على الذكاء الاصطناعي لتقديم دعم فوري.',
            //     detailsLink: '#',
            //     category: 'ai'
            // },
            //
            // {
            //     title: 'منصة التعلم الإلكتروني',
            //     description: 'نظام تعليمي تفاعلي عبر الإنترنت، يسهل الوصول إلى المحتوى التعليمي عالي الجودة.',
            //     detailsLink: '#',
            //     category: 'education'
            // },
            // {
            //     title: 'نظام إدارة المبيعات',
            //     description: 'منصة متكاملة لإدارة المبيعات والمخزون وتحسين عمليات المبيعات.',
            //     detailsLink: '#',
            //     category: 'finance'
            // },
        ],
        moreProjectsButtonText: 'هل لديك فكرة مشروع؟',
    },
    contact: {
        heading: 'لنبدأ العمل معًا',
        subheading: 'هل أنت مستعد لنقل أعمالك إلى المستوى التالي؟ تواصل مع فريق خبرائنا اليوم لمناقشة فكرتك وتحويلها إلى واقع ملموس.',
        contactInfo: [
            {
                iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z',
                text: 'info@siriustech.com'
            },
            {
                iconPath: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.01.24l-2.05 2.05c-4.74-2.39-8.19-5.83-10.58-10.57l2.05-2.05c.27-.27.35-.66.24-1.01C8.75 3.45 8.55 2.25 8.55 1h-7c-.55 0-1 .45-1 1C.45 11.19 8.81 19.55 19 19.55c.55 0 1-.45 1-1v-7z',
                text: '+964 780 123 4567'
            },
        ],
    },
    footer: {
        copyrightText: 'Sirius Tech. جميع الحقوق محفوظة.',
        designedByText: 'صُمم بشغف في العراق ✨',
    },
};
