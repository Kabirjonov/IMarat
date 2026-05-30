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

export const formatUzPhone = (value: string) => {
  let digits = value.replace(/\D/g, "");

  if (digits.length === 0) {
    return "+998";
  }

  if (!digits.startsWith("998")) {
    digits = "998" + digits;
  }

  digits = digits.slice(0, 12);
  let formatted = "+998";

  if (digits.length > 3) formatted += " " + digits.slice(3, 5);
  if (digits.length > 5) formatted += " " + digits.slice(5, 8);
  if (digits.length > 8) formatted += " " + digits.slice(8, 10);
  if (digits.length > 10) formatted += " " + digits.slice(10, 12);

  return formatted;
};
