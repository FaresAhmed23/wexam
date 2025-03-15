"use client";

import { useLanguage } from "@/contexts/language-context";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ExamSlides() {
	const { language } = useLanguage();
	const [currentTime, setCurrentTime] = useState("00:22");

	return (
		<section className="py-20 bg-[#121212] text-white">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{language === "en" ? "Exam Presentation" : "عرض الامتحان"}
					</h2>
					<p className="text-lg text-white/70 max-w-2xl mx-auto">
						{language === "en"
							? "View exams on Android TV with automatic timing for each slide"
							: "عرض الامتحانات على Android TV مع توقيت تلقائي لكل شريحة"}
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<div className="relative bg-[#121212] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
						{/* Timer Bar */}
						<div className="bg-[#1a1a1a] p-2 flex justify-between items-center">
							<button className="text-blue-400 hover:text-blue-300 transition-colors">
								<ChevronLeft className="h-6 w-6" />
							</button>

							<div className="text-blue-400 text-3xl font-mono font-bold">
								{currentTime}
							</div>

							<button className="text-blue-400 hover:text-blue-300 transition-colors">
								<ChevronRight className="h-6 w-6" />
							</button>
						</div>

						{/* Slide Content */}
						<div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
							<div className="flex items-center mb-8">
								<div className="w-10 h-10 bg-gray-700 rounded-full mr-4"></div>
								<span className="text-xl">Wexam</span>
							</div>

							<div className="text-center mt-8">
								<h1 className="text-6xl font-bold mb-4">ABOUT</h1>
								<h1 className="text-6xl font-bold">OUR TEAM</h1>
							</div>
						</div>

						<div className="relative w-full h-[300px]">
							<Image
								src="/images/Exam-Slides-02-12-2025_08_36_PM.png"
								alt="Exam Slide"
								fill
								className="object-contain"
							/>
						</div>
					</div>

					<div className="mt-8 bg-[#1a1a1a] rounded-lg p-6">
						<h3 className="text-xl font-semibold mb-4 text-center">
							{language === "en"
								? "Slide Timer Settings"
								: "إعدادات مؤقت الشريحة"}
						</h3>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
							<div className="bg-[#252525] rounded-lg p-4">
								<h4 className="text-lg mb-2">
									{language === "en" ? "Total Time" : "الوقت الإجمالي"}
								</h4>
								<p className="text-2xl font-mono text-blue-400">00:00:30</p>
							</div>

							<div className="bg-[#252525] rounded-lg p-4">
								<h4 className="text-lg mb-2">
									{language === "en" ? "Total Slides" : "إجمالي الشرائح"}
								</h4>
								<p className="text-2xl font-mono text-green-400">10</p>
							</div>

							<div className="bg-[#252525] rounded-lg p-4">
								<h4 className="text-lg mb-2">
									{language === "en"
										? "Slides with Timer"
										: "الشرائح مع المؤقت"}
								</h4>
								<p className="text-2xl font-mono text-red-400">1</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
