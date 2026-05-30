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

import { useContactForm } from "@/hooks/useContactForm";
import { Controller } from "react-hook-form";
import { formatUzPhone } from "@/lib/phoneFormat";
import { SocialLinks } from "../shared/RightLinks";
import Link from "next/link";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function DialogDemo() {
  const { register, control, formState, onSubmit, isPending, serverError } =
    useContactForm();
  const { errors } = formState;

  const [clickCount, setClickCount] = useState(0);
  const router = useRouter();
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    description: "",
  });

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
    const result = {};
    // const result = contactSchema.safeParse(form);

    // if (!result.success) {
    //   const errors = result.error.flatten().fieldErrors;
    //   console.log(errors);
    //   alert(errors.phone?.[0] || errors.name?.[0] || errors.description?.[0]);
    //   return;
    // }

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
      <DialogTrigger asChild>
        <Button
          size="default"
          className="hidden md:inline-flex"
          onClick={() => setClickCount((prev) => prev + 1)}
        >
          {t("navbar.contact")}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-sm">
        {/*<form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{t("contact.title")}</DialogTitle>
            <DialogDescription>{t("contact.description")}</DialogDescription>
          </DialogHeader>

          <FieldGroup className="pb-2">
            <Field>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t("contact.namePlaceholder")}
              />
            </Field>

            <Field>
              <Label htmlFor="phone">{t("contact.phone")}</Label>
              <Input
                id="phone"
                name="phone"
                value={form.phone}
                // onChange={handleChange}
                onChange={(event) =>
                  field.onChange(formatUzPhone(event.target.value))
                }
                placeholder={t("contact.phonePlaceholder")}
              />
            </Field>

            <Field>
              <Label htmlFor="description">{t("contact.description")}</Label>
              <Textarea
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder={t("contact.descriptionPlaceholder")}
              />
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">{t("contact.cancel")}</Button>
            </DialogClose>
            <Button type="submit">{t("contact.submit")}</Button>
          </DialogFooter>
        </form>*/}
        <div className="rounded-2xl border border-border/80 bg-card/85 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="grid gap-2 min-w-0">
                <label htmlFor="fullName" className="text-sm font-medium">
                  {t("sections.contact.form.fullName")}
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder={t("sections.contact.form.fullNamePlaceholder")}
                  className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                  {...register("fullName")}
                />
                {errors.fullName && (
                  <p className="text-xs text-destructive">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="grid gap-2 min-w-0">
                <label htmlFor="phone" className="text-sm font-medium">
                  {t("sections.contact.form.phone")}
                </label>
                <Controller
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <input
                      id="phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder={t("sections.contact.form.phonePlaceholder")}
                      className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      value={field.value ?? "+998"}
                      onBlur={field.onBlur}
                      onChange={(event) =>
                        field.onChange(formatUzPhone(event.target.value))
                      }
                    />
                  )}
                />
                {errors.phone && (
                  <p className="text-xs text-destructive">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                {t("sections.contact.form.description")}
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder={t("sections.contact.form.descriptionPlaceholder")}
                className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-xs text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex jumping w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isPending
                ? t("sections.contact.form.submitting")
                : t("sections.contact.form.submit")}
            </button>
            {serverError && (
              <p className="text-sm text-destructive">{serverError}</p>
            )}
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
