<script lang="ts">
	import type { PageData } from './$types';
	export const prerender = true;
	export let data: PageData;
	$: ({ allPokemon } = data);
	$: firstTwenty = allPokemon.slice(0, 20);
</script>

{#each firstTwenty as pokemon}
	<h3 class="white-text">{pokemon.name}</h3>
	<img
		src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
			pokemon.id +
			'.png'}
		alt={'${allPokemon[0].name}'}
	/>
	<!-- <img
		src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
			pokemon.id +
			'.png'}
		alt={'${allPokemon[0].name}'}
	/> -->
{/each}

<style>
	.white-text {
		color: #fff;
	}
</style>
