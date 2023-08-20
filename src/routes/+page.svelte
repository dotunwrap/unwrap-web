<script lang="ts">
  import TypeIt from "$lib/components/TypeIt.svelte";
  import FadeIn from "$lib/components/FadeIn.svelte";
</script>

<FadeIn>
    <div id="main-animation" class="w-full flex flex-col lg:flex-row text-6xl justify-center items-center flex-wrap">
        <TypeIt sentences={["engineer", "designer", "developer"]} class="italic text-subtext1" />
        <h1><span class="text-sky">.</span><span class="text-blue italic">unwrap</span><span class="text-peach">()</span></h1>
    </div>
</FadeIn>

<style lang="postcss">
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&display=swap');

    #main-animation {
        font-family: "Fira Code", monospace;
    }
</style>