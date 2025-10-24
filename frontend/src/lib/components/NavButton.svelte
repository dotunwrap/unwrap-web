<script lang="ts">
    import { cn } from "$lib/utils";

    export let text: string;
    export let target: string;
    export let isActive = false;
</script>

<button
    {...$$restProps}
    data-target={target}
    class:bg-mantle={isActive}
    class={cn(
        "rounded-4xl py-2 px-4 text-subtext1 hover:bg-crust transition-colors cursor-pointer",
        $$props.class as string | undefined,
    )}
    on:click
>
    {text}
</button>
