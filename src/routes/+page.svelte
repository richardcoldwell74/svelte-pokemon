<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ allPokemon } = data);
</script>

{#each allPokemon as pokemon}
	<h3>{pokemon.name}</h3>
	<img
		src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
			pokemon.id +
			'.png'}
		alt={'${allPokemon[0].name}'}
	/>
{/each}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
