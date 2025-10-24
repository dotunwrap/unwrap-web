<script lang="ts">
    import FadeIn from "./FadeIn.svelte";
    import { cn } from "$lib/utils";

    export let title = "";
    export let fadeIn = false;
    export let fillScreen = false;
</script>

<div
    id={$$props.id}
    {...$$restProps}
    class={cn(
        "relative flex flex-col justify-center items-center p-2 *:my-3",
        fillScreen ? "min-h-screen" : undefined,
        $$props.class as string | undefined,
    )}
>
    {#if title}
        {#if fadeIn}
            <FadeIn>
                <h2 class="text-3xl text-blue text-center font-bold mt-2">{title}</h2>
            </FadeIn>
        {:else}
            <h2 class="text-3xl text-blue text-center font-bold mt-2">{title}</h2>
        {/if}
    {/if}
    <slot />
</div>
