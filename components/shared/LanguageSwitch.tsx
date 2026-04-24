"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { localeCookieName } from "@/lib/i18n";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/i18n/i18n-provider";

export function LanguageSwitcher() {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const locale = useLocale();
	const onChange = (value: string) => {
		document.cookie = `${localeCookieName}=${value}; path=/; max-age=31536000`;
		startTransition(() => {
			router.refresh(); // re-render server with new locale
		});
	};

	return (
		// <Select defaultValue={defaultValue} onValueChange={onChange}>
		<Select value={locale} onValueChange={value => onChange(value)}>
			<SelectTrigger
				className='h-9   text-xs font-semibold uppercase'
				aria-label='Switch language'
			>
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value='ru'>🇷🇺 Русский</SelectItem>
				<SelectItem value='uz'>🇺🇿 O‘zbek</SelectItem>
			</SelectContent>
		</Select>
	);
}
