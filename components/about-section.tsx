"use client";

import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export default function AboutSection() {
	const { t } = useLanguage();

	return (
		<section id="about" className="py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="order-2 lg:order-1 animate-on-scroll">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							{t("about.title")}
						</h2>
						<p className="text-foreground/80 mb-6 leading-relaxed">
							{t("about.description")}
						</p>
						<p className="text-foreground/80 mb-6 leading-relaxed">
							By using Wexam, the educational process becomes smoother and more
							effective, providing a unified exam environment that promotes
							transparency and reduces human errors. This system is not just a
							technical tool but a strategic partner that helps achieve academic
							excellence and empowers students to perform at their best.
						</p>
						<button className="primary-button px-6 py-3 rounded-lg">
							{t("about.moreInfo")}
						</button>
					</div>

					<div className="order-1 lg:order-2 grid grid-cols-2 gap-4 animate-on-scroll">
						<div className="bg-card rounded-lg overflow-hidden shadow-md aspect-[4/3] relative image-hover-zoom">
							<Image
								src="/images/We-Exam-02-12-2025_08_28_PM.png"
								alt="Wexam Upload Screen"
								fill
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
								className="object-contain p-2"
							/>
						</div>
						<div className="bg-card rounded-lg overflow-hidden shadow-md mt-8 aspect-[4/3] relative image-hover-zoom">
							<Image
								src="/images/We-Exam-Manage-Exams-02-12-2025_08_29_PM (1).png"
								alt="Wexam Timer Management"
								fill
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
								className="object-contain p-2"
							/>
						</div>
						<div className="bg-card rounded-lg overflow-hidden shadow-md aspect-[4/3] relative image-hover-zoom">
							<Image
								src="/images/We-Exam-02-12-2025_08_28_PM (1).png"
								alt="Wexam Upload Form"
								fill
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
								className="object-contain p-2"
							/>
						</div>
						<div className="bg-card rounded-lg overflow-hidden shadow-md mt-8 aspect-[4/3] relative image-hover-zoom">
							<Image
								src="/images/We-Exam-Edit-Profile-02-12-2025_08_30_PM.png"
								alt="Wexam Profile"
								fill
								sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 300px"
								className="object-contain p-2"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
