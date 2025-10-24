<script lang="ts">
    import { cn } from "$lib/utils";

    export let link: string;
    export let openInNewTab = false;
</script>

<a
    {...$$restProps}
    href={link}
    target={openInNewTab ? "_blank" : "_self"}
    rel={openInNewTab ? "noopener noreferrer" : undefined}
    class={cn(
        "rounded-4xl bg-crust hover:bg-blue group transition-colors py-3 px-6",
        $$props.class as string | undefined,
    )}
>
    <p class="group-hover:text-crust transition-colors"><slot /></p>
</a>
