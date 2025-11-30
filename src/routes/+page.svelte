<script>
	import Main from "$lib/components/Main.svelte";
	import Header from "$lib/components/Header.svelte";
	import BackToTop from "$lib/components/BackToTop.svelte";
</script>

<div class="flex flex-col w-full min-h-screen bg-[url('/images/gpt_bg_0.png')] bg-cover bg-center bg-no-repeat relative">
    <!-- overlay -->
    <div class="absolute inset-0 bg-black/40"></div>
    <!-- sticky header -->
    <Header/>
    <!-- page content -->
    <div class="flex flex-1 items-end md:items-start justify-start p-6 relative z-10">
        <Main />
    </div>
</div>

<Main />
<Main />
<BackToTop />
