<script lang="ts">
    import { locale, locales } from "$lib/i18n/i18n";
</script>

<div class="flex gap-2 w-1/3 justify-end">
    {#each locales as l}
        {#if l !== $locale}
            <button
                on:click={() => locale.set(l)}
                class="px-3 py-1 hover:font-bold">
                {l}
            </button>
        {/if}
    {/each}
</div>