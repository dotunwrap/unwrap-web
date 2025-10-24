<script lang="ts">
    import FadeIn from "./FadeIn.svelte";

    export let title = "";
    export let fadeIn = false;
</script>

<div
    id={$$props.id}
    class="min-h-screen relative flex flex-col justify-center items-center p-2 *:my-3 {$$props.class}"
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
