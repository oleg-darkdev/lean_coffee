<script>
	export let shtorming;
	//export let allTime;
	//export let shtorming;
	//export let voiting;
	//export let speaking;
	//export let note;

	//t let theme;

	let timeForStorming = shtorming * 60;

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
			timeForStorming--;
		}, 1000);
	}

	function pause() {
		clearInterval(timerId);
	}
	$: time = Math.max(0, timeForStorming);
	$: minutes = Math.floor(time / 60);
	// $: seconds = Math.floor(time % 60)
	$: seconds = seconds < 10 ? '0' + seconds : seconds;
</script>

<h2>Этап 3</h2>
<h3>Создание тем</h3>
<span>
	Время на этап: {shtorming} минут
</span>
<p>
	Фасилитатор должен раздать участникам заметки и сообщить им время для этого этапа. Попросите
	участников записать на стикерах вопросы, которые им интересно обсудить или рассказать в рамках
	темы встречи. Участники должны держать свои записки в секрете, чтобы участники не были склонны к
	идеям друг друга. Когда время истекает, участники должны разместить свои заметки в столбце «To Do»
	на доске канбан.
</p>

{minutes}: {seconds}

<button on:click={start}> Старт </button>
<button on:click={pause}> Пауза </button>
