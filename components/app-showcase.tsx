"use client";

import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AppShowcase() {
	const { t, language } = useLanguage();
	const [activeFeature, setActiveFeature] = useState("dashboard");

	const features = [
		{
			id: "dashboard",
			title: { en: "Dashboard", ar: "لوحة التحكم" },
			description: {
				en: "The dashboard provides a quick overview of all available functions. Users can easily navigate to different sections of the application.",
				ar: "توفر لوحة التحكم نظرة عامة سريعة على جميع الوظائف المتاحة. يمكن للمستخدمين التنقل بسهولة إلى أقسام مختلفة من التطبيق.",
			},
			image: "/images/We-Exam-Welcome-02-12-2025_08_26_PM.png",
		},
		{
			id: "users",
			title: { en: "User Management", ar: "إدارة المستخدمين" },
			description: {
				en: "Easily manage users with different permission levels. Create, edit, or delete user accounts as needed.",
				ar: "إدارة المستخدمين بسهولة مع مستويات أذونات مختلفة. إنشاء أو تعديل أو حذف حسابات المستخدمين حسب الحاجة.",
			},
			image: "/images/We-Exam-Manage-Users-02-12-2025_08_27_PM.png",
		},
		{
			id: "exams",
			title: { en: "Exam Management", ar: "إدارة الامتحانات" },
			description: {
				en: "Upload and manage exams with detailed information. Set timers and organize exams by grade and category.",
				ar: "تحميل وإدارة الامتحانات مع معلومات مفصلة. ضبط المؤقتات وتنظيم الامتحانات حسب الصف والفئة.",
			},
			image: "/images/We-Exam-Manage-Exams-02-12-2025_08_29_PM.png",
		},
		{
			id: "timer",
			title: { en: "Timer Settings", ar: "إعدادات المؤقت" },
			description: {
				en: "Set precise timers for each slide in the exam. This ensures fair and consistent timing for all students.",
				ar: "ضبط مؤقتات دقيقة لكل شريحة في الامتحان. هذا يضمن توقيتًا عادلًا ومتسقًا لجميع الطلاب.",
			},
			image: "/images/Slides-02-12-2025_08_35_PM.png",
		},
		{
			id: "login",
			title: { en: "Exam Login", ar: "تسجيل الدخول للامتحان" },
			description: {
				en: "Secure login system for accessing exams. Teachers can enter passwords to start exams on Android TV devices.",
				ar: "نظام تسجيل دخول آمن للوصول إلى الامتحانات. يمكن للمعلمين إدخال كلمات المرور لبدء الامتحانات على أجهزة Android TV.",
			},
			image: "/images/Exam-Login-02-12-2025_08_35_PM.png",
		},
		{
			id: "register",
			title: { en: "User Registration", ar: "تسجيل المستخدم" },
			description: {
				en: "Simple registration process for new users. Administrators can create accounts with different permission levels.",
				ar: "عملية تسجيل بسيطة للمستخدمين الجدد. يمكن للمسؤولين إنشاء حسابات بمستويات أذونات مختلفة.",
			},
			image: "/images/We-Exam-Register-02-12-2025_08_26_PM.png",
		},
	];

	const currentFeature =
		features.find((f) => f.id === activeFeature) || features[0];
	const isRTL = language === "ar";

	return (
		<section id="features" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("features.explore")}
					</h2>
					<p className="text-lg text-foreground/70 max-w-2xl mx-auto">
						{t("features.description")}
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="space-y-2">
						{features.map((feature) => (
							<button
								key={feature.id}
								onClick={() => setActiveFeature(feature.id)}
								className={`w-full p-4 rounded-lg transition-colors ${
									activeFeature === feature.id
										? "bg-primary text-white"
										: "bg-card hover:bg-primary/10"
								}`}
								style={{ textAlign: isRTL ? "right" : "left" }}
							>
								<h3 className="text-lg font-medium">
									{feature.title[language as keyof typeof feature.title]}
								</h3>
							</button>
						))}
					</div>

					<div className="lg:col-span-2">
						<motion.div
							key={activeFeature}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3 }}
							className="bg-card rounded-lg overflow-hidden shadow-md"
						>
							<div className="bg-black aspect-video relative">
								<Image
									src={currentFeature.image || "/placeholder.svg"}
									alt={currentFeature.title.en}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
									className="object-contain p-2"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-2xl font-bold mb-4">
									{
										currentFeature.title[
											language as keyof typeof currentFeature.title
										]
									}
								</h3>
								<p className="text-foreground/80 mb-6">
									{
										currentFeature.description[
											language as keyof typeof currentFeature.description
										]
									}
								</p>
								<button className="primary-button px-6 py-2 rounded-lg">
									{t("features.learnMore")}
								</button>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
}
