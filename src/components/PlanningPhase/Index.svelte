<script>
  import { themeTimeSetting, allTimeSetting, shtormingTimeSetting, groomingTimeSetting, voitingTimeSetting, speakingTimeSetting, themesCount } from '../../data/store.js';
  import { ButtonGroup, Button } from 'flowbite-svelte';
  import Range from './Range.svelte';
  import Steps from './Steps.svelte';
  import ReportList from './ReportList.svelte';
  import ScreenCard from '../ScreenCard.svelte';

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


   export let appScreen;
</script>

<ScreenCard bind:step bind:appScreen length={instructionLength} title="Планирование встречи" btnText="Перейти к генерации тем" bgClass="bg-darkFuchsia "  img="/images/config.png">
    <div slot='body'>
      {#if step != instructionLength}
        <Steps bind:step bind:instructionLength/>
        <Range bind:defaultTimeForEvent={defaultTimeForEvent[step]} minMin={minSettings[step]} maxMin={maxSettings[step]} stepSetting={stepsSettings[step]}/>
      {:else}
        <p class="mb-3 font-normal text-gray-100 leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </p>
        <button type="button" on:click={() => report()}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
          Показать отчёт
        </button>

          {#if showReport == false}
            <ReportList bind:showReport bind:step />
          {/if}
      {/if}
    </div>
</ScreenCard>