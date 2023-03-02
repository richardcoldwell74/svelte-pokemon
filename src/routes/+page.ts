import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const all = [];
	for (let index = 1; index <= 10; index++) {
		const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
		const data = await res.json();
		all.push(data);
	}
	return { all_pokemon: all };
}) satisfies PageLoad;
