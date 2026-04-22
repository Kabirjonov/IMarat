"use client";
import { LoginForm } from "@/components/forms/LoginForm";
import { useAuthStep } from "@/store/useAuthStep";
import React from "react";

export default function page() {
	const { step } = useAuthStep();
	return (
		<div className='flex h-screen w-full items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm'>
				<LoginForm />
			</div>
		</div>
	);
}
