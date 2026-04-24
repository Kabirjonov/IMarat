"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function DialogDemo() {
	const [clickCount, setClickCount] = useState(0);
	const router = useRouter();

	const [form, setForm] = useState({
		name: "",
		phone: "",
		description: "",
	});

	useEffect(() => {
		if (clickCount === 3) {
			router.push("/auth");
			setClickCount(0);
		}

		if (clickCount === 0) return;

		const timer = setTimeout(() => {
			setClickCount(0);
		}, 1500);

		return () => clearTimeout(timer);
	}, [clickCount]);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const result = contactSchema.safeParse(form);

		if (!result.success) {
			const errors = result.error.flatten().fieldErrors;
			console.log(errors);
			alert(errors.phone?.[0] || errors.name?.[0] || errors.description?.[0]);
			return;
		}

		try {
			await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(result.data),
			});

			alert("Ma'lumot yuborildi!");
			setForm({ name: "", phone: "", description: "" });
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Dialog>
			<form onSubmit={handleSubmit}>
				<DialogTrigger asChild>
					<Button
						size='default'
						className='hidden md:inline-flex'
						onClick={() => setClickCount(prev => prev + 1)}
					>
						Boglanish
					</Button>
				</DialogTrigger>

				<DialogContent className='sm:max-w-sm'>
					<DialogHeader>
						<DialogTitle>Biz bilan bog‘laning</DialogTitle>
						<DialogDescription>
							Ma’lumotlaringizni qoldiring, operator siz bilan bog‘lanadi.
						</DialogDescription>
					</DialogHeader>

					<FieldGroup>
						<Field>
							<Label htmlFor='name'>Ism</Label>
							<Input
								id='name'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder='Ismingiz'
							/>
						</Field>

						<Field>
							<Label htmlFor='phone'>Telefon raqam</Label>
							<Input
								id='phone'
								name='phone'
								value={form.phone}
								onChange={handleChange}
								placeholder='+998...'
							/>
						</Field>

						<Field>
							<Label htmlFor='description'>Izoh</Label>
							<Textarea
								id='description'
								name='description'
								value={form.description}
								onChange={handleChange}
								placeholder='Qisqacha yozib qoldiring'
							/>
						</Field>
					</FieldGroup>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant='outline'>Bekor qilish</Button>
						</DialogClose>
						<Button type='submit'>Yuborish</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
