<script>
  import { t } from "$lib/i18n/i18n";
</script>

<main>
  <div class="relative flex justify-around items-center min-h-[300px]">
    <!-- <div class="hidden min-w-4/6 sm:block flex-1"></div> -->
    <div class="p-10">
      <h1 class="text-3xl sm:text-4xl font-bold">
        {$t("header_0")} 1 Jane Doe!
      </h1>
      <p class="text-xl">
        {@html $t("second_text")}!
      </p>
    </div>

    <div class="p-10">
      <h1 class="text-2xl sm:text-3xl font-bold">
        {$t("header_0")} 2 Jane Doe!
      </h1>
      <p class="text-xl">
        {@html $t("second_text")}!
      </p>
    </div>
    
    <div class="p-10">
      <h1 class="text-2xl sm:text-3xl font-bold">
        {$t("header_0")} 2 Jane Doe!
      </h1>
      <p class="text-xl">
        {@html $t("second_text")}!
      </p>
    </div>
  </div>
  
</main>
