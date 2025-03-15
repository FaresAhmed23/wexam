"use client";

import { useCallback } from "react";
import { useLanguage } from "@/contexts/language-context";

interface FooterNavItem {
	id: string;
	translationKey: string;
}

interface ContactInfo {
	email: string;
	phone: string;
}

export default function Footer() {
	const { t, language } = useLanguage();
	const currentYear = new Date().getFullYear();

	const navItems: FooterNavItem[] = [
		{ id: "features", translationKey: "nav.features" },
		{ id: "about", translationKey: "nav.about" },
		{ id: "showcase", translationKey: "nav.showcase" },
		{ id: "contact", translationKey: "nav.contact" },
	];

	const contactInfo: ContactInfo = {
		email: "wexam11@gmail.com",
		phone: "+20 10 5041 4425",
	};

	const scrollToSection = useCallback((sectionId: string) => {
		document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
	}, []);

	// Get description based on language instead of inline conditional
	const getDescription = () => {
		return language === "en"
			? "An innovative system designed for applied technology schools to organize and manage exams efficiently."
			: "نظام مبتكر مصمم للمدارس التكنولوجية التطبيقية لتنظيم وإدارة الامتحانات بكفاءة.";
	};

	return (
		<footer className="footer-section">
			<div className="footer-content">
				<div>
					<h3 className="text-lg font-semibold mb-4">{t("footer.about")}</h3>
					<p className="text-primary-foreground/80 max-w-md">
						{getDescription()}
					</p>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-4">
						{t("footer.quickLinks")}
					</h3>
					<ul className="footer-links">
						{navItems.map((item) => (
							<li key={`footer-${item.id}`}>
								<button
									onClick={() => scrollToSection(item.id)}
									className="footer-link"
								>
									{t(item.translationKey)}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-4">{t("footer.contact")}</h3>
					<ul className="footer-links">
						<li className="text-primary-foreground/80">{contactInfo.email}</li>
						<li className="text-primary-foreground/80" dir="ltr">
							{contactInfo.phone}
						</li>
					</ul>
				</div>
			</div>

			<div className="container mx-auto px-4 pt-8 mt-8 border-t border-primary-foreground/20 text-center">
				<p className="text-primary-foreground/80 text-sm">
					{t("footer.copyright").replace("{year}", currentYear.toString())}
				</p>
			</div>
		</footer>
	);
}
