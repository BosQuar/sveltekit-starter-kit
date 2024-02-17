<script lang="ts">
	import { Check, Moon, Sun } from 'lucide-svelte';
	import { mode, setMode } from 'mode-watcher';
	import { Container } from '../layout/container';
	import { Inline } from '../layout/inline';
	import { Button } from '../ui/button';
	import * as DropdownMenu from '../ui/dropdown-menu';

	const iconStyle = 'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="w-9 px-0">
			{#if $mode === 'light'}
				<Sun class={iconStyle} />
			{/if}
			{#if $mode === 'dark'}
				<Moon class={iconStyle} />
			{/if}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Item on:click={() => setMode('light')} class="gap-2">
			<Inline>
				<Container class="h-4 w-4 items-center">
					{#if 'light' === $mode}
						<Check />
					{/if}
				</Container>
				<Sun class={iconStyle} />
				Light
			</Inline>
		</DropdownMenu.Item>
		<DropdownMenu.Item on:click={() => setMode('dark')} class="gap-2">
			<Inline>
				<Container class="h-4 w-4 items-center">
					{#if 'dark' === $mode}
						<Check />
					{/if}
				</Container>
				<Moon class={iconStyle} />
				Dark
			</Inline>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
