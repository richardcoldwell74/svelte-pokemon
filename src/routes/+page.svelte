<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ all_pokemon } = data);
</script>

{#each all_pokemon as pokemon}
	<h3>{pokemon.name}</h3>
	<img
		src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
			pokemon.id +
			'.png'}
		alt={'${all_pokemon[0].name}'}
	/>
{/each}

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
