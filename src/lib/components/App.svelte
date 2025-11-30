<script>
  import { t } from "$lib/i18n/i18n";
	import LanguageSelector from "./LanguageSelector.svelte";

</script>

<div class="flex items-center justify-between w-full">

  <!-- Left spacer -->
  <div class="w-1/3"></div>

  <!-- Centered title -->
  <h1 class="text-center text-3xl font-bold w-1/3">
    Sialena s.r.o.
  </h1>

  <!-- Right aligned options -->
  <LanguageSelector/>
</div>

<main class="max-w-full my-12 mx-auto px-6 bg-amber-800">
    <div class="flex justify-around">

        <h1>{$t("hello")} Jane Doe!</h1>
        <p>{@html $t("goodbye")}!</p>
    </div>
</main>
