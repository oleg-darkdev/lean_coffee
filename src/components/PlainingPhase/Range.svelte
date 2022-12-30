<script>

    import { Range, Label } from 'flowbite-svelte'
    let stepValue=2.5


    export let defaultTimeForEvent, minMin, maxMin, stepSetting;
</script>


<!-- {title} -->
<!-- <Label>Pfujkjdjr yf[eq]</Label> -->
<Range size="lg" id="range-steps" min={minMin} max={maxMin} bind:value={defaultTimeForEvent} step={stepSetting}/>
<p>Minut: {defaultTimeForEvent}</p>