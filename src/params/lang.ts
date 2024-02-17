import { availableLanguageTags, type AvailableLanguageTag } from '$paraglide/runtime';

export const match = (param: AvailableLanguageTag): param is AvailableLanguageTag => {
	return availableLanguageTags.includes(param);
};
