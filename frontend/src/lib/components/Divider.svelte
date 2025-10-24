<script lang="ts">
    import { cn } from "$lib/utils";

    export let type: "horizontal" | "vertical" = "horizontal";

    $: variant = type === "vertical" ? "vertical" : "horizontal";
</script>

{#if variant === "horizontal"}
    <hr
        {...$$restProps}
        class={cn(
            "my-12 h-0.5 w-full border-t-0 dark:bg-neutral-100 bg-neutral-400 opacity-100 dark:opacity-50",
            $$props.class as string | undefined,
        )}
    />
{:else}
    <div
        {...$$restProps}
        class={cn(
            "h-[500px] min-h-[1em] w-px self-stretch bg-linear-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100",
            $$props.class as string | undefined,
        )}
    ></div>
{/if}
