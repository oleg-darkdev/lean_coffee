<script>
	import {
		// ThemeTimer,
		// ShtormingTimer,
		// GroomingTimer,
		// VoitingTimer,

		GenerationIdeas,
		PlanningPhase,
		Instruction,
		Timeline
	} from '../../lib/entities/';

	$: appScreen = 3;
</script>

<section class="flex w-full justify-center pt-12 pb-12">
	{#if appScreen == 0}
		<Timeline bind:appScreen />
	{:else if appScreen == 1}
		<Instruction bind:appScreen />
	{:else if appScreen == 2}
		<PlanningPhase bind:appScreen />
	{:else if appScreen == 3}
		<GenerationIdeas bind:appScreen />
	{:else if appScreen == 4}
		<PlanningPhase bind:appScreen />
	{/if}
</section>

<!--

{/if}

{#if contentAppTimers.shtormingContentVisible}
	<ShtormingTimer {...timeForEvent} />
<button on:click={showGroomingTimer}> ������� � ��������� ��� </button>
{/if}

{#if contentAppTimers.groomingContentVisible}
	<GroomingTimer {...timeForEvent} />
<button on:click={showVoitingTimer}> ������� � ����������� �� ���� </button>
{/if}

{#if contentAppTimers.voitingContentVisible}
	<VoitingTimer {...timeForEvent} />
<button on:click={showThemeTimer}> ������� � ���������� ��� </button>
{/if}

{#if contentAppTimers.themeContentVisible}
	<ThemeTimer {...timeForEvent} />
{/if} -->
<style>
	section {
		min-height: 100vh;
	}
</style>
