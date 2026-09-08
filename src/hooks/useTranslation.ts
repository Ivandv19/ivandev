// Store

import { en } from "../i18n/en";
import type { Translations } from "../i18n/es";
// Traducciones
import { es } from "../i18n/es";
import { useAppStore } from "../store/appStore";

// useTranslation
// Retorna el objeto de traducciones según el idioma activo en el store
export const useTranslation = (): Translations => {
	const language = useAppStore((s) => s.language);
	return language === "es" ? es : en;
};
