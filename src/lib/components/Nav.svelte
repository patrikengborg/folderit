<script lang="ts">
	import Logo from '$assets/logo.svg?url'
	import AdminToolsNav from '$lib/components/AdminToolsNav.svelte'
	import IconNew from '$assets/icons/plus.svg?component'
	import IconHome from '$assets/icons/home.svg?component'
	import IconCog from '$assets/icons/cog.svg?component'
	import IconDots from '$assets/icons/dots-grid.svg?component'
	import { page } from '$app/state'
	import { dragAndDrop, animations } from '@formkit/drag-and-drop'

	let reorder_mode = $state(false)

	let section_list = $state<HTMLUListElement>()

	function toggleReorderMode() {
		reorder_mode = !reorder_mode
	}

	$effect(() => {
		if (reorder_mode) {
			initReorder()
		}
	})

	let sections = $state([...page.data.sections])

	function initReorder() {
		console.log('initReorder')
		if (!section_list) {
			return
		}

		dragAndDrop({
			parent: section_list,

			getValues: () => sections,
			setValues: (newValues) => {
				sections = newValues
			},
			config: {
				dragHandle: '.drag-handle',
				plugins: [animations()]
			}
		})
	}
</script>

<nav
	class="bg-main-mist border-main-pale row-span-2 flex flex-col gap-6 overflow-y-auto border-e text-lg"
>
	<a href="/dashboard" class="hover:text-main-soft flex items-center gap-2">
		<IconHome class="size-5" />
		My Dashboard <span class="bg-accent ms-auto rounded px-1.5 py-0.5 text-xs font-bold">3</span>
	</a>

	<div class="group relative -mx-6 px-6">
		<button
			onclick={toggleReorderMode}
			type="button"
			class={[
				'absolute end-6 top-0 transition-opacity group-hover:opacity-100',
				reorder_mode ? 'btn btn--sm -mt-1 opacity-100' : 'opacity-0'
			]}
		>
			{#if reorder_mode}
				Save
			{:else}
				<IconCog />
			{/if}
		</button>

		<h2 class="eyebrow mb-4">Main sections</h2>

		<ul class="grid gap-2" bind:this={section_list}>
			{#each sections as section (section.uid)}
				{#key section.uid}
					<li class="-ms-2 flex items-center gap-2">
						{#if reorder_mode}
							<span
								class="drag-handle mt-0.5 cursor-grab opacity-50 transition-opacity hover:opacity-100"
							>
								<IconDots />
							</span>
						{/if}
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
				{/key}
			{/each}
		</ul>
	</div>

	<a
		href="/dashboard"
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
