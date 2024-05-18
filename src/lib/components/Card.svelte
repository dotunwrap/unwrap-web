<script lang="ts">
    import Icon from "@iconify/svelte";

    export let title: string;
    export let subtitle = "";
    export let date = "";
    export let tags: string[] = [];
    export let description: string;
    export let bullets: string[] = [];
    export let image = "";
    export let isLink = false;
</script>

<div
    class="flex flex-col justify-center p-4 border-solid bg-crust shadow-lg rounded-lg [&>*]:my-2 {isLink
        ? 'group transition-all duration-700 hover:scale-[1.02]'
        : ''} {$$props.class}"
>
    <div>
        <div class="flex flex-row justify-between items-center">
            <h3 class="text-lg text-blue">{title}</h3>
            {#if date}
                <p class="text-lg text-subtext1">{date}</p>
            {/if}
        </div>
        {#if subtitle}
            <p class="text-sm text-subtext1 italic">{subtitle}</p>
        {/if}
    </div>
    {#if description}
        <p class="text-regular">{description}</p>
    {/if}
    {#if image}
        <div class="w-full h-64">
            <img
                src={image}
                alt=""
                class="w-full h-full object-cover rounded-lg"
            />
        </div>
    {/if}
    {#if bullets.length}
        <ul class="list-none">
            {#each bullets as bullet}
                <li class="text-regular">➔ {bullet}</li>
            {/each}
        </ul>
    {/if}
    {#if tags.length || isLink}
        <div class="flex flex-row justify-between self-between items-center">
            {#if tags.length}
                <ul
                    class="list-none flex flex-row items-center text-center text-crust text-sm"
                >
                    {#each tags as tag}
                        <li class="bg-blue rounded-full py-1 px-2 mx-1">
                            {tag.toUpperCase()}
                        </li>
                    {/each}
                </ul>
            {/if}
            {#if isLink}
                <div class="flex flex-row justify-center items-center">
                    <p
                        class="text-sm text-subtext1 italic max-md:hidden lg:visible group-hover:text-blue transition-colors"
                    >
                        view source
                    </p>
                    <Icon
                        icon="ep:arrow-right"
                        width={22}
                        height={22}
                        class="group-hover:text-blue transition-colors"
                    />
                </div>
            {/if}
        </div>
    {/if}
</div>

