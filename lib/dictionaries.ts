import type { Locale } from "@/lib/i18n";

import ru from "@/i18n/locals/ru.json";
import uz from "@/i18n/locals/uz.json";

const dictionaries = {
	uz,
	ru,
};

export function getDictionary(locale: Locale) {
	return dictionaries[locale];
}
