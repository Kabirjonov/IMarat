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
import { Label } from "@/components/ui/label";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { FiPlusCircle, FiMapPin } from "react-icons/fi";
export default function ProjectForm({ project, onDone }: any) {
	const isEdit = !!project;
	const [coords, setCoords] = useState<[number, number] | null>(
		project?.latitude && project?.longitude
			? [project.latitude, project.longitude]
			: null,
	);
	const handleMapClick = (e: any) => {
		const c = e.get("coords");
		setCoords(c);
	};
	const [form, setForm] = useState({
		title: "",
		description: "",
		shortDesc: "",
		address: "",
		type: "",
		status: "",
		slug: "",
		images: "",
	});

	// 🔥 edit bosilganda fill
	useEffect(() => {
		if (project) {
			setForm({
				title: project.title || "",
				description: project.description || "",
				shortDesc: project.shortDesc || "",
				address: project.address || "",
				type: project.type || "",
				status: project.status || "",
				slug: project.slug || "",
				images: project.images?.join(", ") || "",
			});
		}
	}, [project]);

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (
			!form.title ||
			!form.description ||
			!form.address ||
			!form.type ||
			!form.status ||
			!coords ||
			!form.images
		) {
			alert("Please fill all required fields");
			return;
		}

		const fd = new FormData();

		Object.entries(form).forEach(([k, v]) => {
			fd.append(k, v as string);
		});
		fd.append("coords", JSON.stringify(coords));

		await upsertProject(project?.id || null, fd);

		// reset
		if (!project) {
			setForm({
				title: "",
				description: "",
				shortDesc: "",
				address: "",
				type: "",
				status: "",
				slug: "",
				images: "",
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
						{/* <div className='flex items-center justify-between gap-2'> */}
						<Select
							name='type'
							value={form.type}
							onValueChange={v => setForm({ ...form, type: v })}
						>
							<SelectTrigger>
								<SelectValue placeholder='Select type' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='apartment'>Apartment</SelectItem>
								<SelectItem value='house'>House</SelectItem>
								<SelectItem value='commercial'>Commercial</SelectItem>
								<SelectItem value='entertainment'>Entertainment</SelectItem>
							</SelectContent>
						</Select>
						<Select
							name='status'
							value={form.status}
							onValueChange={v => setForm({ ...form, status: v })}
						>
							<SelectTrigger>
								<SelectValue placeholder='Select status' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='planned'>Planned</SelectItem>
								<SelectItem value='construction'>Construction</SelectItem>
								<SelectItem value='finished'>Finished</SelectItem>
							</SelectContent>
						</Select>
						<div>
							<Label>Image Urls</Label>
							<Textarea
								name='images'
								value={form.images}
								onChange={handleChange}
								placeholder='url1, url2, url3'
							/>
						</div>

						{/* </div> */}
					</div>
					<div className='md:col-span-2 space-y-2'>
						<Label className='flex items-center gap-2'>
							<FiMapPin />
							Location
						</Label>

						<YMaps>
							<Map
								defaultState={{
									center: coords || [41.3111, 69.2797],
									zoom: 11,
								}}
								width='100%'
								height={300}
								onClick={handleMapClick}
							>
								{coords && <Placemark geometry={coords} />}
							</Map>
						</YMaps>

						<input type='hidden' name='latitude' value={coords?.[0] ?? ""} />
						<input type='hidden' name='longitude' value={coords?.[1] ?? ""} />
					</div>
					<Button type='submit'>
						{isEdit ? "Update Project" : "Create Project"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
