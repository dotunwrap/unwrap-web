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
    import punchmarkImage from "$lib/assets/punchmark.png";
    import hangulImage from "$lib/assets/hangul.png";
    import mandarinImage from "$lib/assets/mandarin.png";

    const projects = [
        {
            title: "Punchmark",
            date: "2021 - Present",
            tags: [
                "PHP",
                "React",
                "MySQL",
                "SaaS"
            ],
            description: "A SaaS platform providing an end-to-end e-commerce solution for the jewelry industry.",
            image: punchmarkImage,
            url: "https://punchmark.com",
            popupDelay: 1
        },
        {
            title: "Hangul Recognition",
            date: "2023",
            tags: [
                "TypeScript",
                "Vue"
            ],
            description: "A web application written in Vue.js to help Korean learners master Hangul.",
            image: hangulImage,
            url: "https://github.com/dotunwrap/hangul-recognition/",
            popupDelay: 1
        },
        {
            title: "Mandarin Tone Recognition",
            date: "2023",
            tags: [
                "TypeScript",
                "Svelte"
            ],
            description: "A web application written in Svelte to help Mandarin learners differentiate vowel tones.",
            image: mandarinImage,
            url: "https://github.com/dotunwrap/mandarin-tone-recognition/",
            popupDelay: 1
        }
    ];

    const skills = [
        {
            name: "JavaScript",
            icon: "skill-icons:javascript"
        },
        {
            name: "TypeScript",
            icon: "skill-icons:typescript"
        },
        {
            name: "HTML",
            icon: "skill-icons:html"
        },
        {
            name: "CSS",
            icon: "skill-icons:css"
        },
        {
            name: "jQuery",
            icon: "skill-icons:jquery"
        },
        {
            name: "React",
            icon: "skill-icons:react-dark"
        },
        {
            name: "Next",
            icon: "skill-icons:nextjs-dark"
        },
        {
            name: "Vue",
            icon: "skill-icons:vuejs-dark"
        },
        {
            name: "Svelte",
            icon: "skill-icons:svelte"
        },
        {
            name: "SCSS",
            icon: "skill-icons:sass"
        },
        {
            name: "Tailwind",
            icon: "skill-icons:tailwindcss-dark"
        },
        {
            name: "Bootstrap",
            icon: "skill-icons:bootstrap"
        },
        {
            name: "PHP",
            icon: "skill-icons:php-dark"
        },
        {
            name: "MySQL",
            icon: "skill-icons:mysql-dark"
        },
        {
            name: "PostgreSQL",
            icon: "skill-icons:postgresql-dark"
        },
        {
            name: "MongoDB",
            icon: "skill-icons:mongodb"
        },
        {
            name: "C",
            icon: "skill-icons:c"
        },
        {
            name: "C++",
            icon: "skill-icons:cpp"
        },
        {
            name: "C#",
            icon: "skill-icons:cs"
        },
        {
            name: "Rust",
            icon: "skill-icons:rust"
        },
        {
            name: "Go",
            icon: "skill-icons:golang"
        },
        {
            name: "Lua",
            icon: "skill-icons:lua-dark"
        },
        {
            name: "Python",
            icon: "skill-icons:python-dark"
        },
        {
            name: "Django",
            icon: "skill-icons:django"
        },
        {
            name: "Node",
            icon: "skill-icons:nodejs-dark"
        },
        {
            name: "Express",
            icon: "skill-icons:expressjs-dark"
        },
        {
            name: "Prisma",
            icon: "skill-icons:prisma"
        },
        {
            name: "Git",
            icon: "skill-icons:git"
        },
        {
            name: "Linux",
            icon: "skill-icons:linux-dark"
        },
        {
            name: "Bash",
            icon: "skill-icons:bash-dark"
        },
        {
            name: "Docker",
            icon: "skill-icons:docker"
        },
        {
            name: "Ansible",
            icon: "skill-icons:ansible"
        },
        {
            name: "AWS",
            icon: "skill-icons:aws-dark"
        }
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

        <FadeIn delay={0.75} class="">
            <Divider />
        </FadeIn>

        <FadeIn delay={1}>
            <p class="text-xl">Results-driven software engineer with a fervent commitment to optimizing processes. Proficient in
                cutting-edge tech stacks encompassing TypeScript, Python, Rust, and more. Proficient in DevOps
                and cloud server administration. Skilled in Agile methodologies, delivering inventive solutions, and
                continuous enhancement. Recognized for strategic foresight and imaginative troubleshooting.</p>
        </FadeIn>

        <FadeIn delay={1} class="flex justify-center items-center my-9">
            <Button link="https://github.com/dotunwrap" text="View my work" />
        </FadeIn>
    </PageSection>
    
    <PageSection id="portfolio">
        <FadeIn>
            <h2 class="text-3xl text-blue text-center font-bold my-2">My Work</h2>
        </FadeIn>
        <div class="flex flex-row justify-center items-center max-w-7xl [&>*]:max-w-96 [&>*]:m-3 flex-wrap">
            {#each projects as project}
                <FadeIn delay="{project.popupDelay}">
                    <a href="{project.url}" target="_blank">
                        <Card title={project.title} date={project.date} description={project.description} image={project.image} isLink={true} tags={project.tags} />
                    </a>
                </FadeIn>
            {/each}
        </div>
    </PageSection>
    
    <PageSection id="resume" class="flex flex-col justify-center items-center [&>*]:my-3">

        <div id="skills">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-2">Skills</h2>
            </FadeIn>

            <FadeIn class="text-lg flex flex-row flex-wrap justify-center items-center [&>*]:m-1">
                {#each skills as skill}
                    <Icon icon="{skill.icon}" width={46} height={46} />
                {/each}
            </FadeIn>
        </div>

        <div id="work-history">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-2">Experience</h2>
            </FadeIn>

            <FadeIn class="flex flex-col [&>*]:m-3 justify-center items-center max-w-7xl [&>*]:max-w-96">
                <Card title="Full Stack Engineer" subtitle="Punchmark" date="2021 - Present" description="Punchmark is a SaaS platform providing an end-to-end e-commerce solution for the jewelry industry." bullets={[
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

        <div id="education">
            <FadeIn>
                <h2 class="text-3xl font-bold text-blue text-center my-2">Education</h2>
            </FadeIn>

            <FadeIn class="flex flex-col [&>*]:m-3 justify-center items-center max-w-7xl [&>*]:max-w-96">
                <Card title="Associate of Applied Science (Cybersecurity)" subtitle="Rowan Cabarrus Community College" date="2016 - 2021" description="" bullets={[
                    "Completed over fifty credits of coursework spanning IT, cybersecurity, and computer science.",
                    "Gained a comprehensive understanding of software engineering principles, containerized full stack web apps, RESTful APIs, image decryption, network security, and reverse engineering.",
                    "Acquired hands-on experience in red and blue team penetration testing methodologies."
                ]} />
            </FadeIn>
        </div>
    </PageSection>
</Page>

<style lang="postcss">
    #main-animation {
        font-family: "Fira Code", monospace;
    }
</style>
