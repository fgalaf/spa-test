<script>
    import LanguageSelector from "./LanguageSelector.svelte";
</script>

<header class="flex items-center justify-between w-full py-4 px-4 backdrop-blur-xs">
  <!-- Left spacer: hidden on small screens -->
  <div class="hidden sm:block flex-1"></div>

  <!-- Title: adjusts size on phones -->
  <h1 class="text-center text-2xl sm:text-3xl font-semibold tracking-wide flex-1">
    Sialena s.r.o.
  </h1>

  <!-- Right side: language buttons -->
  <div class="flex-1 flex justify-end">
    <LanguageSelector />
  </div>
</header>
