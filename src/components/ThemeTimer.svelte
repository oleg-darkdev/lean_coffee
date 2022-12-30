<script>
  //export let allTime;
  //export let shtorming;
  //export let voiting;
  //export let speaking;
  //export let note;
   let themesCount;


	export let theme;
	
	let timeForTheme = theme * 60;
	let selfTime = timeForTheme;
  let counterThemeNow = 1;
  // let resultCalculateMinutesForStep = 60 * note;

  // function calcSeconds(duration) {
  //   let minTimer = duration;
  //   setInterval(function() {
  //     seconds = parseInt(minTimer % 60);
  //     seconds = seconds < 10 ? "0" + seconds : seconds;
  //     if (--minTimer < 0) {
  //       minTimer = duration;
  //     }
  //   }, 1000);
  //   return seconds;
  // }

let timerId = 0;
	  function nextTheme() {
    counterThemeNow += 1;
		timeForTheme = selfTime
		start()
  }

	function start() {
		clearInterval(timerId);
		timerId = setInterval(() => {
			timeForTheme--
		}, 1000);
	}

	function pause() {
		clearInterval(timerId);
	}

	$: time = Math.max(0, timeForTheme);
	$: minutes = Math.floor(time / 60)
  $: seconds = Math.floor(time % 60)
	$: seconds = seconds < 10 ? "0" + seconds : seconds;


</script>

<style>

</style>

<h2>
	Этап 6
</h2>
<h3>
	Обсуждение тем
</h3>
<p>
	Когда начинается
  обсуждение заметки, ведущий должен переместить заметку в столбец «Делать» на
  доске канбан. Когда обсуждение заметки завершено, фасилитатор должен
  переместить ее в столбец «Готово» на доске канбан, а затем перейти к следующей
  заметке в порядке приоритета. Участники также могут проголосовать, продолжать
  ли обсуждение текущей темы или перейти к следующей - по окончанию таймера.
  Если по окончанию обсуждение какой либо темы были выведены конкретные действия
  для ее реализации фасилитатор должен дать возможность записать их на стикере
  тому кто предложил их и повесить в соотвествующую колонку на доске.
</p>


Обсуждается тема № {counterThemeNow}
На обсуждение данной темы {theme} минут
 {minutes}: {seconds}


<button on:click={nextTheme}>Следующая тема</button>
<button on:click={start}> Старт </button>
<button on:click={pause}> Пауза </button>
