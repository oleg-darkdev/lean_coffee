<script>
	export let voiting;
	//export let allTime;
	//export let shtorming;
	//export let voiting;
	//export let speaking;
	//export let note;

	let timeForVoiting = voiting * 60;

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
			timeForVoiting--;
		}, 1000);
	}

	function pause() {
		clearInterval(timerId);
	}
	$: time = Math.max(0, timeForVoiting);
	$: minutes = Math.floor(time / 60);
	// $: seconds = Math.floor(time % 60)
	$: seconds = seconds < 10 ? '0' + seconds : seconds;
</script>

Сделать обычный таймер для голосования

<h2>Этап 5</h2>
<h3>Голосование за темы</h3>

<span>
	Время на этап: {voiting} минут
</span>
<p>
	Фасилитатор должен объявить временной интервал (5-10 минут) и, если команда никогда раньше не
	использовала точечное голосование, объяснить, как он работает или использовать голосование по
	римской системе. После завершения голосования фасилитатор должен отсортировать заметки по
	количеству полученных голосов. Этот отсортированный список представляет коллективную расстановку
	приоритетов для заметок.
</p>

{minutes}: {seconds}

<button on:click={start}> Старт </button>
<button on:click={pause}> Пауза </button>
