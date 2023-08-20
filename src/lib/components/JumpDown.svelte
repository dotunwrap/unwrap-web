<script lang="ts">
    import { isElementScrolledPast, isScrollBarAtTopOfPage } from "$lib/scrolling";
    import { onMount } from "svelte";

    export let anchor: string;

    let button: Element;

    const scrollToAnchor = () => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: "smooth" });
        button?.classList.add("opacity-0");
    }

    const scrollHandler = () => {
        if (isScrollBarAtTopOfPage()) return button?.classList.remove("opacity-0");
        if (!isElementScrolledPast(button)) return;
        button?.classList.add("opacity-0");
    }

    onMount(() => {
        window.addEventListener("scroll", scrollHandler);
    })
</script>

<button on:click={scrollToAnchor} bind:this={button} class="group text-subtext1 font-bold text-2xl absolute flex justify-center items-center bottom-2 left-0 right-0 animate-bounce transition-opacity">
    <div class="rounded-full w-10 h-10 bg-crust shadow group-hover:bg-crust transition-colors flex justify-center items-center">↓</div>
</button>