<script lang="ts">
	import { page } from '$app/stores';
	export const prerender = true;
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ allPokemon } = data);
	$: pokemonByType = allPokemon.filter(
		(pokemon) => pokemon.types[0].type.name === $page.params.type
	);
</script>

{#each pokemonByType as pokemon}
	<h3 class="white-text">{pokemon.name}</h3>
	<img
		src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
			pokemon.id +
			'.png'}
		alt={pokemon.name}
	/>
{/each}

<style>
	.white-text {
		color: #fff;
	}
</style>
