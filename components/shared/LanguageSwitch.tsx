// "use client";

// import { useTransition } from "react";
// import { useRouter } from "next/navigation";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";

// export function LanguageSwitcher({ defaultValue }: { defaultValue: string }) {
// 	const router = useRouter();
// 	const [isPending, startTransition] = useTransition();

// 	const onChange = (value: string) => {
// 		document.cookie = `locale=${value}; path=/`;

// 		startTransition(() => {
// 			router.refresh(); // reload translations
// 		});
// 	};

// 	return (
// 		<Select defaultValue={defaultValue} onValueChange={onChange}>
// 			<SelectTrigger className='w-[120px]'>
// 				<SelectValue placeholder='Language' />
// 			</SelectTrigger>
// 			<SelectContent>
// 				<SelectItem value='ru'>🇷🇺 Русский</SelectItem>
// 				<SelectItem value='uz'>🇺🇿 Uzbek</SelectItem>
// 			</SelectContent>
// 		</Select>
// 	);
// }

"use client";

import { useRouter } from "next/navigation";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { locales, type Locale } from "@/lib/i18n";
import { useLocale } from "@/i18n/i18n-provider";

const localeFlags: Record<Locale, string> = {
	uz: "🇺🇿",
	ru: "🇷🇺",
};

export function LanguageSwitcher() {
	const router = useRouter();
	const locale = useLocale();

	async function onChangeLocale(nextLocale: Locale) {
		await fetch("/api/locale", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ locale: nextLocale }),
		});

		router.refresh();
	}

	return (
		<div className='flex text-muted-foreground'>
			<Select
				value={locale}
				onValueChange={value => onChangeLocale(value as Locale)}
			>
				<SelectTrigger
					className='h-9  rounded-full border-border/80 bg-card/70 text-xs font-semibold uppercase'
					aria-label='Switch language'
				>
					<SelectValue />
				</SelectTrigger>
				<SelectContent align='end'>
					{locales.map(item => (
						<SelectItem
							key={item}
							value={item}
							className='text-xs font-semibold uppercase text-muted-foreground'
						>
							{localeFlags[item]} {item}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	);
}
