<script>
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
</script>

<Header />
<main>
	<div class="main">
		<slot />
	</div>
</main>
<Footer />

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
