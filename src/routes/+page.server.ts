import type { PageServerLoad } from './$types';
import { gql, GraphQLClient } from 'graphql-request';

export const load = (async () => {
	const graphCmsClient = new GraphQLClient(
		'https://api-eu-west-2.hygraph.com/v2/clesv39t22l0601t96lqu02d0/master',
		{ headers: {} }
	);
	const query = gql`
		query AllPokemon {
			pokemons(first: 12) {
				pokemon_id
				name
				types
				image {
					url
				}
				hp
				attack
				defense
				specialAttack
				specialDefense
				speed
				height
				weight
			}
		}
	`;
	const { pokemons } = await graphCmsClient.request(query);
	return { props: { pokemons } };
}) satisfies PageServerLoad;
