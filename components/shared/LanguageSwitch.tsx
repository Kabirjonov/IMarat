"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

export function LanguageSwitcher({ defaultValue }: { defaultValue: string }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onChange = (value: string) => {
		document.cookie = `locale=${value}; path=/`;

		startTransition(() => {
			router.refresh(); // reload translations
		});
	};

	return (
		<Select defaultValue={defaultValue} onValueChange={onChange}>
			<SelectTrigger className='w-[120px]'>
				<SelectValue placeholder='Language' />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='ru'>Русский</SelectItem>
				<SelectItem value='en'>English</SelectItem>
			</SelectContent>
		</Select>
	);
}
