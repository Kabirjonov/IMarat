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

export default function ProjectsPageClient({ initialProjects }: any) {
	const [projects, setProjects] = useState(initialProjects);
	const [editing, setEditing] = useState<any>(null);

	const handleEdit = (project: any) => {
		setEditing(project);
	};

	const handleDelete = async (id: string) => {
		await deleteProject(id);
		setProjects(projects.filter((p: any) => p.id !== id));
	};

	return (
		<div className='p-6 space-y-6 bg-muted/30 min-h-screen'>
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
								<TableHead>Title</TableHead>
								<TableHead>Status</TableHead>
								<TableHead className='text-right'>Actions</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{projects.map((p: any) => (
								<TableRow key={p.id}>
									<TableCell className='font-medium'>{p.title}</TableCell>

									<TableCell>
										<Badge>{p.status}</Badge>
									</TableCell>

									<TableCell className='text-right flex justify-end gap-2'>
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
