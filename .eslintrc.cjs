module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['plugin:svelte/recommended', 'plugin:@typescript-eslint/recommended'],
	ignorePatterns: ['*.cjs', '*.js', 'playwright.config.ts', 'generated.ts'],
	plugins: ['@typescript-eslint'],
	overrides: [{ files: ['**/*.svelte', '**/*.ts'] }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		ecmaVersion: 2020
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
