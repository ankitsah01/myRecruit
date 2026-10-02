export type LanguageCode = 'en' | 'fr' | 'mg' | 'hi' | 'bn' | 'zh';

export const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.employers': 'Employers',
    'nav.workers': 'Workers',
    'nav.sectors': 'Sectors',
    'nav.vacancies': 'Vacancies',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.howItWorks': 'How It Works',
    'nav.about': 'About',

    // Buttons
    'btn.requestWorkers': 'Request Workers',
    'btn.applyWorker': 'Apply as Worker',
    'btn.findJob': 'Find a Job',
    'btn.viewVacancies': 'View Vacancies',
    'btn.submitApp': 'Submit Application',
    'btn.scheduleConsultation': 'Schedule Consultation',

    // Hero
    'hero.badge': 'Licensed Recruitment Agency • Mauritius',
    'hero.titleLine1': 'Connecting',
    'hero.titleHighlight1': 'Global Talent',
    'hero.titleLine2': 'With',
    'hero.titleHighlight2': 'Mauritius',
    'hero.subtitle':
      'Professional recruitment solutions bridging Mauritian employers with pre-vetted overseas talent — while empowering international workers to secure legitimate, zero-fee career opportunities in Mauritius.',
    'hero.freeWorkerBadge': '100% Free Application for Workers',
    'hero.verifiedPlacement': 'Verified Job Opportunities',

    // Footer
    'footer.license':
      'Licensed & Registered Recruitment Agency • In accordance with the Ministry of Labour, Human Resource Development & Training, Mauritius.',
    'footer.activePipelines': 'International Candidate Pipelines Active',
    'footer.desc':
      'MyRecruit connects Mauritian enterprises with thoroughly vetted international professionals while providing job seekers with transparent, 100% free overseas career pathways.',
    'footer.forEmployers': 'For Employers',
    'footer.forWorkers': 'For Workers',
    'footer.agencyAbout': 'Agency & About',
    'footer.complianceLegal': 'Compliance & Legal',
    'footer.rights': 'All Rights Reserved. Republic of Mauritius.',
    'footer.fairRecruit': 'Fair Recruitment Certified',
    'footer.zeroFee': 'Zero Worker Fee Policy',
  },

  fr: {
    // Nav
    'nav.home': 'Accueil',
    'nav.employers': 'Employeurs',
    'nav.workers': 'Travailleurs',
    'nav.sectors': 'Secteurs',
    'nav.vacancies': 'Postes Vacants',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.howItWorks': 'Comment Ça Marche',
    'nav.about': 'À Propos',

    // Buttons
    'btn.requestWorkers': 'Demander des Travailleurs',
    'btn.applyWorker': 'Postuler comme Travailleur',
    'btn.findJob': 'Trouver un Emploi',
    'btn.viewVacancies': 'Voir les Postes',
    'btn.submitApp': 'Soumettre la Candidature',
    'btn.scheduleConsultation': 'Prendre Rendez-vous',

    // Hero
    'hero.badge': 'Agence de Recrutement Agréée • Maurice',
    'hero.titleLine1': 'Connecter les',
    'hero.titleHighlight1': 'Talents Mondiaux',
    'hero.titleLine2': 'Avec',
    'hero.titleHighlight2': 'Maurice',
    'hero.subtitle':
      'Solutions de recrutement professionnel reliant les employeurs mauriciens à des talents internationaux qualifiés et pré-sélectionnés — offrant aux travailleurs des opportunités légitimes et sans frais.',
    'hero.freeWorkerBadge': 'Candidature 100% Gratuite pour les Travailleurs',
    'hero.verifiedPlacement': 'Opportunités d’Emploi Vérifiées',

    // Footer
    'footer.license':
      'Agence de recrutement agréée et enregistrée auprès du Ministère du Travail de la République de Maurice.',
    'footer.activePipelines': 'Filières de Candidats Actives',
    'footer.desc':
      'MyRecruit met en relation les entreprises mauriciennes avec des talents internationaux vérifiés tout en offrant aux travailleurs des parcours professionnels sûrs et gratuits.',
    'footer.forEmployers': 'Pour les Employeurs',
    'footer.forWorkers': 'Pour les Travailleurs',
    'footer.agencyAbout': 'Agence & À Propos',
    'footer.complianceLegal': 'Conformité & Légal',
    'footer.rights': 'Tous Droits Réservés. République de Maurice.',
    'footer.fairRecruit': 'Recrutement Éthique Certifié',
    'footer.zeroFee': 'Politique Zéro Frais Candidat',
  },

  mg: {
    // Nav
    'nav.home': 'Fandraisana',
    'nav.employers': 'Mpanasa',
    'nav.workers': 'Mpiasa',
    'nav.sectors': 'Seha-kasa',
    'nav.vacancies': 'Asa Malalaka',
    'nav.faq': 'Fanontaniana',
    'nav.contact': 'Fifandraisana',
    'nav.howItWorks': 'Fomba Fiasany',
    'nav.about': 'Momba Anay',

    // Buttons
    'btn.requestWorkers': 'Mangataka Mpiasa',
    'btn.applyWorker': 'Hampiditra Fiaraha-miasa',
    'btn.findJob': 'Hitady Asa',
    'btn.viewVacancies': 'Hijery Asa Malalaka',
    'btn.submitApp': 'Handefa Fangatahana',
    'btn.scheduleConsultation': 'Handamina Fivoriana',

    // Hero
    'hero.badge': 'Orinasa Mpanome Asa Nahazo Alalana • Maorisy',
    'hero.titleLine1': 'Mampitohy Ireo',
    'hero.titleHighlight1': 'Talenta Maneran-Tany',
    'hero.titleLine2': 'Amin’ny',
    'hero.titleHighlight2': 'Maorisy',
    'hero.subtitle':
      'Fomba fiasa matihanina mampifandray ireo mpampiasa vola eto Maorisy amin’ireo mpiasa manana traikefa avy any ivelany — miantoka asa ara-dalàna sy maimaim-poana ho an’ny mpiasa.',
    'hero.freeWorkerBadge': 'Fampidirana Fangatahana Maimaim-poana 100%',
    'hero.verifiedPlacement': 'Toerana Asa Voamarina Tsara',

    // Footer
    'footer.license':
      'Orinasa nahazo alalana sy voasoratra anarana eo anivon’ny Minisiteran’ny Asa eto Maorisy.',
    'footer.activePipelines': 'Misokatra ny Fandraisana Mpiasa Iraisam-pirenena',
    'footer.desc':
      'MyRecruit dia mampifandray orinasa maorisiana amin’ny mpiasa voafantina sy voamarina tsara, miaraka amin’ny fomba fiasa maimaim-poana ho an’ny mpiasa.',
    'footer.forEmployers': 'Ho an’ny Mpanasa',
    'footer.forWorkers': 'Ho an’ny Mpiasa',
    'footer.agencyAbout': 'Orinasa & Momba Anay',
    'footer.complianceLegal': 'Lalàna & Fitsipika',
    'footer.rights': 'Zo Rehetra Voatokana. Repoblikan’i Maorisy.',
    'footer.fairRecruit': 'Fandraisana Mpiasa Ara-drariny',
    'footer.zeroFee': 'Tsy Mandoa Vola ny Mpiasa',
  },

  hi: {
    // Nav
    'nav.home': 'होम',
    'nav.employers': 'नियोक्ता (Employers)',
    'nav.workers': 'श्रमिक / कामगार',
    'nav.sectors': 'उद्योग क्षेत्र',
    'nav.vacancies': 'नौकरियां',
    'nav.faq': 'अक्सर पूछे जाने वाले सवाल',
    'nav.contact': 'संपर्क करें',
    'nav.howItWorks': 'प्रक्रिया कैसे काम करती है',
    'nav.about': 'हमारे बारे में',

    // Buttons
    'btn.requestWorkers': 'कर्मचारियों की मांग करें',
    'btn.applyWorker': 'नौकरी के लिए आवेदन करें',
    'btn.findJob': 'नौकरी खोजें',
    'btn.viewVacancies': 'रिक्तियां देखें',
    'btn.submitApp': 'आवेदन जमा करें',
    'btn.scheduleConsultation': 'परामर्श बुक करें',

    // Hero
    'hero.badge': 'मॉरीशस सरकार द्वारा लाइसेंस प्राप्त भर्ती एजेंसी',
    'hero.titleLine1': 'वैश्विक प्रतिभा का',
    'hero.titleHighlight1': 'अंतर्राष्ट्रीय संगम',
    'hero.titleLine2': 'मॉरीशस के',
    'hero.titleHighlight2': 'साथ',
    'hero.subtitle':
      'मॉरीशस के प्रमुख नियोक्ताओं को योग्य और जांची-परखी विदेशी प्रतिभाओं से जोड़ने वाला पेशेवर समाधान — श्रमिकों के लिए 100% निःशुल्क और वैध रोजगार के सुरक्षित अवसर।',
    'hero.freeWorkerBadge': 'श्रमिकों के लिए 100% निःशुल्क आवेदन',
    'hero.verifiedPlacement': 'सत्यापित रोजगार अवसर',

    // Footer
    'footer.license':
      'श्रम मंत्रालय, मानव संसाधन विकास एवं प्रशिक्षण, मॉरीशस गणराज्य द्वारा लाइसेंस प्राप्त एवं पंजीकृत भर्ती एजेंसी।',
    'footer.activePipelines': 'सक्रिय अंतर्राष्ट्रीय उम्मीदवार नेटवर्क',
    'footer.desc':
      'माईरिक्रूट (MyRecruit) मॉरीशस के उद्योगों को कुशल विदेशी कामगारों से जोड़ता है और नौकरी चाहने वालों को पूरी तरह निःशुल्क करियर मार्ग प्रदान करता है।',
    'footer.forEmployers': 'नियोक्ताओं के लिए',
    'footer.forWorkers': 'श्रमिकों के लिए',
    'footer.agencyAbout': 'एजेंसी और परिचय',
    'footer.complianceLegal': 'कानूनी अनुपालन और नीतियां',
    'footer.rights': 'सर्वाधिकार सुरक्षित। मॉरीशस गणराज्य।',
    'footer.fairRecruit': 'नैतिक एवं निष्पक्ष भर्ती प्रमाणित',
    'footer.zeroFee': 'उम्मीदवारों के लिए शून्य शुल्क नीति',
  },

  bn: {
    // Nav
    'nav.home': 'হোম',
    'nav.employers': 'নিয়োগকর্তা',
    'nav.workers': 'কর্মী',
    'nav.sectors': 'কর্মক্ষেত্রসমূহ',
    'nav.vacancies': 'চাকরির বিজ্ঞপ্তি',
    'nav.faq': 'সাধারণ জিজ্ঞাসা',
    'nav.contact': 'যোগাযোগ',
    'nav.howItWorks': 'পদ্ধতি',
    'nav.about': 'আমাদের সম্পর্কে',

    // Buttons
    'btn.requestWorkers': 'কর্মী রিকুইজিশন দিন',
    'btn.applyWorker': 'চাকরির আবেদন করুন',
    'btn.findJob': 'চাকরি খুঁজুন',
    'btn.viewVacancies': 'শূন্যপদ দেখুন',
    'btn.submitApp': 'আবেদন জমা দিন',
    'btn.scheduleConsultation': 'পরামর্শের সময় নির্ধারণ করুন',

    // Hero
    'hero.badge': 'মরিশাস সরকার অনুমোদিত লাইসেন্সপ্রাপ্ত রিক্রুটিং এজেন্সি',
    'hero.titleLine1': 'দক্ষ বৈশ্বিক প্রতিভা',
    'hero.titleHighlight1': 'সংযোগ',
    'hero.titleLine2': 'মরিশাসের',
    'hero.titleHighlight2': 'সাথে',
    'hero.subtitle':
      'মরিশাসের শীর্ষস্থানীয় প্রতিষ্ঠানগুলোর সাথে যাচাইকৃত আন্তর্জাতিক কর্মীদের সমন্বয় — কর্মীদের জন্য সম্পূর্ণ বিনামূল্যে বৈধ কর্মসংস্থানের সুযোগ।',
    'hero.freeWorkerBadge': 'কর্মীদের জন্য ১০০% ফ্রি আবেদন',
    'hero.verifiedPlacement': 'যাচাইকৃত নিশ্চিত চাকরির সুযোগ',

    // Footer
    'footer.license':
      'শ্রম ও মানবসম্পদ উন্নয়ন মন্ত্রণালয়, মরিশাস সরকার কর্তৃক নিবন্ধিত এবং লাইসেন্সপ্রাপ্ত নিয়োগকারী প্রতিষ্ঠান।',
    'footer.activePipelines': 'আন্তর্জাতিক রিক্রুটমেন্ট নেটওয়ার্ক চালু আছে',
    'footer.desc':
      'মাইরিক্রুট (MyRecruit) মরিশাসের শিল্প প্রতিষ্ঠানগুলোকে যাচাইকৃত বিদেশি প্রতিভার সাথে সংযুক্ত করে এবং কর্মীদের জন্য শূন্য খরচে কাজের সুযোগ দেয়।',
    'footer.forEmployers': 'নিয়োগকর্তাদের জন্য',
    'footer.forWorkers': 'কর্মীদের জন্য',
    'footer.agencyAbout': 'আমাদের পরিচিতি',
    'footer.complianceLegal': 'নীতিমালা ও আইনি তথ্য',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত। মরিশাস প্রজাতন্ত্র।',
    'footer.fairRecruit': 'ন্যায্য ও নৈতিক নিয়োগ প্রত্যয়িত',
    'footer.zeroFee': 'কর্মীদের কাছ থেকে কোনো ফি নেওয়া হয় না',
  },

  zh: {
    // Nav
    'nav.home': '首页',
    'nav.employers': '雇主服务',
    'nav.workers': '求职者',
    'nav.sectors': '行业领域',
    'nav.vacancies': '职位空缺',
    'nav.faq': '常见问题',
    'nav.contact': '联系我们',
    'nav.howItWorks': '招聘流程',
    'nav.about': '关于我们',

    // Buttons
    'btn.requestWorkers': '招聘用工申请',
    'btn.applyWorker': '求职在线申请',
    'btn.findJob': '寻找工作',
    'btn.viewVacancies': '查看空缺职位',
    'btn.submitApp': '提交申请',
    'btn.scheduleConsultation': '预约咨询',

    // Hero
    'hero.badge': '毛里求斯劳工部持牌法定招聘机构',
    'hero.titleLine1': '连接全球精英人才',
    'hero.titleHighlight1': '全球人才',
    'hero.titleLine2': '携手',
    'hero.titleHighlight2': '毛里求斯',
    'hero.subtitle':
      '为毛里求斯企业提供严格审核的海外专业劳动力招聘解决方案，同时为求职者提供合法合规、完全免费的海外优质就业机会。',
    'hero.freeWorkerBadge': '求职者全程100%免费申请',
    'hero.verifiedPlacement': '经政府核准的真实就业机会',

    // Footer
    'footer.license': '受毛里求斯共和国劳工、人力资源开发与培训部合法监管与认证的专业招聘机构。',
    'footer.activePipelines': '全球人才招募渠道持续运行中',
    'footer.desc':
      'MyRecruit 致力于为毛里求斯本土企业对接全球优质合规劳动力，并为海外劳工提供透明、零费用的国际职业发展通道。',
    'footer.forEmployers': '雇主专区',
    'footer.forWorkers': '求职者专区',
    'footer.agencyAbout': '关于机构',
    'footer.complianceLegal': '合规与法律声明',
    'footer.rights': '版权所有。毛里求斯共和国。',
    'footer.fairRecruit': '国际公平招聘认证机构',
    'footer.zeroFee': '严格执行零中介费政策',
  },
};
