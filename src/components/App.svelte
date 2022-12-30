<script>
	// Починить themsCount
		
  import ThemeTimer from "./ThemeTimer.svelte";
	import ShtormingTimer from "./ShtormingTimer.svelte";
	import GroomingTimer from "./GroomingTimer.svelte";
	import VoitingTimer from "./VoitingTimer.svelte";
	import PlainingPhase from "./PlainingPhase.svelte";
	import Instruction from "./Instruction.svelte"; 



	$: contentAppTimers = {
		instructionContentVisible: true,
		// 2 step in instruction
		plainingContentVisible: true,
		// 3 step in instruction
		shtormingContentVisible: false,
		// 4 step in instruction
		groomingContentVisible: false,
		// 5 step in instruction
		voitingContentVisible: false,			
		// 6 step in instruction
		themeContentVisible: false
	};
	
	// Istruction step in instruction
const showInstruction = () => {		
	  contentAppTimers.instructionContentVisible = !contentAppTimers.instructionContentVisible
	  contentAppTimers.plainingContentVisible = false;
		contentAppTimers.shtormingContentVisible = false; 
		contentAppTimers.groomingContentVisible= false;
		contentAppTimers.voitingContentVisible= false;
		contentAppTimers.noteContentVisible= false;			
		contentAppTimers.themeContentVisible = false;
  };
	

	
	// 3 step in instruction
const showShtormingTimer = () => {			
		contentAppTimers.shtormingContentVisible = !contentAppTimers.shtormingContentVisible; 
	contentAppTimers.instructionContentVisible = false;
		contentAppTimers.plainingContentVisible = false;
		contentAppTimers.groomingContentVisible= false;
		contentAppTimers.voitingContentVisible= false;
		contentAppTimers.noteContentVisible= false;			
		contentAppTimers.themeContentVisible = false;
  };
//		<ShtormingTimer {...timeForEvent} />
//	button on:click={showGroomingTimer}> Перейти к обработке тем </button>
	
		// 4 step in instruction
const showGroomingTimer = () => {
		contentAppTimers.groomingContentVisible= !contentAppTimers.groomingContentVisible;
	contentAppTimers.instructionContentVisible = false;
		contentAppTimers.plainingContentVisible = false;
		contentAppTimers.shtormingContentVisible = false; 
		contentAppTimers.voitingContentVisible= false;
		contentAppTimers.noteContentVisible= false;				 
		contentAppTimers.themeContentVisible = false;
  };
	
		// 5 step in instruction
const showVoitingTimer = () => {
		contentAppTimers.voitingContentVisible= !contentAppTimers.voitingContentVisible;
	contentAppTimers.instructionContentVisible = false;
		contentAppTimers.plainingContentVisible = false;			 		
	contentAppTimers.themeContentVisible = false;
		contentAppTimers.shtormingContentVisible = false; 
		contentAppTimers.groomingContentVisible= false;
		contentAppTimers.noteContentVisible= false;				 
  };

	// 6 step in instruction
	 const showThemeTimer = () => {
		contentAppTimers.themeContentVisible = !contentAppTimers.themeContentVisible;
		 contentAppTimers.instructionContentVisible = false;
		contentAppTimers.plainingContentVisible = false;
		contentAppTimers.shtormingContentVisible = false; 
		contentAppTimers.groomingContentVisible= false;
		contentAppTimers.voitingContentVisible= false;
		contentAppTimers.noteContentVisible= false;				 
  };


 
 
</script>
 
 <a id="instruction"></a>
<section class="w-full lg:pb-12 md:pb-12 pb-12 flex justify-center">
  {#if contentAppTimers.instructionContentVisible} 
    <button on:click={showInstruction}> lean coffee</button>
  {:else}
    <Instruction bind:contentAppTimers/>
  {/if}
</section>   

<a id="plaining"></a>

<section class="w-full h-auto lg:pb-12 md:pb-12 pb-12 flex justify-center flex flex-col">
<!-- {#if contentAppTimers.plainingContentVisible} -->
	<PlainingPhase />
<!-- {/if} -->
</section>


<section class="w-full h-auto lg:pb-12 md:pb-12 pb-12 flex justify-center flex flex-col">
<!-- {#if contentAppTimers.plainingContentVisible} -->
	<!-- <PlainingPhase /> -->
<!-- {/if} -->
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
  height: 100vh;
}
</style>