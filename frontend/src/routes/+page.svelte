<script lang="ts">
    import TypeIt from "$lib/components/TypeIt.svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";
    import Page from "$lib/components/Page.svelte";
    import PageSection from "$lib/components/PageSection.svelte";
    import Card from "$lib/components/Card.svelte";
    import JumpDown from "$lib/components/JumpDown.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import Button from "$lib/components/Button.svelte";
    import Icon from "@iconify/svelte";
    import headshot from "$lib/assets/headshot.jpeg";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();
</script>

<Page>
    <PageSection id="home">
        <FadeIn>
            <div
                class="w-full flex flex-col lg:flex-row text-6xl justify-center items-center flex-wrap font-mono"
            >
                <TypeIt
                    sentences={["engineer", "designer", "developer"]}
                    class="italic text-subtext1 max-md:block"
                />
                <h1>
                    <span class="text-sky">.</span><span class="text-blue italic">unwrap</span><span
                        class="text-peach">()</span
                    >
                </h1>
            </div>
        </FadeIn>
        <JumpDown anchor="#about" />
    </PageSection>

    <PageSection id="about" class="text-center">
        <FadeIn class="flex items-center justify-center my-10">
            <img src={headshot} alt="Gabby's headshot" class="rounded-full max-md:w-32 w-52" />
        </FadeIn>

        <FadeIn delay={0.5}>
            <h2 class="text-4xl">
                <span class="text-blue font-bold">Gabby Simpson</span>, also known as
                <span class="text-blue font-bold">.unwrap</span>, is a full stack web engineer based
                in Charlotte, NC
            </h2>
        </FadeIn>

        <FadeIn delay={0.75}>
            <Divider />
        </FadeIn>

        <FadeIn delay={1}>
            <p class="text-xl">
                Customer-focused software engineer with over four years of experience in full-stack
                development, specializing in Rust, Python, TypeScript, and more. Recognized for
                architecting and implementing end-to-end solutions across the stack. Proficient in
                DevOps and cloud orchestration using AWS. Adept at collaborating in Agile teams to
                build scalable, user-centric software solutions that drive user satisfaction and
                business growth.
            </p>
        </FadeIn>

        <FadeIn delay={1} class="flex justify-center items-center my-9">
            <Button link="https://github.com/dotunwrap" text="View my work" openInNewTab={true} />
        </FadeIn>
    </PageSection>

    <PageSection id="portfolio" title="My Work" fadeIn>
        <div class="flex w-full flex-col items-center gap-6 max-w-7xl">
            {#each data.projects as project}
                <FadeIn delay={project.popupDelay ?? 0} class="w-full">
                    <a href={project.url} target="_blank" class="block w-full">
                        <Card
                            title={project.title}
                            date={project.date}
                            description={project.description}
                            isLink={true}
                            tags={project.tags}
                            class="w-full"
                        />
                    </a>
                </FadeIn>
            {/each}
        </div>
    </PageSection>

    <PageSection id="resume">
        <div id="skills">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-3">Skills</h2>
            </FadeIn>

            <FadeIn class="text-lg flex flex-row flex-wrap justify-center items-center gap-2">
                {#each data.skills as skill}
                    <Icon icon={skill.icon} width={46} height={46} />
                {/each}
            </FadeIn>
        </div>

        <div id="work-history">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-3">Experience</h2>
            </FadeIn>

            <div class="flex w-full flex-col items-center gap-6">
                {#each data.experience as entry}
                    <FadeIn class="w-full max-w-7xl">
                        <Card
                            title={entry.title}
                            subtitle={entry.subtitle}
                            date={entry.date}
                            description={entry.description}
                            bullets={entry.bullets}
                            class="w-full"
                        />
                    </FadeIn>
                {/each}
            </div>
        </div>

        <div id="education">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-3">Education</h2>
            </FadeIn>

            <div class="flex w-full flex-col items-center gap-6">
                {#each data.education as entry}
                    <FadeIn class="w-full max-w-7xl">
                        <Card
                            title={entry.title}
                            subtitle={entry.subtitle}
                            date={entry.date}
                            description={entry.description}
                            bullets={entry.bullets}
                            class="w-full"
                        />
                    </FadeIn>
                {/each}
            </div>
        </div>

        <div id="resume-download">
            <FadeIn class="flex justify-center items-center mt-3">
                <Button
                    link="https://github.com/dotunwrap/resume/releases/latest/download/gabriella-simpson-software-engineer-resume.pdf"
                    text="Download my resume"
                />
            </FadeIn>
        </div>
    </PageSection>
</Page>
