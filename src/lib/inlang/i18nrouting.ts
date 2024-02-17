import * as runtime from '$paraglide/runtime';
import {
	availableLanguageTags,
	languageTag,
	sourceLanguageTag,
	type AvailableLanguageTag
} from '$paraglide/runtime';
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';

export const i18n = createI18n(runtime);

/**
 * Returns the path in the given language, regardless of which language the path is in.
 */
export function getRouteWithLang(path: string, lang?: AvailableLanguageTag) {
	path = withoutLanguageTag(path);

	const internalLang = lang ? lang : languageTag();

	// Don't prefix the default language
	if (internalLang === sourceLanguageTag) {
		return path;
	}

	// Prefix all other languages
	return `/${internalLang}${path}`;
}

/**
 * Returns the path without the language tag
 */
function withoutLanguageTag(path: string) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, maybeLang, ...rest] = path.split('/');
	if (availableLanguageTags.includes(maybeLang as AvailableLanguageTag)) {
		return `/${rest.join('/')}`;
	}
	return path;
}
