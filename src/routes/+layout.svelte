<script>
	import Header from '$components/layout/header.svelte';
	import Footer from '$components/layout/footer.svelte';
	import TypesNav from '$components/layout/types-nav.svelte';
</script>

<Header />
<TypesNav />
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
		justify-content: center;
		gap: 20px;
	}
</style>
