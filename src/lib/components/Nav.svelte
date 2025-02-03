<script lang="ts">
	import Logo from '$assets/logo.svg?url'
	import AdminToolsNav from '$lib/components/AdminToolsNav.svelte'
	import IconNew from '$assets/icons/plus.svg?component'
	import IconHome from '$assets/icons/home.svg?component'
	import { page } from '$app/state'
</script>

<nav
	class="bg-main-mist border-main-pale row-span-2 flex flex-col gap-6 overflow-y-auto border-e text-lg"
>
	<a href="/dashboard" class="hover:text-main-soft flex items-center gap-2">
		<IconHome />
		My Dashboard <span class="bg-accent ms-auto rounded px-1.5 py-0.5 text-xs font-bold">3</span>
	</a>

	<div>
		<h2 class="eyebrow mb-4">Main sections</h2>

		<ul class="grid gap-2">
			{#each page.data.sections as section}
				<li class="-ms-2">
					<a
						href={`/dashboard/${section.uid}`}
						class={[
							'hover:text-main-soft flex items-center gap-3 border-s-2 ps-2 ',
							section.uid === page.data.section?.uid
								? 'text-link border-link'
								: 'border-transparent'
						]}
					>
						{section.name}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<a
		href="/auth/logout"
		class="mt-2 flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
	>
		<IconNew class="text-accent" />
		New Section
	</a>

	<div class="border-main-pale -mx-6 border-t px-6 pt-5">
		<h2 class="eyebrow mb-3">Admin tools</h2>

		<AdminToolsNav />
	</div>

	<figure class="mt-auto mb-2 pt-8">
		<img src={Logo} alt="Folderit" class="w-28" />
	</figure>
</nav>
