"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { loginAction } from "@/app/auth/actions";
import { useTranslation } from "react-i18next";

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [showPassword, setShowPassword] = useState(false);
	const { t } = useTranslation("loginForm");
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>{t("title")}</CardTitle>
					<CardDescription>{t("description")}</CardDescription>
				</CardHeader>

				<CardContent>
					<form action={loginAction}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor='email'>{t("email")}</FieldLabel>
								<Input
									id='email'
									type='email'
									name='email'
									placeholder={t("emailPlaceholder")}
									required
								/>
							</Field>

							<Field>
								<FieldLabel htmlFor='password'>{t("password")}</FieldLabel>

								<div className='relative w-full'>
									<Input
										id='password'
										name='password'
										type={showPassword ? "text" : "password"}
										placeholder='********'
										required
									/>

									<Button
										type='button'
										variant='ghost'
										size='icon'
										onClick={() => setShowPassword(v => !v)}
										className='absolute right-2 top-1/2 -translate-y-1/2'
									>
										{showPassword ? <EyeOff /> : <Eye />}
									</Button>
								</div>
							</Field>

							<Field>
								<Button type='submit'>{t("loginButton")}</Button>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
