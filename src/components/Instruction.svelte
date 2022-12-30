<script>
  import { ButtonGroup, Button } from 'flowbite-svelte';
// import { Timeline, TimelineItem } from 'flowbite-svelte';
// 2 step in instruction
const showPlainingPhase = () => {		
	  contentAppTimers.plainingContentVisible = !contentAppTimers.plainingContentVisible;
		contentAppTimers.instructionContentVisible = false;
		contentAppTimers.shtormingContentVisible = false; 
		contentAppTimers.groomingContentVisible= false;
		contentAppTimers.voitingContentVisible= false;
		contentAppTimers.noteContentVisible= false;			
		contentAppTimers.themeContentVisible = false;

    console.log('func')
  };

    const instruction = {
      ru: [
        [
          `Настройте Канбан доску, состоящий из нескольких столбцов «Темы», «Обсудить», «В процессе обсуждения», «Обсуждено», «Действия»,`,
          ``
        ],
        [
          `Перед началом ретроспективы, фасилитатор должен объяснить, как работает техника, и предоставить команде время для ретроспективы (1-2 часа, в зависимости от размера команды).`,
          ``
        ],
        [
          `Фасилитатор должен раздать участникам заметки и сообщить им время для этого этапа (достаточно 10-15 минут). `,
          `Попросите участников записать на стикерах   вопросы, которые им интересно обсудить или рассказать в рамках темы встречи.  Участники должны держать свои записки в секрете, чтобы участники не были склонны к идеям друг друга. Когда время истекает, участники должны разместить свои заметки в столбце «To Do» на доске канбан.`
        ],
        [
          `Поскольку многие заметки, вероятно, будут содержать связанные (или даже идентичные) идеи, участники должны сгруппировать заметки в логические темы. Участники могут использовать маркеры, чтобы нарисовать круги вокруг связанных заметок.`,
          `Ведущий должен объявить временной интервал (10–15 минут) и призвать участников встать и перейти от постера к постеру, чтобы сделать эту часть ретроспективы интерактивной и веселой. Путем общего голосования выбираются вопросы, наиболее интересные всем участникам. Вопросы с наибольшим количеством голосов обсуждаются в первую очередь.`
        ],
        [
          `Фасилитатор должен объявить временной интервал (5-10 минут) и, если команда никогда раньше не использовала точечное голосование,объяснить, как он работает или использовать голосование по римской системе: `,
  //         `1. Скажите каждому 
  // участнику, что у него есть определенное количество голосов, которые они могут
  // использовать, чтобы указать свои предпочтения для заметки или группы.
  // Убедитесь, что участники понимают, что они могут распределять свои голоса по
  // своему желанию. Например, один участник может поместить все свои голоса в одну
  // заметку, чтобы указать, насколько важно для него или нее обсудить эту идею. С
  // другой стороны, другой участник мог бы равномерно распределить свои голоса по
  // многим заметкам.`,
  //         `2. Пусть участники проголосуют за заметки или группы (они
  // могут использовать маркер или магниты разного цвета, чтобы поставить точку над
  // наклейкой, за которую они хотят проголосовать). 3. После завершения
  // голосования фасилитатор должен отсортировать заметки по количеству полученных
  // голосов. Этот отсортированный список представляет коллективную расстановку
  // приоритетов для заметок.`,
  //         ``,
        ],
 
      ]
    }
  $: step = 0;

  export let contentAppTimers;
</script>

 <!-- добавить таймлайн -->

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
  
  <div class="w-full justify-center flex  ">
  <ButtonGroup class="space-x-px">
    <Button on:click={() => step--} pill  color="alternative">back</Button>
    <Button on:click={() => step++} pill  class="bg-freshGreen border-freshGreen">next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
  </ButtonGroup>
  </div>
  {:else}
    <button type="button" on:click={() => {
      location.href='#plaining';
      // showPlainingPhase();
    }}  class=" freshGreen text-center font-medium focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white   focus:ring-green-300   rounded-full">
      Перейти к планированию
    </button>
   {/if}
  </div>
</div>

 
 