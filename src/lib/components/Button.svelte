<script lang="ts">
    import Icon from "@iconify/svelte";
    export let link: string;
    export let text = "";
</script>

<a
    href={link}
    target="_blank"
    class="rounded-full bg-crust hover:bg-blue group transition-colors p-3"
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
