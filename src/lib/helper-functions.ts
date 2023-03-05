import type { PokemonTypeColors } from './types';

export const getTypeColor = (type: string): PokemonTypeColors => {
	const pokemonType = { light: '', dark: '' };

	switch (type) {
		case 'normal':
			pokemonType.light = '#acb4b7';
			pokemonType.dark = '#929da3';
			break;
		case 'fighting':
			pokemonType.light = '#d98698';
			pokemonType.dark = '#ce416b';
			break;
		case 'flying':
			pokemonType.light = '#aebde4';
			pokemonType.dark = '#8fa9de';
			break;
		case 'poison':
			pokemonType.light = '#bf99d4';
			pokemonType.dark = '#aa6bc8';
			break;
		case 'ground':
			pokemonType.light = '#e19f87';
			pokemonType.dark = '#ff9d55';
			break;
		case 'rock':
			pokemonType.light = '#ff9d55';
			pokemonType.dark = '#c5b78c';
			break;
		case 'bug':
			pokemonType.light = '#add080';
			pokemonType.dark = '#91c12f';
			break;
		case 'ghost':
			pokemonType.light = '#8e97c0';
			pokemonType.dark = '#5269ad';
			break;
		case 'steel':
			pokemonType.light = '#90acb8';
			pokemonType.dark = '#5a8ea2';
			break;
		case 'fire':
			pokemonType.light = '#ffb68d';
			pokemonType.dark = '#ff9d55';
			break;
		case 'water':
			pokemonType.light = '#8cade0';
			pokemonType.dark = '#5090d6';
			break;
		case 'grass':
			pokemonType.light = '#94cb91';
			pokemonType.dark = '#63bc5a';
			break;
		case 'electric':
			pokemonType.light = '#f6dd83';
			pokemonType.dark = '#f4d23c';
			break;
		case 'psychic':
			pokemonType.light = '#fa9c9d';
			pokemonType.dark = '#fa7179';
			break;
		case 'ice':
			pokemonType.light = '#9cdacd';
			pokemonType.dark = '#73cec0';
			break;
		case 'dragon':
			pokemonType.light = '#73cec0';
			pokemonType.dark = '#0b6dc3';
			break;
		case 'dark':
			pokemonType.light = '#908d96';
			pokemonType.dark = '#5a5465';
			break;
		case 'fairy':
			pokemonType.light = '#f2adec';
			pokemonType.dark = '#ec8fe6';
			break;
		default:
			break;
	}

	return pokemonType;
};

export const capitalizeFirstLetterOfEachWord = (inputString: string): string => {
	const words = inputString.split(' ');
	let capitalized = '';
	capitalized = words
		.map((word) => {
			return word[0].toUpperCase() + word.substring(1);
		})
		.join(' ');

	return capitalized;
};
