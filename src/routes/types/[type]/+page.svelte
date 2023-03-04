<script lang="ts">	
	import type { PageData } from './$types';
	export let data: PageData;
	
</script>

<div class="page-container">

 {#each data.props.pokemons as pokemon}
	<h3 class="white-text">{pokemon.name}</h3>
	<img
	class="pokemon-image"
		src={pokemon.image.url}
		alt={'${allPokemon[0].name}'}
	/>
{/each} 
</div>

<style>
		.page-container {
		display: flex;
		flex-direction: column;
		max-width: 1200px;
		margin: 0 auto;
	}

	.pokemon-image {
		width: 300px;
		height: 300px;
	}
	.white-text {
		color: #fff;
	}
</style>
