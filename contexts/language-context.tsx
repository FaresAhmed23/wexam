"use client";

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";

type Language = "en" | "ar";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
	direction: "ltr" | "rtl";
}

interface TranslationRecord {
	[key: string]: string;
}

interface TranslationDictionary {
	en: TranslationRecord;
	ar: TranslationRecord;
}

const translations: TranslationDictionary = {
	en: {
		// Navigation
		"nav.home": "Home",
		"nav.features": "Features",
		"nav.about": "About",
		"nav.contact": "Contact",
		"nav.showcase": "Showcase",
		"nav.download": "Download",

		// Hero Section
		"hero.title": "Streamline Your Exam Management",
		"hero.subtitle":
			"An innovative system designed for applied technology schools to organize and manage exams efficiently",
		"hero.cta": "Get Started",
		"hero.learnMore": "Learn More",

		// Features Section
		"features.title": "Key Features",
		"features.automated.title": "Automated Exam Management",
		"features.automated.description":
			"Manage exams automatically without extensive human intervention",
		"features.timing.title": "Precise Timing",
		"features.timing.description":
			"Organize timing and connect all classrooms simultaneously",
		"features.focus.title": "Focus on Monitoring",
		"features.focus.description":
			"Teachers can focus on their primary role of monitoring the exam process",
		"features.unified.title": "Unified Environment",
		"features.unified.description":
			"Provides a unified exam environment that promotes transparency",

		// About Section
		"about.title": "About Wexam",
		"about.description":
			"Wexam is an innovative and advanced system specifically designed to support applied technology schools in organizing and managing exams with high efficiency. The system aims to streamline the examination process, saving time and effort for students, teachers, and administrators alike, while ensuring a fair and well-organized exam environment.",
		"about.desc":
			"By using Wexam, the educational process becomes smoother and more effective, providing a unified exam environment that promotes transparency and reduces human errors. This system is not just a technical tool but a strategic partner that helps achieve academic excellence and empowers students to perform at their best.",
		"about.moreInfo": "More Information",

		// How It Works
		"howItWorks.title": "How It Works",
		"howItWorks.step1.title": "Run the Server",
		"howItWorks.step1.description":
			"Click on the run.exe file to start the server",
		"howItWorks.step2.title": "Access the System",
		"howItWorks.step2.description":
			"Use the provided link to access the Wexam interface",
		"howItWorks.step3.title": "Manage Exams",
		"howItWorks.step3.description":
			"Upload exams, manage users, or preview exams with ease",

		// Contact
		"contact.title": "Contact Us",
		"contact.name": "Name",
		"contact.email": "Email",
		"contact.message": "Message",
		"contact.send": "Send Message",

		// Footer
		"footer.rights": "All Rights Reserved",
		"footer.privacy": "Privacy Policy",
		"footer.terms": "Terms of Service",

		// Showcase Section
		"showcase.title": "Wexam in Action",
		"showcase.subtitle":
			"See how Wexam transforms the exam management process with its intuitive interface and powerful features.",

		// Features Section
		"features.explore": "Explore Wexam Features",
		"features.description":
			"Discover the powerful features that make Wexam the ideal solution for exam management in applied technology schools.",
		"features.dashboard": "Dashboard",
		"features.userManagement": "User Management",
		"features.examManagement": "Exam Management",
		"features.timerSettings": "Timer Settings",
		"features.examLogin": "Exam Login",
		"features.userRegistration": "User Registration",
		"features.learnMore": "Learn More",

		// Pricing Section
		"pricing.title": "Pricing Strategy",
		"pricing.subtitle":
			"Choose the perfect plan for your needs. All plans include access to our core features.",
		"pricing.getStarted": "Get Started",

		// Footer
		"footer.about": "About Wexam",
		"footer.quickLinks": "Quick Links",
		"footer.contact": "Contact",
		"footer.copyright": "© {year} Wexam. All rights reserved.",
	},
	ar: {
		// Navigation
		"nav.home": "الرئيسية",
		"nav.features": "المميزات",
		"nav.about": "حول",
		"nav.contact": "اتصل بنا",
		"nav.showcase": "معرض",
		"nav.download": "تحميل",

		// Hero Section
		"hero.title": "تبسيط إدارة الامتحانات",
		"hero.subtitle":
			"نظام مبتكر مصمم للمدارس التكنولوجية التطبيقية لتنظيم وإدارة الامتحانات بكفاءة",
		"hero.cta": "ابدأ الآن",
		"hero.learnMore": "اعرف المزيد",

		// Features Section
		"features.title": "المميزات الرئيسية",
		"features.automated.title": "إدارة آلية للامتحانات",
		"features.automated.description":
			"إدارة الامتحانات تلقائيًا دون تدخل بشري مكثف",
		"features.timing.title": "توقيت دقيق",
		"features.timing.description":
			"تنظيم التوقيت وربط جميع الفصول الدراسية في وقت واحد",
		"features.focus.title": "التركيز على المراقبة",
		"features.focus.description":
			"يمكن للمعلمين التركيز على دورهم الأساسي في مراقبة عملية الامتحان",
		"features.unified.title": "بيئة موحدة",
		"features.unified.description": "توفير بيئة امتحانات موحدة تعزز الشفافية",

		// About Section
		"about.title": "حول ويكسام",
		"about.description":
			"ويكسام هو نظام مبتكر ومتطور مصمم خصيصًا لدعم مدارس التكنولوجيا التطبيقية في تنظيم وإدارة الامتحانات بكفاءة عالية. يهدف النظام إلى تبسيط عملية الامتحان، وتوفير الوقت والجهد للطلاب والمعلمين والإداريين على حد سواء، مع ضمان بيئة امتحانات عادلة ومنظمة جيدًا.",
		"about.desc":
			"باستخدام Wexam، تصبح العملية التعليمية أكثر سلاسة وفعالية، حيث يوفر بيئة امتحانية موحدة تعزز الشفافية وتقلل من الأخطاء البشرية. هذا النظام ليس مجرد أداة تقنية، بل هو شريك استراتيجي يساعد في تحقيق التميز الأكاديمي ويمكّن الطلاب من تقديم أفضل ما لديهم.",
		"about.moreInfo": "مزيد من المعلومات",

		// How It Works
		"howItWorks.title": "كيفية العمل",
		"howItWorks.step1.title": "تشغيل الخادم",
		"howItWorks.step1.description": "انقر على ملف run.exe لبدء تشغيل الخادم",
		"howItWorks.step2.title": "الوصول إلى النظام",
		"howItWorks.step2.description":
			"استخدم الرابط المقدم للوصول إلى واجهة ويكسام",
		"howItWorks.step3.title": "إدارة الامتحانات",
		"howItWorks.step3.description":
			"تحميل الامتحانات، وإدارة المستخدمين، أو معاينة الامتحانات بسهولة",

		// Contact
		"contact.title": "اتصل بنا",
		"contact.name": "الاسم",
		"contact.email": "البريد الإلكتروني",
		"contact.message": "الرسالة",
		"contact.send": "إرسال الرسالة",

		// Footer
		"footer.rights": "جميع الحقوق محفوظة",
		"footer.privacy": "سياسة الخصوصية",
		"footer.terms": "شروط الخدمة",

		// Showcase Section
		"showcase.title": "ويكسام في العمل",
		"showcase.subtitle":
			"شاهد كيف يحول ويكسام عملية إدارة الامتحانات من خلال واجهة بديهية وميزات قوية.",

		// Features Section
		"features.explore": "استكشف ميزات ويكسام",
		"features.description":
			"اكتشف الميزات القوية التي تجعل ويكسام الحل الأمثل لإدارة الامتحانات في مدارس التكنولوجيا التطبيقية.",
		"features.dashboard": "لوحة التحكم",
		"features.userManagement": "إدارة المستخدمين",
		"features.examManagement": "إدارة الامتحانات",
		"features.timerSettings": "إعدادات المؤقت",
		"features.examLogin": "تسجيل الدخول للامتحان",
		"features.userRegistration": "تسجيل المستخدم",
		"features.learnMore": "معرفة المزيد",

		// Pricing Section
		"pricing.title": "استراتيجية التسعير",
		"pricing.subtitle":
			"اختر الخطة المثالية لاحتياجاتك. تتضمن جميع الخطط الوصول إلى ميزاتنا الأساسية.",
		"pricing.getStarted": "ابدأ الآن",

		// Footer
		"footer.about": "حول ويكسام",
		"footer.quickLinks": "روابط سريعة",
		"footer.contact": "اتصل بنا",
		"footer.copyright": "© {year} ويكسام. جميع الحقوق محفوظة.",
	},
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");
	const direction = language === "ar" ? "rtl" : "ltr";

	useEffect(() => {
		// Check for user language preference in localStorage
		const savedLanguage = localStorage.getItem("language") as Language | null;
		if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
			setLanguage(savedLanguage);
		}
	}, []);

	useEffect(() => {
		// Set the document direction based on language
		document.documentElement.dir = direction;
		document.documentElement.lang = language;
		document.body.className = language === "ar" ? "rtl" : "ltr";

		// Store language preference
		localStorage.setItem("language", language);
	}, [language, direction]);

	const t = (key: string): string => {
		// Safely access translations with type checking
		const currentTranslations = translations[language] || translations.en;
		return currentTranslations[key] || key;
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t, direction }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
