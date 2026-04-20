import CardsSection from "@/components/sections/cards.section";
import HeroSection from "@/components/sections/hero.section";
import ShowPDFSection from "@/components/sections/showPdf.section";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ContactSection from "@/components/sections/contact.section";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CardsSection />
			<ShowPDFSection />
			<ContactSection />
			<Footer />
		</>
	);
}
