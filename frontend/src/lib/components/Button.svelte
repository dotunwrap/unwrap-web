<script lang="ts">
    import Icon from "@iconify/svelte";
    import { cn } from "$lib/utils";

    export let link: string;
    export let text = "";
    export let openInNewTab = false;
</script>

<a
    {...$$restProps}
    href={link}
    target={openInNewTab ? "_blank" : "_self"}
    rel={openInNewTab ? "noopener noreferrer" : undefined}
    class={cn(
        "rounded-full bg-crust hover:bg-blue group transition-colors p-3",
        $$props.class as string | undefined,
    )}
>
    {#if text}
        <p class="group-hover:text-crust transition-colors">{text}</p>
    {:else}
        <Icon
            icon="material-symbols:download"
            class="group-hover:text-crust transition-colors text-2xl"
        />
    {/if}
</a>
