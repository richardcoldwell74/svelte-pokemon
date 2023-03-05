<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$components/card/card.svelte';
	export let data: PageData;
</script>

<div class="page-container">
	<div class="card-flex-container">
		{#each data.props.pokemons as pokemon}
			<Card {pokemon} />
		{/each}
	</div>
</div>

<style>
	.page-container {
		display: flex;
		flex-direction: column;
		max-width: 1200px;
		margin: 20px auto;
	}

	.card-flex-container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		justify-content: center;
		gap: 20px;
	}
	.pokemon-image {
		width: 300px;
		height: 300px;
	}
	.white-text {
		color: #fff;
	}
</style>
