import type { PokemonTypeColors } from './types';

export const getTypeColor = (type: string): PokemonTypeColors => {
	const pokemonType = { light: '', dark: '' };

	switch (type) {
		case 'flying':
			pokemonType.light = '#aebde4';
			pokemonType.dark = '#8fa9de';
			break;
		case 'poison':
			pokemonType.light = '#bf99d4';
			pokemonType.dark = '#aa6bc8';
			break;
		case 'bug':
			pokemonType.light = '#add080';
			pokemonType.dark = '#91c12f';
			break;
		case 'fire':
			pokemonType.light = '#ffb68d';
			pokemonType.dark = '#ff9d55';
			break;
		case 'water':
			pokemonType.light = '#8cade0';
			pokemonType.dark = '#5090d6';
			break;
		default:
		case 'grass':
			pokemonType.light = '#94cb91';
			pokemonType.dark = '#63bc5a';
			break;
			break;
	}

	return pokemonType;
};
