<script lang="ts">
	import type { Note } from '@prisma/client';

	import { Inline } from '$lib/components/layout/inline';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Label from '$lib/components/ui/label/label.svelte';
	import Textarea from '$lib/components/ui/textarea/textarea.svelte';
	import { X } from 'lucide-svelte';

	export let data;
	let title = '';
	let content = '';

	async function getNotes() {
		const response = await fetch('/api/notes', { method: 'GET' });
		const notes: Note[] = await response.json();
		return notes;
	}
	async function createNote() {
		const response = await fetch('/api/notes', {
			method: 'POST',
			body: JSON.stringify({ title, content })
		});
		const notes: Note[] = await response.json();
		data.notes = notes;
	}

	async function removeNote(id: number) {
		const response = await fetch('/api/notes', { method: 'DELETE', body: id.toString() });
		const notes: Note[] = await response.json();
		data.notes = notes;
	}
</script>

<form on:submit|preventDefault={createNote} method="POST" class="max-w-[400px]">
	<Label>
		Title
		<Input name="title" bind:value={title} />
	</Label>
	<Label>
		Content
		<Textarea name="content" bind:value={content} />
	</Label>
	<Button type="submit" class="mt-4">Create</Button>
</form>

{#await data.notes}
	loading
{:then notes}
	<p class="my-2">Fetched via load</p>
	<Inline>
		{#each data.notes as note}
			<div class="card w-[200px] border rounded-md p-4">
				<div class="flex justify-between">
					<p class="text-lg font-semibold">{note.title}</p>
					<button type="button" class="items-center flex" on:click={() => removeNote(note.id)}>
						<X class="w-4 h-4 cursor-pointer text-muted-foreground" />
					</button>
				</div>
				<p class="text-sm text-muted-foreground">{note.content}</p>
			</div>
		{/each}
	</Inline>
{:catch error}
	{error}
{/await}

{#await getNotes()}
	loading
{:then notes}
	<p class="my-2">Fetched in client as in SPA:s</p>
	<Inline>
		{#each data.notes as note}
			<div class="card w-[200px] border rounded-md p-4">
				<div class="flex justify-between">
					<p class="text-lg font-semibold">{note.title}</p>
					<button type="button" class="items-center flex" on:click={() => removeNote(note.id)}>
						<X class="w-4 h-4 cursor-pointer text-muted-foreground" />
					</button>
				</div>
				<p class="text-sm text-muted-foreground">{note.content}</p>
			</div>
		{/each}
	</Inline>
{:catch error}
	{error}
{/await}
