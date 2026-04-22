// "use client";

// import { useState } from "react";

// import {
// 	Dialog,
// 	DialogContent,
// 	DialogHeader,
// 	DialogTitle,
// 	DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";

// export default function EditProject({ project }: any) {
// 	const [open, setOpen] = useState(false);

// 	return (
// 		<Dialog open={open} onOpenChange={setOpen}>
// 			<DialogTrigger asChild>
// 				<Button size='sm' variant='secondary'>
// 					Edit
// 				</Button>
// 			</DialogTrigger>

// 			<DialogContent>
// 				<DialogHeader>
// 					<DialogTitle>Edit Project</DialogTitle>
// 				</DialogHeader>

// 				<form
// 					action={async formData => {
// 						await updateProject(project.id, formData);
// 						setOpen(false);
// 					}}
// 					className='space-y-3'
// 				>
// 					<Input
// 						name='title'
// 						defaultValue={project.title}
// 						placeholder='Title'
// 					/>

// 					<Textarea
// 						name='description'
// 						defaultValue={project.description}
// 						placeholder='Description'
// 					/>

// 					<Input
// 						name='status'
// 						defaultValue={project.status}
// 						placeholder='Status'
// 					/>

// 					<Button type='submit' className='w-full'>
// 						Update
// 					</Button>
// 				</form>
// 			</DialogContent>
// 		</Dialog>
// 	);
// }
