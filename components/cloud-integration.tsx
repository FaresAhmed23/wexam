"use client";

import { useLanguage } from "@/contexts/language-context";
import { Cloud, Server, Monitor, Lock } from "lucide-react";
import Image from "next/image";

export default function CloudIntegration() {
	const { language } = useLanguage();

	const features = [
		{
			icon: <Server className="h-8 w-8 text-primary" />,
			title: { en: "Centralized Server", ar: "خادم مركزي" },
			description: {
				en: "Run the server once and connect all classrooms simultaneously",
				ar: "قم بتشغيل الخادم مرة واحدة وربط جميع الفصول الدراسية في وقت واحد",
			},
		},
		{
			icon: <Monitor className="h-8 w-8 text-primary" />,
			title: { en: "Android TV Support", ar: "دعم Android TV" },
			description: {
				en: "View exams directly on Android TV devices in each classroom",
				ar: "عرض الامتحانات مباشرة على أجهزة Android TV في كل فصل دراسي",
			},
		},
		{
			icon: <Lock className="h-8 w-8 text-primary" />,
			title: { en: "Secure Access", ar: "وصول آمن" },
			description: {
				en: "Password protection for all exams and user accounts",
				ar: "حماية بكلمة مرور لجميع الامتحانات وحسابات المستخدمين",
			},
		},
		{
			icon: <Cloud className="h-8 w-8 text-primary" />,
			title: { en: "Cloud Ready", ar: "جاهز للسحابة" },
			description: {
				en: "Easily deploy on your local network or cloud infrastructure",
				ar: "نشر بسهولة على شبكتك المحلية أو البنية التحتية السحابية",
			},
		},
	];

	return (
		<section className="py-20 bg-muted">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							{language === "en" ? "Cloud-Ready Solution" : "حل جاهز للسحابة"}
						</h2>
						<p className="text-lg text-foreground/80 mb-8">
							{language === "en"
								? "Wexam provides a flexible deployment model that works on your local network or can be hosted in the cloud for remote access."
								: "يوفر ويكسام نموذج نشر مرن يعمل على شبكتك المحلية أو يمكن استضافته في السحابة للوصول عن بعد."}
						</p>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{features.map((feature, index) => (
								<div
									key={index}
									className="bg-background rounded-lg p-4 shadow-md"
								>
									<div className="mb-3">{feature.icon}</div>
									<h3 className="text-xl font-semibold mb-2">
										{feature.title[language as keyof typeof feature.title]}
									</h3>
									<p className="text-foreground/70">
										{
											feature.description[
												language as keyof typeof feature.description
											]
										}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="flex justify-center">
						<div className="relative w-full h-[400px]">
							<Image
								src="/images/openart-07365924-c02c-4c36-87cc-6036e0d26fce.png"
								alt="Cloud Integration"
								fill
								className="object-contain"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
