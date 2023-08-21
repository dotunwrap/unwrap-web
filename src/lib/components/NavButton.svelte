<script lang="ts">
    import { page } from "$app/stores";

    export let text: string;
    export let href: string;
</script>

<a href="{href}" class:active={$page.url.pathname === href || $page.url.pathname === href.slice(0, -1)} class="rounded-full p-2 m-1 text-subtext1 hover:bg-crust transition-colors">
    {text}
</a>

<style lang="postcss">
    .active {
        @apply bg-mantle;
    }
</style>