"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { upsertProject } from "../admin/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FiPlusCircle, FiMapPin } from "react-icons/fi";

export default function ProjectForm({ project, onDone }: any) {
	const isEdit = !!project;

	const [form, setForm] = useState({
		title: "",
		slug: "",
		description: "",
		shortDesc: "",
		address: "",
		type: "",
		status: "",
	});

	// 🔥 edit bosilganda fill
	useEffect(() => {
		if (project) {
			setForm({
				title: project.title || "",
				slug: project.slug || "",
				description: project.description || "",
				shortDesc: project.shortDesc || "",
				address: project.address || "",
				type: project.type || "",
				status: project.status || "",
			});
		}
	}, [project]);

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const fd = new FormData();

		Object.entries(form).forEach(([k, v]) => {
			fd.append(k, v as string);
		});

		await upsertProject(project?.id || null, fd);

		// reset
		if (!project) {
			setForm({
				title: "",
				slug: "",
				description: "",
				shortDesc: "",
				address: "",
				type: "",
				status: "",
			});
		} else {
			onDone?.(); // edit close
		}
	};

	return (
		<Card className='w-full max-w-4xl'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					<FiPlusCircle />
					Create Project
				</CardTitle>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit} className='space-y-3 mb-6'>
					<div className='grid grid-cols-2 gap-3'>
						<Input
							name='title'
							value={form.title}
							onChange={handleChange}
							placeholder='Title'
						/>

						<Input
							name='slug'
							value={form.slug}
							onChange={handleChange}
							placeholder='Slug'
						/>

						<Textarea
							name='description'
							value={form.description}
							onChange={handleChange}
							placeholder='Description'
						/>

						<Input
							name='shortDesc'
							value={form.shortDesc}
							onChange={handleChange}
							placeholder='Short desc'
						/>

						<Input
							name='address'
							value={form.address}
							onChange={handleChange}
							placeholder='Address'
						/>

						<Input
							name='type'
							value={form.type}
							onChange={handleChange}
							placeholder='Type'
						/>

						<Input
							name='status'
							value={form.status}
							onChange={handleChange}
							placeholder='Status'
						/>
					</div>

					<Button type='submit'>
						{isEdit ? "Update Project" : "Create Project"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
