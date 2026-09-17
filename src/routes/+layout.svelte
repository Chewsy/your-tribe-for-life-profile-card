<script>
	import favicon from '$lib/assets/favicon.svg';
    import Footer from '$lib/Footer.svelte';

let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<Footer chama={data.chama} />