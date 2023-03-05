<script lang="ts">
	import type { Pokemon } from '$lib/types';
	import { getTypeColor, capitalizeFirstLetterOfEachWord } from '$lib/helper-functions';

	export let pokemon: Pokemon;
</script>

<div class="card">
	<div class="container" style="--background-color: {getTypeColor(pokemon.types[0]).dark}">
		<div class="card-top" style="--background-color: {getTypeColor(pokemon.types[0]).light}">
			<img class="pokemon-image" src={pokemon.image.url} alt={'${allPokemon[0].name}'} />
		</div>
		<div class="card-bottom" style="--background-color: {getTypeColor(pokemon.types[0]).dark}">
			<h3 class="number-text">#{pokemon.pokemon_id}</h3>
			<h2 class="name-text">{capitalizeFirstLetterOfEachWord(pokemon.name)}</h2>
			<div class="type-container">
				{#each pokemon.types as type}
					<div class="type" style="--background-color: {getTypeColor(type).light}">
						{capitalizeFirstLetterOfEachWord(type)}
					</div>{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.card > :hover {
		border: #fff solid 3px;
		transform: scale(1.05);
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 300px;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.6);
		border-radius: 10px;
		background-color: var(--background-color);
		cursor: pointer;
		border: transparent solid 3px;
		transform: scale(1);
		transition: scale 0.5s ease-in-out;
		transition: border 0.5s ease-in-out;
	}

	.card-top {
		display: flex;
		background-color: var(--background-color);
		justify-content: center;
		border-radius: 50%;
		margin: 20px 0 10px 0;
		padding: 25px;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
	}

	.card-bottom {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		background-color: var(--background-color);
		align-items: center;
		border-radius: 30px 30px 10px 10px;
	}

	.pokemon-image {
		width: 180px;
		height: 180px;
	}

	.number-text {
		font-family: 'Ubuntu', sans-serif;
		color: #fff;
		margin: 0;
		letter-spacing: 1px;
		font-size: 18px;
	}

	.name-text {
		font-family: 'Ubuntu', sans-serif;
		color: #fff;
		margin: 0;
		letter-spacing: 1px;
		font-size: 16px;
	}

	.type-container {
		display: flex;
		gap: 10px;
		padding: 5px;
		justify-content: center;
		margin: 0 0 20px 0;
	}

	.type {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--background-color);
		color: #fff;
		font-family: 'Ubuntu', sans-serif;
		font-size: 14px;
		word-spacing: 1px;
		height: 25px;
		width: 60px;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.2);
	}
</style>
