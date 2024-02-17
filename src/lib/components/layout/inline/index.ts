import Inline from './inline.svelte';
export const InlineGapValues = [
	'gap-x-0',
	'gap-x-1',
	'gap-x-2',
	'gap-x-3',
	'gap-x-4',
	'gap-x-5',
	'gap-x-6',
	'gap-x-7',
	'gap-x-8',
	'gap-x-9'
] as const;

export const InlineAlignmentValues = ['items-start', 'items-center', 'items-end'] as const;

export { Inline };
