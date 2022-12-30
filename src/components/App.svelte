<script>
	import ThemeTimer from "./ThemeTimer.svelte";
	import ShtormingTimer from "./ShtormingTimer.svelte";
	import GroomingTimer from "./GroomingTimer.svelte";
	import VoitingTimer from "./VoitingTimer.svelte";
	import PlanningPhase from "./PlanningPhase/Index.svelte";
	import Instruction from "./Instruction.svelte"; 

	$: appScreen = 0; 
</script>
 
 
<section class="w-full pt-12 pb-12 flex justify-center">
  {#if appScreen == 0} 
	<button on:click={() => appScreen++}> lean coffee</button>
	{:else if appScreen == 1}
		<Instruction bind:appScreen/>
	{:else if appScreen == 2}
		<PlanningPhase bind:appScreen/>
  {/if}
</section>   
 
<!-- 

{/if}

{#if contentAppTimers.shtormingContentVisible}
	<ShtormingTimer {...timeForEvent} />
<button on:click={showGroomingTimer}> Перейти к обработке тем </button>
{/if}

{#if contentAppTimers.groomingContentVisible}
	<GroomingTimer {...timeForEvent} /> 
<button on:click={showVoitingTimer}> Перейти к голосованию за темы </button>
{/if}

{#if contentAppTimers.voitingContentVisible}
	<VoitingTimer {...timeForEvent} /> 
<button on:click={showThemeTimer}> Перейти к обсуждению тем </button>
{/if}

{#if contentAppTimers.themeContentVisible}
	<ThemeTimer {...timeForEvent} />
{/if} -->

<style>
	section {
	min-height: 100vh;
	}
</style>