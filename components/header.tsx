"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/contexts/theme-context";
import { useLanguage } from "@/contexts/language-context";
import { Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
	const { theme, toggleTheme } = useTheme();
	const { language, setLanguage, t } = useLanguage();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-background/90 backdrop-blur-md shadow-md py-2"
					: "bg-transparent py-4"
			}`}
		>
			<div className="container mx-auto px-4 flex justify-between items-center">
				<Link href="/" className="flex items-center gap-2">
					<div className="relative w-10 h-10">
						<Image
							src="/images/openart-07365924-c02c-4c36-87cc-6036e0d26fce.png"
							alt="Wexam Logo"
							fill
							className="object-contain"
						/>
					</div>
					<span className="text-xl font-bold text-primary">Wexam</span>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-8">
					<button
						onClick={() => scrollToSection("features")}
						className="text-foreground hover:text-primary transition-colors"
					>
						{t("nav.features")}
					</button>
					<button
						onClick={() => scrollToSection("about")}
						className="text-foreground hover:text-primary transition-colors"
					>
						{t("nav.about")}
					</button>
					<button
						onClick={() => scrollToSection("showcase")}
						className="text-foreground hover:text-primary transition-colors"
					>
						{t("nav.showcase")}
					</button>
					<button
						onClick={() => scrollToSection("contact")}
						className="text-foreground hover:text-primary transition-colors"
					>
						{t("nav.contact")}
					</button>
				</nav>

				<div className="hidden md:flex items-center gap-4">
					<button
						onClick={() => setLanguage(language === "en" ? "ar" : "en")}
						className="primary-button px-3 py-1 rounded-md"
					>
						{language === "en" ? "العربية" : "English"}
					</button>

					<button
						onClick={toggleTheme}
						className="p-2 rounded-full hover:bg-muted transition-colors"
						aria-label={
							theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
						}
					>
						{theme === "dark" ? (
							<Sun className="h-5 w-5" />
						) : (
							<Moon className="h-5 w-5" />
						)}
					</button>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden p-2"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					aria-label="Toggle menu"
				>
					{isMenuOpen ? (
						<X className="h-6 w-6" />
					) : (
						<Menu className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border shadow-lg animate-slideDown">
					<nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
						<button
							onClick={() => scrollToSection("features")}
							className="py-2 text-foreground hover:text-primary transition-colors text-start"
						>
							{t("nav.features")}
						</button>
						<button
							onClick={() => scrollToSection("about")}
							className="py-2 text-foreground hover:text-primary transition-colors text-start"
						>
							{t("nav.about")}
						</button>
						<button
							onClick={() => scrollToSection("showcase")}
							className="py-2 text-foreground hover:text-primary transition-colors text-start"
						>
							{t("nav.showcase")}
						</button>
						<button
							onClick={() => scrollToSection("contact")}
							className="py-2 text-foreground hover:text-primary transition-colors text-start"
						>
							{t("nav.contact")}
						</button>

						<div className="flex items-center justify-between pt-4 border-t border-border">
							<button
								onClick={() => {
									setLanguage(language === "en" ? "ar" : "en");
									setIsMenuOpen(false);
								}}
								className="primary-button px-3 py-1 rounded-md"
							>
								{language === "en" ? "العربية" : "English"}
							</button>

							<button
								onClick={toggleTheme}
								className="p-2 rounded-full hover:bg-muted transition-colors"
								aria-label={
									theme === "dark"
										? "Switch to light mode"
										: "Switch to dark mode"
								}
							>
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</button>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
