"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { deleteProject } from "../admin/actions";
import ProjectForm from "./projectForm";
import { signOut, useSession } from "next-auth/react";

export default function ProjectsPageClient({ initialProjects }: any) {
	const [projects, setProjects] = useState(initialProjects);
	const [editing, setEditing] = useState<any>(null);
	const { status } = useSession();
	const handleEdit = (project: any) => {
		setEditing(project);
	};

	const handleDelete = async (id: string) => {
		await deleteProject(id);
		setProjects(projects.filter((p: any) => p.id !== id));
	};
	const handleSignOut = async () => {
		await signOut();
	};

	return (
		<div className='p-6 space-y-6 bg-muted/30 min-h-screen relative'>
			{status === "authenticated" && (
				<Button
					className='absolute top-6 right-6'
					size='sm'
					variant='destructive'
					onClick={handleSignOut}
				>
					Sign Out
				</Button>
			)}
			{/* HEADER */}
			<div>
				<h1 className='text-3xl font-bold'>Projects</h1>
				<p className='text-muted-foreground'>
					Manage your real estate projects
				</p>
			</div>

			{/* SINGLE FORM (CREATE + UPDATE) */}
			<ProjectForm
				key={editing?.id || "create"}
				project={editing}
				onDone={() => setEditing(null)}
			/>

			{/* TABLE */}
			<Card>
				<CardHeader>
					<CardTitle>All Projects</CardTitle>
				</CardHeader>

				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>ID</TableHead>

								<TableHead>Title</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Type</TableHead>
								<TableHead>Address</TableHead>
								<TableHead>Images</TableHead>

								<TableHead className='text-end'>Actions</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{projects.map((p: any) => (
								<TableRow key={p.id}>
									<TableCell>
										<Badge>{p.id}</Badge>
									</TableCell>
									<TableCell className='font-medium'>{p.title}</TableCell>

									<TableCell>
										<Badge>{p.status}</Badge>
									</TableCell>
									<TableCell className='font-medium'>{p.type}</TableCell>
									<TableCell className='font-medium'>
										<a
											href={`https://yandex.com/maps/?pt=${p.coords?.[1]},${p.coords?.[0]}&z=15`}
											target='_blank'
											className='text-primary text truncate w-1/2 text-right'
											rel='noopener noreferrer'
										>
											{p.address}
										</a>
									</TableCell>
									<TableCell>
										<div className='flex '>
											{p.images.map((img: string, i: number) => (
												<img
													key={i}
													src={img}
													alt={`Image ${i + 1}`}
													className='w-10 h-10 object-cover rounded-md my-auto'
												/>
											))}
										</div>
									</TableCell>
									{/* <TableCell className='font-medium flex items-center'>
										{p.images.map((img: string, i: number) => (
											<img
												key={i}
												src={img}
												alt={`Image ${i + 1}`}
												className='w-10 h-10 object-cover rounded-md my-auto'
											/>
										))}
									</TableCell> */}

									<TableCell className=' flex gap-2 justify-end '>
										<Button
											size='sm'
											variant='secondary'
											onClick={() => handleEdit(p)}
										>
											Edit
										</Button>

										<Button
											size='sm'
											variant='destructive'
											onClick={() => handleDelete(p.id)}
										>
											Delete
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
