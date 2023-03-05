<script lang="ts">
	import { page } from '$app/stores';

	export let url: string;
	export let label: string;

	$: currentRoute = $page.url.pathname;
</script>

<div class="buttonBox">
	<a href={url}> <button>{label}</button></a>
	<div class="border-top" class:active={$page.url.pathname === url} />
	<div class="border-right" class:active={$page.url.pathname === url} />
	<div class="border-bottom" class:active={$page.url.pathname === url} />
	<div class="border-left" class:active={$page.url.pathname === url} />
</div>

<style>
	.buttonBox {
		display: flex;
		position: relative;
		width: 100px;
		justify-content: center;
		box-shadow: 0px 0px 10px 3px rgba(0, 0, 0, 0.6);
	}

	a {
		width: 100%;
	}

	button {
		width: 100%;
		height: 30px;
		position: relative;
		text-transform: uppercase;
		color: white;
		font-weight: 600;
		letter-spacing: 1px;
		border: none;
		font-size: 14px;
		cursor: pointer;
		background-color: var(--background-color);
		font-family: 'Ubuntu', sans-serif;
	}

	.border-top {
		position: absolute;
		background: none;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		border-top: 2px solid #fff;
		transition: all 0.5s ease-in-out;
	}

	.border-right {
		position: absolute;
		background: none;
		top: 0;
		right: 0;
		width: 10px;
		height: 0;
		border-right: 2px solid #fff;
		transition: all 0.5s ease-in-out;
	}

	.border-bottom {
		position: absolute;
		background: none;
		bottom: 0;
		right: 0;
		width: 0;
		height: 0;
		border-bottom: 2px solid #fff;
		transition: all 0.5s ease-in-out;
	}

	.border-left {
		position: absolute;
		background: none;
		bottom: 0;
		left: 0;
		width: 0;
		height: 0;
		border-left: 2px solid #fff;
		transition: all 0.5s ease-in-out;
	}

	.border-top.active {
		width: 100%;
	}
	.border-right.active {
		height: 30px;
	}
	.border-bottom.active {
		width: 100%;
	}

	.border-left.active {
		height: 30px;
	}

	:hover .border-top {
		width: 100%;
	}

	:hover .border-right {
		height: 30px;
	}

	:hover .border-bottom {
		width: 100%;
	}

	:hover .border-left {
		height: 30px;
	}
</style>
