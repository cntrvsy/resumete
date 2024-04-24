<script lang="ts">
	import { getDrawerStore, LightSwitch, TabGroup, TabAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	const drawerStore = getDrawerStore();

	function drawerClose(): void {
     drawerStore.close();
}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose} >Home</a></li>
		<li><a href="/Templating" on:click={drawerClose} >Templating</a></li>
	</ul>
</nav>
