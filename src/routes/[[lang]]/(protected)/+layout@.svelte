<script lang="ts">
	import { page } from '$app/stores';

	import SiteHeader from '$lib/components/header/site-header.svelte';
	import type { User } from '@prisma/client';

	let user = $page.data.user as User;
</script>

<SiteHeader name={`${user.firstName} ${user.surname}`} email={user.email}></SiteHeader>

<div class=" container mx-auto py-10 max-w-screen-xl">
	<slot />
</div>
