<script>
	// import '/src/scss/app.scss';
	// import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props(); 
	// import Sidebar from '$lib/components/layout/Sidebar/Sidebar.svelte';

	// export const prerender = true;
	// export const ssr = false;
</script>

<!-- <Sidebar /> -->

<Header /> 

<div class="content-container">
	{@render children?.()}
</div>

<!-- <Footer /> -->

<style lang="scss">
	:global {
		@import 'src/scss/app';
	}

	.content-container {
		max-width: 800px; 
		margin: 0 auto;
		padding: 20px;
	}
</style>