"use server";

import { prisma } from "@/lib/prisma";
import { IProject } from "@/types";
import { revalidatePath } from "next/cache";

export async function createProject(data: FormData) {
	await prisma.project.create({
		data: {
			title: data.get("title") as string,
			slug: data.get("slug") as string,
			description: data.get("description") as string,
			shortDesc: data.get("shortDesc") as string,
			address: data.get("address") as string,

			type: data.get("type") as any,
			status: data.get("status") as any,

			latitude: data.get("latitude") ? Number(data.get("latitude")) : null,

			longitude: data.get("longitude") ? Number(data.get("longitude")) : null,
		},
	});

	revalidatePath("/admin/projects");
}

export async function deleteProject(id: string) {
	await prisma.project.delete({
		where: { id },
	});

	revalidatePath("/admin/projects");
}

export async function upsertProject(id: string | null, data: FormData) {
	const payload = {
		title: data.get("title") as string,
		slug: data.get("slug") as string,
		description: data.get("description") as string,
		shortDesc: data.get("shortDesc") as string,
		address: data.get("address") as string,
		type: data.get("type") as any,
		status: data.get("status") as any,
		latitude: data.get("latitude") ? Number(data.get("latitude")) : null,
		longitude: data.get("longitude") ? Number(data.get("longitude")) : null,
	};

	if (id) {
		await prisma.project.update({
			where: { id },
			data: payload,
		});
	} else {
		await prisma.project.create({
			data: payload,
		});
	}

	revalidatePath("/admin/projects");
}
export async function getProjects(): Promise<IProject[]> {
	return prisma.project.findMany({
		orderBy: { createdAt: "desc" },
	});
}
