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
import { useTranslation } from "react-i18next";

export function DialogDemo() {
	const [clickCount, setClickCount] = useState(0);
	const router = useRouter();
	const { t } = useTranslation();

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
						{t("navbar.contact")}
					</Button>
				</DialogTrigger>

				<DialogContent className='sm:max-w-sm'>
					<DialogHeader>
						<DialogTitle>{t("contact.title")}</DialogTitle>
						<DialogDescription>
							{t("contact.description")}
						</DialogDescription>
					</DialogHeader>

					<FieldGroup>
						<Field>
							<Label htmlFor='name'>{t("contact.name")}</Label>
							<Input
								id='name'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder={t("contact.namePlaceholder")}
							/>
						</Field>

						<Field>
							<Label htmlFor='phone'>{t("contact.phone")}</Label>
							<Input
								id='phone'
								name='phone'
								value={form.phone}
								onChange={handleChange}
								placeholder={t("contact.phonePlaceholder")}
							/>
						</Field>

						<Field>
							<Label htmlFor='description'>{t("contact.description")}</Label>
							<Textarea
								id='description'
								name='description'
								value={form.description}
								onChange={handleChange}
								placeholder={t("contact.descriptionPlaceholder")}
							/>
						</Field>
					</FieldGroup>

					<DialogFooter>
						<DialogClose asChild>
							<Button variant='outline'>{t("contact.cancel")}</Button>
						</DialogClose>
						<Button type='submit'>{t("contact.submit")}</Button>
					</DialogFooter>
				</DialogContent>
			</form>
		</Dialog>
	);
}
