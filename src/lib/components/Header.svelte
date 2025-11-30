<script>
	import LanguageSelector from "./LanguageSelector.svelte";
</script>

<header
  class="flex items-center justify-between w-full py-6 px-8
         bg-neutral-900 text-white backdrop-blur-sm shadow-md">
  
  <!-- Left spacer - optional -->
  <div class="w-1/3"></div>

  <!-- Center -->
  <h1 class="text-center text-3xl font-semibold tracking-wide w-1/3">
    Sialena s.r.o.
  </h1>

  <!-- Right -->
  <LanguageSelector />
</header>
