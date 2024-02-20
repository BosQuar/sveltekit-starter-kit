<script lang="ts">
	import { page } from '$app/stores';
	import { getRouteWithLang } from '$lib/inlang/i18nrouting';
	import { m } from '$lib/inlang/messages';
	import { cn } from '$lib/utils';

	import { KeyboardIcon } from 'lucide-svelte';
</script>

<nav class="mr-4 hidden md:flex">
	<a href="/home" class="mr-6 flex items-center space-x-2">
		<KeyboardIcon class="h-6 w-6" />
		<span class="hidden font-bold sm:inline-block"> {m.platformName()} </span>
	</a>
	<nav class="flex items-center gap-6 text-sm">
		<a
			href={getRouteWithLang('/home')}
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith(getRouteWithLang('/home'))
					? 'text-foreground'
					: 'text-foreground/60'
			)}
		>
			{m.headerNavHome()}
		</a>
		<a
			href={getRouteWithLang('/server-only')}
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith(getRouteWithLang('/server-only'))
					? 'text-foreground'
					: 'text-foreground/60'
			)}
		>
			{m.headerNavServerOnly()}
		</a>
		<a
			href={getRouteWithLang('/client-only')}
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith(getRouteWithLang('/client-only'))
					? 'text-foreground'
					: 'text-foreground/60'
			)}
		>
			{m.headerNavClientOnly()}
		</a>
	</nav>
</nav>
