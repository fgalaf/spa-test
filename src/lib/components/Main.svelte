<script>
  import { t } from "$lib/i18n/i18n";
  export let reverse = false;
</script>

<main>
  <div class="grid sm:grid-cols-3 items-center min-h-[300px]">

    {#if reverse}
      <!-- TEXT ON LEFT -->
      <div class="ml-4 sm:ml-16 col-span-1 bg-black/40 p-4 rounded-xl">
        <h1 class="text-3xl sm:text-4xl font-bold">
          {$t("header_1")}
        </h1>

        <p class="text-xl mt-2">
          {@html $t("main_text_1")}
        </p>
      </div>

      <!-- EMPTY MIDDLE + RIGHT -->
      <div></div>
      <div></div>

    {:else}
      <!-- EMPTY LEFT + MIDDLE -->
      <div></div>
      <div></div>

      <!-- TEXT ON RIGHT -->
      <div class="mr-4 sm:mr-16 col-span-1 bg-black/40 p-4 rounded-xl">
        <h1 class="text-3xl sm:text-4xl font-bold">
          {$t("header_0")}
        </h1>

        <p class="text-xl mt-2">
          {@html $t("main_text_0")}
        </p>
      </div>
    {/if}

  </div>
</main>
