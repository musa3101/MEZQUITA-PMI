const languagesList = [
    { code: 'es', label: 'ES', name: 'Español', flag: 'https://flagcdn.com/w20/es.png', srcset: 'https://flagcdn.com/w40/es.png 2x', dir: 'ltr' },
    { code: 'ar', label: 'AR', name: 'العربية', flag: 'https://flagcdn.com/w20/sa.png', srcset: 'https://flagcdn.com/w40/sa.png 2x', dir: 'rtl' },
    { code: 'fr', label: 'FR', name: 'Français', flag: 'https://flagcdn.com/w20/fr.png', srcset: 'https://flagcdn.com/w40/fr.png 2x', dir: 'ltr' },
    { code: 'en', label: 'EN', name: 'English', flag: 'https://flagcdn.com/w20/gb.png', srcset: 'https://flagcdn.com/w40/gb.png 2x', dir: 'ltr' },
    { code: 'bn', label: 'BN', name: 'বাংলা', flag: 'https://flagcdn.com/w20/bd.png', srcset: 'https://flagcdn.com/w40/bd.png 2x', dir: 'ltr' },
    { code: 'ur', label: 'UR', name: 'اردو', flag: 'https://flagcdn.com/w20/pk.png', srcset: 'https://flagcdn.com/w40/pk.png 2x', dir: 'rtl' }
];

const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.times': 'Horarios',
        'nav.ask': 'Consulta al Imán',
        'nav.location': 'Dónde estamos',
        'nav.donate': 'Donar',
        'nav.support': 'Apoya la Mezquita',
        'nav.ramadan': 'Ramadán',
        'nav.khutba': 'Jutba del Viernes',
        
        // Hero 1
        'hero.title': 'Mezquita Arrahma',
        'hero.subtitle': 'Un espacio de paz, adoración y comunidad en Palma de Mallorca',
        'hero.cta': 'Ver horarios de rezos',
        'hero.quran': 'Leer y Escuchar el Corán',
        'hero.quran_cta': 'Leer Corán gratis',
        
        // Hero 2
        'hero2.title': 'Una Comunidad Viva',
        
        // Hero 3
        'hero3.title': 'La Dirección de Nuestros Corazones',
        'hero3.desc': 'Conectando Palma de Mallorca con la esencia de nuestra fe universal.',
        
        // Hero 4
        'hero4.title': 'Un Refugio de Adoración',
        'hero4.desc': 'Encontrando la tranquilidad y la guía a través de las oraciones diarias.',
        
        // Prayer Times
        'prayer.title': 'Horarios de Oración',
        'prayer.desc': 'Encuentra paz en tu rutina diaria. Los horarios se actualizan basados en la posición del sol en nuestra hermosa comunidad.',
        'prayer.next': 'Próxima Oración',
        'prayer.remaining': 'Faltan',
        'prayer.today': 'Horarios de hoy',
        'prayer.download_monthly': 'Descargar horario del mes',
        'prayer.download_month': 'Descargar horario del mes',
        'prayer.download_ramadan': 'Horario Especial Ramadán',
        'prayer.days': 'Días',
        'prayer.hrs': 'Horas',
        'prayer.min': 'Min',
        'prayer.mins': 'Min',
        'prayer.sec': 'Seg',
        'prayer.secs': 'Seg',
        'prayer.synced': 'Sincronizado con Mawaqit',
        'prayer.now': '● Ahora',
        'prayer.fajr': 'Fajr',
        'prayer.shuruq': 'Shuruq',
        'prayer.dhuhr': 'Dhuhr',
        'prayer.asr': 'Asr',
        'prayer.maghrib': 'Maghrib',
        'prayer.isha': 'Isha',
        
        // Imam
        'imam.title': 'Consulta al Imán',
        'imam.desc': 'El Imán está disponible para guiarte en asuntos religiosos, consejería familiar o dudas sobre el Islam.',
        'imam.subtitle': 'Tu casa espiritual en Mallorca',
        'imam.section_title': 'Un espacio de escucha y orientación',
        'imam.section_desc': 'Nuestro Imán está siempre disponible para acompañarte, brindarte guía, o simplemente ofrecerte un espacio seguro para ser escuchado con total confidencialidad. Una puerta siempre abierta para ti y tu familia.',
        'imam.feature1_title': 'Guía Espiritual',
        'imam.feature1_desc': 'Respuestas basadas en el Corán y la Sunnah.',
        'imam.feature2_title': 'Consejería Familiar',
        'imam.feature2_desc': 'Mediación y apoyo para la armonía en el hogar.',
        'imam.name': 'Nombre Completo',
        'imam.name_ph': 'Su nombre',
        'imam.email': 'Correo Electrónico',
        'imam.email_ph': 'su@email.com',
        'imam.subject': 'Asunto',
        'imam.subj_opt1': 'Seleccione un asunto',
        'imam.subj_opt2': 'Pregunta Religiosa (Fatwa)',
        'imam.subj_opt3': 'Consejería Matrimonial',
        'imam.subj_opt4': 'Conversión al Islam',
        'imam.subj_opt5': 'Otro',
        'imam.msg': 'Mensaje',
        'imam.msg_ph': '¿En qué podemos ayudarle?',
        'imam.send': 'Enviar Mensaje',
        'imam.success_title': 'Mensaje Enviado',
        'imam.success_desc': 'Que la paz sea contigo. El Imán ha recibido tu mensaje y te responderá a la brevedad posible insha\'Allah.',
        'imam.success_reset': 'Enviar otro mensaje',
        
        // Contact Map
        'contact.title': 'Información de Contacto',
        'contact.phone': 'Teléfono',
        'contact.email': 'Email',
        'contact.colab_title': 'COLABORACIÓN',
        'contact.colab_desc': 'Este sitio web ha sido diseñado y donado de manera completamente benéfica por <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> para el servicio de nuestra comunidad, con el firme propósito de apoyar y beneficiar la difusión del Islam. Que Alá acepte esta contribución.',
        
        // Support
        'support.title': 'Construyamos juntos nuestra comunidad',
        'support.desc': 'Un espacio de paz para todos. Tu apoyo generoso es el corazón que mantiene viva nuestra mezquita, permitiendo que siga siendo un refugio de adoración, aprendizaje y fraternidad. Cada pequeño gesto cuenta.',
        'support.btn': 'Donar Ahora',
        'support.tag1': 'Mantenimiento',
        'support.tag2': 'Educación',
        
        // Donation Modal
        'modal.title': 'Apoya Nuestra Mezquita',
        'modal.desc': 'Próximamente habilitaremos los siguientes métodos de donación en línea:',
        'modal.thanks': '¡Gracias por tu paciencia!',
        'modal.transf': 'Transferencia',
        
        // Footer
        'footer.colab': 'Colaboración',
        'footer.colab_desc': 'Este espacio digital ha sido creado con amor para acercar más a nuestra querida comunidad.',
        'footer.nav': 'Navegación',
        'footer.legal': 'Legal',
        'footer.legal1': 'Aviso Legal',
        'footer.legal2': 'Privacidad',
        'footer.legal3': 'Política de Cookies',
        'footer.dev': 'Desarrollado por',
        'footer.rights': '© 2024 Mezquita Arrahma. Todos los derechos reservados.',

        // Cookies Banner
        'cookie.banner_title': 'Su privacidad es importante para nosotros',
        'cookie.banner_text': 'Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle contenido relacionado con sus preferencias mediante el análisis de sus hábitos de navegación. Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra ',
        'cookie.banner_more': 'Para más información, consulte nuestra',
        'cookie.link_text': 'Política de Cookies',
        'cookie.more_options': 'Más Opciones',
        'cookie.accept_btn': 'Aceptar y continuar',

        // WhatsApp
        'wa.title': 'Consulta por WhatsApp',
        'wa.desc': 'Selecciona el asunto de tu consulta:',
        'wa.opt1': 'Pregunta Religiosa (Fatwa)',
        'wa.opt2': 'Consejería Matrimonial',
        'wa.opt3': 'Conversión al Islam',
        'wa.opt4': 'Otro',

        // Quran Section
        'quran.view_more': 'Ver más Suras',
        'quran.view_less': 'Ver menos Suras',
        'quran.section_title': 'Suras del Corán',
        'quran.filter_all': 'Todas',
        'quran.filter_essential': 'Esenciales',
        'quran.filter_friday': 'Viernes',
        'quran.filter_ramadan': 'Ramadán',
        'quran.filter_protection': 'Protección',
        'quran.badge_essential': 'Esencial',
        'quran.badge_friday': 'Viernes',
        'quran.badge_ramadan': 'Ramadán',
        'quran.badge_protection': 'Protección',
        'quran.s1_title': 'Sura Al-Fatiha',
        'quran.s1_sub': 'La Apertura',
        'quran.s1_desc': 'Es la esencia del Corán y la recitamos en cada una de nuestras oraciones diarias para pedir guía.',
        'quran.s2_title': 'Sura Al-Baqarah',
        'quran.s2_sub': 'La Vaca',
        'quran.s2_desc': 'La sura más larga. Su recitación protege el hogar, trae bendición y aleja las malas influencias.',
        'quran.s3_title': 'Sura Ya-Sin',
        'quran.s3_sub': 'El Corazón del Corán',
        'quran.s3_desc': 'Una sura hermosa y profunda que solemos recitar para pedir facilidad, perdón y paz espiritual.',
        'quran.s4_title': 'Sura Al-Mulk',
        'quran.s4_sub': 'La Soberanía',
        'quran.s4_desc': 'Recomendada para leer cada noche, ya que intercede por quien la recita y otorga gran protección.',
        'quran.s5_title': 'Sura Al-Kahf',
        'quran.s5_sub': 'La Caverna',
        'quran.s5_desc': 'Es tradición recitarla. Aporta luz entre dos viernes consecutivos a quien la lee y protege el alma.',
        'quran.s5_badge': 'Recomendado Hoy',
        'quran.s6_title': 'Sura Ar-Rahman',
        'quran.s6_sub': 'El Misericordioso',
        'quran.s6_desc': 'Conocida como "la novia del Corán". Celebra los dones de Alá y nos recuerda Su infinita misericordia.',
        'quran.s7_title': 'Sura Al-Waqi\'ah',
        'quran.s7_sub': 'El Acontecimiento',
        'quran.s7_desc': 'El Profeta ﷺ recomendó su lectura cada noche. Protege de la pobreza y trae provisión (rizq).',
        'quran.s8_title': 'Sura Al-Jumu\'ah',
        'quran.s8_sub': 'El Viernes',
        'quran.s8_desc': 'La sura que lleva el nombre del día más sagrado de la semana. Recitada en la oración del Viernes.',
        'quran.s9_title': 'Sura Al-Munafiqun',
        'quran.s9_sub': 'Los Hipócritas',
        'quran.s9_desc': 'Complementa a Al-Jumu\'ah. El Profeta ﷺ solía recitarlas juntas en la oración del Viernes.',
        'quran.s10_title': 'Sura Al-Qadr',
        'quran.s10_sub': 'La Noche del Destino',
        'quran.s10_desc': 'Describe Laylat al-Qadr, la noche más sagrada del Ramadán, mejor que mil meses de adoración.',
        'quran.s11_title': 'Sura Ad-Dukhan',
        'quran.s11_sub': 'El Humo',
        'quran.s11_desc': 'Se recomienda recitarla en las noches de Ramadán. Quien la lee la noche del viernes, amanece perdonado.',
        'quran.s12_title': 'Sura Al-Ikhlas',
        'quran.s12_sub': 'La Pureza',
        'quran.s12_desc': 'Equivale a un tercio del Corán. Declaración pura de la unicidad de Alá (Tawhid).',
        'quran.s13_title': 'Sura Al-Falaq',
        'quran.s13_sub': 'El Amanecer',
        'quran.s13_desc': 'Una de las Mu\'awwidhat. Pide refugio en Alá contra el mal de la noche, la envidia y la brujería.',
        'quran.s14_title': 'Sura An-Nas',
        'quran.s14_sub': 'La Humanidad',
        'quran.s14_desc': 'La última sura del Corán. Pide refugio en Alá contra los susurros del mal en los corazones.',
        'map.box_title': 'Mezquita Arrahma',
        'map.box_address': 'Carrer Hort de Torrella 11C, Palma',
        
        // Ramadan
        'ramadan.title': 'Horario de Ramadán',
        'ramadan.subtitle': 'Mes de bendición, ayuno y perdón',
        'ramadan.countdown_title': 'Tiempo restante para el próximo Ramadán',
        'ramadan.countdown_iftar': 'Tiempo restante para <span class="text-primary ml-1 font-black">IFTAR</span>',
        'ramadan.download_pdf': 'Descargar Calendario',
        'ramadan.day': 'Día',
        'ramadan.date': 'Fecha',
        'ramadan.fajr': 'Fajr',
        'ramadan.dhuhr': 'Dhuhr',
        'ramadan.asr': 'Asr',
        'ramadan.maghrib': 'Maghrib (Iftar)',
        'ramadan.isha': 'Isha',
        'ramadan.placeholder_title': 'El horario estará disponible pronto',
        'ramadan.placeholder_desc': 'El calendario detallado de los 30 días aparecerá aquí de forma automática una vez que comience el mes bendito de Ramadán.',
        'ramadan.notice': '* Los horarios son calculados según la posición del sol para Palma de Mallorca. Durante el mes de Ramadán es recomendable dejar un margen de precaución para el inicio y ruptura del ayuno.',

        // Khutba / Enseñanzas del Imán
        'khutba.eyebrow': 'Orientación y Sermones del Imán',
        'khutba.title': 'Enseñanzas de la Jutba',
        'khutba.subtitle': 'Reflexiones, respuestas a dudas religiosas y enseñanzas prácticas que el Imán Yusuf comparte los viernes con nuestra comunidad.',
        'khutba.btn_read': 'Leer Jutba Completa',
        'khutba.badge_unity': 'Unidad y Sunnah',
        'khutba.badge_fiqh': 'Fiqh y Pureza',
        'khutba.badge_ethics': 'Ética y Justicia',
        'khutba.c1_tag': 'Jutba 1 • Al-I\'tisam',
        'khutba.c1_title': 'La Unión de la Comunidad y Aferrarse a la Guía',
        'khutba.c1_sub': 'Aferrarse al Corán y a la Sunnah y evitar la división',
        'khutba.c1_desc': '«Y aferraos a la cuerda de Alá todos juntos y no os dividáis...» Los mandatos que complacen a Alá y la promesa de no extraviarse jamás siguiendo el Corán y la Sunnah.',
        'khutba.c2_tag': 'Jutba 2 • Pregunta 8003',
        'khutba.c2_title': 'Purificación fuera de casa y la Oración a tiempo',
        'khutba.c2_sub': '¿Cómo actuar en el colegio o empleo si no dispones de agua para Istinyah?',
        'khutba.c2_desc': 'La duda de un creyente que pasa el día fuera: ¿debe hacer wudú y rezar o retrasar el rezo? La explicación del Sheij Ibn \'Uzaimin sobre el Istimyár y la estricta obligación de rezar a su hora.',
        'khutba.c3_tag': 'Jutba 3 • Derechos y Propiedad',
        'khutba.c3_title': 'El Respeto a los Límites y la Propiedad Ajena',
        'khutba.c3_sub': 'La gravedad de alterar linderos o usurpar derechos ajenos',
        'khutba.c3_desc': '«Que Allah maldiga a quien altere los límites de la tierra.» El Islam protege los derechos de propiedad y advierte con severidad contra toda injusticia territorial.',
        'khutba.jumuah_badge': 'Jumu\'ah • الجمعة',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'Surah Al-Imran: 103',
        'khutba.c1_source': 'Sahih Muslim',
        'khutba.c2_quote': '«Normalmente paso la mayor parte del día en el colegio y tengo que ir al baño. Ya que no puedo ir hasta mi casa para hacer istinyah, ¿debo hacer el wudú y rezar o debo perderme la oración y recuperarla más tarde?»',
        'khutba.c2_ref': 'Ash-Sharh Al Mumti\' 1/103',
        'khutba.c3_hadith': '«Que Allah maldiga a quien altere los límites de la tierra.»',
        'khutba.c3_source': 'Sahih Muslim',
        'khutba.modal_close': 'Cerrar lectura',
        'khutba.modal_source': 'Compartido por el Imán Yusuf • Mezquita Arrahma',
        'khutba.swipe_hint': 'Desliza para ver más',
        'support.quote': '«Aquellos que gastan sus bienes de noche y de día, en secreto y en público, tendrán su recompensa junto a su Señor...»',
        'support.verse': 'Corán 2:274',
        'contact.open_maps': 'Abrir en Google Maps',
        'footer.made_by': 'Made by',
        'imam.opening_mail': 'Abriendo Correo...',
        'nav.brand_name': 'Mezquita Ar-Rahma'
    },
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.times': 'مواقيت الصلاة',
        'nav.ask': 'اسأل الإمام',
        'nav.location': 'أين نحن',
        'nav.donate': 'تبرع',
        'nav.support': 'ادعم المسجد',
        'nav.ramadan': 'رمضان',
        'nav.khutba': 'خطبة الجمعة',
        
        // Hero 1
        'hero.title': 'المركز الإسلامي الرحمة',
        'hero.subtitle': 'مساحة للسلام والعبادة والمجتمع في بالما دي مايوركا',
        'hero.cta': 'عرض مواقيت الصلاة',
        'hero.quran': 'قراءة واستماع للقرآن',
        'hero.quran_cta': 'قراءة القرآن الكريم',
        
        // Hero 2
        'hero2.title': 'مجتمع حي',
        
        // Hero 3
        'hero3.title': 'قبلة قلوبنا',
        'hero3.desc': 'ربط بالما دي مايوركا بجوهر إيماننا العالمي.',
        
        // Hero 4
        'hero4.title': 'ملاذ للعبادة',
        'hero4.desc': 'إيجاد الطمأنينة والتوجيه من خلال الصلوات اليومية.',
        
        // Prayer Times
        'prayer.title': 'مواقيت الصلاة',
        'prayer.desc': 'ابحث عن السلام في روتينك اليومي. يتم تحديث المواقيت بناءً على موقع الشمس في مجتمعنا الجميل.',
        'prayer.next': 'الصلاة القادمة',
        'prayer.remaining': 'متبقي',
        'prayer.today': 'مواقيت اليوم',
        'prayer.download_monthly': 'تحميل جدول الشهر',
        'prayer.download_month': 'تحميل جدول الشهر',
        'prayer.download_ramadan': 'جدول رمضان الخاص',
        'prayer.days': 'أيام',
        'prayer.hrs': 'س',
        'prayer.min': 'د',
        'prayer.mins': 'دقيقة',
        'prayer.sec': 'ث',
        'prayer.secs': 'ثانية',
        'prayer.synced': 'متزامن مع مواقيت',
        'prayer.now': '● الآن',
        'prayer.fajr': 'الفجر',
        'prayer.shuruq': 'الشروق',
        'prayer.dhuhr': 'الظهر',
        'prayer.asr': 'العصر',
        'prayer.maghrib': 'المغرب',
        'prayer.isha': 'العشاء',
        
        // Imam
        'imam.title': 'اسأل الإمام',
        'imam.desc': 'الإمام متاح لإرشادك في الأمور الدينية، أو الاستشارات الأسرية، أو أي استفسارات حول الإسلام.',
        'imam.subtitle': 'بيتك الروحي في مايوركا',
        'imam.section_title': 'مساحة للاستماع والتوجيه',
        'imam.section_desc': 'إمامنا متواجد دائمًا لمرافقتك وتقديم التوجيه لك، أو ببساطة ليوفر لك مساحة آمنة للاستماع إليك بسرية تامة. باب مفتوح دائمًا لك ولعائلتك.',
        'imam.feature1_title': 'الإرشاد الروحي',
        'imam.feature1_desc': 'إجابات مبنية على القرآن والسنة النبوية.',
        'imam.feature2_title': 'الاستشارات الأسرية',
        'imam.feature2_desc': 'الوساطة والدعم لتحقيق الوئام في المنزل.',
        'imam.name': 'الاسم الكامل',
        'imam.name_ph': 'اسمك',
        'imam.email': 'البريد الإلكتروني',
        'imam.email_ph': 'your@email.com',
        'imam.subject': 'الموضوع',
        'imam.subj_opt1': 'اختر موضوعًا',
        'imam.subj_opt2': 'سؤال ديني (فتوى)',
        'imam.subj_opt3': 'استشارة زوجية',
        'imam.subj_opt4': 'اعتناق الإسلام',
        'imam.subj_opt5': 'أخرى',
        'imam.msg': 'الرسالة',
        'imam.msg_ph': 'كيف يمكننا مساعدتك؟',
        'imam.send': 'إرسال الرسالة',
        'imam.success_title': 'تم إرسال الرسالة',
        'imam.success_desc': 'السلام عليكم. لقد استلم الإمام رسالتك وسيرد عليك في أقرب وقت ممكن إن شاء الله.',
        'imam.success_reset': 'إرسال رسالة أخرى',
        
        // Contact Map
        'contact.title': 'معلومات الاتصال',
        'contact.phone': 'الهاتف',
        'contact.email': 'البريد الإلكتروني',
        'contact.colab_title': 'تعاون',
        'contact.colab_desc': 'تم تصميم هذا الموقع الإلكتروني والتبرع به بشكل خيري بالكامل من قبل <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> لخدمة مجتمعنا، بهدف قوي يتمثل في دعم ونشر الإسلام. تقبل الله هذه المساهمة.',
        
        // Support
        'support.title': 'دعونا نبني مجتمعنا معًا',
        'support.desc': 'مساحة سلام للجميع. دعمك السخي هو القلب الذي يبقي مسجدنا حيًا، مما يسمح له بالبقاء كملاذ للعبادة والتعلم والأخوة. كل لفتة صغيرة مهمة.',
        'support.btn': 'تبرع الآن',
        'support.tag1': 'صيانة',
        'support.tag2': 'تعليم',
        
        // Donation Modal
        'modal.title': 'ادعم مسجدنا',
        'modal.desc': 'سنقوم قريبًا بتمكين طرق التبرع عبر الإنترنت التالية:',
        'modal.thanks': 'شكراً لصبرك!',
        'modal.transf': 'حوالة بنكية',
        
        // Footer
        'footer.colab': 'تعاون',
        'footer.colab_desc': 'تم إنشاء هذه المساحة الرقمية بالحب لتقريب مجتمعنا الحبيب.',
        'footer.nav': 'تنقل',
        'footer.legal': 'قانوني',
        'footer.legal1': 'إشعار قانوني',
        'footer.legal2': 'الخصوصية',
        'footer.legal3': 'سياسة ملفات تعريف الارتباط',
        'footer.dev': 'تم التطوير بواسطة',
        'footer.rights': '© 2024 المركز الإسلامي الرحمة. جميع الحقوق محفوظة.',

        // Cookies Banner
        'cookie.banner_title': 'خصوصيتك تهمنا',
        'cookie.banner_text': 'نستخدم ملفات تعريف الارتباط الخاصة بنا وبجهات خارجية لتحسين خدماتنا وعرض المحتوى المتعلق بتفضيلاتك من خلال تحليل عادات التصفح لديك. إذا واصلت التصفح، فإننا نعتبر أنك تقبل استخدامها. يمكنك الحصول على مزيد من المعلومات في ',
        'cookie.banner_more': 'لمزيد من المعلومات راجع',
        'cookie.link_text': 'سياسة ملفات تعريف الارتباط',
        'cookie.more_options': 'خيارات أكثر',
        'cookie.accept_btn': 'قبول ومتابعة',

        // WhatsApp
        'wa.title': 'استشارة عبر الواتساب',
        'wa.desc': 'اختر موضوع استشارتك:',
        'wa.opt1': 'سؤال ديني (فتوى)',
        'wa.opt2': 'استشارة زوجية',
        'wa.opt3': 'اعتناق الإسلام',
        'wa.opt4': 'أخرى',

        // Quran Section
        'quran.view_more': 'عرض المزيد من السور',
        'quran.view_less': 'عرض أقل',
        'quran.section_title': 'سور القرآن الكريم',
        'quran.filter_all': 'الكل',
        'quran.filter_essential': 'أساسية',
        'quran.filter_friday': 'الجمعة',
        'quran.filter_ramadan': 'رمضان',
        'quran.filter_protection': 'الوقاية',
        'quran.badge_essential': 'أساسي',
        'quran.badge_friday': 'الجمعة',
        'quran.badge_ramadan': 'رمضان',
        'quran.badge_protection': 'وقاية',
        'quran.s1_title': 'سورة الفاتحة',
        'quran.s1_sub': 'الافتتاح',
        'quran.s1_desc': 'هي جوهر القرآن ونقرأها في كل صلاة من صلواتنا اليومية لطلب الهداية.',
        'quran.s2_title': 'سورة البقرة',
        'quran.s2_sub': 'البقرة',
        'quran.s2_desc': 'أطول سورة. قراءتها تحمي البيت وتجلب البركة وتبعد التأثيرات السيئة.',
        'quran.s3_title': 'سورة يس',
        'quran.s3_sub': 'يس',
        'quran.s3_desc': 'سورة جميلة وعميقة نقرأها عادة لطلب التيسير والمغفرة والسلام الروحي.',
        'quran.s4_title': 'سورة الملك',
        'quran.s4_sub': 'الملك',
        'quran.s4_desc': 'يوصى بقراءتها كل ليلة، حيث تشفع لصاحبها وتنجيه من عذاب القبر.',
        'quran.s5_title': 'سورة الكهف',
        'quran.s5_sub': 'الكهف',
        'quran.s5_desc': 'من السنة قراءتها يوم الجمعة. تضيء للمؤمن نورا ما بين الجمعتين.',
        'quran.s5_badge': 'موصى به اليوم',
        'quran.s6_title': 'سورة الرحمن',
        'quran.s6_sub': 'الرحمن',
        'quran.s6_desc': 'عروس القرآن. تذكر بنعم الله الجليلة ورحمته الواسعة.',
        'quran.s7_title': 'سورة الواقعة',
        'quran.s7_sub': 'الواقعة',
        'quran.s7_desc': 'أوصى النبي ﷺ بقراءتها كل ليلة لما فيها من الوقاية من الفقر وجلب الرزق.',
        'quran.s8_title': 'سورة الجمعة',
        'quran.s8_sub': 'الجمعة',
        'quran.s8_desc': 'السورة التي تحمل اسم أقدس أيام الأسبوع. تقرأ في صلاة الجمعة.',
        'quran.s9_title': 'سورة المنافقون',
        'quran.s9_sub': 'المنافقون',
        'quran.s9_desc': 'تكمل سورة الجمعة. كان النبي ﷺ يقرأ بهما معا في صلاة الجمعة.',
        'quran.s10_title': 'سورة القدر',
        'quran.s10_sub': 'القدر',
        'quran.s10_desc': 'تصف ليلة القدر، أقدس ليالي شهر رمضان المبارك، وهي خير من ألف شهر.',
        'quran.s11_title': 'سورة الدخان',
        'quran.s11_sub': 'الدخان',
        'quran.s11_desc': 'يوصى بقراءتها في ليالي رمضان. ومن قرأها في ليلة جمعة أصبح مغفورا له.',
        'quran.s12_title': 'سورة الإخلاص',
        'quran.s12_sub': 'الإخلاص',
        'quran.s12_desc': 'تعدل ثلث القرآن الكريم. إعلان خالص لتوحيد الله عز وجل.',
        'quran.s13_title': 'سورة الفلق',
        'quran.s13_sub': 'الفلق',
        'quran.s13_desc': 'إحدى المعوذتين. للاستعاذة بالله من شر ما خلق ومن شر غاسق إذا وقب والحسد والشارّات.',
        'quran.s14_title': 'سورة الناس',
        'quran.s14_sub': 'الناس',
        'quran.s14_desc': 'آخر سور القرآن الكريم. للاستعاذة بالله من شر الوسواس الخناس من الجنة والناس.',
        'map.box_title': 'المركز الإسلامي الرحمة',
        'map.box_address': 'شارع هورت دي توريلا ١١ ج، بالما',
        
        // Ramadan
        'ramadan.title': 'جدول رمضان',
        'ramadan.subtitle': 'شهر البركة والصيام والمغفرة',
        'ramadan.countdown_title': 'الوقت المتبقي لرمضان القادم',
        'ramadan.countdown_iftar': 'الوقت المتبقي لـ <span class="text-primary ml-1 font-black">الإفطار</span>',
        'ramadan.download_pdf': 'تحميل التقويم',
        'ramadan.day': 'اليوم',
        'ramadan.date': 'التاريخ',
        'ramadan.fajr': 'الفجر',
        'ramadan.dhuhr': 'الظهر',
        'ramadan.asr': 'العصر',
        'ramadan.maghrib': 'المغرب (الإفطار)',
        'ramadan.isha': 'العشاء',
        'ramadan.placeholder_title': 'سيتوفر الجدول قريباً',
        'ramadan.placeholder_desc': 'سيظهر تقويم الـ 30 يوماً المفصل هنا تلقائياً بمجرد بدء شهر رمضان المبارك.',
        'ramadan.notice': '* يتم حساب المواقيت بناءً على موقع الشمس في بالما دي مايوركا. خلال شهر رمضان، يوصى بترك هامش احتياطي لبدء الصيام والإفطار.',

        // Khutba / خطب الجمعة ودروس الإمام
        'khutba.eyebrow': 'توجيهات وخطب الإمام',
        'khutba.title': 'دروس وخطب الجمعة',
        'khutba.subtitle': 'تأملات أسبوعية وإجابات فقهية وتوجيهات يشاركها الإمام يوسف في خطب الجمعة لترشيد وتوجيه مجتمعنا.',
        'khutba.btn_read': 'اقرأ الخطبة كاملة',
        'khutba.badge_unity': 'الاعتصام والجماعة',
        'khutba.badge_fiqh': 'فقه وطهارة',
        'khutba.badge_ethics': 'حقوق وأخلاق',
        'khutba.c1_tag': 'الخطبة 1 • الاعتصام',
        'khutba.c1_title': 'الاعتصام بكتاب الله وسنة نبيه ولزوم الجماعة',
        'khutba.c1_sub': 'التمسك بالوحي والتحذير من الفرقة والتنازع',
        'khutba.c1_desc': '﴿وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا﴾. الأحاديث الصحيحة في رضا الله بالاعتصام والأمان من الضلال بالتمسك بالقرآن والسنة ولزوم جماعة المسلمين.',
        'khutba.c2_tag': 'الخطبة 2 • سؤال 8003',
        'khutba.c2_title': 'الطهارة والاستنجاء خارج البيت وأداء الصلاة في وقتها',
        'khutba.c2_sub': 'كيف يتصرف المسلم في مدرسته أو مكان عمله لأداء الصلاة؟',
        'khutba.c2_desc': 'بيان الشيخ ابن عثيمين لجواز الاستجمار بالمناديل الطاهرة والوضوء، والتأكيد الحاسم على تحريم تأخير الصلاة عن وقتها بحجة عدم تيسر الماء للاستنجاء.',
        'khutba.c3_tag': 'الخطبة 3 • حقوق العباد',
        'khutba.c3_title': 'حرمة التعدي على حقوق الآخرين وحدود الأرض',
        'khutba.c3_sub': 'عقوبة تغيير المنار واغتصاب الأملاك والأراضي دون حق',
        'khutba.c3_desc': 'قال النبي ﷺ: «لعن الله من غير منار الأرض». حماية الإسلام لحقوق الملكية وتجريم أي محاولة للاستيلاء على أراضي الآخرين أو تغيير معالمها.',
        'khutba.jumuah_badge': 'الجمعة • Jumu\'ah',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'سورة آل عمران: 103',
        'khutba.c1_source': 'صحيح مسلم',
        'khutba.c2_quote': '«أقضي معظم يومي في المدرسة أو العمل وأحتاج لدخول الخلاء، ولا أستطيع العودة إلى بيتي للاستنجاء بالماء. فهل أتوضأ وأصلي أم أؤخر الصلاة حتى أعود للمنزل؟»',
        'khutba.c2_ref': 'الشرح الممتع 1/103',
        'khutba.c3_hadith': '«لعن الله من غير منار الأرض»',
        'khutba.c3_source': 'صحيح مسلم',
        'khutba.modal_close': 'إغلاق القراءة',
        'khutba.modal_source': 'من خطب وتوجيهات الإمام يوسف • مسجد الرحمة',
        'khutba.swipe_hint': 'اسحب لرؤية المزيد',
        'support.quote': '﴿ الَّذِينَ يُنفِقُونَ أَمْوَالَهُم بِاللَّيْلِ وَالنَّهَارِ سِرًّا وَعَلَانِيَةً فَلَهُمْ أَجْرُهُمْ عِندَ رَبِّهِمْ ﴾',
        'support.verse': 'سورة البقرة: ٢٧٤',
        'contact.open_maps': 'فتح في خرائط جوجل',
        'footer.made_by': 'صُمم بواسطة',
        'imam.opening_mail': 'جارٍ فتح البريد...',
        'nav.brand_name': 'مسجد الرحمة'
    },
    fr: {
        // Navigation
        'nav.home': 'Accueil',
        'nav.times': 'Horaires',
        'nav.ask': 'Consulter l\'Imam',
        'nav.location': 'Où nous trouver',
        'nav.donate': 'Faire un don',
        'nav.support': 'Soutenir la Mosquée',
        'nav.ramadan': 'Ramadan',
        'nav.khutba': 'Khoutba du Vendredi',
        
        // Hero 1
        'hero.title': 'Mosquée Arrahma',
        'hero.subtitle': 'Un espace de paix, d\'adoration et de communauté à Palma de Majorque',
        'hero.cta': 'Voir les horaires de prières',
        'hero.quran': 'Lire et écouter le Coran',
        'hero.quran_cta': 'Lire le Coran gratuitement',
        
        // Hero 2
        'hero2.title': 'Une Communauté Vivante',
        
        // Hero 3
        'hero3.title': 'La Direction de Nos Cœurs',
        'hero3.desc': 'Relier Palma de Majorque à l\'essence de notre foi universelle.',
        
        // Hero 4
        'hero4.title': 'Un Refuge d\'Adoration',
        'hero4.desc': 'Trouver la sérénité et la guidance à travers les prières quotidiennes.',
        
        // Prayer Times
        'prayer.title': 'Horaires de Prières',
        'prayer.desc': 'Trouvez la paix dans votre routine quotidienne. Les horaires sont mis à jour selon la position du soleil à Palma.',
        'prayer.next': 'Prochaine Prière',
        'prayer.remaining': 'Temps restant',
        'prayer.today': 'Horaires d\'aujourd\'hui',
        'prayer.download_monthly': 'Télécharger le calendrier du mois',
        'prayer.download_month': 'Télécharger le calendrier du mois',
        'prayer.download_ramadan': 'Horaire Spécial Ramadan',
        'prayer.days': 'Jours',
        'prayer.hrs': 'Heures',
        'prayer.min': 'Min',
        'prayer.mins': 'Min',
        'prayer.sec': 'Sec',
        'prayer.secs': 'Sec',
        'prayer.synced': 'Synchronisé avec Mawaqit',
        'prayer.now': '● Maintenant',
        'prayer.fajr': 'Fajr',
        'prayer.shuruq': 'Chourouq',
        'prayer.dhuhr': 'Dhuhr',
        'prayer.asr': 'Asr',
        'prayer.maghrib': 'Maghrib',
        'prayer.isha': 'Isha',
        
        // Imam
        'imam.title': 'Consulter l\'Imam',
        'imam.desc': 'L\'Imam est à votre disposition pour vous guider dans les affaires religieuses, le conseil familial ou le doute sur l\'Islam.',
        'imam.subtitle': 'Votre foyer spirituel à Majorque',
        'imam.section_title': 'Un espace d\'écoute et d\'orientation',
        'imam.section_desc': 'Notre Imam est toujours disponible pour vous accompagner, vous conseiller ou vous offrir un espace sûr pour être écouté en toute confidentialité.',
        'imam.feature1_title': 'Guidance Spirituelle',
        'imam.feature1_desc': 'Réponses basées sur le Coran et la Sunnah.',
        'imam.feature2_title': 'Conseil Familial',
        'imam.feature2_desc': 'Médiation et soutien pour l\'harmonie du foyer.',
        'imam.name': 'Nom complet',
        'imam.name_ph': 'Votre nom',
        'imam.email': 'Adresse e-mail',
        'imam.email_ph': 'votre@email.com',
        'imam.subject': 'Sujet',
        'imam.subj_opt1': 'Sélectionnez un sujet',
        'imam.subj_opt2': 'Question religieuse (Fatwa)',
        'imam.subj_opt3': 'Conseil conjugal',
        'imam.subj_opt4': 'Conversion à l\'Islam',
        'imam.subj_opt5': 'Autre',
        'imam.msg': 'Message',
        'imam.msg_ph': 'Comment pouvons-nous vous aider ?',
        'imam.send': 'Envoyer le message',
        'imam.success_title': 'Message envoyé',
        'imam.success_desc': 'Que la paix soit sur vous. L\'Imam a bien reçu votre message et vous répondra dès que possible incha Allah.',
        'imam.success_reset': 'Envoyer un autre message',
        
        // Contact Map
        'contact.title': 'Informations de Contact',
        'contact.phone': 'Téléphone',
        'contact.email': 'E-mail',
        'contact.colab_title': 'COLLABORATION',
        'contact.colab_desc': 'Ce site web a été conçu et offert bénévolement par <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> pour le service de notre communauté et la diffusion de l\'Islam. Qu\'Allah accepte cette contribution.',
        
        // Support
        'support.title': 'Construisons notre communauté ensemble',
        'support.desc': 'Un espace de paix pour tous. Votre soutien généreux est le cœur de notre mosquée, lui permettant de rester un refuge d\'adoration et d\'apprentissage.',
        'support.btn': 'Faire un don',
        'support.tag1': 'Entretien',
        'support.tag2': 'Éducation',
        
        // Donation Modal
        'modal.title': 'Soutenez notre Mosquée',
        'modal.desc': 'Bientôt, nous activerons les moyens de don en ligne suivants :',
        'modal.thanks': 'Merci pour votre patience !',
        'modal.transf': 'Virement bancaire',
        
        // Footer
        'footer.colab': 'Collaboration',
        'footer.colab_desc': 'Cet espace numérique a été créé avec amour pour rapprocher notre chère communauté.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Mentions légales',
        'footer.legal1': 'Avis légal',
        'footer.legal2': 'Confidentialité',
        'footer.legal3': 'Politique de cookies',
        'footer.dev': 'Développé par',
        'footer.rights': '© 2024 Mosquée Arrahma. Tous droits réservés.',

        // Cookies Banner
        'cookie.banner_title': 'Votre confidentialité compte pour nous',
        'cookie.banner_text': 'Nous utilisons des cookies pour améliorer nos services et personnaliser votre expérience. En poursuivant votre navigation, vous en acceptez l\'utilisation.',
        'cookie.banner_more': 'Pour plus d\'informations, consultez notre',
        'cookie.link_text': 'Politique de cookies',
        'cookie.more_options': 'Plus d\'options',
        'cookie.accept_btn': 'Accepter et continuer',

        // WhatsApp
        'wa.title': 'Consultation via WhatsApp',
        'wa.desc': 'Sélectionnez le sujet de votre consultation :',
        'wa.opt1': 'Question religieuse (Fatwa)',
        'wa.opt2': 'Conseil conjugal',
        'wa.opt3': 'Conversion à l\'Islam',
        'wa.opt4': 'Autre',

        // Quran Section
        'quran.view_more': 'Voir plus de Sourates',
        'quran.view_less': 'Voir moins',
        'quran.section_title': 'Sourates du Coran',
        'quran.filter_all': 'Toutes',
        'quran.filter_essential': 'Essentielles',
        'quran.filter_friday': 'Vendredi',
        'quran.filter_ramadan': 'Ramadan',
        'quran.filter_protection': 'Protection',
        'quran.badge_essential': 'Essentiel',
        'quran.badge_friday': 'Vendredi',
        'quran.badge_ramadan': 'Ramadan',
        'quran.badge_protection': 'Protection',
        'quran.s1_title': 'Sourate Al-Fatiha',
        'quran.s1_sub': 'L\'Ouverture',
        'quran.s1_desc': 'C\'est l\'essence du Coran, récitée dans chaque prière quotidienne pour demander la guidance.',
        'quran.s2_title': 'Sourate Al-Baqarah',
        'quran.s2_sub': 'La Vache',
        'quran.s2_desc': 'La plus longue sourate. Sa récitation protège le foyer, apporte la bénédiction et éloigne le mal.',
        'quran.s3_title': 'Sourate Ya-Sin',
        'quran.s3_sub': 'Le Cœur du Coran',
        'quran.s3_desc': 'Une magnifique sourate récitée pour demander la facilité, le pardon et la paix spirituelle.',
        'quran.s4_title': 'Sourate Al-Mulk',
        'quran.s4_sub': 'La Royauté',
        'quran.s4_desc': 'Recommandée chaque nuit, elle intercède pour celui qui la récite et offre une grande protection.',
        'quran.s5_title': 'Sourate Al-Kahf',
        'quran.s5_sub': 'La Caverne',
        'quran.s5_desc': 'Tradition du vendredi ; elle apporte une lumière entre deux vendredis à son lecteur.',
        'quran.s5_badge': 'Recommandé Aujourd\'hui',
        'quran.s6_title': 'Sourate Ar-Rahman',
        'quran.s6_sub': 'Le Tout Miséricordieux',
        'quran.s6_desc': 'Connue comme la fiancée du Coran, elle célèbre les bienfaits d\'Allah et Sa miséricorde infinie.',
        'quran.s7_title': 'Sourate Al-Waqi\'ah',
        'quran.s7_sub': 'L\'Événement',
        'quran.s7_desc': 'Recommandée chaque nuit par le Prophète ﷺ pour préserver de la pauvreté et apporter la subsistance.',
        'quran.s8_title': 'Sourate Al-Jumu\'ah',
        'quran.s8_sub': 'Le Vendredi',
        'quran.s8_desc': 'La sourate portant le nom du jour le plus saint de la semaine. Récitée lors de la prière du Vendredi.',
        'quran.s9_title': 'Sourate Al-Munafiqun',
        'quran.s9_sub': 'Les Hypocrites',
        'quran.s9_desc': 'Complète Al-Jumu\'ah. Le Prophète ﷺ les récitait ensemble lors de la prière du Vendredi.',
        'quran.s10_title': 'Sourate Al-Qadr',
        'quran.s10_sub': 'La Nuit du Destin',
        'quran.s10_desc': 'Décrit Laylat al-Qadr, la nuit la plus sainte du Ramadan, meilleure que mille mois d\'adoration.',
        'quran.s11_title': 'Sourate Ad-Dukhan',
        'quran.s11_sub': 'La Fumée',
        'quran.s11_desc': 'Recommandée pendant le Ramadan. Celui qui la récite la nuit du vendredi est pardonné.',
        'quran.s12_title': 'Sourate Al-Ikhlas',
        'quran.s12_sub': 'Le Monothéisme Pur',
        'quran.s12_desc': 'Équivaut à un tiers du Coran. Déclaration pure de l\'unicité d\'Allah (Tawhid).',
        'quran.s13_title': 'Sourate Al-Falaq',
        'quran.s13_sub': 'L\'Aube Naissante',
        'quran.s13_desc': 'L\'une des protections. Demande refuge auprès d\'Allah contre le mal de la nuit, l\'envie et la sorcellerie.',
        'quran.s14_title': 'Sourate An-Nas',
        'quran.s14_sub': 'Les Hommes',
        'quran.s14_desc': 'La dernière sourate du Coran. Demande refuge en Allah contre les mauvais insufflements.',
        'map.box_title': 'Mosquée Arrahma',
        'map.box_address': 'Carrer Hort de Torrella 11C, Palma',
        
        // Ramadan
        'ramadan.title': 'Calendrier du Ramadan',
        'ramadan.subtitle': 'Mois de bénédiction, de jeûne et de pardon',
        'ramadan.countdown_title': 'Temps restant avant le prochain Ramadan',
        'ramadan.countdown_iftar': 'Temps restant avant l\'<span class="text-primary ml-1 font-black">IFTAR</span>',
        'ramadan.download_pdf': 'Télécharger le calendrier',
        'ramadan.day': 'Jour',
        'ramadan.date': 'Date',
        'ramadan.fajr': 'Fajr',
        'ramadan.dhuhr': 'Dhuhr',
        'ramadan.asr': 'Asr',
        'ramadan.maghrib': 'Maghrib (Iftar)',
        'ramadan.isha': 'Isha',
        'ramadan.placeholder_title': 'Le calendrier sera bientôt disponible',
        'ramadan.placeholder_desc': 'Le calendrier détaillé des 30 jours apparaîtra ici automatiquement dès le début du mois sacré.',
        'ramadan.notice': '* Les horaires sont calculés selon la position du soleil à Palma de Majorque. Une marge de précaution est recommandée pendant le Ramadan.',

        // Khutba / Enseñanzas del Imán
        'khutba.eyebrow': 'Guidance et sermons de l\'Imam',
        'khutba.title': 'Enseignements de la Khoutba',
        'khutba.subtitle': 'Réflexions hebdomadaires et enseignements pratiques partagés chaque vendredi par l\'Imam Youssef.',
        'khutba.btn_read': 'Lire la Khoutba complète',
        'khutba.badge_unity': 'Unité et Sunnah',
        'khutba.badge_fiqh': 'Fiqh et Purification',
        'khutba.badge_ethics': 'Éthique et Justice',
        'khutba.c1_tag': 'Khoutba 1 • Al-I\'tisam',
        'khutba.c1_title': 'L\'union de la communauté et l\'attachement au Coran',
        'khutba.c1_sub': 'S\'accrocher au Coran et à la Sunnah et éviter les divisions',
        'khutba.c1_desc': '« Et cramponnez-vous tous ensemble au câble d\'Allah... » Les enseignements pour préserver l\'unité et éviter la division.',
        'khutba.c2_tag': 'Khoutba 2 • Question 8003',
        'khutba.c2_title': 'Purification hors du foyer et prière à l\'heure',
        'khutba.c2_sub': 'Que faire à l\'école ou au travail sans eau pour l\'Istinja ?',
        'khutba.c2_desc': 'L\'explication du Cheikh Ibn \'Outhaymin sur l\'Istijmar et l\'obligation stricte d\'accomplir la prière à son heure.',
        'khutba.c3_tag': 'Khoutba 3 • Droits et Propriété',
        'khutba.c3_title': 'Le respect des limites et de la propriété d\'autrui',
        'khutba.c3_sub': 'La gravité de modifier les limites ou d\'usurper des biens',
        'khutba.c3_desc': '« Qu\'Allah maudisse celui qui modifie les limites de la terre. » L\'Islam protège strictement les droits de propriété.',
        'khutba.jumuah_badge': 'Jumu\'ah • الجمعة',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'Sourate Al-Imran: 103',
        'khutba.c1_source': 'Sahih Muslim',
        'khutba.c2_quote': '« Je passe la plupart de ma journée à l\'école ou au travail... »',
        'khutba.c2_ref': 'Ash-Sharh Al Mumti\' 1/103',
        'khutba.c3_hadith': '« Qu\'Allah maudisse celui qui modifie les limites de la terre. »',
        'khutba.c3_source': 'Sahih Muslim',
        'khutba.modal_close': 'Fermer la lecture',
        'khutba.modal_source': 'Partagé par l\'Imam Youssef • Mosquée Arrahma',
        'khutba.swipe_hint': 'Balayez pour voir plus',
        'support.quote': '« Ceux qui dépensent leurs biens nuit et jour, en secret et en public, trouveront leur récompense auprès de leur Seigneur... »',
        'support.verse': 'Coran 2:274',
        'contact.open_maps': 'Ouvrir dans Google Maps',
        'footer.made_by': 'Conçu par',
        'imam.opening_mail': 'Ouverture de la messagerie...',
        'nav.brand_name': 'Mosquée Ar-Rahma'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.times': 'Prayer Times',
        'nav.ask': 'Ask the Imam',
        'nav.location': 'Location',
        'nav.donate': 'Donate',
        'nav.support': 'Support Mosque',
        'nav.ramadan': 'Ramadan',
        'nav.khutba': 'Friday Khutbah',
        
        // Hero 1
        'hero.title': 'Arrahma Mosque',
        'hero.subtitle': 'A space of peace, worship, and community in Palma de Mallorca',
        'hero.cta': 'View Prayer Times',
        'hero.quran': 'Read & Listen to Quran',
        'hero.quran_cta': 'Read Quran Free',
        
        // Hero 2
        'hero2.title': 'A Vibrant Community',
        
        // Hero 3
        'hero3.title': 'The Direction of Our Hearts',
        'hero3.desc': 'Connecting Palma de Mallorca with the essence of our universal faith.',
        
        // Hero 4
        'hero4.title': 'A Sanctuary of Worship',
        'hero4.desc': 'Finding tranquility and guidance through daily prayers.',
        
        // Prayer Times
        'prayer.title': 'Prayer Times',
        'prayer.desc': 'Find peace in your daily routine. Times are updated based on the sun position in our community.',
        'prayer.next': 'Next Prayer',
        'prayer.remaining': 'Remaining',
        'prayer.today': 'Today\'s Times',
        'prayer.download_monthly': 'Download Monthly Schedule',
        'prayer.download_month': 'Download Monthly Schedule',
        'prayer.download_ramadan': 'Special Ramadan Schedule',
        'prayer.days': 'Days',
        'prayer.hrs': 'Hours',
        'prayer.min': 'Mins',
        'prayer.mins': 'Mins',
        'prayer.sec': 'Secs',
        'prayer.secs': 'Secs',
        'prayer.synced': 'Synced with Mawaqit',
        'prayer.now': '● Now',
        'prayer.fajr': 'Fajr',
        'prayer.shuruq': 'Shuruq',
        'prayer.dhuhr': 'Dhuhr',
        'prayer.asr': 'Asr',
        'prayer.maghrib': 'Maghrib',
        'prayer.isha': 'Isha',
        
        // Imam
        'imam.title': 'Ask the Imam',
        'imam.desc': 'The Imam is available to guide you on religious matters, family counseling, or queries about Islam.',
        'imam.subtitle': 'Your spiritual home in Mallorca',
        'imam.section_title': 'A space of listening and guidance',
        'imam.section_desc': 'Our Imam is always available to accompany you, offer guidance, or provide a safe space to be heard in full confidentiality.',
        'imam.feature1_title': 'Spiritual Guidance',
        'imam.feature1_desc': 'Answers based on the Quran and Sunnah.',
        'imam.feature2_title': 'Family Counseling',
        'imam.feature2_desc': 'Mediation and support for harmony at home.',
        'imam.name': 'Full Name',
        'imam.name_ph': 'Your name',
        'imam.email': 'Email Address',
        'imam.email_ph': 'your@email.com',
        'imam.subject': 'Subject',
        'imam.subj_opt1': 'Select a subject',
        'imam.subj_opt2': 'Religious Question (Fatwa)',
        'imam.subj_opt3': 'Marital Counseling',
        'imam.subj_opt4': 'Conversion to Islam',
        'imam.subj_opt5': 'Other',
        'imam.msg': 'Message',
        'imam.msg_ph': 'How can we help you?',
        'imam.send': 'Send Message',
        'imam.success_title': 'Message Sent',
        'imam.success_desc': 'Peace be upon you. The Imam has received your message and will reply as soon as possible insha\'Allah.',
        'imam.success_reset': 'Send another message',
        
        // Contact Map
        'contact.title': 'Contact Information',
        'contact.phone': 'Phone',
        'contact.email': 'Email',
        'contact.colab_title': 'COLLABORATION',
        'contact.colab_desc': 'This website was designed and donated charitably by <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> to serve our community and support Islam. May Allah accept this contribution.',
        
        // Support
        'support.title': 'Let us build our community together',
        'support.desc': 'A peaceful sanctuary for all. Your generous support keeps our mosque alive as a haven for worship and learning.',
        'support.btn': 'Donate Now',
        'support.tag1': 'Maintenance',
        'support.tag2': 'Education',
        
        // Donation Modal
        'modal.title': 'Support Our Mosque',
        'modal.desc': 'Soon we will enable the following online donation methods:',
        'modal.thanks': 'Thank you for your patience!',
        'modal.transf': 'Bank Transfer',
        
        // Footer
        'footer.colab': 'Collaboration',
        'footer.colab_desc': 'This digital space was created with love to bring our beloved community closer.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Legal',
        'footer.legal1': 'Legal Notice',
        'footer.legal2': 'Privacy Policy',
        'footer.legal3': 'Cookie Policy',
        'footer.dev': 'Developed by',
        'footer.rights': '© 2024 Arrahma Mosque. All rights reserved.',

        // Cookies Banner
        'cookie.banner_title': 'Your privacy matters to us',
        'cookie.banner_text': 'We use cookies to improve our services and customize your experience. By continuing to browse, you accept their use.',
        'cookie.banner_more': 'For more information, see our',
        'cookie.link_text': 'Cookie Policy',
        'cookie.more_options': 'More Options',
        'cookie.accept_btn': 'Accept & Continue',

        // WhatsApp
        'wa.title': 'WhatsApp Consultation',
        'wa.desc': 'Select the subject of your consultation:',
        'wa.opt1': 'Religious Question (Fatwa)',
        'wa.opt2': 'Marital Counseling',
        'wa.opt3': 'Conversion to Islam',
        'wa.opt4': 'Other',

        // Quran Section
        'quran.view_more': 'View More Surahs',
        'quran.view_less': 'View Less',
        'quran.section_title': 'Surahs of the Quran',
        'quran.filter_all': 'All',
        'quran.filter_essential': 'Essential',
        'quran.filter_friday': 'Friday',
        'quran.filter_ramadan': 'Ramadan',
        'quran.filter_protection': 'Protection',
        'quran.badge_essential': 'Essential',
        'quran.badge_friday': 'Friday',
        'quran.badge_ramadan': 'Ramadan',
        'quran.badge_protection': 'Protection',
        'quran.s1_title': 'Surah Al-Fatiha',
        'quran.s1_sub': 'The Opening',
        'quran.s1_desc': 'It is the essence of the Quran, recited in every daily prayer to seek guidance.',
        'quran.s2_title': 'Surah Al-Baqarah',
        'quran.s2_sub': 'The Cow',
        'quran.s2_desc': 'The longest surah. Its recitation protects the home, brings blessings, and wards off evil.',
        'quran.s3_title': 'Surah Ya-Sin',
        'quran.s3_sub': 'Heart of the Quran',
        'quran.s3_desc': 'A beautiful surah recited for ease, forgiveness, and spiritual peace.',
        'quran.s4_title': 'Surah Al-Mulk',
        'quran.s4_sub': 'The Sovereignty',
        'quran.s4_desc': 'Recommended every night, interceding for its reciter and granting protection.',
        'quran.s5_title': 'Surah Al-Kahf',
        'quran.s5_sub': 'The Cave',
        'quran.s5_desc': 'Tradition to recite on Fridays; it brings light between two consecutive Fridays.',
        'quran.s5_badge': 'Recommended Today',
        'quran.s6_title': 'Surah Ar-Rahman',
        'quran.s6_sub': 'The Most Gracious',
        'quran.s6_desc': 'Known as the bride of the Quran, celebrating Allah\'s blessings and infinite mercy.',
        'quran.s7_title': 'Surah Al-Waqi\'ah',
        'quran.s7_sub': 'The Inevitable Event',
        'quran.s7_desc': 'Recommended by the Prophet ﷺ every night to protect from poverty and bring sustenance.',
        'quran.s8_title': 'Surah Al-Jumu\'ah',
        'quran.s8_sub': 'Friday',
        'quran.s8_desc': 'The surah named after the holiest day of the week, recited during Friday prayer.',
        'quran.s9_title': 'Surah Al-Munafiqun',
        'quran.s9_sub': 'The Hypocrites',
        'quran.s9_desc': 'Complements Al-Jumu\'ah; the Prophet ﷺ used to recite them together in Friday prayer.',
        'quran.s10_title': 'Surah Al-Qadr',
        'quran.s10_sub': 'The Night of Decree',
        'quran.s10_desc': 'Describes Laylat al-Qadr, the holiest night of Ramadan, better than a thousand months.',
        'quran.s11_title': 'Surah Ad-Dukhan',
        'quran.s11_sub': 'The Smoke',
        'quran.s11_desc': 'Recommended during Ramadan nights. Whoever recites it on Friday night rises forgiven.',
        'quran.s12_title': 'Surah Al-Ikhlas',
        'quran.s12_sub': 'The Sincerity',
        'quran.s12_desc': 'Equals one-third of the Quran. Pure declaration of the Oneness of Allah (Tawhid).',
        'quran.s13_title': 'Surah Al-Falaq',
        'quran.s13_sub': 'The Daybreak',
        'quran.s13_desc': 'One of the protective surahs seeking refuge in Allah from evil, envy, and harm.',
        'quran.s14_title': 'Surah An-Nas',
        'quran.s14_sub': 'Mankind',
        'quran.s14_desc': 'The final surah of the Quran, seeking refuge in Allah from evil whisperings.',
        'map.box_title': 'Arrahma Mosque',
        'map.box_address': 'Carrer Hort de Torrella 11C, Palma',
        
        // Ramadan
        'ramadan.title': 'Ramadan Schedule',
        'ramadan.subtitle': 'Month of blessing, fasting, and forgiveness',
        'ramadan.countdown_title': 'Time remaining until next Ramadan',
        'ramadan.countdown_iftar': 'Time remaining until <span class="text-primary ml-1 font-black">IFTAR</span>',
        'ramadan.download_pdf': 'Download Calendar',
        'ramadan.day': 'Day',
        'ramadan.date': 'Date',
        'ramadan.fajr': 'Fajr',
        'ramadan.dhuhr': 'Dhuhr',
        'ramadan.asr': 'Asr',
        'ramadan.maghrib': 'Maghrib (Iftar)',
        'ramadan.isha': 'Isha',
        'ramadan.placeholder_title': 'The schedule will be available soon',
        'ramadan.placeholder_desc': 'The detailed 30-day calendar will appear here automatically once the blessed month begins.',
        'ramadan.notice': '* Times are calculated based on the position of the sun for Palma. A precautionary margin is recommended during Ramadan.',

        // Khutba / Enseñanzas del Imán
        'khutba.eyebrow': 'Guidance & Sermons from the Imam',
        'khutba.title': 'Teachings of the Khutbah',
        'khutba.subtitle': 'Reflections, religious answers, and practical teachings shared by Imam Yusuf every Friday.',
        'khutba.btn_read': 'Read Full Khutbah',
        'khutba.badge_unity': 'Unity & Sunnah',
        'khutba.badge_fiqh': 'Fiqh & Purity',
        'khutba.badge_ethics': 'Ethics & Justice',
        'khutba.c1_tag': 'Khutbah 1 • Al-I\'tisam',
        'khutba.c1_title': 'Community Unity and Holding Fast to Guidance',
        'khutba.c1_sub': 'Holding fast to Quran & Sunnah and avoiding division',
        'khutba.c1_desc': '“And hold firmly to the rope of Allah all together and do not become divided...”',
        'khutba.c2_tag': 'Khutbah 2 • Question 8003',
        'khutba.c2_title': 'Purification Outside Home & Praying on Time',
        'khutba.c2_sub': 'How to manage at school or work if water for Istinja is unavailable?',
        'khutba.c2_desc': 'Shaykh Ibn Uthaymeen\'s ruling on Istijmar with tissue and the strict prohibition of delaying prayers.',
        'khutba.c3_tag': 'Khutbah 3 • Rights & Property',
        'khutba.c3_title': 'Respecting Boundaries & Others\' Property',
        'khutba.c3_sub': 'The severity of altering boundary markers or usurping property',
        'khutba.c3_desc': 'The Prophet ﷺ said: “May Allah curse whoever alters the boundary markers of the land.”',
        'khutba.jumuah_badge': 'Jumu\'ah • الجمعة',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'Surah Al-Imran: 103',
        'khutba.c1_source': 'Sahih Muslim',
        'khutba.c2_quote': '“I spend most of my day at school or work and need to use the restroom...”',
        'khutba.c2_ref': 'Ash-Sharh Al Mumti\' 1/103',
        'khutba.c3_hadith': '“May Allah curse whoever alters the boundary markers of the land.”',
        'khutba.c3_source': 'Sahih Muslim',
        'khutba.modal_close': 'Close Reading',
        'khutba.modal_source': 'Shared by Imam Yusuf • Arrahma Mosque',
        'khutba.swipe_hint': 'Swipe to view more',
        'support.quote': '“Those who spend their wealth by night and day, secretly and openly, will have their reward with their Lord...”',
        'support.verse': 'Quran 2:274',
        'contact.open_maps': 'Open in Google Maps',
        'footer.made_by': 'Made by',
        'imam.opening_mail': 'Opening Email...',
        'nav.brand_name': 'Ar-Rahma Mosque'
    },
    bn: {
        // Navigation
        'nav.home': 'মূল পাতা',
        'nav.times': 'নামাজের সময়',
        'nav.ask': 'ইমামকে প্রশ্ন',
        'nav.location': 'অবস্থান',
        'nav.donate': 'দান করুন',
        'nav.support': 'মসজিদকে সাহায্য',
        'nav.ramadan': 'রমজান',
        'nav.khutba': 'জুমার খুতবা',
        
        // Hero 1
        'hero.title': 'আর-রাহমাহ মসজিদ',
        'hero.subtitle': 'পালমা ডি মায়োর্কায় শান্তি, ইবাদত এবং সম্প্রদায়ের এক মেলবন্ধন',
        'hero.cta': 'নামাজের সময়সূচী দেখুন',
        'hero.quran': 'কুরআন পড়ুন এবং শুনুন',
        'hero.quran_cta': 'বিনামূল্যে কুরআন পড়ুন',
        
        // Hero 2
        'hero2.title': 'এক প্রাণবন্ত সম্প্রদায়',
        
        // Hero 3
        'hero3.title': 'আমাদের হৃদয়ের দিকনির্দেশনা',
        'hero3.desc': 'আমাদের সার্বজনীন বিশ্বাসের মূলভাবের সাথে পালমা ডি মায়োর্কাকে যুক্ত করা।',
        
        // Hero 4
        'hero4.title': 'ইবাদতের এক নিরাপদ স্থান',
        'hero4.desc': 'দৈনন্দিন সালাতের মাধ্যমে প্রশান্তি ও হেদায়েত লাভ।',
        
        // Prayer Times
        'prayer.title': 'নামাজের সময়সূচী',
        'prayer.desc': 'আপনার দৈনন্দিন রুটিনে প্রশান্তি খুঁজুন। সূর্যের অবস্থানের ভিত্তিতে সময়সূচী আপডেট করা হয়।',
        'prayer.next': 'পরবর্তী নামাজ',
        'prayer.remaining': 'বাকি সময়',
        'prayer.today': 'আজকের সময়সূচী',
        'prayer.download_monthly': 'মাসিক সময়সূচী ডাউনলোড',
        'prayer.download_month': 'মাসিক সময়সূচী ডাউনলোড',
        'prayer.download_ramadan': 'বিশেষ রমজান সময়সূচী',
        'prayer.days': 'দিন',
        'prayer.hrs': 'ঘণ্টা',
        'prayer.min': 'মি',
        'prayer.mins': 'মি',
        'prayer.sec': 'সে',
        'prayer.secs': 'সে',
        'prayer.synced': 'মাওয়াক্বিতের সাথে সমন্বয়কৃত',
        'prayer.now': '● এখন',
        'prayer.fajr': 'ফজর',
        'prayer.shuruq': 'সূর্যোদয়',
        'prayer.dhuhr': 'যোহর',
        'prayer.asr': 'আসর',
        'prayer.maghrib': 'মাগরিব',
        'prayer.isha': 'ইশা',
        
        // Imam
        'imam.title': 'ইমামকে জিজ্ঞাসা করুন',
        'imam.desc': 'ধর্মীয় বিষয়, পারিবারিক পরামর্শ বা ইসলাম সম্পর্কে প্রশ্নের জন্য ইমাম সাহায্য করতে প্রস্তুত।',
        'imam.subtitle': 'মায়োর্কায় আপনার আধ্যাত্মিক ঠিকানা',
        'imam.section_title': 'শোনা এবং দিকনির্দেশনার এক স্থান',
        'imam.section_desc': 'আমাদের ইমাম সর্বদা আপনাকে সহায়তা করতে, দিকনির্দেশনা দিতে বা গোপনীয়তার সাথে শোনার স্থান দিতে প্রস্তুত।',
        'imam.feature1_title': 'আধ্যাত্মিক দিকনির্দেশনা',
        'imam.feature1_desc': 'কুরআন ও সুন্নাহর ভিত্তিতে সমাধান।',
        'imam.feature2_title': 'পারিবারিক পরামর্শ',
        'imam.feature2_desc': 'পরিবারে শান্তি ও সম্প্রীতির জন্য সহায়তা।',
        'imam.name': 'পুরা নাম',
        'imam.name_ph': 'আপনার নাম',
        'imam.email': 'ইমেইল ঠিকানা',
        'imam.email_ph': 'আপনার@ইমেইল.com',
        'imam.subject': 'বিষয়',
        'imam.subj_opt1': 'একটি বিষয় নির্বাচন করুন',
        'imam.subj_opt2': 'ধর্মীয় প্রশ্ন (ফতোয়া)',
        'imam.subj_opt3': 'বৈবাহিক পরামর্শ',
        'imam.subj_opt4': 'ইসলাম গ্রহণ',
        'imam.subj_opt5': 'অন্যান্য',
        'imam.msg': 'বার্তা',
        'imam.msg_ph': 'আমরা আপনাকে কীভাবে সাহায্য করতে পারি?',
        'imam.send': 'বার্তা পাঠান',
        'imam.success_title': 'বার্তা পাঠানো হয়েছে',
        'imam.success_desc': 'আপনার ওপর শান্তি বর্ষিত হোক। ইমাম আপনার বার্তা পেয়েছেন এবং ইনশাআল্লাহ শীঘ্রই উত্তর দেবেন।',
        'imam.success_reset': 'অন্য একটি বার্তা পাঠান',
        
        // Contact Map
        'contact.title': 'যোগাযোগের তথ্য',
        'contact.phone': 'ফোন',
        'contact.email': 'ইমেইল',
        'contact.colab_title': 'সহযোগিতা',
        'contact.colab_desc': 'এই ওয়েবসাইটটি আমাদের সম্প্রদায়ের সেবায় <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> দ্বারা সম্পূর্ণ দাতব্যভাবে দান করা হয়েছে। আল্লাহ কবুল করুন।',
        
        // Support
        'support.title': 'আসুন একসাথে আমাদের সমাজ গড়ে তুলি',
        'support.desc': 'সবার জন্য শান্তির এক নীড়। আপনার উদার দান আমাদের মসজিদকে সচল রাখে।',
        'support.btn': 'এখনই দান করুন',
        'support.tag1': 'রক্ষণাবেক্ষণ',
        'support.tag2': 'শিক্ষা',
        
        // Donation Modal
        'modal.title': 'আমাদের মসজিদকে সমর্থন করুন',
        'modal.desc': 'শীঘ্রই আমরা নিম্নলিখিত অনলাইন দানের পদ্ধতি চালু করব:',
        'modal.thanks': 'আপনার ধৈর্যের জন্য ধন্যবাদ!',
        'modal.transf': 'ব্যাংক ট্রান্সফার',
        
        // Footer
        'footer.colab': 'সহযোগিতা',
        'footer.colab_desc': 'আমাদের প্রিয় সম্প্রদায়কে কাছাকাছি নিয়ে আসার জন্য ভালোবাসার সাথে তৈরি।',
        'footer.nav': 'ন্যাভিগেশন',
        'footer.legal': 'আইনি',
        'footer.legal1': 'আইনি বিজ্ঞপ্তি',
        'footer.legal2': 'গোপনীয়তা',
        'footer.legal3': 'কুকি নীতি',
        'footer.dev': 'তৈরি করেছেন',
        'footer.rights': '© ২০২৪ আর-রাহমাহ মসজিদ। সর্বস্বত্ব সংরক্ষিত।',

        // Cookies Banner
        'cookie.banner_title': 'আপনার গোপনীয়তা আমাদের কাছে গুরুত্বপূর্ণ',
        'cookie.banner_text': 'আমরা আমাদের পরিষেবা উন্নত করতে কুকি ব্যবহার করি। ব্রাউজ করা চালিয়ে যাওয়ার মাধ্যমে, আপনি গ্রহণ করছেন।',
        'cookie.banner_more': 'আরও তথ্যের জন্য দেখুন',
        'cookie.link_text': 'কুকি নীতি',
        'cookie.more_options': 'আরও বিকল্প',
        'cookie.accept_btn': 'গ্রহণ করুন ও এগিয়ে যান',

        // WhatsApp
        'wa.title': 'হোয়াটসঅ্যাপের মাধ্যমে পরামর্শ',
        'wa.desc': 'আপনার পরামর্শের বিষয় নির্বাচন করুন:',
        'wa.opt1': 'ধর্মীয় প্রশ্ন (ফতোয়া)',
        'wa.opt2': 'বৈবাহিক পরামর্শ',
        'wa.opt3': 'ইসলাম গ্রহণ',
        'wa.opt4': 'অন্যান্য',

        // Quran Section
        'quran.view_more': 'আরও সূরা দেখুন',
        'quran.view_less': 'কম দেখুন',
        'quran.section_title': 'কুরআনের সূরাসমূহ',
        'quran.filter_all': 'সবগুলো',
        'quran.filter_essential': 'জরুরি',
        'quran.filter_friday': 'শুক্রবার',
        'quran.filter_ramadan': 'রমজান',
        'quran.filter_protection': 'সুরক্ষা',
        'quran.badge_essential': 'জরুরি',
        'quran.badge_friday': 'শুক্রবার',
        'quran.badge_ramadan': 'রমজান',
        'quran.badge_protection': 'সুরক্ষা',
        'quran.s1_title': 'সূরা আল-ফাতেহা',
        'quran.s1_sub': 'সূচনা',
        'quran.s1_desc': 'এটি কুরআনের মূল এবং হেদায়েতের জন্য আমরা প্রতিটি দৈনন্দিন সালাতে এটি তেলাওয়াত করি।',
        'quran.s2_title': 'সূরা আল-বাকারা',
        'quran.s2_sub': 'গাভী',
        'quran.s2_desc': 'সবচেয়ে দীর্ঘ সূরা। এটি তেলাওয়াত ঘরকে রক্ষা করে, বরকত আনে এবং মন্দ প্রভাব দূর করে।',
        'quran.s3_title': 'সূরা ইয়াসীন',
        'quran.s3_sub': 'কুরআনের হৃদপিণ্ড',
        'quran.s3_desc': 'সহজতা, ক্ষমা এবং আধ্যাত্মিক শান্তির জন্য তেলাওয়াত করা একটি সুন্দর সূরা।',
        'quran.s4_title': 'সূরা আল-মূলক',
        'quran.s4_sub': 'সার্বভৌমত্ব',
        'quran.s4_desc': 'প্রতি রাতে তেলাওয়াত করার জন্য সুপারিশকৃত, যা পাঠকারীর জন্য সুপারিশ করে ও রক্ষা করে।',
        'quran.s5_title': 'সূরা আল-কাহফ',
        'quran.s5_sub': 'গুহা',
        'quran.s5_desc': 'শুক্রবার এটি তেলাওয়াত করা সুন্নাত; এটি দুই শুক্রবারের মধ্যে আলো প্রদান করে।',
        'quran.s5_badge': 'আজকের জন্য সুপারিশকৃত',
        'quran.s6_title': 'সূরা আর-রহমান',
        'quran.s6_sub': 'পরম দয়ালু',
        'quran.s6_desc': 'কুরআনের কনে হিসেবে পরিচিত। এটি আল্লাহর নেয়ামত ও অসীম রহমতের কথা স্মরণ করিয়ে দেয়।',
        'quran.s7_title': 'সূরা আল-ওয়াকিয়াহ',
        'quran.s7_sub': 'মহঘটনাবলি',
        'quran.s7_desc': 'নবীজী ﷺ দারিদ্র্য দূর ও রিজিক বৃদ্ধির জন্য প্রতি রাতে এটি পাঠের পরামর্শ দিয়েছেন।',
        'quran.s8_title': 'সূরা আল-জুমা',
        'quran.s8_sub': 'শুক্রবার',
        'quran.s8_desc': 'সপ্তাহের সবচেয়ে পবিত্র দিনের নামে নামাঙ্কিত সূরা। জুমার সালাতে এটি পাঠ করা হয়।',
        'quran.s9_title': 'সূরা আল-মুনাফিকুন',
        'quran.s9_sub': 'কপট বিশ্বাসীগণ',
        'quran.s9_desc': 'আল-জুমুআহকে পরিপূরক করে। নবীজী ﷺ জুমার সালাতে এই দুটি একসাথে পাঠ করতেন।',
        'quran.s10_title': 'সূরা আল-কদর',
        'quran.s10_sub': 'মহিমান্বিত রাত',
        'quran.s10_desc': 'রমজানের সবচেয়ে পবিত্র রাত শবে কদরের বর্ণনা দেয়, যা হাজার মাসের চেয়েও উত্তম।',
        'quran.s11_title': 'সূরা আদ-দুখান',
        'quran.s11_sub': 'ধোঁয়া',
        'quran.s11_desc': 'রমজানের রাতে এটি পাঠের পরামর্শ দেওয়া হয়। যে ব্যক্তি জুমার রাতে এটি পড়ে সে ক্ষমাপ্রাপ্ত হয়।',
        'quran.s12_title': 'সূরা আল-ইখলাস',
        'quran.s12_sub': 'একনিষ্ঠতা',
        'quran.s12_desc': 'কুরআনের এক-তৃতীয়াংশের সমতুল্য। আল্লাহর একাত্ববাদের খাঁটি ঘোষণা।',
        'quran.s13_title': 'সূরা আল-ফালাক',
        'quran.s13_sub': 'প্রভাত',
        'quran.s13_desc': 'সুরক্ষামূলক সূরাসমূহের একটি, যা অনিষ্ট থেকে আল্লাহর আশ্রয় প্রার্থনা করে।',
        'quran.s14_title': 'সূরা আন-নাস',
        'quran.s14_sub': 'মানুষ জাতি',
        'quran.s14_desc': 'কুরআনের সর্বশেষ সূরা, যা হৃদয়ের মন্দ কুমন্ত্রণা থেকে আল্লাহর আশ্রয় চায়।',
        'map.box_title': 'আর-রাহমাহ মসজিদ',
        'map.box_address': 'ক্যারের হর্ট ডি তোরেলা ১১সি, পালমা',
        
        // Ramadan
        'ramadan.title': 'রমজানের সময়সূচী',
        'ramadan.subtitle': 'বরকত, সিয়াম ও ক্ষমার মাস',
        'ramadan.countdown_title': 'পরবর্তী রমজানের বাকি সময়',
        'ramadan.countdown_iftar': '<span class="text-primary ml-1 font-black">ইফতারের</span> বাকি সময়',
        'ramadan.download_pdf': 'ক্যালেন্ডার ডাউনলোড করুন',
        'ramadan.day': 'দিন',
        'ramadan.date': 'তারিখ',
        'ramadan.fajr': 'ফজর',
        'ramadan.dhuhr': 'যোহর',
        'ramadan.asr': 'আসর',
        'ramadan.maghrib': 'মাগরিব (ইফতার)',
        'ramadan.isha': 'ইশা',
        'ramadan.placeholder_title': 'সময়সূচী শীঘ্রই পাওয়া যাবে',
        'ramadan.placeholder_desc': 'পবিত্র রমজান মাস শুরু হলেই ৩০ দিনের ক্যালেন্ডার এখানে স্বয়ংক্রিয়ভাবে প্রদর্শিত হবে।',
        'ramadan.notice': '* পালমা ডি মায়োর্কার জন্য সূর্যের অবস্থানের ওপর ভিত্তি করে সময় গণনা করা হয়।',

        // Khutba / Enseñanzas del Imán
        'khutba.eyebrow': 'ইমামের দিকনির্দেশনা ও খুতবা',
        'khutba.title': 'খুতবার শিক্ষা',
        'khutba.subtitle': 'প্রতিটি শুক্রবারে ইমাম ইউসুফ আমাদের সম্প্রদায়ের সাথে শেয়ার করা উপলব্ধি ও শিক্ষা।',
        'khutba.btn_read': 'সম্পূর্ণ খুতবা পড়ুন',
        'khutba.badge_unity': 'ঐক্য ও সুন্নাহ',
        'khutba.badge_fiqh': 'ফিকহ ও পবিত্রতা',
        'khutba.badge_ethics': 'নৈতিকতা ও ন্যায়বিচার',
        'khutba.c1_tag': 'খুতবা ১ • আল-ইকতিসাম',
        'khutba.c1_title': 'সম্প্রদায়ের ঐক্য এবং হেদায়েত আঁকড়ে ধরা',
        'khutba.c1_sub': 'কুরআন ও সুন্নাহ আঁকড়ে ধরা এবং বিভেদ এড়ানো',
        'khutba.c1_desc': '‘এবং তোমরা সকলে আল্লাহর রজ্জুকে শক্ত করে ধরো এবং পরস্পর বিচ্ছিন্ন হয়ো না...’',
        'khutba.c2_tag': 'খুতবা ২ • প্রশ্ন ৮০০৩',
        'khutba.c2_title': 'ঘরের বাইরে পবিত্রতা এবং যথাসময়ে সালাত',
        'khutba.c2_sub': 'স্কুল বা কর্মস্থলে ইস্তিঞ্জার পানি না থাকলে কী করবেন?',
        'khutba.c2_desc': 'ইস্তিঞ্জার পানি না থাকলে টিস্যু ব্যবহারের অনুমতি ও যথাসময়ে সালাত আদায়ের বাধ্যবাধকতা।',
        'khutba.c3_tag': 'খুতবা ৩ • অধিকার ও সম্পত্তি',
        'khutba.c3_title': 'অন্যের সীমানা ও সম্পত্তির প্রতি শ্রদ্ধা',
        'khutba.c3_sub': 'সীমানা পরিবর্তন বা অন্যের অধিকার হরণ করার পরিণতি',
        'khutba.c3_desc': 'রাসূলুল্লাহ ﷺ বলেছেন: ‘যে ব্যক্তি জমির সীমানা পরিবর্তন করে তার ওপর আল্লাহর অভিসম্পাত।’',
        'khutba.jumuah_badge': 'জুমুআহ • الجمعة',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'সূরা আল-ইমরান: ১০৩',
        'khutba.c1_source': 'সহীহ মুসলিম',
        'khutba.c2_quote': '‘আমি আমার দিনের বেশিরভাগ সময় স্কুল বা কর্মস্থলে কাটাই...’',
        'khutba.c2_ref': 'আশ-শারহ আল-মুমতি ১/১০৩',
        'khutba.c3_hadith': '‘যে ব্যক্তি জমির সীমানা পরিবর্তন করে তার ওপর আল্লাহর অভিসম্পাত।’',
        'khutba.c3_source': 'সহীহ মুসলিম',
        'khutba.modal_close': 'পড়া বন্ধ করুন',
        'khutba.modal_source': 'ইমাম ইউসুফ দ্বারা শেয়ারকৃত • আর-রাহমাহ মসজিদ',
        'khutba.swipe_hint': 'আরও দেখতে সোয়াইপ করুন',
        'support.quote': '“যারা নিজেদের ধন-সম্পদ দিনে ও রাতে, গোপনে ও প্রকাশ্যে ব্যয় করে, তাদের প্রতিদান তাদের পালনকর্তার কাছে রয়েছে...”',
        'support.verse': 'কুরআন ২:২৭৪',
        'contact.open_maps': 'গুগল ম্যাপে খুলুন',
        'footer.made_by': 'ডিজাইন করেছেন',
        'imam.opening_mail': 'ইমেইল খোলা হচ্ছে...',
        'nav.brand_name': 'মসজিদ আর-রহমা'
    },
    ur: {
        // Navigation
        'nav.home': 'صفحہ اول',
        'nav.times': 'نماز کے اوقات',
        'nav.ask': 'امام سے سوال',
        'nav.location': 'مقام',
        'nav.donate': 'عطیہ دیں',
        'nav.support': 'مسجد کا تعاون',
        'nav.ramadan': 'رمضان',
        'nav.khutba': 'جمعہ کا خطبہ',
        
        // Hero 1
        'hero.title': 'مسجد الرحمہ',
        'hero.subtitle': 'پالما ڈی مایورکا میں امن، عبادت اور کمیونٹی کا مرکز',
        'hero.cta': 'نماز کے اوقات دیکھیں',
        'hero.quran': 'قرآن پڑھیں اور سنیں',
        'hero.quran_cta': 'مفت قرآن پڑھیں',
        
        // Hero 2
        'hero2.title': 'ایک متحرک برادری',
        
        // Hero 3
        'hero3.title': 'ہمارے دلوں کی سمت',
        'hero3.desc': 'پالما ڈی مایورکا کو ہمارے عالمگیر ایمان کے جوہر سے جوڑنا۔',
        
        // Hero 4
        'hero4.title': 'عبادت کا ایک پناہ گاہ',
        'hero4.desc': 'روزانہ کی نمازوں کے ذریعے سکون اور ہدایت حاصل کرنا۔',
        
        // Prayer Times
        'prayer.title': 'نماز کے اوقات',
        'prayer.desc': 'اپنی روزمرہ کی زندگی میں سکون حاصل کریں۔ سورج کی پوزیشن کے مطابق اوقات اپ ڈیٹ ہوتے ہیں۔',
        'prayer.next': 'اگلی نماز',
        'prayer.remaining': 'باقی وقت',
        'prayer.today': 'آج کے اوقات',
        'prayer.download_monthly': 'ماہانہ ٹائم ٹیبل ڈاؤن لوڈ',
        'prayer.download_month': 'ماہانہ ٹائم ٹیبل ڈاؤن لوڈ',
        'prayer.download_ramadan': 'خاص رمضان ٹائم ٹیبل',
        'prayer.days': 'دن',
        'prayer.hrs': 'گھنٹے',
        'prayer.min': 'منٹ',
        'prayer.mins': 'منٹ',
        'prayer.sec': 'سیکنڈ',
        'prayer.secs': 'سیکنڈ',
        'prayer.synced': 'مواقیت سے منسلک',
        'prayer.now': '● اب',
        'prayer.fajr': 'فجر',
        'prayer.shuruq': 'اشراق',
        'prayer.dhuhr': 'ظہر',
        'prayer.asr': 'عصر',
        'prayer.maghrib': 'مغرب',
        'prayer.isha': 'عشاء',
        
        // Imam
        'imam.title': 'امام سے سوال کریں',
        'imam.desc': 'امام دینی معاملات، خاندانی مشاورت، یا اسلام کے بارے میں سوالات کے لیے دستیاب ہیں۔',
        'imam.subtitle': 'مایورکا میں آپ کا روحانی گھر',
        'imam.section_title': 'سماع اور رہنمائی کی جگہ',
        'imam.section_desc': 'ہمارے امام آپ کی رہنمائی اور مکمل راز داری کے ساتھ گفتگو کے لیے ہمیشہ تیار ہیں۔',
        'imam.feature1_title': 'روحانی رہنمائی',
        'imam.feature1_desc': 'قرآن و سنت کی روشنی میں جوابات۔',
        'imam.feature2_title': 'خاندانی مشاورت',
        'imam.feature2_desc': 'گھر میں ہم آہنگی کے لیے مصالحت اور تعاون۔',
        'imam.name': 'مکمل نام',
        'imam.name_ph': 'آپ کا نام',
        'imam.email': 'ای میل ایڈریس',
        'imam.email_ph': 'آپ کا@ای میل.com',
        'imam.subject': 'موضوع',
        'imam.subj_opt1': 'ایک موضوع منتخب کریں',
        'imam.subj_opt2': 'دینی سوال (فتویٰ)',
        'imam.subj_opt3': 'ازدواجی مشاورت',
        'imam.subj_opt4': 'قبولِ اسلام',
        'imam.subj_opt5': 'دیگر',
        'imam.msg': 'پیغام',
        'imam.msg_ph': 'ہم آپ کی کیا مدد کر سکتے ہیں؟',
        'imam.send': 'پیغام بھیجیں',
        'imam.success_title': 'پیغام بھیج دیا گیا',
        'imam.success_desc': 'آپ پر سلامتی ہو۔ امام کو آپ کا پیغام مل گیا ہے اور وہ ان شاء اللہ جلد جواب دیں گے۔',
        'imam.success_reset': 'ایک اور پیغام بھیجیں',
        
        // Contact Map
        'contact.title': 'رابطے کی معلومات',
        'contact.phone': 'فون',
        'contact.email': 'ای میل',
        'contact.colab_title': 'تعاون',
        'contact.colab_desc': 'یہ ویب سائٹ <a class="underline hover:text-primary transition-colors font-semibold" href="https://mynextbymusa.com" target="_blank" rel="noopener noreferrer">MyNext</a> کی طرف سے بلا معاوضہ تیار کر کے عطیہ کی گئی ہے۔ اللہ قبول فرمائے۔',
        
        // Support
        'support.title': 'آئیں مل کر اپنی برادری کو تعمیر کریں',
        'support.desc': 'سب کے لیے امن کا ایک گہوارہ۔ آپ کا سخاوت مندانہ تعاون ہماری مسجد کی روح ہے۔',
        'support.btn': 'ابھی عطیہ دیں',
        'support.tag1': 'دیکھ بھال',
        'support.tag2': 'تعلیم',
        
        // Donation Modal
        'modal.title': 'ہماری مسجد کی اعانت کریں',
        'modal.desc': 'عنقریب ہم آن لائن عطیات کے مندرجہ ذیل طریقے فعال کریں گے:',
        'modal.thanks': 'آپ کے صبر کا شکریہ!',
        'modal.transf': 'بینک ٹرانسفر',
        
        // Footer
        'footer.colab': 'تعاون',
        'footer.colab_desc': 'یہ ڈیجیٹل پلیٹ فارم محبت کے ساتھ قائم کیا گیا ہے تاکہ ہماری برادری کو قریب لایا جا سکے۔',
        'footer.nav': 'نیویگیشن',
        'footer.legal': 'قانونی',
        'footer.legal1': 'قانونی نوٹس',
        'footer.legal2': 'رازداری',
        'footer.legal3': 'کوکی پالیسی',
        'footer.dev': 'تیار کردہ از',
        'footer.rights': '© 2024 مسجد الرحمہ۔ جملہ حقوق محفوظ ہیں۔',

        // Cookies Banner
        'cookie.banner_title': 'آپ کی رازداری ہمارے لیے اہم ہے',
        'cookie.banner_text': 'ہم اپنی خدمات کو بہتر بنانے کے لیے کوکیز کا استعمال کرتے ہیں۔ تصفح جاری رکھ کر، آپ قبول کرتے ہیں۔',
        'cookie.banner_more': 'مزید معلومات کے لیے دیکھیں',
        'cookie.link_text': 'کوکی پالیسی',
        'cookie.more_options': 'مزید اختیارات',
        'cookie.accept_btn': 'قبول کریں اور جاری رکھیں',

        // WhatsApp
        'wa.title': 'واٹس ایپ پر مشاورت',
        'wa.desc': 'اپنی مشاورت کا موضوع منتخب کریں:',
        'wa.opt1': 'دینی سوال (فتویٰ)',
        'wa.opt2': 'ازدواجی مشاورت',
        'wa.opt3': 'قبولِ اسلام',
        'wa.opt4': 'دیگر',

        // Quran Section
        'quran.view_more': 'مزید سورتیں دیکھیں',
        'quran.view_less': 'کم دیکھیں',
        'quran.section_title': 'قرآن مجید کی سورتیں',
        'quran.filter_all': 'تمام',
        'quran.filter_essential': 'اہم',
        'quran.filter_friday': 'جمعہ',
        'quran.filter_ramadan': 'رمضان',
        'quran.filter_protection': 'حفاظت',
        'quran.badge_essential': 'اہم',
        'quran.badge_friday': 'جمعہ',
        'quran.badge_ramadan': 'رمضان',
        'quran.badge_protection': 'حفاظت',
        'quran.s1_title': 'سورۃ الفاتحہ',
        'quran.s1_sub': 'آغاز',
        'quran.s1_desc': 'یہ قرآن کا جوہر ہے جسے ہم ہدایت حاصل کرنے کے لیے ہر روز کی نماز میں پڑھتے ہیں۔',
        'quran.s2_title': 'سورۃ البقرہ',
        'quran.s2_sub': 'گائے',
        'quran.s2_desc': 'سب سے طویل سورت۔ اس کی تلاوت گھر کی حفاظت کرتی ہے اور برکت لاتی ہے۔',
        'quran.s3_title': 'سورۃ یٰسین',
        'quran.s3_sub': 'قرآن کا دل',
        'quran.s3_desc': 'آسانی، مغفرت اور روحانی سکون کے لیے پڑھی جانے والی ایک خوبصورت سورت۔',
        'quran.s4_title': 'سورۃ الملک',
        'quran.s4_sub': 'بادشاہی',
        'quran.s4_desc': 'ہر رات پڑھنے کی سفارش کی گئی ہے، جو اپنے قاری کی شفاعت کرتی ہے۔',
        'quran.s5_title': 'سورۃ الکہف',
        'quran.s5_sub': 'غار',
        'quran.s5_desc': 'جمعہ کو پڑھنا سنت ہے؛ یہ دو جمعوں کے درمیان نور فراہم کرتی ہے۔',
        'quran.s5_badge': 'آج کے لیے تجویز کردہ',
        'quran.s6_title': 'سورۃ الرحمن',
        'quran.s6_sub': 'بہت رحم والا',
        'quran.s6_desc': 'قرآن کی دلہن کے نام سے معروف، جو اللہ کی نعمتوں کی یاد دلاتی ہے۔',
        'quran.s7_title': 'سورۃ واقعہ',
        'quran.s7_sub': 'واقعہ',
        'quran.s7_desc': 'نبی اکرم ﷺ نے فقر سے بچاؤ اور رزق کے لیے ہر رات اس کی تلاوت کی ہدایت فرمائی۔',
        'quran.s8_title': 'سورۃ الجمعہ',
        'quran.s8_sub': 'جمعہ',
        'quran.s8_desc': 'ہفتے کے سب سے مقدس دن کے نام پر سورت، جو جمعہ کی نماز میں پڑھی جاتی ہے۔',
        'quran.s9_title': 'سورۃ المنافقون',
        'quran.s9_sub': 'منافقین',
        'quran.s9_desc': 'الجمعہ کی تکمیلی سورت؛ نبی اکرم ﷺ جمعہ کی نماز میں دونوں کی تلاوت فرماتے تھے۔',
        'quran.s10_title': 'سورۃ القدر',
        'quran.s10_sub': 'شبِ قدر',
        'quran.s10_desc': 'رمضان کی مقدس ترین رات لیلۃ القدر کی وضاحت کرتی ہے، جو ہزار مہینوں سے بہتر ہے۔',
        'quran.s11_title': 'سورۃ الدخان',
        'quran.s11_sub': 'دھواں',
        'quran.s11_desc': 'رمضان کی راتوں میں تلاوت مستحب ہے۔ جو اسے جمعہ کی رات پڑھتا ہے وہ بخشا جاتا ہے۔',
        'quran.s12_title': 'سورۃ الاخلاص',
        'quran.s12_sub': 'اخلاص',
        'quran.s12_desc': 'قرآن کے ایک تہائی کے برابر ہے۔ اللہ تعالی کی توحید کا خالص اعلان۔',
        'quran.s13_title': 'سورۃ الفلق',
        'quran.s13_sub': 'صبح',
        'quran.s13_desc': 'معوذتین میں سے ایک، جو برائی، حسد اور شر سے اللہ کی پناہ مانگتی ہے۔',
        'quran.s14_title': 'سورۃ الناس',
        'quran.s14_sub': 'انسان',
        'quran.s14_desc': 'قرآن مجید کی آخری سورت، جو وسوسوں سے اللہ کی پناہ مانگتی ہے۔',
        'map.box_title': 'مسجد الرحمہ',
        'map.box_address': 'کیرر ہارٹ ڈی ٹوریلا 11C، پالما',
        
        // Ramadan
        'ramadan.title': 'رمضان کا ٹائم ٹیبل',
        'ramadan.subtitle': 'برکت، روزے اور مغفرت کا مہینہ',
        'ramadan.countdown_title': 'اگلے رمضان کا باقی وقت',
        'ramadan.countdown_iftar': '<span class="text-primary ml-1 font-black">افطار</span> کا باقی وقت',
        'ramadan.download_pdf': 'کیلنڈر ڈاؤن لوڈ کریں',
        'ramadan.day': 'دن',
        'ramadan.date': 'تاریخ',
        'ramadan.fajr': 'فجر',
        'ramadan.dhuhr': 'ظہر',
        'ramadan.asr': 'عصر',
        'ramadan.maghrib': 'مغرب (افطار)',
        'ramadan.isha': 'عشاء',
        'ramadan.placeholder_title': 'ٹائم ٹیبل جلد دستیاب ہوگا',
        'ramadan.placeholder_desc': 'مبارک مہینہ شروع ہوتے ہی 30 دن کا مکمل کیلنڈر خود بخود یہاں ظاہر ہو جائے گا۔',
        'ramadan.notice': '* اوقات کا حساب پالما کے لیے سورج کے موقع کے مطابق لگایا گیا ہے۔',

        // Khutba / Enseñanzas del Imán
        'khutba.eyebrow': 'امام کی رہنمائی اور خطبات',
        'khutba.title': 'خطبے کی تعاليم',
        'khutba.subtitle': 'جمعہ کے دن امام یوسف کی طرف سے ہماری کمیونٹی کے ساتھ شیئر کی جانے والی تعلیمات۔',
        'khutba.btn_read': 'مکمل خطبہ پڑھیں',
        'khutba.badge_unity': 'اتحاد اور سنت',
        'khutba.badge_fiqh': 'فقہ اور طہارت',
        'khutba.badge_ethics': 'اخلاقیات اور انصاف',
        'khutba.c1_tag': 'خطبہ 1 • الاعتصام',
        'khutba.c1_title': 'اتحادِ امت اور ہدایت کو مضبوطی سے تھامنا',
        'khutba.c1_sub': 'قرآن و سنت پر قائم رہنا اور تفرقے سے بچنا',
        'khutba.c1_desc': '”اور تم سب مل کر اللہ کی رسی کو مضبوطی سے تھام لو اور تفرقے میں نہ پڑو...“',
        'khutba.c2_tag': 'خطبہ 2 • سوال 8003',
        'khutba.c2_title': 'گھر سے باہر طہارت اور وقت پر نماز کی ادائیگی',
        'khutba.c2_sub': 'اسکول یا کام کی جگہ استنجاء کے لیے پانی نہ ہو تو کیا کریں؟',
        'khutba.c2_desc': 'شیخ ابن عثیمین کی طرف سے استجمار کی وضاحت اور نماز کو اس کے وقت پر ادا کرنے کی تاکید۔',
        'khutba.c3_tag': 'خطبہ 3 • بندوں کے حقوق',
        'khutba.c3_title': 'دوسروں کے حقوق اور حدود کا احترام',
        'khutba.c3_sub': 'حدود میں تبدیلی یا ناجائز قبضہ کرنے کی سنگینی',
        'khutba.c3_desc': 'نبی اکرم ﷺ نے فرمایا: ”اللہ کی لعنت ہو اس پر جو زمین کی حد بندی تبدیل کرے۔“',
        'khutba.jumuah_badge': 'جمعہ • Jumu\'ah',
        'khutba.c1_verse': '﴿ وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا ﴾',
        'khutba.c1_verse_ref': 'سورۃ آل عمران: 103',
        'khutba.c1_source': 'صحیح مسلم',
        'khutba.c2_quote': '”میں اپنا زیادہ تر وقت اسکول یا کام کی جگہ گزارتا ہوں...“',
        'khutba.c2_ref': 'الشرح الممتع 1/103',
        'khutba.c3_hadith': '”اللہ کی لعنت ہو اس پر جو زمین کی حد بندی تبدیل کرے۔“',
        'khutba.c3_source': 'صحیح مسلم',
        'khutba.modal_close': 'مطالعہ بند کریں',
        'khutba.modal_source': 'امام یوسف کی طرف سے شیئر کردہ • مسجد الرحمہ',
        'khutba.swipe_hint': 'مزید دیکھنے کے لیے سوائپ کریں',
        'support.quote': '”جو لوگ اپنے مال رات اور دن، پوشیدہ اور اعلانیہ خرچ کرتے ہیں، ان کے لیے ان کے رب کے پاس اجر ہے...“',
        'support.verse': 'قرآن 2:274',
        'contact.open_maps': 'گوگل میپس میں کھولیں',
        'footer.made_by': 'تیار کردہ از',
        'imam.opening_mail': 'ای میل کھولی جا رہی ہے...',
        'nav.brand_name': 'مسجد الرحمہ'
    }
};

const savedLang = (typeof localStorage !== 'undefined' && localStorage.getItem('arrahma_language')) || 'es';
let currentLang = savedLang;

function updateLanguageSelectorsUI(langObj) {
    // 1. Update main desktop button flags and labels if present
    document.querySelectorAll('.current-lang-flag').forEach(img => {
        img.src = langObj.flag;
        if (langObj.srcset) img.srcset = langObj.srcset;
        img.alt = langObj.name;
    });

    document.querySelectorAll('.current-lang-code').forEach(el => {
        el.textContent = langObj.label;
    });

    document.querySelectorAll('.current-lang-name').forEach(el => {
        el.textContent = langObj.name;
    });

    // 2. Highlight active buttons in dropdowns and mobile menus
    document.querySelectorAll('[data-lang]').forEach(btn => {
        const isCurrent = btn.getAttribute('data-lang') === langObj.code;
        if (isCurrent) {
            btn.classList.add('active', 'bg-primary/20', 'text-primary', 'font-bold');
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.classList.remove('active', 'bg-primary/20', 'text-primary', 'font-bold');
            btn.setAttribute('aria-selected', 'false');
        }
    });
}

function setLanguage(lang) {
    if (!translations[lang]) lang = 'es';
    currentLang = lang;
    try {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('arrahma_language', lang);
        }
    } catch (e) {
        console.warn('localStorage not available', e);
    }

    const langObj = languagesList.find(l => l.code === lang) || languagesList[0];

    document.documentElement.lang = lang;
    document.documentElement.dir = langObj.dir || ((lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    updateLanguageSelectorsUI(langObj);

    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

function toggleLanguage() {
    // Legacy support or quick cycle
    const codes = languagesList.map(l => l.code);
    const nextIdx = (codes.indexOf(currentLang) + 1) % codes.length;
    setLanguage(codes[nextIdx]);
}

// Attach event listeners for language selectors
document.addEventListener('DOMContentLoaded', () => {
    // Setup dropdown toggles
    document.querySelectorAll('.lang-dropdown-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const wrapper = btn.closest('.lang-selector-wrapper');
            const menu = wrapper ? wrapper.querySelector('.lang-dropdown-menu') : null;
            if (menu) {
                const isHidden = menu.classList.contains('hidden');
                // Close all other dropdowns first
                document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.add('hidden'));
                if (isHidden) {
                    menu.classList.remove('hidden');
                    btn.setAttribute('aria-expanded', 'true');
                } else {
                    menu.classList.add('hidden');
                    btn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Close dropdowns on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector-wrapper')) {
            document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.add('hidden'));
            document.querySelectorAll('.lang-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });

    // Option click listener for all data-lang buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                document.querySelectorAll('.lang-dropdown-menu').forEach(m => m.classList.add('hidden'));
                document.querySelectorAll('.lang-dropdown-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
            }
        });
    });

    // Initialize saved language
    setLanguage(savedLang);
});
