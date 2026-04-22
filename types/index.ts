interface ILoginFormData {
	email: string;
	password: string;
}

export interface IProject {
	id: string;
	title: string;
	description: string;
	images: string[];
	createdAt: Date;
	updatedAt: Date;
	location: [number, number] | null; // [latitude, longitude]

	address: string;
	slug: string;

	type: string;
	status: string;

	rooms?: number | null;
	area?: number | null;
	shortDesc?: string | null;
}
