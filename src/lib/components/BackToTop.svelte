<script>
  import { onMount } from "svelte";
  import Icon from '@iconify/svelte';
  let visible = false;

  onMount(() => {
    const handleScroll = () => {
      visible = window.scrollY > 150; // show after user scrolls 150px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
</script>

<button
  on:click={scrollToTop}
  class="
    fixed bottom-4 right-4 z-50
    bg-white/80 text-black
    px-4 py-2 rounded-md
    shadow-lg backdrop-blur-sm
    hover:bg-white
    transition
  "
  class:hidden={!visible}
>
  <Icon icon="mingcute:up-fill" class="w-6 h-6"/>
</button>
