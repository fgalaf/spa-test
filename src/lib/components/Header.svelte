<script>
    import LanguageSelector from "./LanguageSelector.svelte";
</script>

<header class="flex items-center justify-between w-full px-4 backdrop-blur-xs sticky top-0 left-0 z-20">
  <!-- Left spacer: hidden on small screens -->
  <div class="hidden sm:block flex-1"></div>

  <!-- Title: adjusts size on phones -->
  <h1 class="text-center text-3xl sm:text-4xl font-semibold tracking-wide flex-1">
    Kabľikar industries
  </h1>

  <!-- Right side: language buttons -->
  <div class="flex-1 flex justify-end">
    <LanguageSelector />
  </div>
</header>
