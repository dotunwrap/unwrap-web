<script lang="ts">
    import { cn } from "$lib/utils";
</script>

<div
    {...$$restProps}
    class={cn(
        "flex flex-col scroll-smooth *:max-w-5xl *:py-16",
        $$props.class as string | undefined,
    )}
>
    <slot />
</div>
