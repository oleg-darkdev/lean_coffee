<script>
  import { themeTimeSetting, allTimeSetting, shtormingTimeSetting, groomingTimeSetting, voitingTimeSetting, speakingTimeSetting, themesCount } from '../data/store.js';
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import Range from './PlanningPhase/Range.svelte';
  import Steps from './PlanningPhase/Steps.svelte';
  import ReportList from './PlanningPhase/ReportList.svelte';
  
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
  let showReport = false,
      instructionLength;

  $: step = 0;

  Array.prototype.sum = function (prop) {
    let total = 0
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
  }
 
  function report() {
    showReport = true;
    step = instructionLength;
    
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
    {#if step != instructionLength}
      <Steps bind:step bind:instructionLength/>
      <Range bind:defaultTimeForEvent={defaultTimeForEvent[step]} minMin={minSettings[step]} maxMin={maxSettings[step]} stepSetting={stepsSettings[step]}/>
      
      <div class="w-full justify-center flex  ">
        <ButtonGroup class="space-x-px">
          {#if step != 0}
            <Button on:click={() => step--} pill  color="alternative">back </Button>
          {/if}
          <Button on:click={() => step++} pill  class="bg-freshGreen border-freshGreen">next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
        </ButtonGroup>
      </div>
    {:else if showReport == false}
      <p class="mb-3 font-normal text-gray-100 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </p>
      <button type="button" on:click={() => report()}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
        Показать отчёт
      </button>
    {:else}
        <ReportList bind:showReport bind:step />
            
      <!-- on:click={showShtormingTimer} -->
          <button type="button"  on:click={() => {
            location.href='#plaining';
            // showPlainingPhase();
          }}  class="w-full freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
            Перейти к генерации тем 
          </button>
    {/if}
  </div>   
</div>