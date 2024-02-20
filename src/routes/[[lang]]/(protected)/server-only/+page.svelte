<script lang="ts">
	import Inline from '$lib/components/layout/inline/inline.svelte';
	import * as Form from '$lib/components/ui/form';
	import { X } from 'lucide-svelte';
	import { formSchemaCreate, formSchemaDelete } from './schema';

	export let data;
	let { formCreate, formDelete } = data;

	let value: number | undefined = undefined;
</script>

<Form.Root
	action="?/create"
	method="POST"
	form={formCreate}
	schema={formSchemaCreate}
	let:config
	class="max-w-[400px]"
>
	<Form.Field name="title" {config}>
		<Form.Label>Title</Form.Label>
		<Form.Input />
		<Form.Validation />
	</Form.Field>
	<Form.Field name="content" {config}>
		<Form.Label>Content</Form.Label>
		<Form.Textarea />
		<Form.Validation />
	</Form.Field>
	<Form.Button class="my-4" type="submit">Create</Form.Button>
</Form.Root>

<!-- Poc for doing this on server. Should probably do this delete client side since no input -->
<Form.Root action="?/delete" method="POST" form={formDelete} schema={formSchemaDelete} let:config>
	<Form.Field name="id" {config}>
		<Form.Input bind:value class="hidden" />
	</Form.Field>
	<Inline>
		{#each data.notes as note}
			<div class="card w-[200px] border rounded-md p-4">
				<div class="flex justify-between">
					<p class="text-lg font-semibold">{note.title}</p>
					<button type="submit" class="items-center flex" on:click={() => (value = note.id)}>
						<X class="w-4 h-4 cursor-pointer text-muted-foreground" />
					</button>
				</div>
				<p class="text-sm text-muted-foreground">{note.content}</p>
			</div>
		{/each}
	</Inline>
</Form.Root>
