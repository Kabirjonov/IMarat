import CardsSection from "@/components/sections/cards.section";
import HeroSection from "@/components/sections/hero.section";
import ShowPDFSection from "@/components/sections/showPdf.section";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import ContactSection from "@/components/sections/contact.section";
import { getProjects } from "@/app/admin/actions";
import { IProject } from "@/types";
export default async function HomePage() {
	const projects: IProject[] = await getProjects();
	return (
		<>
			<Navbar />
			<HeroSection />
			<CardsSection projects={projects} />
			<ShowPDFSection />
			<ContactSection />
			<Footer />
		</>
	);
}
