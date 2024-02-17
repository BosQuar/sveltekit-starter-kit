<script lang="ts">
	import { m } from '$lib/inlang/messages';

	import { Stack } from '$lib/components/layout/stack';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms/client';
	import { formSchema } from './schema';

	export let data;

	const { errors, form } = superForm(data.form, {});
</script>

<div class="lg:p-8">
	<div class="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[400px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">{m.signInHeading()}</h1>
			<p class="text-sm text-muted-foreground font-normal">
				{`${m.signInDontHaveUser()} `}<a
					href="/register"
					class="underline underline-offset-4 hover:text-primary"
				>
					{m.signInRegisterHere()}
				</a>
			</p>
		</div>
		<Form.Root method="POST" form={data.form} schema={formSchema} let:config>
			<Form.Field {config} name="email">
				<Form.Item>
					<Form.Label>{m.signInFormUsernameHeading()}</Form.Label>
					<Form.Input type="email" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="password">
				<Form.Item>
					<Form.Label>{m.signInFormPassword()}</Form.Label>
					<Form.Input type="password" autocomplete="on" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button class="w-full mt-4">{m.signInFormSignIn()}</Form.Button>
		</Form.Root>

		<!-- TODO: Fix this color  -->
		{#if $errors._errors}
			<p class="text-destructive">
				{$errors._errors[0]}
			</p>
		{/if}

		<Stack alignment="items-center" fullWidth>
			<p class="text-sm text-muted-foreground font-normal">
				{`${m.signInPolicyPt1()} `}
			</p>
			<p class="text-sm text-muted-foreground font-normal">
				<a href="/terms" class="underline underline-offset-4 hover:text-primary">
					{m.signInPolicyPt2()}
				</a>
				{` ${m.signInPolicyPt3()} `}
				<a href="/privacy" class="underline underline-offset-4 hover:text-primary">
					{m.signInPolicyPt4()}
				</a>
				.
			</p>
		</Stack>
	</div>
</div>
