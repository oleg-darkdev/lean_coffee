<script>
  export let grooming;
  //export let allTime;
  //export let shtorming;
  //export let voiting;
  //export let speaking;
  //export let note;


	export let theme;
	
	let timeForGrooming = grooming * 60;

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
  }

	function start() {
		clearInterval(timerId);
		timerId = setInterval(() => {
			timeForGrooming--
		}, 1000);
	}

	function pause() {
		clearInterval(timerId);
	}
	$: time = Math.max(0, timeForGrooming);
	$: minutes = Math.floor(time / 60)
  // $: seconds = Math.floor(time % 60)
	$:  seconds = seconds < 10 ? "0" + seconds : seconds;
</script>

<h2>
	Этап 4
</h2>
<h3>
	Фильтрация тем
</h3>

<span>
Время на этап: {grooming} минут 
</span>

<p>
	Поскольку многие заметки, вероятно, будут содержать связанные (или даже
  идентичные) идеи, участники должны сгруппировать заметки в логические темы.
  Участники могут использовать маркеры, чтобы нарисовать круги вокруг связанных
  заметок. Ведущий должен объявить временной интервал и призвать
  участников встать и перейти от постера к постеру, чтобы сделать эту часть
  ретроспективы интерактивной и веселой. Путем общего голосования выбираются
  вопросы, наиболее интересные всем участникам.Вопросы с наибольшим количеством
  голосов обсуждаются в первую очередь.
</p>

 {minutes}: {seconds}

<button on:click={start}> Старт </button>
<button on:click={pause}> Пауза </button>


