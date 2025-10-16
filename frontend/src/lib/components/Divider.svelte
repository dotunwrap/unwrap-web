<script lang="ts">
    export let type = "horizontal";

    if (type !== "horizontal" && type !== "vertical") {
        type = "horizontal";
    }
</script>

{#if type === "horizontal"}
    <hr
        class="my-12 h-0.5 w-full border-t-0 dark:bg-neutral-100 bg-neutral-400 opacity-100 dark:opacity-50 {$$props.class}"
    />
{:else if type === "vertical"}
    <div
        class="h-[500px] min-h-[1em] w-px self-stretch bg-linear-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100 {$$props.class}"
    />
{/if}
