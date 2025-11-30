<script>
  import { t } from "$lib/i18n/i18n";
</script>

<main
  class="relative max-w-full my-12 h-screen mx-auto px-6
         bg-[url('/images/gpt_bg_0.png')]
         bg-cover bg-center bg-no-repeat"
>
  <!-- Optional overlay for better text readability -->
  <div class="absolute inset-0 bg-black/40"></div>

  <div class="relative flex justify-around items-center min-h-[300px]">
    <h1 class="text-4xl font-bold text-white">
      {$t("hello")} Jane Doe!
    </h1>
    <p class="text-white text-xl">
      {@html $t("goodbye")}!
    </p>
  </div>
</main>
