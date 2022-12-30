<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';

    export let bgClass, length, title, img, step, appScreen, btnText;
</script>


<div class="{bgClass} text-gray-500  rounded-lg  shadow-md flex max-w-sm flex-col">
    <img class="rounded-t-lg" src="{img}" alt="Image {bgClass}"> 
  <div class="p-4 sm:p-6 flex justify-center items-end flex-col">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
      {title}
    </h5>

    <slot name='body'>

    </slot>
  </div>
    <div class="w-full flex justify-center items-end h-full pb-4">
        {#if step != length }
            <ButtonGroup class="space-x-px">
                {#if step != 0}
                <Button size="xl" on:click={() => step--} pill  color="alternative">back</Button>
                {/if}
                <Button size="xl" on:click={() => step++} pill  class="alternative">next <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ml-2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></Button>
            </ButtonGroup>
        {:else}
            <Button size="xl" on:click={() => appScreen++} color="alternative" pill={true}>
                {btnText}
            </Button>
        {/if}
    </div>
</div>
