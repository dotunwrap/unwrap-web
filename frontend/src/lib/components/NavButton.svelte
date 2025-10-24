<script lang="ts">
    export let text: string;
    export let target: string;
    export let isActive = false;
</script>

<button
    data-target={target}
    class:bg-mantle={isActive}
    class="rounded-full p-2 mx-1 text-subtext1 hover:bg-crust transition-colors cursor-pointer"
    on:click
>
    {text}
</button>
