import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import WhyChooseUsSection from "@/components/why-choose-us-section";
import StatsSection from "@/components/stats-section";
import ProcessSection from "@/components/process-section";
import ToolsSection from "@/components/tools-section";
import ClientsSection from "@/components/clients-section";
import FaqSection from "@/components/faq-section";
import Testimonials from "@/components/testimonials";
import CtaSection from "@/components/cta-section";

export default function Home() {
	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero Section */}
			<HeroSection />

			{/* Clients Section */}
			<ClientsSection />

			{/* Services Section */}
			<ServicesSection />

			{/* Stats Section */}
			<StatsSection />

			{/* Why Choose Us Section */}
			<WhyChooseUsSection />

			{/* Process Section */}
			<ProcessSection />

			{/* Tools Section */}
			<ToolsSection />

			{/* Testimonials */}
			<Testimonials />

			{/* FAQ Section */}
			<FaqSection />

			{/* CTA Section */}
			<CtaSection />
		</div>
	);
}
