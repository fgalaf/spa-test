<script>
	import App from "$lib/components/App.svelte";
	import Header from "$lib/components/Header.svelte";
</script>

<div class="flex flex-col w-full h-screen 
            bg-[url('/images/gpt_bg_0.png')]
            bg-cover bg-center bg-no-repeat">

    <!-- Optional overlay for better text readability -->
    <div class="absolute inset-0 bg-black/40"></div>
    <Header />

    <!-- This grows and pushes content down -->
    <div class="flex-1">
        <App />
    </div>

</div>
