<script lang="ts">
	import ImgUploadFile from '$assets/illustrations/upload.svg?url'
	import IconThreeDots from '$assets/icons/three-dots.svg?component'
	import IconShare from '$assets/icons/share.svg?component'
	import prettyBytes from 'pretty-bytes'
	import { format } from '@formkit/tempo'

	let { data } = $props()
</script>

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
				<tr>
					<td class="ps-4"><input type="checkbox" /></td>
					<td>{file.name}</td>
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
	<div class="m-auto text-center">
		<figure class="bg-main-hazy mx-auto flex size-32 items-center justify-center rounded-full p-8">
			<img src={ImgUploadFile} alt="" />
		</figure>

		<p class="text-main-soft">
			The folder is empty.<br />
			<a href="/" class="text-link font-bold underline">Click here</a> or drag your file(s) here.
		</p>
	</div>
{/if}
