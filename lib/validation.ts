import { z } from "zod";

export const contactSchema = z.object({
	name: z.string().min(2, "Ism kamida 2 ta belgidan iborat bo‘lishi kerak"),
	phone: z
		.string()
		.regex(
			/^\+998\d{9}$/,
			"Telefon raqam +998 bilan boshlanishi va 9 ta raqamdan iborat bo‘lishi kerak",
		),
	description: z
		.string()
		.min(5, "Kamida 5 ta belgi yozing")
		.max(300, "300 belgidan oshmasin"),
});
