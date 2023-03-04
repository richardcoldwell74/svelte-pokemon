<script>
	import Button from '$components/button/button.svelte';
</script>

<div class="container">
	<!-- <a href="/types/normal"><button>Normal</button></a> -->
	<!-- <a href="/types/fighting"><button>Fighting</button></a> -->
	<Button --background-color="#3dc7ef" label="Flying" url="/types/flying" />
	<Button --background-color="#b97fc9" label="Poison" url="/types/poison" />
	<!-- <a href="/types/ground"><button>Ground</button></a> -->
	<!-- <a href="/types/rock"><button>Rock</button></a> -->
	<Button --background-color="#9bcc50" label="Bug" url="/types/bug" />
	<!-- <a href="/types/ghost"><button>Ghost</button></a> -->
	<!-- <a href="/types/steel"><button>Steel</button></a> -->
	<Button --background-color="#fd7d24" label="Fire" url="/types/fire" />
	<Button --background-color="#4592c4" label="Water" url="/types/water" />
	<Button --background-color="#9bcc50" label="Grass" url="/types/grass" />
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
		align-items: center;
		justify-content: center;
		background-color: #0f2a3f;
		height: 100px;
		margin: 0;
		filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.6));
	}
</style>
