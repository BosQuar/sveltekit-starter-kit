<script lang="ts">
	import { cn } from '$lib/utils';
	import type { SpreadAlignmentValues, SpreadGapValues } from '.';

	type Gap = (typeof SpreadGapValues)[number];
	type Alignment = (typeof SpreadAlignmentValues)[number];

	export let gap: Gap = 'gap-x-2';
	export let alignment: Alignment = 'items-center';

	let className = '';
	export { className as class };
</script>

<div class={cn('flex w-full justify-between', gap, alignment, className)}>
	<slot />
</div>
