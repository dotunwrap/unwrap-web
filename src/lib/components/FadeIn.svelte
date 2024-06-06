<script lang="ts">
    import { onMount } from "svelte";

    export let delay = 0;

    let isVisible = false;
    let div: Element;

    onMount(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                setTimeout(
                    () => {
                        isVisible = true;
                        observer.disconnect();
                    },
                    150 * (1 + delay),
                );
            });
        });

        observer.observe(div);
    });
</script>

<div
    class="fade-in {isVisible ? 'visible' : ''} w-full {$$props.class}"
    bind:this={div}
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
