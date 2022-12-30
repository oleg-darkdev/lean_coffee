<script>
	// Починить themsCount
  import Range from './PlainingPhase/Range.svelte';
  import { ButtonGroup, Button } from 'flowbite-svelte';

  const themes = (speaking, theme) => speaking / theme;


  let defaultTimeForEvent = [
    90, //   allTime
    10, // 	shtorming
    10, // 	grooming
    10, //   voiting
    120, //   speaking
    20, //   theme
    // 0 // themesCount
  ];


  $: step = 0;
  $: allTimeSetting = defaultTimeForEvent[0];
  $: shtormingTimeSetting = defaultTimeForEvent[1];
  $: groomingTimeSetting = defaultTimeForEvent[2];
  $: voitingTimeSetting = defaultTimeForEvent[3];
  $: speakingTimeSetting = defaultTimeForEvent[4];
  $: themeTimeSetting = defaultTimeForEvent[5];

  $: themesCount= themes(speakingTimeSetting, themeTimeSetting);
  // $: themesCount = themes(defaultTimeForEvent.speaking, defaultTimeForEvent.note);


  const instruction = {
      ru: [
        [
          `Перед началом ретроспективы, фасилитатор должен объяснить, как работает
  техника, и предоставить команде время для ретроспективы (1-2 часа, в
  зависимости от размера команды).`,
          `Определитесь с продолжительностью вашей встречи`,
          ``,
        ],
        [
          `Сколько планируете отвести времени на .. генерирование тем?`,
          ``,
          ``,
        ],
        [
          `Сколько планируете отвести времени на .. отбор голосование за темы?`,
          ``,
          ``,
        ],
        [
          `Сколько планируете отвести времени на обсуждение всех тем?`,
          ``,
          ``,
        ],
        [
          `Сколько планируете отвести времени на обсуждение одной темы ?`,
          ``,
          ``,
        ],
       
      ]
  };

  let maxSettings = [
    120, // allTime
    15, // shtorming
    15, // voiting
    90, // speaking
    15 // theme
  ],
    minSettings = [
    0, // allTime
    0, // shtorming
    0, // voiting
    0, // speaking
    0 // theme
  ],
  stepsSettings  = [
    5, // allTime
    1, // shtorming
    1, // voiting
    1, // speaking
    1 // theme
  ];
</script>

  <div class=" bg-current text-gray-500  rounded-lg  shadow-md flex max-w-sm flex-col">
  <img class="rounded-t-lg" src="/images/main.png" alt=""> 
  <div class="p-4 sm:p-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
      Инструкция для подготовки
    </h5>
  {#if step != instruction.ru.length }
    {#each instruction.ru[step] as instruction}
      <p class="mb-3 font-normal text-gray-100 leading-tight">
          {instruction}
      </p>
    {/each}
    <Range bind:defaultTimeForEvent={defaultTimeForEvent[step]} minMin={minSettings[step]} maxMin={maxSettings[step]} stepSetting={stepsSettings[step]}/>
  <div class="w-full justify-center flex  ">
  <ButtonGroup class="space-x-px">
    <Button on:click={() => step--} pill  color="alternative">back</Button>
    <Button on:click={() => step++} pill  class="bg-freshGreen border-freshGreen">next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
  </ButtonGroup>
  </div>
  {:else}
  время на 1 тему: {themesCount}
    <button type="button" on:click={() => {
      location.href='#plaining';
      // showPlainingPhase();
    }}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
      Перейти к планированию
    </button>
   {/if}
  </div>
</div>