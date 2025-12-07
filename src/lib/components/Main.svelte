<script>
  import { t } from "$lib/i18n/i18n";
  import Icon from '@iconify/svelte';
  export let reverse = false;

  $: headerKey = reverse ? $t("header_1") : $t("header_0");
  $: textKey = reverse ? $t("main_text_1") : $t("main_text_0");
  $: colClass = reverse ? "sm:col-start-1 sm:ml-16" : "sm:col-start-3 sm:mr-16";
</script>

<main>
  <div class="grid sm:grid-cols-3 items-center min-h-[300px]">

    <div class={`col-span-1 ${colClass} backdrop-blur-xs p-4 rounded-xl`}>
      <h1 class="text-3xl sm:text-4xl font-bold">
        {headerKey}
      </h1>

      <p class="text-xl mt-2">
        {textKey}
      </p>

      {#if reverse}
      <div class="flex justify-center items-center gap-4 mt-4">
        <!-- Phone Icon -->
        <a href="tel:+421123456789" class="hover:scale-110 transition-transform duration-200">
          <Icon icon="ic:baseline-phone" class="w-6 h-6 cursor-pointer"/>
        </a>

        <!-- Email Icon -->
        <a href="mailto:info@kablikar.sk" class="hover:scale-110 transition-transform duration-200">
          <Icon icon="ic:baseline-email" class="w-6 h-6 cursor-pointer"/>
        </a>

        <!-- Social icons -->
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"
          class="hover:scale-110 transition-transform duration-200">
          <Icon icon="ic:baseline-facebook" class="w-6 h-6 cursor-pointer"/>
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
          class="hover:scale-110 transition-transform duration-200">
          <Icon icon="mdi:instagram" class="w-6 h-6 cursor-pointer"/>
        </a>
      </div>
      {/if}

    </div>
  </div>
</main>
