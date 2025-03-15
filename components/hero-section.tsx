"use client";

import { useLanguage } from "@/contexts/language-context";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
	const { t } = useLanguage();

	return (
		<section className="relative min-h-dvh flex items-center pt-20 pb-16 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background -z-10" />

			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="animate-slideUp">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
							{t("hero.title")}
						</h1>
						<p className="text-lg text-foreground/80 mb-8 max-w-lg">
							{t("hero.subtitle")}
						</p>
						<div className="flex flex-wrap gap-4">
							<button
								onClick={() =>
									document
										.getElementById("features")
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="primary-button px-6 py-3 rounded-lg flex items-center gap-2"
							>
								{t("hero.cta")}
								<ArrowRight className="h-4 w-4" />
							</button>
							<button
								onClick={() =>
									document
										.getElementById("about")
										?.scrollIntoView({ behavior: "smooth" })
								}
								className="secondary-button px-6 py-3 rounded-lg"
							>
								{t("hero.learnMore")}
							</button>
						</div>
					</div>

					<div className="relative h-[400px] lg:h-[500px] animate-fadeIn bg-card rounded-lg shadow-lg overflow-hidden">
						<Image
							src="/images/We-Exam-Login-02-12-2025_08_25_PM.png"
							alt="Wexam Login Screen"
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
							className="object-contain p-2"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
