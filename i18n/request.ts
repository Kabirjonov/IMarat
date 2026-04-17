import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";
const messages = {
	ru: () => import("./locals/ru.json"),
	uz: () => import("./locals/uz.json"),
};
export default getRequestConfig(async () => {
	const store = await cookies();
	const locale = store.get("locale")?.value || "ru";
	return {
		locale,
		messages: (await messages[locale]()).default,
		// messages: (await import(`@i18n/locals/${locale}.json`)).default,
	};
});
