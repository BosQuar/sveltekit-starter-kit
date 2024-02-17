<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getRouteWithLang } from '$lib/inlang/i18nrouting';
	import { m } from '$lib/inlang/messages';
	import { setCapitalCase } from '$lib/utils';
	import {
		availableLanguageTags,
		languageTag,
		setLanguageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';

	import { Check } from 'lucide-svelte';
	import MainNav from './main-nav.svelte';

	import ModeToggle from '../header/mode-toggle.svelte';
	import { Container } from '../layout/container';
	import { Inline } from '../layout/inline';
	import * as Avatar from '../ui/avatar';
	import * as DropdownMenu from '../ui/dropdown-menu';

	export let name: string;
	export let email: string;

	function setLanguage(lang: AvailableLanguageTag) {
		if (lang === languageTag()) {
			return;
		}
		setLanguageTag(lang);
		goto(getRouteWithLang($page.url.pathname, lang));
	}
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center">
		<MainNav />
		<div class="flex flex-1 items-center gap-x-2 justify-end">
			<ModeToggle />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root class="h-8 w-8">
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>CN</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" align="end">
					<DropdownMenu.Label class="font-normal">
						<div class="flex flex-col space-y-1">
							<p class="text-sm font-medium leading-none">{name}</p>
							<p class="text-xs leading-none text-muted-foreground">{email}</p>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item><a href="/profile"> {m.headerProfile()}</a></DropdownMenu.Item>
						<DropdownMenu.Sub>
							<DropdownMenu.SubTrigger>{m.headerSetLanguage()}</DropdownMenu.SubTrigger>
							<DropdownMenu.SubContent>
								{#each availableLanguageTags as tag}
									<DropdownMenu.Item on:click={() => setLanguage(tag)}>
										<Inline>
											<Container class="h-4 w-4 items-center">
												{#if tag === languageTag()}
													<Check />
												{/if}
											</Container>
											{setCapitalCase(tag)}
										</Inline>
									</DropdownMenu.Item>
								{/each}
							</DropdownMenu.SubContent>
						</DropdownMenu.Sub>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Item on:click={() => goto('/sign-out')}
						>{m.headerLogout()}</DropdownMenu.Item
					>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
