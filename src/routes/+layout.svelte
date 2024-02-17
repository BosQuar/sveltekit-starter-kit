<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import '$lib/styles/app.scss';
	import '$lib/styles/reset.scss';
	import '$lib/styles/tailwind.css';
	import 'leaflet/dist/leaflet.css';

	import {
		onSetLanguageTag,
		setLanguageTag,
		sourceLanguageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';
	import { ModeWatcher } from 'mode-watcher';

	// Paraglide seo tips,  and add to route for for refresh , see point 6
	// https://github.com/opral/monorepo/blob/main/inlang/guides/build-a-global-svelte-app/build-a-global-svelte-app.md
	// https://inlang.com/g/2fg8ng94/guide-nilsjacobsen-buildAGlobalSvelteApp
	// https://inlang.com/m/gerre34r/library-inlang-paraglideJs#getting-started

	let initiatedLang = false;

	//Use the default language if no language is given
	$: lang = ($page.params.lang as AvailableLanguageTag) ?? sourceLanguageTag;
	$: if (!initiatedLang) {
		initiatedLang = true;
		setLanguageTag(lang);
	}

	onNavigate(() => {
		if (document.documentElement.lang !== lang) {
			document.documentElement.lang = lang;
		}
	});

	onSetLanguageTag((newLanguageTag) => {
		lang = newLanguageTag;
	});
</script>

<ModeWatcher />

<div class="app-wrapper">
	{#key lang}
		<slot />
	{/key}
</div>

<style>
	.app-wrapper {
		height: inherit;
		overflow: auto;
	}
</style>
