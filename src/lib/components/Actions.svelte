<script lang="ts">
	import IconAddFolder from '$assets/icons/folder-plus.svg?component'
	import IconDownload from '$assets/icons/download.svg?component'
	import IconDelete from '$assets/icons/trash.svg?component'
	import IconMetadata from '$assets/icons/tag.svg?component'
	import IconModify from '$assets/icons/edit.svg?component'
	import IconColumns from '$assets/icons/columns.svg?component'
	import IconApproval from '$assets/icons/dataflow.svg?component'
	import IconRetention from '$assets/icons/clock-rewind.svg?component'
	import IconMove from '$assets/icons/folder-move.svg?component'
	import IconNumbering from '$assets/icons/file-numbering.svg?component'
	import IconDuplicate from '$assets/icons/duplicate.svg?component'

	const actions = [
		{
			label: '+ folder',
			icon: IconAddFolder
		},
		{
			label: 'Download',
			icon: IconDownload
		},
		{
			label: 'Delete',
			icon: IconDelete
		},
		{
			label: 'Metadata',
			icon: IconMetadata
		},
		{
			label: 'Modify',
			icon: IconModify
		},
		{
			label: 'Columns',
			icon: IconColumns
		},
		{
			label: 'Approval',
			icon: IconApproval
		},
		{
			label: 'Retention',
			icon: IconRetention
		},
		{
			label: 'Move',
			icon: IconMove
		},
		{
			label: 'Numbering',
			icon: IconNumbering
		},
		{
			label: 'Duplicate',
			icon: IconDuplicate
		}
	]
</script>

<div class="flex gap-5">
	{#each actions as action}
		<button
			type="button"
			class="hover:text-accent grid cursor-pointer place-items-center gap-2 text-sm font-bold transition-colors"
		>
			{#if action.icon}
				<action.icon class="size-6" />
			{/if}
			<span class="hidden whitespace-nowrap xl:block">{action.label}</span>
		</button>
	{/each}
</div>
