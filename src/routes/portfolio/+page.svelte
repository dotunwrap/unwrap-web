<script>
    import Card from "$lib/components/Card.svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";

    const projects = [
        {
            title: "Hangul Recognition",
            tags: [
                "TypeScript",
                "Vue"
            ],
            description: "A web application written in Vue.js to help Korean learners master Hangul.",
            url: "https://github.com/dotunwrap/hangul-recognition/",
            popupDelay: 1
        },
        {
            title: "Mandarin Tone Recognition",
            tags: [
                "TypeScript",
                "Svelte"
            ],
            description: "A web application written in Svelte to help Mandarin learners differentiate vowel tones.",
            url: "https://github.com/dotunwrap/mandarin-tone-recognition/",
            popupDelay: 2
        },
    ];
</script>

<div class="flex flex-col justify-center items-center">
    <FadeIn>
        <h2 class="text-3xl text-blue">My Work</h2>
    </FadeIn>
    <div class="flex flex-row justify-center items-center max-w-7xl [&>*]:max-w-sm [&>*]:m-3 my-3 flex-wrap">
        {#each projects as project}
            <FadeIn class="hover:transform translate-y-5" delay="{project.popupDelay}">
                <a href="{project.url}" target="_blank">
                    <Card title={project.title} description={project.description} isLink={true} tags={project.tags} class="h-40" />
                </a>
            </FadeIn>
        {/each}
    </div>
</div>