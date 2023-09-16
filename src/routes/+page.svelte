<script lang="ts">
    import TypeIt from "$lib/components/TypeIt.svelte";
    import FadeIn from "$lib/components/FadeIn.svelte";
    import Page from "$lib/components/Page.svelte";
    import PageSection from "$lib/components/PageSection.svelte";
    import Card from "$lib/components/Card.svelte";
    import JumpDown from "$lib/components/JumpDown.svelte";
    import Divider from "$lib/components/Divider.svelte";
    import headshot from "$lib/assets/headshot.jpeg";

    const projects = [
        {
            title: "Punchmark",
            tags: [
                "PHP",
                "React",
                "MySQL",
                "SaaS"
            ],
            description: "A SaaS platform providing an end-to-end e-commerce solution for the jewelry industry.",
            url: "https://punchmark.com",
            popupDelay: 1
        },
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
            popupDelay: 1
        }
    ];

    const skills = [
        {}
    ];
</script>

<Page>
    <PageSection id="home" class="text-center">
        <FadeIn>
            <div id="main-animation" class="w-full flex flex-col lg:flex-row text-6xl justify-center items-center flex-wrap">
                <TypeIt sentences={["engineer", "designer", "developer"]} class="italic text-subtext1 max-md:block" />
                <h1><span class="text-sky">.</span><span class="text-blue italic">unwrap</span><span class="text-peach">()</span></h1>
            </div>
        </FadeIn>
        <JumpDown anchor="#about" />
    </PageSection>
    
    <PageSection id="about" class="text-center">
        <FadeIn class="flex items-center justify-center my-10">
            <img src={headshot} alt="Garrett's headshot" class="rounded-full max-md:w-32 w-52" />
        </FadeIn>

        <FadeIn delay={0.5}>
            <h2 class="text-4xl"><span class="text-blue font-bold">Garrett Simpson</span>, also known as <span class="text-blue font-bold">.unwrap</span>, is a full stack web engineer based in Ocala, FL.</h2>
        </FadeIn>

        <FadeIn delay={0.75}>
            <Divider />
        </FadeIn>

        <FadeIn delay={1}>
            <p class="text-xl">Results-driven software engineer with a fervent commitment to optimizing processes. Proficient in
                cutting-edge tech stacks encompassing TypeScript, Python, Rust, and more. Proficient in DevOps
                and cloud server administration. Skilled in Agile methodologies, delivering inventive solutions, and
                continuous enhancement. Recognized for strategic foresight and imaginative troubleshooting.</p>
        </FadeIn>
    </PageSection>
    
    <PageSection id="portfolio" class="text-center">
        <FadeIn>
            <h2 class="text-3xl text-blue">My Work</h2>
        </FadeIn>
        <div class="flex flex-row justify-center items-center max-w-7xl [&>*]:max-w-sm [&>*]:m-3 my-3 flex-wrap">
            {#each projects as project}
                <FadeIn class="hover:transform translate-y-1" delay="{project.popupDelay}">
                    <a href="{project.url}" target="_blank">
                        <Card title={project.title} description={project.description} isLink={true} tags={project.tags} />
                    </a>
                </FadeIn>
            {/each}
        </div>
    </PageSection>
    
    <PageSection id="resume" class="flex flex-col justify-center items-center [&>*]:my-3">
        <!-- <div id="skills">
            <h2 class="text-3xl font-bold text-blue text-center">Skills</h2>
            <div class="text-lg flex flex-row [&>*]:m-3">
                {#each skills as skill}
                    TODO: Show skillicons here!
                {/each}
            </div>
        </div> -->

        <div id="work-history">
            <h2 class="text-3xl font-bold text-blue text-center">Experience</h2>
            <div class="flex flex-col [&>*]:m-3">
                <FadeIn>
                    <Card title="Full Stack Engineer" subtitle="Punchmark (2021 - Present)" description="Punchmark is a SaaS platform providing an end-to-end e-commerce solution for the jewelry industry." bullets={[
                        "Spearhead frontend and backend development for an industry-leading e-commerce platform, leveraging PHP, JavaScript (React/jQuery), and Sass.",
                        "Collaborate closely within a tight-knit team of three engineers to oversee end-to-end management of a comprehensive platform, spanning engineering, DevOps, security, database administration, and sysadmin responsibilities.",
                        "Demonstrate adaptability in a small team environment and a commitment to working flexible schedules to ensure deadlines are consistently met.",
                        "Oversee company-wide DevOps operations on AWS, orchestrating cloud deployments through Ansible.",
                        "Architect in-house REST APIs and seamlessly integrate vendor APIs, enhancing platform functionality.",
                        "Drive Scrum team collaboration, conducting regular code reviews, and ensuring agile project delivery.",
                        "Demonstrate a strong commitment to weekly deployments, ensuring consistent platform updates."
                    ]} />
                </FadeIn>
            </div>
        </div>

        <!-- <Divider /> -->

        <div id="education">
            <h2 class="text-3xl font-bold text-blue text-center">Education</h2>
            <div class="flex flex-col [&>*]:m-3">
                <FadeIn>
                    <Card title="Associate of Applied Science (Cybersecurity)" subtitle="Rowan Cabarrus Community College (2016 - 2021)" description="" bullets={[
                        "Completed over fifty credits of coursework spanning IT, cybersecurity, and computer science.",
                        "Gained a comprehensive understanding of software engineering principles, containerized full stack web apps, RESTful APIs, image decryption, network security, and reverse engineering.",
                        "Acquired hands-on experience in red and blue team penetration testing methodologies."
                    ]} />
                </FadeIn>
            </div>
        </div>
    </PageSection>
</Page>

<style lang="postcss">
    #main-animation {
        font-family: "Fira Code", monospace;
    }
</style>
