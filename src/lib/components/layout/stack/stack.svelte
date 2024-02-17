<script lang="ts">
	import { cn } from '$lib/utils';
	import type { StackAlignmentValues, StackGapValues } from '.';

	type Gap = (typeof StackGapValues)[number];
	type Alignment = (typeof StackAlignmentValues)[number];

	export let gap: Gap = 'gap-y-2';
	export let alignment: Alignment = 'items-start';
	export let fullWidth = false;
	export let spread = false;

	$: props = {
		fullWidth: fullWidth ? 'flex-1 w-full' : 'w-fit',
		spread: spread ? 'justify-between h-full' : ''
	};

	let className = '';
	export { className as class };
</script>

<div class={cn('flex flex-col', gap, alignment, props.fullWidth, props.spread, className)}>
	<slot />
</div>
