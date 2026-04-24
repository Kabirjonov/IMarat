import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AppProviders from "@/components/providers/AppProviders";
import { loadTranslations } from "@/lib/translations-loader";
import { cookies } from "next/headers";
import { localeCookieName, defaultLocale, normalizeLocale } from "@/lib/i18n";
const jetbrainsMonoHeading = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Imarat development",
	description: "Imarat development - zamonaviy qurilish kompaniyasi",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();

	const rawLocale = cookieStore.get(localeCookieName)?.value;

	const locale = normalizeLocale(rawLocale) || defaultLocale;

	const messages = loadTranslations(locale);

	return (
		<html
			lang={locale}
			className={cn(
				"h-full",
				"antialiased",
				geistSans.variable,
				geistMono.variable,
				"font-sans",
				inter.variable,
				jetbrainsMonoHeading.variable,
			)}
		>
			<body className='min-h-full flex flex-col'>
				<AppProviders locale={locale} messages={messages}>
					{children}
				</AppProviders>
			</body>
		</html>
	);
}
