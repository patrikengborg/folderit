<script lang="ts">
	import AccountSwitcher from '$lib/components/AccountSwitcher.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import Header from '$lib/components/Header.svelte'
	import Nav from '$lib/components/Nav.svelte'

	let { data, children } = $props()
</script>

<svelte:head>
	<title>Folderit - Dashboard</title>
</svelte:head>

<div
	class="grid h-dvh grid-cols-[minmax(280px,auto)_1fr] grid-rows-[auto_1fr] [&>*]:px-6 [&>*]:py-4"
>
	<AccountSwitcher />

	<Header />

	<Nav />

	<main class="grid-rows[1fr_auto] grid overflow-y-auto">
		{@render children()}

		<Footer />
	</main>
</div>
