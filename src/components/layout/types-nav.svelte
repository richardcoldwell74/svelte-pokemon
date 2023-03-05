<script>
	import Button from '$components/button/button.svelte';
	import { getTypeColor } from '$lib/helper-functions';
</script>

<div class="container">
	<!-- <a href="/types/normal"><button>Normal</button></a> -->
	<!-- <a href="/types/fighting"><button>Fighting</button></a> -->
	<Button --background-color={getTypeColor('flying').dark} label="Flying" url="/types/flying" />
	<Button --background-color={getTypeColor('poison').dark} label="Poison" url="/types/poison" />
	<!-- <a href="/types/ground"><button>Ground</button></a> -->
	<!-- <a href="/types/rock"><button>Rock</button></a> -->
	<Button --background-color={getTypeColor('bug').dark} label="Bug" url="/types/bug" />
	<!-- <a href="/types/ghost"><button>Ghost</button></a> -->
	<!-- <a href="/types/steel"><button>Steel</button></a> -->
	<Button --background-color={getTypeColor('fire').dark} label="Fire" url="/types/fire" />
	<Button --background-color={getTypeColor('water').dark} label="Water" url="/types/water" />
	<Button --background-color={getTypeColor('grass').dark} label="Grass" url="/types/grass" />
	<!-- <a href="/types/electric"><button>Electric</button></a> -->
	<!-- <a href="/types/psychic"><button>Psychic</button></a> -->
	<!-- <a href="/types/ice"><button>Ice</button></a> -->
	<!-- <a href="/types/dragon"><button>Dragon</button></a> -->
	<!-- <a href="/types/dark"><button>Dark</button></a> -->
	<!-- <a href="/types/fairy"><button>Fairy</button></a> -->
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		background-color: #0f2a3f;
		height: 100px;
		margin: 0;
		filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.6));
	}
</style>
