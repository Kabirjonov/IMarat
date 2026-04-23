"use server";

import { prisma } from "@/lib/prisma";
import { IProject } from "@/types";
import { revalidatePath } from "next/cache";
import slugify from "slugify";
export async function deleteProject(id: string) {
	await prisma.project.delete({
		where: { id },
	});
	revalidatePath("/admin/projects");
}

export async function upsertProject(id: string | null, data: FormData) {
	const coordsRaw = data.get("coords") as string;
	const coords = coordsRaw ? JSON.parse(coordsRaw) : null;
	const payload = {
		title: data.get("title") as string,
		slug: slugify(data.get("title") as string, { lower: true }),
		description: data.get("description") as string,
		shortDesc: data.get("shortDesc") as string,
		address: data.get("address") as string,
		type: data.get("type") as any,
		status: data.get("status") as any,
		images: (data.get("images") as string).split(",").map(s => s.trim()),
		latitude: coords ? coords[0] : null,
		longitude: coords ? coords[1] : null,
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
