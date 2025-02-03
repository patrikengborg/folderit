<script lang="ts">
	import ImgUploadFile from '$assets/illustrations/upload.svg?url'
	import IconThreeDots from '$assets/icons/three-dots.svg?component'
	import IconShare from '$assets/icons/share.svg?component'
	import prettyBytes from 'pretty-bytes'
	import { format } from '@formkit/tempo'

	let { data } = $props()
	$inspect(data.section)
</script>

<p class="mb-4 flex items-baseline gap-2 text-sm">
	<span>{data.account.name}</span> <span class="text-xl">›</span> <span>{data.section?.name}</span>
</p>

{#if data.files.length > 0}
	<table class="w-full">
		<thead>
			<tr>
				<th class="ps-4"><input type="checkbox" /></th>
				<th>Name</th>
				<th>Tags</th>
				<th>Date</th>
				<th>Size</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			{#each data.files as file}
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
							<IconShare />
							<IconThreeDots />
						</div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<div class="grid h-full place-content-center text-center">
		<figure class="bg-main-hazy mx-auto flex size-32 items-center justify-center rounded-full p-8">
			<img src={ImgUploadFile} alt="" />
		</figure>

		<p class="text-main-soft">
			The folder is empty.<br />
			<a href="/" class="text-link font-bold underline">Click here</a> or drag your file(s) here.
		</p>
	</div>
{/if}
