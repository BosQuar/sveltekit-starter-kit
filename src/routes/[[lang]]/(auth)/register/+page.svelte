<script lang="ts">
	import { Stack } from '$lib/components/layout/stack';
	import { Button } from '$lib/components/ui/button';
	import * as Form from '$lib/components/ui/form';
	import { m } from '$lib/inlang/messages';

	import { formSchema } from './schema';

	export let data;
	let { form } = data;
</script>

<div class="lg:p-8">
	<div class="mx-auto flex w-full flex-col justify-center space-y-5 sm:w-[400px]">
		<div class="flex flex-col space-y-2 text-center">
			<h1 class="text-2xl font-semibold tracking-tight">{m.registerHeading()}</h1>
			<p class="text-sm text-muted-foreground font-normal">
				{`${m.registerAlreadyHaveUser()} `}<a
					href="/sign-in"
					class="underline underline-offset-4 hover:text-primary"
				>
					{m.registerSignInHere()}
				</a>
			</p>
		</div>
		<Form.Root method="POST" {form} schema={formSchema} let:config>
			<Form.Field {config} name="firstName">
				<Form.Item>
					<Form.Label>{m.registerFormFirstName()}</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="surname">
				<Form.Item>
					<Form.Label>{m.registerFormSurname()}</Form.Label>
					<Form.Input />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="email">
				<Form.Item>
					<Form.Label>{m.registerFormEmail()}</Form.Label>
					<Form.Input type="email" autocomplete="email" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="password">
				<Form.Item>
					<Form.Label>{m.registerFormPassword()}</Form.Label>
					<Form.Input type="password" autocomplete="new-password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="confirmPassword">
				<Form.Item>
					<Form.Label>{m.registerFormPasswordConfirm()}</Form.Label>
					<Form.Input type="password" autocomplete="new-password" />
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Button class="w-full mt-4">{m.registerFormCreateUser()}</Button>
		</Form.Root>
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
