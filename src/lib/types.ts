export type Pokemon = {
	pokemon_id: number;
	name: string;
	types: string[];
	image: Image;
	hp: number;
	attack: number;
	defense: number;
	specialAttack: number;
	specialDefense: number;
	speed: number;
	height: number;
	weight: number;
};

type Image = { url: string };

export type PokemonTypeColors = { light: string; dark: string };
