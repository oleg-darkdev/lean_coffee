<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});

  import { Footer } from '../lib/widgets';
</script>

<main class="">
	<slot />
</main>
<Footer />

<style>
	:global(section) {
		margin-bottom: 30px;
	}
	:global(.justify-center, section) {
		display: flex;
		justify-content: center;
	}
	:global(.row) {
		display: flex;
		flex-direction: row;
	}
	:global(column) {
		display: flex;
		flex-direction: column;
	}

	:global(.bg) {
		background-repeat: no-repeat;
		background-position: center;
	}

	:global(body, html) {
		height: 100%;
		margin: 0;
		padding: 0;
	}
</style>
