<script lang="ts">
    import { onMount } from "svelte";
    import { cn } from "$lib/utils";

    export let delay = 0;

    let isVisible = false;
    let container: HTMLElement | null = null;
    let observer: IntersectionObserver | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                if (timeoutId) clearTimeout(timeoutId);
                timeoutId = setTimeout(
                    () => {
                        isVisible = true;
                        observer?.disconnect();
                    },
                    150 * (1 + delay),
                );
            });
        });

        if (container) observer.observe(container);

        return () => {
            observer?.disconnect();
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = null;
            isVisible = false;
        };
    });
</script>

<div
    {...$$restProps}
    class={cn("fade-in w-full", isVisible && "visible", $$props.class as string | undefined)}
    bind:this={container}
>
    <slot />
</div>

<style lang="postcss">
    .fade-in {
        opacity: 0;
        transform: translateY(10px);
        transition:
            opacity 1s ease,
            transform 1s ease;
    }

    .visible {
        opacity: 1;
        transform: translateY(0);
    }
</style>
