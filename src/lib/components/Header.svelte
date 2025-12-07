<script>
    import LanguageSelector from "./LanguageSelector.svelte";
</script>

<header class="
  sticky top-0 left-0 z-30
  w-full
  backdrop-blur-md
  bg-white/30 dark:bg-gray-900/30
  shadow-md
  border-b border-white/20 dark:border-gray-800/30
  px-6 sm:px-12
  py-3
  flex items-center justify-between
  transition-colors duration-300
">
  <!-- Left spacer: optional, for symmetry -->
  <div class="hidden sm:block flex-1"></div>

  <!-- Logo / Title -->
  <h1 class="text-center text-2xl sm:text-4xl font-bold tracking-wide text-gray-900 dark:text-white">
    Kabľikar s.r.o.
  </h1>

  <!-- Right side: language selector -->
  <div class="flex-1 flex justify-end">
    <LanguageSelector />
  </div>
</header>
