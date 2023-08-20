<script lang="ts">
    import Icon from "@iconify/svelte";
    export let link: string;
</script>

<a href="{link}" target="_blank" class="rounded-full bg-crust hover:bg-blue group transition-colors p-3">
    <Icon icon="material-symbols:download" class="group-hover:text-crust transition-colors text-2xl" />
</a>