<script>
  import { t } from "$lib/i18n/i18n";
  export let reverse = false;
</script>

<main>
  <div class="relative flex justify-around items-end min-h-[300px]">
    
    {#if reverse}
      <!-- Text first -->
      <div>
        <h1 class="text-3xl sm:text-4xl font-bold">
          {$t("header_0")} Jane Doe!
        </h1>
        <p class="text-xl">
          {@html $t("main_text_0")}!
        </p>
      </div>

      <div class="hidden min-w-4/6 sm:block flex-1"></div>

    {:else}
      <!-- Image/space first -->
      <div class="hidden min-w-4/6 sm:block flex-1"></div>

      <div>
        <h1 class="text-3xl sm:text-4xl font-bold">
          {$t("header_0")} Jane Doe!
        </h1>
        <p class="text-xl">
          {@html $t("main_text_0")}!
        </p>
      </div>
    {/if}

  </div>
</main>
