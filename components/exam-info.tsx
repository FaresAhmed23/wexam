"use client";

import { useLanguage } from "@/contexts/language-context";
import { FileText, GraduationCap, Tag } from "lucide-react";
import Image from "next/image";

export default function ExamInfo() {
	const { language } = useLanguage();

	return (
		<section className="py-16 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
					<div className="p-6 border-b border-border">
						<div className="flex justify-center mb-4 relative h-16 w-16 mx-auto">
							<Image
								src="/logo.svg"
								alt="Wexam Logo"
								fill
								className="object-contain"
							/>
						</div>
						<h2 className="text-2xl font-bold text-center">
							{language === "en" ? "Exam Information" : "معلومات الامتحان"}
						</h2>
					</div>

					<div className="p-6 space-y-4">
						<div className="flex items-start gap-4">
							<div className="bg-primary/10 p-2 rounded-full">
								<GraduationCap className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									{language === "en" ? "Grade" : "الصف"}
								</h3>
								<p>First</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="bg-primary/10 p-2 rounded-full">
								<Tag className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									{language === "en" ? "Category" : "الفئة"}
								</h3>
								<p>التكويني الأول</p>
							</div>
						</div>

						<div className="flex items-start gap-4">
							<div className="bg-primary/10 p-2 rounded-full">
								<FileText className="h-6 w-6 text-primary" />
							</div>
							<div>
								<h3 className="text-lg font-semibold">
									{language === "en" ? "Type" : "النوع"}
								</h3>
								<p>Original Exam</p>
							</div>
						</div>
					</div>

					<div className="bg-muted p-6">
						<h3 className="text-lg font-semibold mb-4 text-center">
							{language === "en" ? "Exam Details" : "تفاصيل الامتحان"}
						</h3>

						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-b border-border">
										<th className="py-2 px-4 text-left">
											{language === "en" ? "Name" : "الاسم"}
										</th>
										<th className="py-2 px-4 text-left">
											{language === "en" ? "Password" : "كلمة المرور"}
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className="py-2 px-4">Arabic</td>
										<td className="py-2 px-4">2345678</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="mt-6 flex justify-center">
							<div className="relative w-full h-[200px]">
								<Image
									src="/images/exam table password.png"
									alt="Exam Information Table"
									fill
									className="object-contain rounded-lg shadow-md"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
