import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import AboutSection from "@/components/about-section";
import AppShowcase from "@/components/app-showcase";
import ShowcaseSection from "@/components/showcase-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import AnimationScript from "./animations";
import PricingSection from "@/components/pricing-section";

export default function Home() {
	return (
		<main>
			<Header />
			<HeroSection />
			<FeaturesSection />
			<AboutSection />
			<AppShowcase />
			<ShowcaseSection />
			<PricingSection />
			<ContactSection />
			<Footer />
			<AnimationScript />
		</main>
	);
}
