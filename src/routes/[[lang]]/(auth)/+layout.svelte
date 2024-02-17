<script lang="ts">
	import LangToggle from '$lib/components/header/lang-toggle.svelte';
	import ModeToggle from '$lib/components/header/mode-toggle.svelte';
</script>

<div class="container relative h-full flex-col items-center justify-center grid">
	<div class="container absolute top-0 gap-x-2 h-14 items-center flex justify-end">
		<ModeToggle></ModeToggle>
		<LangToggle></LangToggle>
	</div>
	<slot />
</div>
<!-- TODO: Byt bild och ny text -->
