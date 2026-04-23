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

	address: string;
	slug: string;
	coords?: [number, number] | null; // [latitude, longitude]

	type: string;
	status: string;

	rooms?: number | null;
	area?: number | null;
	shortDesc?: string | null;
}

export interface IUser {
	id: string;
	email: string;
	password: string;
	role: Role;
}
type Role = "USER" | "ADMIN" | "SUPERADMIN";
export const Role = {
	USER: "USER",
	ADMIN: "ADMIN",
	SUPERADMIN: "SUPERADMIN",
} as const;
