import { useTranslation } from "react-i18next";

// Hook for translating project types and statuses globally
export function useProjectTranslations() {
	const { t } = useTranslation("projects");

	const translateType = (type: string) => {
		return t(`types.${type}`, { defaultValue: type });
	};

	const translateStatus = (status: string) => {
		return t(`statuses.${status}`, { defaultValue: status });
	};

	return {
		translateType,
		translateStatus,
	};
}

// Utility function for server-side translations
export function translateProjectType(type: string, t: any) {
	return t(`types.${type}`, { defaultValue: type });
}

export function translateProjectStatus(status: string, t: any) {
	return t(`statuses.${status}`, { defaultValue: status });
}
