<script>
  import { t } from "$lib/i18n/i18n";
</script>

<main>
  <div class="relative flex justify-around items-center min-h-[300px]">
    <div class="min-w-4/6"></div>
    <div>
      <h1 class="text-4xl font-bold text-white">
        {$t("header_0")} Jane Doe!
      </h1>
      <p class="text-white text-xl">
        {@html $t("main_text_0")}!
      </p>
    </div>
  </div>
</main>
