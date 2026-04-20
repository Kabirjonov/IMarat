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

export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [showPassword, setShowPassword] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// const result = await loginUser(formData);
		// console.log("User created:", result);
	};
	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={handleSubmit}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor='email'>Email</FieldLabel>
								<Input
									id='email'
									type='email'
									placeholder='info@imarat.uz'
									required
									onChange={handleChange}
									name='email'
								/>
							</Field>
							<Field>
								<div className='flex items-center'>
									<FieldLabel htmlFor='password'>Password</FieldLabel>
								</div>
								<div className='relative w-full'>
									<Input
										id='password'
										type={showPassword ? "text" : "password"}
										placeholder={showPassword ? "password" : "********"}
										required
										onChange={handleChange}
										name='password'
									/>
									<Button
										type='button'
										variant='ghost'
										size='icon'
										onClick={() => setShowPassword(!showPassword)}
										className='absolute right-2 '
									>
										{showPassword ? <EyeOff /> : <Eye />}
									</Button>
								</div>
							</Field>
							<Field>
								<Button type='submit'>Login</Button>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
