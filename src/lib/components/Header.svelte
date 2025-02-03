<script>
	import IconUpload from '$assets/icons/upload-cloud.svg?component'
	import Actions from '$lib/components/Actions.svelte'
	import Dropdown from '$lib/components/Dropdown.svelte'
	import IconSearch from '$assets/icons/search.svg?component'
	import IconChevronDown from '$assets/icons/chevron-down.svg?component'
	import IconChevronDownBold from '$assets/icons/chevron-down-bold.svg?component'
	import { page } from '$app/state'
</script>

<header class="border-main-pale sticky top-0 flex items-end justify-between border-b bg-white">
	<Actions />

	<div class="grid place-items-end gap-2">
		<p class="text-main-soft flex items-center gap-2 text-xs">
			{page.data.account.owner.email}
			<IconChevronDown />
		</p>

		<div class="mt-auto flex gap-2">
			<div class="relative grid grid-cols-[auto_auto]">
				<button class="bg-accent rounded-e-none px-4 py-2">
					<IconUpload /> Upload
				</button>

				<Dropdown>
					{#snippet trigger()}
						<button class="bg-accent grid rounded-s-none border-s border-black/20 px-2 py-3">
							<IconChevronDownBold class="m-auto size-5" />
						</button>
					{/snippet}

					{#snippet list()}
						<ul>
							<li><button type="button">Upload a folder</button></li>
							<li><button type="button">Add a link</button></li>
							<li><button type="button">New Word document</button></li>
							<li><button type="button">New Excel spreadsheet</button></li>
							<li><button type="button">New Powerpoint presentation</button></li>
							<li><button type="button">Create ASiC-E container</button></li>
						</ul>
					{/snippet}
				</Dropdown>
			</div>

			<button class="bg-main px-4 py-2"><IconSearch class="text-white" /></button>
		</div>
	</div>
</header>
