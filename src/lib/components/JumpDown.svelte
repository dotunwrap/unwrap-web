<script lang="ts">
    import { isElementScrolledPast, isScrollBarAtTopOfPage } from "$lib/scrolling";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";

    export let anchor: string;

    let button: Element;

    const scrollToAnchor = () => {
        document.querySelector(anchor)?.scrollIntoView({
            behavior: "smooth",
        });
        button?.classList.add("opacity-0");
    };

    const scrollHandler = () => {
        if (isScrollBarAtTopOfPage()) return button?.classList.remove("opacity-0");
        if (!isElementScrolledPast(button)) return;
        button?.classList.add("opacity-0");
    };

    onMount(() => {
        window.addEventListener("scroll", scrollHandler);
    });
</script>

<button
    on:click={scrollToAnchor}
    bind:this={button}
    class="group inline-flex text-subtext1 font-bold text-2xl absolute justify-center items-center bottom-2 animate-bounce transition-opacity"
>
    <Icon
        icon="fluent:arrow-circle-down-24-filled"
        class="text-subtext1 drop-shadow-lg w-12 h-12 group-hover:text-blue transition-colors rounded-full"
    />
</button>
