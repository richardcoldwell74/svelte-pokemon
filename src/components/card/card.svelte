<script lang="ts">
	import type { Pokemon } from '$lib/types';
	import { getTypeColor } from '$lib/helper-functions';

	export let pokemon: Pokemon;
</script>

<div class="container" style="--background-color: {getTypeColor(pokemon.types[0]).light}">
	<div class="card-top" style="--background-color: {getTypeColor(pokemon.types[0]).light}">
		<img class="pokemon-image" src={pokemon.image.url} alt={'${allPokemon[0].name}'} />
	</div>
	<div class="card-bottom" style="--background-color: {getTypeColor(pokemon.types[0]).dark}">
		<h3 class="number-text">#{pokemon.pokemon_id}</h3>
		<h2 class="name-text">{pokemon.name}</h2>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 300px;
		height: 340px;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		background-color: var(--background-color);
	}

	.card-top {
		display: flex;
		width: 100%;
		background-color: var(--background-color);
		justify-content: center;
		border-radius: 10px 10px 0 0;
		padding: 20px 0 20px 0;
	}

	.card-bottom {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: var(--background-color);
		align-items: center;
		border-radius: 30px 30px 10px 10px;
		filter: drop-shadow(0px -3px 10px rgba(0, 0, 0, 0.6));
	}

	.pokemon-image {
		width: 180px;
		height: 180px;
	}

	.number-text {
		font-family: 'Ubuntu', sans-serif;
		color: #fff;
		margin: 15px 0 2px 0;
	}

	.name-text {
		font-family: 'Ubuntu', sans-serif;
		color: #fff;
		margin: 2px 0 5px 0;
	}
</style>
