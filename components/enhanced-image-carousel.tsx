"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

interface EnhancedImageCarouselProps {
	images: {
		src: string;
		alt: string;
		description?: string;
	}[];
	autoplaySpeed?: number;
}

export default function EnhancedImageCarousel({
	images,
	autoplaySpeed = 5000,
}: EnhancedImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const autoplayRef = useRef<NodeJS.Timeout | null>(null);
	const { theme } = useTheme();

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

	useEffect(() => {
		if (isAutoplay) {
			autoplayRef.current = setInterval(goToNext, autoplaySpeed);
		}

		return () => {
			if (autoplayRef.current) {
				clearInterval(autoplayRef.current);
			}
		};
	}, [isAutoplay, autoplaySpeed]);

	const handleMouseEnter = () => {
		setIsAutoplay(false);
	};

	const handleMouseLeave = () => {
		setIsAutoplay(true);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) {
			goToNext();
		}

		if (touchStart - touchEnd < -50) {
			goToPrevious();
		}
	};

	return (
		<div
			className="carousel-container"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			<div
				className="flex h-[500px] transition-transform duration-500 ease-in-out"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="carousel-slide">
						<img
							src={image.src || "/placeholder.svg"}
							alt={image.alt}
							className="carousel-image"
						/>
						{image.description && (
							<div
								className={`absolute bottom-0 left-0 right-0 p-4 ${
									theme === "dark" ? "bg-black/70" : "bg-white/70"
								} backdrop-blur-sm`}
							>
								<p className="text-sm md:text-base">{image.description}</p>
							</div>
						)}
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				className="carousel-nav left-4"
				onClick={(e) => {
					e.stopPropagation();
					goToPrevious();
				}}
				aria-label="Previous image"
			>
				<ChevronLeft className="h-6 w-6" />
			</button>

			<button
				className="carousel-nav right-4"
				onClick={(e) => {
					e.stopPropagation();
					goToNext();
				}}
				aria-label="Next image"
			>
				<ChevronRight className="h-6 w-6" />
			</button>

			{/* Indicators */}
			<div className="carousel-indicators">
				{images.map((_, index) => (
					<button
						key={index}
						className={`carousel-indicator ${
							index === currentIndex ? "bg-white" : "bg-white/50"
						}`}
						onClick={() => goToSlide(index)}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</div>
	);
}
