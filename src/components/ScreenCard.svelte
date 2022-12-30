<script>

    export let bgClass, title, img;
</script>


<div class="{bgClass} text-gray-500  rounded-lg  shadow-md flex max-w-sm flex-col">
  <img class="rounded-t-lg" src="{img}" alt=""> 
  <div class="p-4 sm:p-6">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
      {title}
    </h5>

    <slot />
  </div>
</div>