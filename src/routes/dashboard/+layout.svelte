<script lang="ts">
	import IconInbox from '$assets/icons/inbox.svg?component'
	import IconHome from '$assets/icons/home.svg?component'
	import IconTeam from '$assets/icons/users.svg?component'
	import IconSearch from '$assets/icons/search.svg?component'
	import IconChevronDown from '$assets/icons/chevron-down.svg?component'
	import Logo from '$assets/logo.svg?url'
	import IconNew from '$assets/icons/plus.svg?component'
	import IconUpload from '$assets/icons/upload-cloud.svg?component'
	import AvatarPlaceholder from '$assets/icons/avatar-placeholder.svg?component'
	import Actions from './Actions.svelte'
	import AdminToolsNav from './AdminToolsNav.svelte'
	import { page } from '$app/state'

	let { data, children } = $props()
</script>

<div
	class="grid min-h-dvh grid-cols-[minmax(280px,auto)_1fr] grid-rows-[auto_1fr_auto] [&>*]:px-6 [&>*]:py-4"
>
	<div class="border-main-pale bg-main-mist sticky top-0 border-e border-b">
		<div class="-ms-2 grid grid-cols-[auto_1fr] items-center gap-4">
			<figure class="border-main-pale rounded-2xl border bg-white p-3">
				<AvatarPlaceholder />
			</figure>

			<p><strong class="line-clamp-1">Engborg Code & Dev AB</strong></p>
		</div>
	</div>

	<header class="border-main-pale sticky top-0 flex items-end justify-between border-b bg-white">
		<Actions />

		<div class="grid place-items-end gap-2">
			<p class="text-main-soft flex items-center gap-2 text-xs">
				john.smith@metsadteedee.com
				<IconChevronDown />
			</p>
			<div class="mt-auto flex gap-2">
				<button class="bg-accent px-4 py-2">
					<IconUpload /> Upload
				</button>

				<button class="bg-main px-4 py-2"><IconSearch class="text-white" /></button>
			</div>
		</div>
	</header>

	<nav class="bg-main-mist border-main-pale row-span-2 flex flex-col gap-6 border-e text-lg">
		<a href="/dashboard" class="flex items-center gap-2">
			<IconHome />
			My Dashboard <span class="bg-accent ms-auto rounded px-1.5 py-0.5 text-xs font-bold">3</span>
		</a>

		<div>
			<h2 class="eyebrow mb-2">Main sections</h2>

			<ul class="grid gap-2">
				{#each data.sections as section}
					<li>
						<a
							href={`/dashboard/${section.uid}`}
							class={[
								'flex items-center gap-3',
								section.uid === page.params.section_id && 'text-link'
							]}
						>
							<!-- {#if Icon}
								<Icon />
							{/if} -->
							{section.name}
							<!-- {#if count}
								<span class="bg-accent ms-auto rounded px-1.5 py-0.5 text-xs font-bold">
									{count}
								</span>
							{/if} -->
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

		<figure class="mt-auto mb-2">
			<img src={Logo} alt="Folderit" class="w-28" />
		</figure>
	</nav>

	<main>
		{@render children()}
	</main>

	<footer class="text-main-soft sticky bottom-0 text-xs">
		<p class="mb-4 text-end">Import files via email</p>

		<div class="flex justify-between py-2">
			<div class="flex gap-2 text-sm">
				<p>1.5 GB of 200.0 GB total storage used.</p>
				<p>121 files and 17 folders (74.7 MB) in this location.</p>
				<p>Export report to: XLSX / ODS / CSV /PDE</p>
			</div>
			<p>Audit Trial</p>
		</div>

		<div class="border-main-pale flex justify-between border-t py-3">
			<nav class="flex gap-4">
				<a href="/">Tutorials</a>
				<a href="/">Contact</a>
				<a href="/">Privacy Policy</a>
				<a href="/">Terms of Use</a>
			</nav>
			<p>Folderit © 2023</p>
		</div>
	</footer>
</div>
