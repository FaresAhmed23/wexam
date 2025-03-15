"use client";

import { useLanguage } from "@/contexts/language-context";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface ImageInfo {
	src: string;
	alt: string;
	description?: string;
}

export default function ShowcaseSection() {
	const { t, language } = useLanguage();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const autoplayRef = useRef<NodeJS.Timeout | null>(null);
	const isRTL = language === "ar";
	const carouselRef = useRef<HTMLDivElement>(null);

	const images: ImageInfo[] = [
		{
			src: "/images/We-Exam-Login-02-12-2025_08_25_PM.png",
			alt: "Wexam Login Screen",
			description:
				language === "en"
					? "Secure login screen for accessing the Wexam system"
					: "شاشة تسجيل الدخول الآمنة للوصول إلى نظام ويكسام",
		},
		{
			src: "/images/We-Exam-Welcome-02-12-2025_08_26_PM.png",
			alt: "Wexam Dashboard",
			description:
				language === "en"
					? "Dashboard with quick access to all system features"
					: "لوحة التحكم مع وصول سريع إلى جميع ميزات النظام",
		},
		{
			src: "/images/We-Exam-Manage-Exams-02-12-2025_08_29_PM.png",
			alt: "Manage Exams",
			description:
				language === "en"
					? "Interface for managing existing exams by grade"
					: "واجهة لإدارة الامتحانات الحالية حسب الصف",
		},
		{
			src: "/images/We-Exam-Manage-Exams-02-12-2025_08_30_PM.png",
			alt: "Manage Exams Light Mode",
			description:
				language === "en"
					? "Exam management interface in light mode"
					: "واجهة إدارة الامتحانات في الوضع الفاتح",
		},
		{
			src: "/images/We-Exam-Register-02-12-2025_08_26_PM.png",
			alt: "User Registration",
			description:
				language === "en"
					? "Registration form for creating new user accounts"
					: "نموذج التسجيل لإنشاء حسابات مستخدمين جديدة",
		},
		{
			src: "/images/We-Exam-Manage-Users-02-12-2025_08_27_PM.png",
			alt: "Manage Users",
			description:
				language === "en"
					? "Interface for managing admin and normal users"
					: "واجهة لإدارة المستخدمين المسؤولين والعاديين",
		},
	];

	const goToNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const goToPrevious = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length,
		);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	// Handle autoplay
	useEffect(() => {
		if (isAutoplay) {
			autoplayRef.current = setInterval(goToNext, 5000);
		}

		return () => {
			if (autoplayRef.current) {
				clearInterval(autoplayRef.current);
			}
		};
	}, [isAutoplay]);

	// Reset when language changes
	useEffect(() => {
		setCurrentIndex(0);
	}, [language]);

	const handleMouseEnter = () => {
		setIsAutoplay(false);
	};

	const handleMouseLeave = () => {
		setIsAutoplay(true);
	};

	// Animation variants
	const variants = {
		enter: (direction: number) => {
			return {
				x: direction > 0 ? 1000 : -1000,
				opacity: 0,
			};
		},
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => {
			return {
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
			};
		},
	};

	// Track animation direction
	const [direction, setDirection] = useState(0);

	// Update direction when changing slides
	const changeSlide = (newIndex: number) => {
		const dir = newIndex > currentIndex ? 1 : -1;
		setDirection(dir);
		setCurrentIndex(newIndex);
	};

	// Custom next/prev functions with direction
	const customNext = () => {
		const newIndex = (currentIndex + 1) % images.length;
		changeSlide(newIndex);
	};

	const customPrev = () => {
		const newIndex = (currentIndex - 1 + images.length) % images.length;
		changeSlide(newIndex);
	};

	return (
		<section id="showcase" className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("showcase.title")}
					</h2>
					<p className="text-foreground/70 max-w-2xl mx-auto">
						{t("showcase.subtitle")}
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					{/* Carousel Container */}
					<div
						className="relative bg-black rounded-lg overflow-hidden aspect-video"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						ref={carouselRef}
					>
						{/* Animated Slides */}
						<AnimatePresence initial={false} custom={direction} mode="wait">
							<motion.div
								key={currentIndex}
								custom={direction}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{
									x: { type: "spring", stiffness: 300, damping: 30 },
									opacity: { duration: 0.2 },
								}}
								className="absolute inset-0"
							>
								<div className="relative w-full h-full">
									<Image
										src={images[currentIndex].src || "/placeholder.svg"}
										alt={images[currentIndex].alt}
										fill
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
										className="object-contain"
										priority
									/>

									{/* Description */}
									{images[currentIndex].description && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.2 }}
											className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-sm"
										>
											<p className="text-white text-center">
												{images[currentIndex].description}
											</p>
										</motion.div>
									)}
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Navigation Arrows - Fixed for RTL */}
						<button
							onClick={isRTL ? customNext : customPrev}
							className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
							aria-label={isRTL ? "Next image" : "Previous image"}
						>
							<ChevronLeft className="h-6 w-6" />
						</button>

						<button
							onClick={isRTL ? customPrev : customNext}
							className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
							aria-label={isRTL ? "Previous image" : "Next image"}
						>
							<ChevronRight className="h-6 w-6" />
						</button>

						{/* Indicators */}
						<div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
							{images.map((_, index) => (
								<button
									key={index}
									onClick={() => {
										const dir = index > currentIndex ? 1 : -1;
										setDirection(dir);
										goToSlide(index);
									}}
									className={`w-3 h-3 rounded-full transition-colors ${
										index === currentIndex ? "bg-white" : "bg-white/50"
									}`}
									aria-label={`Go to slide ${index + 1}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
