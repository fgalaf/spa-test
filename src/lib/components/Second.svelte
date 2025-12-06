<script>
  import { t } from "$lib/i18n/i18n";
</script>

<main>
  <div class="relative flex flex-col sm:flex-row sm:flex-wrap justify-around items-center min-h-[300px]">
    <!-- <div class="hidden min-w-4/6 sm:block flex-1"></div> -->
    <div class="p-10 sm:max-w-1/3">
      <h1 class="text-2xl sm:text-3xl font-bold">
        {$t("second_header_0")}
      </h1>
      <p class="text-xl">
        {@html $t("second_text_0")}
      </p>
    </div>

    <div class="p-10 sm:max-w-1/3">
      <h1 class="text-2xl sm:text-3xl font-bold">
        {$t("second_header_1")}
      </h1>
      <p class="text-xl">
        {@html $t("second_text_1")}
      </p>
    </div>
    
    <div class="p-10 sm:max-w-1/3">
      <h1 class="text-2xl sm:text-3xl font-bold">
        {$t("second_header_2")}
      </h1>
      <p class="text-xl">
        {@html $t("second_text_2")}
      </p>
    </div>
  </div>
  
</main>
