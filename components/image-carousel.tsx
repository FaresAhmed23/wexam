"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageCarouselProps {
	images: string[];
	autoplaySpeed?: number;
}

export default function ImageCarousel({
	images,
	autoplaySpeed = 5000,
}: ImageCarouselProps) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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

	return (
		<div
			className="relative w-full overflow-hidden rounded-lg shadow-xl"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<div
				className="flex transition-transform duration-500 ease-in-out h-[500px]"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
				{images.map((image, index) => (
					<div key={index} className="min-w-full h-full">
						<Image
							src={image || "/placeholder.svg"}
							alt={`Wexam Screenshot ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>

			{/* Navigation Arrows */}
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
				onClick={goToPrevious}
				aria-label="Previous image"
			>
				<ChevronLeft className="h-6 w-6" />
			</button>

			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
				onClick={goToNext}
				aria-label="Next image"
			>
				<ChevronRight className="h-6 w-6" />
			</button>

			{/* Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
				{images.map((_, index) => (
					<button
						key={index}
						className={`w-3 h-3 rounded-full transition-colors ${
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
