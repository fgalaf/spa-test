<script>
  import { t } from "$lib/i18n/i18n";
  export let reverse = false;

  $: headerKey = reverse ? $t("header_1") : $t("header_0");
  $: textKey = reverse ? $t("main_text_1") : $t("main_text_0");
  $: colClass = reverse ? "sm:col-start-1 sm:ml-16" : "sm:col-start-3 sm:mr-16";
</script>

<main>
  <div class="grid sm:grid-cols-3 items-center min-h-[300px]">

    <div class={`col-span-1 ${colClass} backdrop-blur-xs p-4 rounded-xl transition-transform duration-300 hover:scale-[1.03]`}>
      <h1 class="text-3xl sm:text-4xl font-bold">
        {headerKey}
      </h1>

      <p class="text-xl mt-2">
        {textKey}
      </p>
    </div>

  </div>
</main>
