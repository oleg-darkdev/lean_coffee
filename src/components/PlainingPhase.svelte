<script>
	// Починить themsCount
  import Range from './PlainingPhase/Range.svelte';
  import { ButtonGroup, Button } from 'flowbite-svelte';

  // const themes = (speaking, theme) => speaking / theme;

  const instruction = [
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
       
      ];

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

  let defaultTimeForEvent = [
    90, //   allTime
    10, // 	shtorming
    10, // 	grooming
    10, //   voiting
    120, //   speaking
    20, //   theme
  ];
  let showReport = false;

  $: step = 0;
  // $: allTimeSetting = defaultTimeForEvent[0]; 
  // $: shtormingTimeSetting = defaultTimeForEvent[1];
  // $: groomingTimeSetting = defaultTimeForEvent[2];
  // $: voitingTimeSetting = defaultTimeForEvent[3];
  // $: speakingTimeSetting = defaultTimeForEvent[4];
  // $: themeTimeSetting = defaultTimeForEvent[5];

  // $: themesCount= themes(speakingTimeSetting, themeTimeSetting);
  
  let reportText =  [
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
      {
        text: 'На ....',
        data: '',
        img: '/images/',
        // alt: 'Themes'
      },
            // {
      //   text: 'Время на обсуждение 1 темы',
      //   data: themesCount,
      //   img: '/images/',
      //   // alt: 'Themes'
      // },
    ];


  Array.prototype.sum = function (prop) {
    let total = 0
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
  }


  import { themeTimeSetting, allTimeSetting, shtormingTimeSetting, groomingTimeSetting, voitingTimeSetting, speakingTimeSetting, themesCount } from '../data/store.js';
//  let themesCountValue  = '',
//  themeTimeSettingValue = '',
//   allTimeSettingValue = '',
//   shtormingTimeSettingValue = '',
//   groomingTimeSettingValue = '',
//   voitingTimeSettingValue = '',
//   speakingTimeSettingValue = '';

	themeTimeSetting.subscribe((value) => reportText[0].data = value);
	allTimeSetting.subscribe((value) => reportText[1].data  = value);
	shtormingTimeSetting.subscribe((value) => reportText[2].data  = value);
	groomingTimeSetting.subscribe((value) => reportText[3].data  = value);
	voitingTimeSetting.subscribe((value) => reportText[4].data  = value);
	speakingTimeSetting.subscribe((value) => reportText[5].data  = value);
	// themesCount.subscribe((value) => reportText[].themesCountValue = value);

  function report() {
    showReport = true;
    allTimeSetting.set(defaultTimeForEvent[0]); 
    shtormingTimeSetting.set(defaultTimeForEvent[1]);
    groomingTimeSetting.set(defaultTimeForEvent[2]);
    voitingTimeSetting.set(defaultTimeForEvent[3]);
    speakingTimeSetting.set(defaultTimeForEvent[4]);
    themeTimeSetting.set(defaultTimeForEvent[5]);
    themesCount.set(speakingTimeSetting / themeTimeSetting);
   };

</script>

<div class=" bg-current text-gray-500  rounded-lg  shadow-md flex max-w-sm flex-col">
  <img class="rounded-t-lg" src="/images/main.png" alt=""> 
  <div class="p-4 sm:p-6">
    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
      Планируемое расписание встречи
    </h3>
    {#if step != instruction.length }
      {#each instruction[step] as instruction}
        <p class="mb-3 font-normal text-gray-100 leading-tight">
            {instruction}
        </p>
      {/each}
      <Range bind:defaultTimeForEvent={defaultTimeForEvent[step]} minMin={minSettings[step]} maxMin={maxSettings[step]} stepSetting={stepsSettings[step]}/>
      <div class="w-full justify-center flex  ">
        <ButtonGroup class="space-x-px">
          {#if step != 0}
            <Button on:click={() => step--} pill  color="alternative">back </Button>
          {/if}
          <Button on:click={() => step++} pill  class="bg-freshGreen border-freshGreen">next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
        </ButtonGroup>
      </div>
    {:else}   
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
        Планируемое расписание встречи
      </h3>
      <button type="button" on:click={() => report()}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
        Показать отчёт
      </button>
    {/if}


    {#if showReport}
      <div class="bg-white  text-gray-500  rounded-lg border border-gray-200  divide-y divide-gray-200  w-full">
        <p>
            Исходя из введеных данных займет: {reportText.sum("data")} минут, а планировалось {reportText[1].data}
        </p>
      {#each reportText as report}
        <button class="inline-flex relative items-center text-left py-2 px-4 w-full text-sm font-medium first:rounded-t-lg last:rounded-b-lg hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:focus:ring-gray-500 dark:focus:text-white text-base font-semibold gap-2" aria-current="false">
          <img alt={report.alt} src="{report.img}" class="rounded-full w-6 h-6 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300">
          {report.text}: {report.data} min.
        </button> 
      {/each}

        <a href="/" class="flex items-center p-3 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline rounded-b-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0">
            </path>
          </svg>
          Delete user
        </a>
      
      <!-- on:click={showShtormingTimer} -->
          <button type="button" on:click={() => {
            location.href='#plaining';
            // showPlainingPhase();
          }}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
            Перейти к генерации тем 
          </button>
      </div>
    {/if}
  </div>   
</div>