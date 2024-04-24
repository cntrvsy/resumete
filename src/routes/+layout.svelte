<script lang="ts">
	import '../app.postcss';
	import { page, navigating } from '$app/stores';
	import { goto, invalidate } from '$app/navigation';
	import { initializeStores, Drawer, getDrawerStore, LightSwitch, Toast, Modal,  } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	//my imports
	import '@fontsource-variable/open-sans';
	import CustomNavigation from '$lib/components/CustomNavigation.svelte';
	import CustomNavigationDrawer from '$lib/components/CustomNavigationDrawer.svelte';
	import CustomPageTransition from '$lib/components/CustomPageTransition.svelte';
	import CustomLoading from '$lib/components/CustomLoading.svelte';
	import BackgroundAnimation from '$lib/components/BackgroundWaveAnimation.svelte';
	import { loading } from '$lib/stores/loading';

	$: loading.setNavigate(!!$navigating)

	export let data

	initializeStores();
	
	//drawer logic
	const drawerStore = getDrawerStore();

	function drawerOpen(): void {
		drawerStore.open({})
	}
</script>

<Modal />
<Toast />
<CustomLoading />

<!-- drawer -->
 <Drawer>
	<h2 class="p-4">Navigation</h2>
	<hr/>
	<CustomNavigationDrawer/>
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<!-- button for phones -->
				<div class="flex items-center">
					<button class="lg:hidden md:hidden btn btn-sm mr" on:click={drawerOpen}>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="fill-token" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
					</button>
					RESUMETE
				</div>
			</svelte:fragment>
			<div class="hidden md:block">
				<CustomNavigation />
			</div>
			<svelte:fragment slot="trail">
				<LightSwitch/>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<CustomPageTransition key={data.url} duration={600}>
		<slot />
	</CustomPageTransition>

	<BackgroundAnimation />
	
</AppShell>


<style>
	:global(body){
		font-family: 'Open Sans Variable', sans-serif;
	}
</style>
