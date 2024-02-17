<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { getRouteWithLang } from '$lib/inlang/i18nrouting';
	import { setCapitalCase } from '$lib/utils';
	import {
		availableLanguageTags,
		languageTag,
		setLanguageTag,
		type AvailableLanguageTag
	} from '$paraglide/runtime';

	import { Check } from 'lucide-svelte';
	import { Container } from '../layout/container';
	import { Inline } from '../layout/inline';
	import { Button } from '../ui/button';
	import * as DropdownMenu from '../ui/dropdown-menu';

	function setLanguage(lang: AvailableLanguageTag) {
		if (lang === languageTag()) {
			return;
		}
		setLanguageTag(lang);
		goto(getRouteWithLang($page.url.pathname, lang));
	}

	const iconStyle = 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="w-9 px-0">
			{setCapitalCase(languageTag())}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
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
	</DropdownMenu.Content>
</DropdownMenu.Root>
