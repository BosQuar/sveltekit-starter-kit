import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			$ui: './src/ui',
			$paraglide: './src/paraglide'
		},
		// Need for crawling to work until
		// https://github.com/sveltejs/kit/issues/11133
		// is fixed
		prerender: {
			entries: ['/']
		}
	},
	vitePlugin: {
		inspector: {
			holdMode: true,
			showToggleButton: 'active',
			toggleButtonPos: 'top-right'
		}
	}
};

export default config;
