<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte'
	import IconThreeDots from '$assets/icons/three-dots.svg?component'
	import IconShare from '$assets/icons/share.svg?component'
	import IconDownload from '$assets/icons/download.svg?component'
	import IconEditMetadata from '$assets/icons/tag.svg?component'
	import IconRetention from '$assets/icons/clock-rewind.svg?component'
	import IconHeading from '$assets/icons/heading.svg?component'
	import IconDelete from '$assets/icons/trash.svg?component'
	import IconWatch from '$assets/icons/eye.svg?component'
	import IconDuplicate from '$assets/icons/duplicate.svg?component'

	import prettyBytes from 'pretty-bytes'
	import { format } from '@formkit/tempo'

	let { file } = $props()

	let dropdown_open = $state(false)
</script>

<tr class="group">
	<td class="ps-4"><input type="checkbox" /></td>
	<td>
		<a class="group-hover:text-link" href={`/files/${file.uid}`}>{file.name}</a>
	</td>
	<td></td>
	<td>{format(file.date)}</td>
	<td>{prettyBytes(file.size)}</td>
	<td>
		<div class="flex items-center gap-2">
			<IconShare class="size-5" />
			<Dropdown bind:open={dropdown_open} type="tight" class="mt-1.5">
				{#snippet trigger()}
					<button class="cursor-pointer" onclick={() => (dropdown_open = !dropdown_open)}>
						<IconThreeDots class="size-5" />
					</button>
				{/snippet}

				{#snippet list()}
					<ul>
						<li><button type="button"><IconDownload class="size-4" />Download</button></li>
						<li>
							<button type="button"><IconEditMetadata class="size-4" />Edit metadata</button>
						</li>
						<li>
							<button type="button"><IconRetention class="size-4" />Retention</button>
						</li>
						<li>
							<button type="button"><IconHeading class="size-4" />Header message</button>
						</li>
						<li>
							<button type="button"><IconDuplicate class="size-4" />Duplicate</button>
						</li>
						<li><button type="button"><IconWatch class="size-4" />Watch</button></li>
						<li>
							<button type="button" class="text-warning">
								<IconDelete class="size-4" />Delete</button
							>
						</li>
					</ul>
				{/snippet}
			</Dropdown>
		</div>
	</td>
</tr>
