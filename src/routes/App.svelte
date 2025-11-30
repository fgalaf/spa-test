<script>
  import { t, locale, locales } from "../lib/i18n/i18n";
	
	// Create a locale specific timestamp
  $: time = new Date().toLocaleDateString($locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
</script>

<main class="max-w-96 my-12 mx-auto px-6">
  <p>
    <select bind:value={$locale}>
      {#each locales as l}
        <option value={l}>{l}</option>
      {/each}
    </select>
  </p>

  <h1>{$t("hello")} Jane Doe!</h1>
  <p>{@html $t("goodbye")}!</p>
</main>
