import type { LayoutLoad } from './$types';
export const prerender = true;

export const load = (async ({ fetch, setHeaders }) => {
	const all = [];
	// for (let index = 1; index <= 150; index++) {
	// 	const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + index);
	// 	const data = await res.json();
	// 	all.push(data);
	// }
	// setHeaders({ 'cache-control': 'max-age=60' });
	// return { allPokemon: all };
}) satisfies LayoutLoad;
