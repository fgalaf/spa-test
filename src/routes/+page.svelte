<script>
    import App from "$lib/components/App.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<div class="relative w-full h-screen bg-[url('/images/gpt_bg_0.png')] bg-cover bg-center bg-no-repeat z-0">
    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-black/40"></div>
    <Header />
    <div class="relative z-10">
        <App />
    </div>
</div>
