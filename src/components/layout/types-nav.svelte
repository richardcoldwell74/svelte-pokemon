<script>
	import Button from '$components/button/button.svelte';
	import { getTypeColor } from '$lib/helper-functions';
</script>

<div class="container">
	<div class="nav-container">
		<Button --background-color={getTypeColor('normal').dark} label="Normal" url="/types/normal" />
		<!-- <a href="/types/fighting"><button>Fighting</button></a> -->
		<Button --background-color={getTypeColor('flying').dark} label="Flying" url="/types/flying" />
		<Button --background-color={getTypeColor('poison').dark} label="Poison" url="/types/poison" />
		<Button --background-color={getTypeColor('ground').dark} label="Ground" url="/types/ground" />
		<!-- <a href="/types/rock"><button>Rock</button></a> -->
		<Button --background-color={getTypeColor('bug').dark} label="Bug" url="/types/bug" />
		<!-- <a href="/types/ghost"><button>Ghost</button></a> -->
		<!-- <a href="/types/steel"><button>Steel</button></a> -->
		<Button --background-color={getTypeColor('fire').dark} label="Fire" url="/types/fire" />
		<Button --background-color={getTypeColor('water').dark} label="Water" url="/types/water" />
		<Button --background-color={getTypeColor('grass').dark} label="Grass" url="/types/grass" />
		<Button
			--background-color={getTypeColor('electric').dark}
			label="Electric"
			url="/types/electric"
		/>
		<!-- <Button
			--background-color={getTypeColor('psychic').dark}
			label="Psychic"
			url="/types/psychic"
		/> -->
		<!-- <Button --background-color={getTypeColor('ice').dark} label="Ice" url="/types/ice" />
		<Button --background-color={getTypeColor('dragon').dark} label="Dragon" url="/types/dragon" />
		<Button --background-color={getTypeColor('dark').dark} label="Dark" url="/types/dark" />
		<Button --background-color={getTypeColor('fairy').dark} label="Fairy" url="/types/fairy" /> -->
	</div>
</div>

<style>
	.container {
		height: 100px;
		margin: 10px;
		background-color: #0f2a3f;
		filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.6));
	}
	.nav-container {
		margin: 0 auto;
		max-width: 1200px;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 15px;
	}
</style>
