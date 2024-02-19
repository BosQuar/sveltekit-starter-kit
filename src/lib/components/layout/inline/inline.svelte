<script lang="ts">
	import { cn } from '$lib/utils';
	import type { InlineAlignmentValues, InlineGapValues } from '.';

	type Gap = (typeof InlineGapValues)[number];
	type Alignment = (typeof InlineAlignmentValues)[number];

	export let gap: Gap = 'gap-x-2';
	export let alignment: Alignment = 'none';
	export let lineWrap: boolean = true;

	$: props = {
		lineWrap: lineWrap ? 'flex-wrap' : ''
	};

	let className = '';
	export { className as class };
</script>

<div class={cn('flex gap-y-2', gap, alignment, props.lineWrap, className)}>
	<slot />
</div>
