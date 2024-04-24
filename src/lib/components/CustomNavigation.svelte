<script lang="ts">
	import { getDrawerStore, LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
     drawerStore.close();
}
</script>

<TabGroup justify="justify-center">
	<TabAnchor href="/" selected={$page.url.pathname === '/'}>Home</TabAnchor>
	<TabAnchor href="/Templating" selected={$page.url.pathname === '/Templating'}>Templating</TabAnchor>
</TabGroup>
				