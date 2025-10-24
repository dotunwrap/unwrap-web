<script lang="ts">
    import { isScrollBarAtTopOfPage } from "$lib/scrolling";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import { cn } from "$lib/utils";

    export let anchor: string;

    let button: HTMLButtonElement | null = null;

    const scrollToAnchor = () => {
        document.querySelector(anchor)?.scrollIntoView({
            behavior: "smooth",
        });
        button?.classList.add("opacity-0");
    };

    const scrollHandler = () => {
        if (!button) return;
        if (isScrollBarAtTopOfPage()) {
            button.classList.remove("opacity-0");
            return;
        }
        button.classList.add("opacity-0");
    };

    onMount(() => {
        window.addEventListener("scroll", scrollHandler);
        scrollHandler();
        return () => window.removeEventListener("scroll", scrollHandler);
    });
</script>

<button
    {...$$restProps}
    on:click={scrollToAnchor}
    bind:this={button}
    class={cn(
        "group inline-flex text-subtext1 font-bold text-2xl absolute justify-center items-center bottom-2 animate-bounce transition-opacity",
        $$props.class as string | undefined,
    )}
>
    <Icon
        icon="fluent:arrow-circle-down-24-filled"
        class="text-subtext1 drop-shadow-lg w-12 h-12 group-hover:text-blue transition-colors rounded-full"
    />
</button>
