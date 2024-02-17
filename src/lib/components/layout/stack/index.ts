import Stack from './stack.svelte';
export const StackGapValues = [
	'gap-y-0',
	'gap-y-1',
	'gap-y-2',
	'gap-y-3',
	'gap-y-4',
	'gap-y-5',
	'gap-y-6',
	'gap-y-7',
	'gap-y-8',
	'gap-y-9'
] as const;

export const StackAlignmentValues = ['items-start', 'items-center', 'items-end'] as const;

export { Stack };
