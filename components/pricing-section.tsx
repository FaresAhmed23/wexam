"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function PricingSection() {
	const { language, t } = useLanguage();

	const pricingPlans = [
		{
			id: 1,
			name: { en: "Daily", ar: "يومي" },
			price: "250",
			currency: "EGP",
			color: "bg-purple-400",
			features: {
				en: [
					"Access to all exams",
					"Basic support",
					"24-hour access",
					"Single classroom",
				],
				ar: [
					"الوصول إلى جميع الامتحانات",
					"دعم أساسي",
					"وصول لمدة 24 ساعة",
					"فصل دراسي واحد",
				],
			},
		},
		{
			id: 2,
			name: { en: "Weekly", ar: "أسبوعي" },
			price: "1,000",
			currency: "EGP",
			color: "bg-purple-600",
			features: {
				en: [
					"All Daily features",
					"Priority support",
					"Multiple classrooms",
					"Advanced analytics",
				],
				ar: [
					"جميع ميزات الخطة اليومية",
					"دعم ذو أولوية",
					"فصول دراسية متعددة",
					"تحليلات متقدمة",
				],
			},
		},
		{
			id: 3,
			name: { en: "Monthly", ar: "شهري" },
			price: "3,000",
			currency: "EGP",
			color: "bg-purple-500",
			features: {
				en: [
					"All Weekly features",
					"Premium support",
					"Custom branding",
					"API access",
				],
				ar: [
					"جميع ميزات الخطة الأسبوعية",
					"دعم متميز",
					"علامة تجارية مخصصة",
					"وصول إلى واجهة برمجة التطبيقات",
				],
			},
		},
		{
			id: 4,
			name: { en: "Yearly", ar: "سنوي" },
			price: "10,000",
			currency: "EGP",
			color: "bg-purple-700",
			features: {
				en: [
					"All Monthly features",
					"24/7 VIP support",
					"Custom development",
					"Dedicated server",
				],
				ar: [
					"جميع ميزات الخطة الشهرية",
					"دعم VIP على مدار الساعة",
					"تطوير مخصص",
					"خادم مخصص",
				],
			},
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<section className="py-20 bg-gradient-to-b from-background to-purple-50 dark:from-background dark:to-background/90">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4">
						{t("pricing.title") || "Pricing Strategy"}
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						{t("pricing.subtitle") ||
							"Choose the perfect plan for your needs. All plans include access to our core features."}
					</p>
				</div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
					dir={language === "ar" ? "rtl" : "ltr"}
				>
					{pricingPlans.map((plan) => (
						<motion.div
							key={plan.id}
							variants={itemVariants}
							className="relative"
						>
							{/* Number Circle */}
							<div
								className={`${plan.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto`}
							>
								{plan.id}
							</div>

							{/* Card */}
							<div className="bg-card rounded-lg p-6 shadow-lg relative">
								{/* Wave Design */}
								<div
									className={`absolute top-0 left-0 right-0 h-2 ${plan.color} rounded-t-lg`}
								/>

								{/* Plan Name */}
								<div
									className={`inline-block ${plan.color} text-white text-sm font-medium px-3 py-1 rounded-full mb-4`}
								>
									{plan.name[language as keyof typeof plan.name]}
								</div>

								{/* Price */}
								<div className="text-3xl font-bold mb-6">
									{plan.price}{" "}
									<span className="text-lg font-normal text-muted-foreground">
										{plan.currency}
									</span>
								</div>

								{/* Features */}
								<ul className="space-y-3 mb-6">
									{plan.features[language as keyof typeof plan.features].map(
										(feature, index) => (
											<li
												key={index}
												className="flex items-center gap-2 text-sm"
											>
												<Check className="h-4 w-4 text-purple-600" />
												{feature}
											</li>
										),
									)}
								</ul>

								{/* CTA Button */}
								<button
									className={`w-full py-2 rounded-lg transition-colors ${plan.color} hover:opacity-90 text-white`}
								>
									{t("pricing.getStarted") || "Get Started"}
								</button>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
