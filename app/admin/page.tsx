import Navbar from "@/components/shared/Navbar";
import ProjectsPageClient from "../_components/productsClient";
import { getProjects } from "./actions";

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<div className='p-6 min-h-screen bg-muted/30'>
			<ProjectsPageClient initialProjects={projects} />
		</div>
	);
}
