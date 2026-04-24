"use client";

import { createContext, useContext, useMemo } from "react";
import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";
import { Locale } from "@/lib/i18n";

const LocaleContext = createContext<Locale | null>(null);

type I18nProviderProps = {
	locale: Locale;
	messages: any;
	children: React.ReactNode;
};

export function I18nProvider({
	locale,
	messages,
	children,
}: I18nProviderProps) {
	const i18n = useMemo(() => {
		const instance = createInstance();
		instance.init({
			lng: locale,
			fallbackLng: "uz",
			resources: {
				[locale]: {
					translation: messages, // ✅ FIX HERE
				},
			},
			ns: ["translation"],
			defaultNS: "translation",
			interpolation: {
				escapeValue: false,
			},
			returnNull: false,
			debug: process.env.NODE_ENV === "development",
		});
		return instance;
	}, [locale, messages]);

	return (
		<LocaleContext.Provider value={locale}>
			<I18nextProvider i18n={i18n}>{children}</I18nextProvider>
		</LocaleContext.Provider>
	);
}

export function useLocale(): Locale {
	const locale = useContext(LocaleContext);

	if (!locale) {
		throw new Error("useLocale must be used within I18nProvider");
	}

	return locale;
}
