<script>
  export let allTime;
  export let shtorming;
  export let voiting;
  export let speaking = 90;
  export let note = 10;
  export let themesCount;


  let counterThemeNow = 1;
  let resultCalculateMinutesForStep = 60 * note;

  const nextTheme = () => counterThemeNow += 1;

    function stopTimer() {
  
  }
	  function pauseTimer() {
  
  }
	  function resetTimer() {
  
  }
	  	function saveTimer() {
  
  }
	

  function calcMinutes(duration) {
    let minTimer = duration;

    setInterval(function() {
      minutes = parseInt(minTimer / 60);
      if (--minTimer < 0) {
        minTimer = duration;
      }
    }, 1000);
    
		
    return minutes;
  }
  function calcSeconds(duration) {
    let minTimer = duration;
    setInterval(function() {
      seconds = parseInt(minTimer % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds;
      if (--minTimer < 0) {
        minTimer = duration;
      }
    }, 1000);
    
		return seconds;	
	}

  $: minutes = calcMinutes(resultCalculateMinutesForStep);
  $: seconds = calcSeconds(resultCalculateMinutesForStep);
</script>

<style>
  #timer-wrapper {
    align-items: center;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #time {
    font-size: 50px;
    text-align: center;
  }
</style>

Обсуждается тема № {counterThemeNow}
<div id="visual-timer">
  <div id="timer-wrapper">
    <span id="time">На обсуждение данной темы {note} минут</span>
     {minutes}: {seconds}
  </div>
</div>

<!-- <button on:click={stopTimer}>Пропустить следующую тему</button>
<!-- <button on:click={goToPlaining}>К планированию</button>-->

<button on:click={nextTheme}>Следующая тема</button>

<button on:click={stopTimer}>Стоп</button>
<button on:click={pauseTimer}>Пауза</button>
<button on:click={resetTimer}>Сбросить</button>
<button on:click={saveTimer}>Сохранить</button>

