"use client";

import type React from "react";

import { useLanguage } from "@/contexts/language-context";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactSection() {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await new Promise((resolve) => setTimeout(resolve, 1500));
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);

			setTimeout(() => {
				setSubmitStatus("idle");
			}, 5000);
		}
	};

	return (
		<section id="contact" className="py-20">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						{t("contact.title")}
					</h2>
					<div className="w-20 h-1 bg-primary mx-auto"></div>
				</div>

				<div className="max-w-2xl mx-auto">
					<form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll">
						<div>
							<label htmlFor="name" className="block text-sm font-medium mb-2">
								{t("contact.name")}
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>

						<div>
							<label htmlFor="email" className="block text-sm font-medium mb-2">
								{t("contact.email")}
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium mb-2"
							>
								{t("contact.message")}
							</label>
							<textarea
								id="message"
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows={5}
								className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
							/>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
						>
							{isSubmitting ? "Sending..." : t("contact.send")}
							{!isSubmitting && <Send className="h-4 w-4" />}
						</button>

						{submitStatus === "success" && (
							<div className="p-4 bg-green-100 text-green-800 rounded-lg animate-fadeIn">
								Your message has been sent successfully. We'll get back to you
								soon!
							</div>
						)}

						{submitStatus === "error" && (
							<div className="p-4 bg-red-100 text-red-800 rounded-lg animate-fadeIn">
								There was an error sending your message. Please try again later.
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
