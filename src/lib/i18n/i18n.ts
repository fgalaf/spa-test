// i18n.ts
import { derived, writable, type Readable } from 'svelte/store';
import translations from '$lib/i18n/translations';

// ---------------------------
// 1. Build a type from translations
// ---------------------------

export type Translations = typeof translations;
export type Locale = keyof Translations;
export type TranslationKeys<L extends Locale> = keyof Translations[L];

// ---------------------------
// 2. Locale store
// ---------------------------

export const locale = writable<Locale>('en');
export const locales = Object.keys(translations) as Locale[];

// ---------------------------
// 3. Translate function with types
// ---------------------------

function translate<L extends Locale, K extends TranslationKeys<L>>(
	locale: L,
	key: K,
	vars: Record<string, string> = {}
): string {
	if (!key) throw new Error('no key provided to $t()');
	if (!locale) throw new Error(`no translation for key "${String(key)}"`);

	const text = translations[locale][key] as string;
	if (!text) throw new Error(`no translation found for ${String(locale)}.${String(key)}`);

	let result = text;
	Object.keys(vars).forEach((k) => {
		result = result.replace(new RegExp(`{{${k}}}`, 'g'), vars[k]);
	});

	return result;
}

// ---------------------------
// 4. Derived $t store with typed signatures
// ---------------------------

export const t: Readable<
	<L extends Locale, K extends TranslationKeys<L>>(key: K, vars?: Record<string, string>) => string
> = derived(locale, ($locale) => {
	return (key: any, vars = {}) => translate($locale, key as any, vars);
});
