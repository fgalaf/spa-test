<script>
  export let headerText;
  export let bodyText;
</script>

<div class="p-10 sm:max-w-1/3 transition-transform duration-300 hover:scale-[1.03]">
    <h1 class="text-2xl sm:text-3xl font-bold">
        {headerText}
    </h1>
    <p class="text-xl">
        {bodyText}
    </p>
</div>