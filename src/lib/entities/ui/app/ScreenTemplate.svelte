<script>
	import ScreenCard from './ScreenCard.svelte';
	import Timeline from './Timeline.svelte';

	const instruction = [[``, ``, ``]];
	$: step = 0;

	export let appScreen;
</script>

<ScreenCard
	bind:step
	bind:appScreen
	btnText="Перейти к планированию"
	length={instruction.length}
	bgClass="bg-current"
	title="Инструкция для подготовки"
	img="/images/main.png"
>
	<div slot="body">
		{#if step != instruction.length}
			{#each instruction[step] as instruction}
				<p class="mb-3 font-normal text-gray-100 leading-tight">
					{instruction}
				</p>
			{/each}
		{:else}
			<p class="mb-3 font-normal text-gray-100 leading-tight">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat.
			</p>
		{/if}
	</div>
</ScreenCard>
