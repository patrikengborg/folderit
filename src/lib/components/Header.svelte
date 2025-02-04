<script>
	import IconUpload from '$assets/icons/upload-cloud.svg?component'
	import Actions from '$lib/components/Actions.svelte'
	import Dropdown from '$lib/components/Dropdown.svelte'
	import IconSearch from '$assets/icons/search.svg?component'
	import IconLink from '$assets/icons/link.svg?component'
	import IconWord from '$assets/icons/word-doc.svg?component'
	import IconExcel from '$assets/icons/excel-doc.svg?component'
	import IconPowerpoint from '$assets/icons/powerpoint-doc.svg?component'
	import IconFolder from '$assets/icons/folder.svg?component'

	import IconChevronDown from '$assets/icons/chevron-down.svg?component'
	import IconChevronDownBold from '$assets/icons/chevron-down-bold.svg?component'

	import { page } from '$app/state'

	let upload_actions_open = $state(false)

	const upload_actions = [
		{
			label: 'Upload',
			icon: IconUpload
		},
		{
			label: 'Add a link',
			icon: IconLink
		},
		{
			label: 'New Word document',
			icon: IconWord
		},
		{
			label: 'New Excel spreadsheet',
			icon: IconExcel
		},
		{
			label: 'New Powerpoint presentation',
			icon: IconPowerpoint
		},
		{
			label: 'Create ASiC-E container',
			icon: IconFolder
		}
	]
</script>

<header class="border-main-pale sticky top-0 z-10 flex items-end justify-between border-b bg-white">
	<Actions />

	<div class="grid place-items-end gap-2">
		<p class="text-main-soft flex items-center gap-2 text-xs">
			{page.data.account.owner.email}
			<IconChevronDown />
		</p>

		<div class="mt-auto flex gap-2">
			<div class="relative grid grid-cols-[auto_auto]">
				<button class="bg-accent rounded-e-none px-4 py-2">
					<IconUpload class="size-4" /> Upload
				</button>

				<Dropdown bind:open={upload_actions_open}>
					{#snippet trigger()}
						<button
							onclick={() => (upload_actions_open = !upload_actions_open)}
							class="bg-accent grid cursor-pointer rounded-s-none border-s border-black/20 px-2 py-3"
						>
							<IconChevronDownBold class="m-auto size-5" />
						</button>
					{/snippet}

					{#snippet list()}
						<ul>
							{#each upload_actions as action}
								<li>
									<button type="button"><action.icon class="size-5" /> {action.label}</button>
								</li>
							{/each}
						</ul>
					{/snippet}
				</Dropdown>
			</div>

			<button class="bg-main px-4 py-2"><IconSearch class="size-5 text-white" /></button>
		</div>
	</div>
</header>
