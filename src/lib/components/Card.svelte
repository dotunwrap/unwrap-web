<script lang="ts">
  import Icon from "@iconify/svelte";

    export let title: string;
    export let subtitle = "";
    export let tags: string[] = [];
    export let description: string;
    export let bullets: string[] = [];
    export let isLink = false;
</script>

<div class="flex flex-col justify-center p-4 border-solid bg-crust shadow-lg rounded-lg [&>*]:my-1 {$$props.class}">
    <div>
        <h3 class="text-lg text-blue">{title}</h3>
        <p class="text-subtext1 italic">{subtitle}</p>
    </div>
    <p class="text-regular">{description}</p>
    <ul class="list-none">
        {#each bullets as bullet}
            <li class="text-regular">➔ {bullet}</li>
        {/each}
    </ul>
    <div class="flex flex-row justify-self-end self-end justify-center items-center">
        {#if tags.length}
            <ul class="list-none flex flex-row items-center text-center text-crust text-sm">
                {#each tags as tag}
                    <li class="bg-blue rounded-full py-1 px-2 mx-1">{tag.toUpperCase()}</li>
                {/each}
            </ul>
        {/if}
        {#if isLink}
            <Icon class="" icon="fluent:ios-arrow-24-filled" />
        {/if}
    </div>
</div>