<script>
	import ScreenCard from './ScreenCard.svelte';
	// import { Input, Label } from 'flowbite-svelte';
	// import { Button } from 'flowbite-svelte';

	import { onMount } from 'svelte';

	let boardId = 'ElxvVf1B';
	// получаем ID доски трелло - записываем его сюда
	let trelloCardsLink = `https://api.trello.com/1/boards/${boardId}/cards/`;
	let trelloListsLink = `https://api.trello.com/1/boards/${boardId}/lists/`;

	$: allCardFromTrello = '';
	$: allListsFromTrello = '';
	$: toDiscussCards = [];

	let trelloboard = 'https://api.trello.com/1/boards/ElxvVf1B/';

	onMount(async function () {
		let responseCards = await fetch(trelloCardsLink);
		let allCardFromTrello = await responseCards.json();

		let responseLists = await fetch(trelloListsLink);
		let allListsFromTrello = await responseLists.json();

		let idToDiscussList = allListsFromTrello[0].id,
			idDiscussingList = allListsFromTrello[1].id,
			idDiscussedList = allListsFromTrello[2].id,
			idActionsList = allListsFromTrello[3].id;

		toDiscussCards = allCardFromTrello.filter(
			(el, i) => allCardFromTrello[i].idList === idToDiscussList
		);
	});

	$: step = 0;
	// let trelloboard = 'https://api.trello.com/1/boards/2RHOp366/';
	// https://api.trello.com/1/boards/2RHOp366/cards/
	// https://api.trello.com/1/boards/2RHOp366
	// https://trello.com/b/2RHOp366/tablica-robocza-dla-ngo
	function getCardFromTrello() {
		console.log(toDiscussCards);
		step++;
	}

	export let appScreen;
</script>

<ScreenCard
	bind:step
	bind:appScreen
	btnText="Перейти к обсуждению"
	length={2}
	bgClass="bg-current"
	title="Инструкция для подготовки"
	img="/images/main.png"
>
	<div slot="body" class="w-full">
		{#if step == 0}
			<form>
				<div class="">
					<!-- <Label class="mb-4">
						<span>Trello</span>
						<Input
							type="url"
							bind:value={trelloboard}
							placeholder="Trello board"
							size="lg"
							required
						/>
					</Label>

					<Button size="xl" on:click={() => getCardFromTrello()} color="alternative" pill={true}>
						Check
					</Button> -->
				</div>
			</form>
		{:else if step == 1}
			{#each toDiscussCards as card}
				<div
					class="flex  flex-col bg-white shadow-md text-gray-500 rounded-lg border border-gray-200 p-2 mb-2"
				>
					<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 mb-2text-gray-500 dark:text-gray-400 "><path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg> -->

					<a href="/" class="">
						<h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-100 dark:text-white">
							{card.title}
						</h5>
					</a>
					<p class="mb-3 font-normal text-gray-100 dark:text-gray-400">
						{card.desc}
					</p>
					<!-- <a href="{step.link}" class="inline-flex items-center text-gray-100 hover:underline">
          Пройден
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" class="">
            </path>
          </svg>
        </a>  -->
				</div>
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
