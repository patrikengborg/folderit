<script lang="ts">
	import IconReport from '$assets/icons/flag.svg?component'
	import IconManageUsers from '$assets/icons/user-edit.svg?component'
	import IconManageUserGroups from '$assets/icons/users.svg?component'
	import IconRecycleBin from '$assets/icons/trash.svg?component'
	import IconShare from '$assets/icons/share.svg?component'
	import IconAccessOverview from '$assets/icons/eye.svg?component'
	import IconMetadata from '$assets/icons/tag.svg?component'
	import IconAuditLog from '$assets/icons/dotpoints.svg?component'

	const admin_tools = [
		{
			label: 'Report',
			icon: IconReport
		},
		{
			label: 'Manage Users',
			icon: IconManageUsers
		},
		{
			label: 'Manage User Groups',
			icon: IconManageUserGroups
		},
		{
			label: 'Recycle Bin',
			icon: IconRecycleBin
		},
		{
			label: 'Share',
			icon: IconShare
		},
		{
			label: 'Access Overview',
			icon: IconAccessOverview
		},
		{
			label: 'Metadata',
			icon: IconMetadata
		},
		{
			label: 'Audit Log',
			icon: IconAuditLog
		}
	]
</script>

<ul class="text-main-muted grid gap-3 text-base">
	{#each admin_tools as item}
		<li>
			<a href="/" class="hover:text-main-soft flex items-center gap-3">
				{#if item.icon}
					<item.icon class="text-main-dim size-4" />
				{/if}
				<span>{item.label}</span>
			</a>
		</li>
	{/each}
</ul>
