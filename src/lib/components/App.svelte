<script>
  import { t } from "$lib/i18n/i18n";
</script>

<main
  class="relative max-w-full h-screen mx-auto px-6
         bg-[url('/images/gpt_bg_0.png')]
         bg-cover bg-center bg-no-repeat"
>
  <div class="absolute top-0 left-0 w-full h-6 
            bg-linear-to-b from-neutral-900 to-transparent z-10"></div>

  <!-- Optional overlay for better text readability -->
  <div class="absolute inset-0 bg-black/40"></div>

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
