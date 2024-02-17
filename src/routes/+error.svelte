<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
	<div class="mb-80 mx-auto max-w-max">
		<main class="sm:flex">
			<p class="text-4xl font-bold tracking-tight text-primary sm:text-5xl">404</p>
			<div class="sm:ml-6">
				<div class="sm:border-l sm:pl-6 text-foreground/80">
					<h1 class="text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
					<p class="mt-1 text-base">Please check the URL in the address bar and try again.</p>
				</div>
				<div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
					<a href="/">
						<Button>Go back home</Button>
					</a>
				</div>
			</div>
		</main>
	</div>
</div>
